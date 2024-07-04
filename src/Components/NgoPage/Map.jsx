import { useRef, useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';

import * as maptilersdk from '@maptiler/sdk';

import { LayoutContext } from '../../Contexts/LayoutContext';

import '@maptiler/sdk/dist/maptiler-sdk.css';

export default function Map({ location, defaultZoom = 14 }) {
	const { windowWidth } = useContext(LayoutContext);
	const [zoom] = useState(defaultZoom);
	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, lat] = location;
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
	const height =
		windowWidth > 1024 ? '600px' : windowWidth > 768 ? '400px' : '200px';
	return (
		<div className='shadow-md map-wrap drop-shadow-md ' style={{ height }}>
			<div ref={mapContainer} className='map' style={{ height }} />
		</div>
	);
}

Map.propTypes = {
	location: PropTypes.array,
	defaultZoom: PropTypes.number,
};
