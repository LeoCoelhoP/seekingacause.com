import { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import PropTypes from 'prop-types';

import '@maptiler/sdk/dist/maptiler-sdk.css';
import '../../map.css';

export default function Map({
	lng = -54.3019,
	lat = -25.1369,
	defaultZoom = 14,
}) {
	const mapContainer = useRef(null);
	const map = useRef(null);
	const [zoom] = useState(defaultZoom);
	maptilersdk.config.apiKey = import.meta.env.VITE_MAPTILER_API_KEY;

	useEffect(() => {
		if (map.current) return; // stops map from intializing more than once

		map.current = new maptilersdk.Map({
			container: mapContainer.current,
			style: maptilersdk.MapStyle.BRIGHT,
			center: [lng, lat],
			zoom: zoom,
		});

		return () => {
			if (map.current) {
				map.current.remove();
				map.current = null;
			}
		};
	}, [lng, lat, zoom]);

	return (
		<div className='shadow-md map-wrap drop-shadow-md'>
			<div ref={mapContainer} className='map' />
		</div>
	);
}

Map.propTypes = {
	lng: PropTypes.number,
	lat: PropTypes.number,
	defaultZoom: PropTypes.number,
};
