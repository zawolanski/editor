import i18n from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: `/locales/{{lng}}/{{ns}}.json`,
      allowMultiLoading: true,
    },
    fallbackLng: 'en-us',
    lowerCaseLng: true,
    load: 'currentOnly',
  });

export default i18n;
