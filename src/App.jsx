import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { Toaster } from 'react-hot-toast';

import LayoutProvider from './Contexts/LayoutContext';
import NgoProvider from './Contexts/NgoContext';
import UserProvider from './Contexts/UserContext';
import i18next from './Configs/i18n';
import Loading from './Components/Loading';
import MainLayout from './layouts/MainLayout';

const Auth = lazy(() => import('./pages/Auth'));
const Favorites = lazy(() => import('./pages/Favorites'));
const Ngo = lazy(() => import('./pages/Ngo'));
const Profile = lazy(() => import('./pages/Profile'));
const Home = lazy(() => import('./pages/Home'));

const storedLang = localStorage.getItem('i18nextLng') || 'en';
i18next.changeLanguage(storedLang);

const initialOptions = {
  'client-id': import.meta.env.VITE_PAYPAL_ID,
  currency: 'BRL',
  intent: 'capture',
};

const routes = [
  { path: '/', element: <Home />, layoutProps: { showHeader: true } },
  {
    path: '/favorites',
    element: <Favorites />,
    layoutProps: { showHeader: true },
  },
  { path: '/auth', element: <Auth /> },
  { path: '/profile', element: <Profile /> },
  { path: '/ngo/:id', element: <Ngo />, layoutProps: { showNav: true } },
  { path: '/verify-email', element: <Auth /> },
  { path: '/reset-password', element: <Auth resetPassword={true} /> },
];

const router = createBrowserRouter(
  routes.map(({ element, layoutProps, ...route }) => ({
    ...route,
    element: (
      <Suspense fallback={<Loading />}>
        <MainLayout {...layoutProps}>{element}</MainLayout>
      </Suspense>
    ),
  }))
);

function App() {
  return (
    <UserProvider>
      <NgoProvider>
        <LayoutProvider>
          <Toaster toastOptions={{ duration: 5000 }} />
          <PayPalScriptProvider options={initialOptions}>
            <RouterProvider router={router} />
          </PayPalScriptProvider>
        </LayoutProvider>
      </NgoProvider>
    </UserProvider>
  );
}

export default App;
