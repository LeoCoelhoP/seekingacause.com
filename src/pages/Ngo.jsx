import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { NgoContext } from '../Contexts/NgoContext';
import { LayoutContext } from '../Contexts/LayoutContext';
import { UserContext } from '../Contexts/UserContext';

import Carousel from '../Components/Carousel';
import Divider from '../Components/Divider';
import Header from '../Components/NgoPage/Header';
import MenuOptions from '../Components/NgoPage/MenuOptions';
import NgoDescription from '../Components/NgoPage/NgoDescription';
import Loading from '../Components/Loading';

export default function Ngo() {
	const { ngo } = useContext(NgoContext);
	const { language } = useContext(LayoutContext);
	const { user, setUser } = useContext(UserContext);
	const { id } = useParams();

	if (!ngo) return <Loading />;

	const ngoDetails = ngo.find((ngo) => ngo._id === id);
	const {
		donations,
		website,
		name,
		namePT,
		description,
		descriptionPT,
		images,
		cityAndCountry,
		monthlyGoal,
		monthDonations,
	} = ngoDetails;

	return (
		<div className='z-0 flex flex-col items-center justify-start w-full overflow-hidden h-max text-neutral-950 lg:pr-[200px] lg:pl-[200px] lg:text-xl'>
			<Carousel
				images={images}
				_id={id}
				user={user}
				setUser={setUser}
				showNavigateBack={true}
			/>
			<section className='p-4 lg:flex-col bg-neutral-50 w-svw lg:items-center lg:w-full'>
				<Header
					name={language === 'US' ? name : namePT}
					cityAndCountry={cityAndCountry}
					donations={donations}
					website={website}
					id={id}
					monthDonations={monthDonations}
					monthlyGoal={monthlyGoal}
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
