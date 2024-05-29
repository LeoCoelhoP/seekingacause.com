import Carousel from '../Components/Carousel';
import Divider from '../Components/Divider';
import Header from '../Components/NgoPage/Header';
import MenuOptions from '../Components/NgoPage/MenuOptions';
import NgoDescription from '../Components/NgoPage/NgoDescription';

export default function Ngo() {
	return (
		<div className='z-0 flex flex-col items-center justify-start w-full overflow-hidden h-fit text-neutral-950'>
			<Carousel />
			<section className='p-4 bg-neutral-50 w-svw'>
				<Header />
				<Divider />
				<NgoDescription />
				<Divider />
				<MenuOptions />
			</section>
		</div>
	);
}
