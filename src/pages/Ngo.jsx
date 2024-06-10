import { useContext } from 'react';
import Carousel from '../Components/Carousel';
import Divider from '../Components/Divider';
import Header from '../Components/NgoPage/Header';
import MenuOptions from '../Components/NgoPage/MenuOptions';
import NgoDescription from '../Components/NgoPage/NgoDescription';
import { NgoContext } from '../Contexts/NgoContext';
import { useParams } from 'react-router-dom';
import { LayoutContext } from '../Contexts/LayoutContext';
export default function Ngo() {
	const { ngo } = useContext(NgoContext);
	const { language } = useContext(LayoutContext);
	const { id } = useParams();

	// todo return Loading
	if (!ngo) return;

	const ngoDetails = ngo.find((ngo) => ngo._id === id);
	const {
		donations,
		name,
		namePT,
		description,
		descriptionPT,
		images,
		cityAndCountry,
		monthDonations,
	} = ngoDetails;
	return (
		<div className='z-0 flex flex-col items-center justify-start w-full overflow-hidden h-fit text-neutral-950'>
			<Carousel images={images} />
			<section className='p-4 bg-neutral-50 w-svw'>
				<Header
					name={language === 'US' ? name : namePT}
					cityAndCountry={cityAndCountry}
					monthDonations={monthDonations}
				/>
				<Divider />
				<NgoDescription
					description={language === 'US' ? description : descriptionPT}
				/>
				<Divider />
				<MenuOptions ngoDetails={ngoDetails} />
			</section>
		</div>
	);
}
