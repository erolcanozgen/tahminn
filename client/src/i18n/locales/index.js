import tr from './tr.json';
import en from './en.json';
import LoginTr from '../../components/login/components/locales/tr.json'
import LoginEn from '../../components/login/components/locales/en.json'

import NavbarTr from '../../components/navbar/components/locales/tr.json'
import NavbarEn from '../../components/navbar/components/locales/en.json'

import PredictionTr from '../../components/prediction/locales/tr.json'
import PredictionEn from '../../components/prediction/locales/en.json'

tr['tr'].Login = LoginTr['tr']
en['en'].Login = LoginEn['en']

tr['tr'].Navbar = NavbarTr['tr']
en['en'].Navbar = NavbarEn['en']

tr['tr'].Prediction = PredictionTr['tr']
en['en'].Prediction = PredictionEn['en']

export {
    tr,
    en,
};