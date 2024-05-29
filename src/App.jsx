import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import Loading from './Components/Loading';

const Auth = lazy(() => import('./pages/Auth'));
const Favorites = lazy(() => import('./pages/Favorites'));
const LayoutContextProvider = lazy(() => import('./Contexts/LayoutContext'));
const Ngo = lazy(() => import('./pages/Ngo'));
const Profile = lazy(() => import('./pages/Profile'));
const Home = lazy(() => import('./pages/Home'));

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
	]);
	return (
		<LayoutContextProvider>
			<RouterProvider router={router} />
		</LayoutContextProvider>
	);
}

export default App;
