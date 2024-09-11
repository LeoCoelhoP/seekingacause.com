import { lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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

const routes = (
  <Router>
    <MainLayout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/favorites' component={Favorites} />
        <Route path='/auth' component={Auth} />
        <Route path='/profile' component={Profile} />
        <Route path='/ngo/:id' component={Ngo} />
        <Route path='/verify-email' component={Auth} />
        <Route
          path='/reset-password'
          component={() => <Auth resetPassword={true} />}
        />
        <Route component={NotFound} />{' '}
        {/* This will catch all unknown routes */}
      </Switch>
    </MainLayout>
  </Router>
);

function App() {
  return (
    <UserProvider>
      <NgoProvider>
        <LayoutProvider>
          <Toaster toastOptions={{ duration: 5000 }} />
          <PayPalScriptProvider options={initialOptions}>
            {routes}
          </PayPalScriptProvider>
        </LayoutProvider>
      </NgoProvider>
    </UserProvider>
  );
}

export default App;
