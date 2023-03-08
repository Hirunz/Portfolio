import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: require('./lang/en.json'),
  },
  fr: {
    translation: require('./lang/fr.json'),
  },
  ar: {
    translation: require('./lang/ar.json'),
  },
  de: {
    translation: require('./lang/de.json'),
  },
  es: {
    translation: require('./lang/es.json'),
  },
  si: {
    translation: require('./lang/si.json'),
  },
  zh: {
    translation: require('./lang/zh.json'),
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
