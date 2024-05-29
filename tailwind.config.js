/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			boxShadow: {
				't-md':
					'0 -2px 6px 0px rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.06)',
			},
			dropShadow: {
				't-md': '0 -2px 3px  rgba(0, 0, 0, 0.3)',
			},
		},
	},

	plugins: [],
};
