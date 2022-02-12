import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './Locales/en/translation.json';
import translationTR from './Locales/tr/translation.json';
import translationDE from './Locales/de/translation.json';
import translationES from './Locales/es/translation.json';
import translationFR from './Locales/fr/translation.json';

const resources = {
    en: {
        translation: translationEN
    },
    tr: {
        translation: translationTR
    },
    de: {
        translation: translationDE
    },
    es: {
        translation: translationES
    },
    fr: {
        translation: translationFR
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        interpolation: {
            escapeValue: false,
        }
    },undefined);

export default i18n;