import { useContext, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { LayoutContext } from '../Contexts/LayoutContext';
import { NgoContext } from '../Contexts/NgoContext';
import { UserContext } from '../Contexts/UserContext';

import Carousel from '../Components/Carousel';
import Divider from '../Components/Divider';
import Header from '../Components/NgoPage/Header';
import Loading from '../Components/Loading';
import MenuOptions from '../Components/NgoPage/MenuOptions';
import NgoDescription from '../Components/NgoPage/NgoDescription';

export default function Ngo() {
	const { language } = useContext(LayoutContext);
	const { ngo } = useContext(NgoContext);
	const { user, setUser } = useContext(UserContext);
	const scrollController = useRef();
	const { id } = useParams();

	useEffect(() => {
		if (!scrollController.current) return;
		scrollController.current.scrollIntoView({
			block: 'start',
			behavior: 'instant',
		});
	}, []);
  
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
		<div
			ref={scrollController}
			className='z-0 flex flex-col items-center justify-start w-full overflow-hidden h-max text-neutral-950 lg:pr-[200px] lg:pl-[200px] lg:text-xl'>
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
