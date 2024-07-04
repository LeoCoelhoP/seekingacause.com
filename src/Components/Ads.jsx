import { useEffect, useRef } from 'react';

const atOptions = {
	key: '17679d6d6f6c215eea67e80d47925f1f',
	format: 'iframe',
	height: 300,
	width: 160,
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
