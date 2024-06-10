import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const options = {
	order: ['localStorage', 'queryString'],
	caches: ['localStorage'],
};

i18n
	.use(HttpApi)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		supportedLngs: ['en', 'pt'],
		fallbackLng: 'pt',
		debug: true,
		detection: options,
		backend: {
			loadPath: '/locales/{{lng}}/{{ns}}.json',
		},
		react: {
			useSuspense: false,
		},
	});

export default i18n;
