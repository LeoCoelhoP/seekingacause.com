import { useEffect, useRef } from 'react';

const atOptions = {
	key: 'bfa3fc6f68bb29f47d5fd42c9dc04ab8',
	format: 'iframe',
	height: 250,
	width: 300,
};

export default function Ads() {
	const banner = useRef();

	useEffect(() => {
		if (!banner.current.firstChild) {
			const conf = document.createElement('script');
			const script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = `//www.profitabledisplayformat.com/${atOptions.key}/invoke.js`;
			conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

			if (banner.current) {
				banner.current.append(conf);
				banner.current.append(script);
			}
		}
	}, []);

	return <div ref={banner} />;
}
