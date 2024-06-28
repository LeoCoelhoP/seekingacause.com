import { Adsense } from '@ctrl/react-adsense';

export default function Ads() {
	console.log('Ads called');
	return (
		<Adsense
			className='w-full h-full'
			client='ca-pub-4677074944395980'
			slot='1224448454'
		/>
	);
}
