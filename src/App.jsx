import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import UserContextProvider from './Contexts/UserContext';
import NgoContextProvider from './Contexts/NgoContext';
import LayoutContextProvider from './Contexts/LayoutContext';

import MainLayout from './layouts/MainLayout';
import Loading from './Components/Loading';
import i18n from './Configs/i18n';

const Auth = lazy(() => import('./pages/Auth'));
const Favorites = lazy(() => import('./pages/Favorites'));
const Ngo = lazy(() => import('./pages/Ngo'));
const Profile = lazy(() => import('./pages/Profile'));
const Home = lazy(() => import('./pages/Home'));

const storedLang = localStorage.getItem('i18nextLng') || 'en';
i18n.changeLanguage(storedLang);

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: (
				<Suspense fallback={<Loading />}>
					<MainLayout showHeader={true}>
						<Home />
					</MainLayout>
				</Suspense>
			),
		},
		{
			path: '/favorites',
			element: (
				<Suspense fallback={<Loading />}>
					<MainLayout>
						<Favorites />
					</MainLayout>
				</Suspense>
			),
		},
		{
			path: '/auth',
			element: (
				<Suspense fallback={<Loading />}>
					<MainLayout>
						<Auth />
					</MainLayout>
				</Suspense>
			),
		},
		{
			path: '/profile',
			element: (
				<Suspense fallback={<Loading />}>
					<MainLayout>
						<Profile />
					</MainLayout>
				</Suspense>
			),
		},
		{
			path: '/ngo/:id',

			element: (
				<Suspense fallback={<Loading />}>
					<MainLayout showNav={true}>
						<Ngo />
					</MainLayout>
				</Suspense>
			),
		},
		{
			path: '/verify-email',
			element: (
				<Suspense fallback={<Loading />}>
					<MainLayout>
						<Auth />
					</MainLayout>
				</Suspense>
			),
		},
		{
			path: '/reset-password',
			element: (
				<Suspense fallback={<Loading />}>
					<MainLayout>
						<Auth resetPassword={true} />
					</MainLayout>
				</Suspense>
			),
		},
	]);
	return (
		<NgoContextProvider>
			<UserContextProvider>
				<LayoutContextProvider>
					<Toaster
						toastOptions={{
							duration: 5000,
						}}
					/>
					<RouterProvider router={router} />
				</LayoutContextProvider>
			</UserContextProvider>
		</NgoContextProvider>
	);
}

export default App;
