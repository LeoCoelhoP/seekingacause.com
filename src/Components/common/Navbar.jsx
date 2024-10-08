import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { RxAvatar, RxInfoCircled, RxMagnifyingGlass } from 'react-icons/rx';
import { LuHeart } from 'react-icons/lu';

import { LayoutContext } from '../../Contexts/LayoutContext';
import { UserContext } from '../../Contexts/UserContext';
import i18next from '../../Configs/i18n';

export default function Navbar() {
	const { setInfoModalOpen, page } = useContext(LayoutContext);
	const { user } = useContext(UserContext);
	const navigate = useNavigate();

	return (
		<div
			className={`z-10 h-[50px] bg-blue-600 w-svw shadow-t-lg drop-shadow-t-md text-neutral-50 text-3xl flex flex-col items-start justify-start`}>
			<div className='flex items-center justify-center w-full h-full gap-12 text-sm text-center lg:gap-32 md:gap-22'>
				<div
					className={`flex flex-col items-center justify-center text-center  ${
						page === 'home' ? 'font-bold' : ''
					}`}
					onClick={() => navigate('/')}>
					<RxMagnifyingGlass size={'1.25rem'} />
					{i18next.t('explore') || 'Explorar'}
				</div>
				{user && (
					<div
						className={`flex flex-col items-center justify-center text-center  ${
							page === 'favorites' ? 'font-bold' : ''
						}`}
						onClick={() => navigate('/favorites')}>
						<LuHeart size={'1.25rem'} />
						{i18next.t('favorites') || 'Favoritos'}
					</div>
				)}
				<div
					className={`flex flex-col items-center justify-center text-center  ${
						page === 'auth' ? 'font-bold' : ''
					}`}
					onClick={() => navigate('/auth')}>
					<RxAvatar size={'1.25rem'} />
					{user
						? `${i18next.t('profile') || 'Explorar'}`
						: `${i18next.t('logIn') || 'Entrar'}`}
				</div>
				<div className='flex flex-col items-center justify-center text-center modal'>
					<RxInfoCircled
						onClick={() => setInfoModalOpen(true)}
						size={'1.25rem'}
					/>
					{i18next.t('aboutUs') || 'Sobre Nós'}
				</div>
			</div>
		</div>
	);
}
