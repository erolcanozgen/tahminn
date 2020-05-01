import i18n from 'i18next';
import { tr, en } from './locales';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const options = {

    debug: true,
    resources: {
        tr: {
            common: tr.tr
        },
        en: {
            common: en.en,
        },
    },

    fallbackLng: 'en',

    ns: ['common'],

    defaultNS: 'common',

    react: {
        wait: false,
        bindI18n: 'languageChanged loaded',
        bindStore: 'added removed',
        nsMode: 'default'
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init(options)

export default i18n;