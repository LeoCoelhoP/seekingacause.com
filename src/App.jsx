import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { Toaster } from 'react-hot-toast';

import LayoutProvider from './Contexts/LayoutContext';
import NgoProvider from './Contexts/NgoContext';
import UserProvider from './Contexts/UserContext';
import i18next from './Configs/i18n';
import MainLayout from './layouts/MainLayout';

const Auth = lazy(() => import('./pages/Auth'));
const Favorites = lazy(() => import('./pages/Favorites'));
const Ngo = lazy(() => import('./pages/Ngo'));
const Profile = lazy(() => import('./pages/Profile'));
const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));

const storedLang = localStorage.getItem('i18nextLng') || 'en';
i18next.changeLanguage(storedLang);

const initialOptions = {
  'client-id': import.meta.env.VITE_PAYPAL_ID,
  currency: 'BRL',
  intent: 'capture',
};

const AppRoutes = () => (
  <MainLayout>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/favorites' element={<Favorites />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/ngo/:id' element={<Ngo />} />
      <Route path='/verify-email' element={<Auth />} />
      <Route path='/reset-password' element={<Auth resetPassword={true} />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </MainLayout>
);

function App() {
  return (
    <UserProvider>
      <NgoProvider>
        <LayoutProvider>
          <Toaster toastOptions={{ duration: 5000 }} />
          <PayPalScriptProvider options={initialOptions}>
            <Suspense fallback={<div>Loading...</div>}>
              <Router>
                <AppRoutes />
              </Router>
            </Suspense>
          </PayPalScriptProvider>
        </LayoutProvider>
      </NgoProvider>
    </UserProvider>
  );
}

export default App;
