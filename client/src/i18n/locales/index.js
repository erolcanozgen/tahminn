import tr from './tr.json';
import en from './en.json';
import LoginTr from '../../components/login/components/locales/tr.json'
import LoginEn from '../../components/login/components/locales/en.json'
import InterestTr from '../../components/interest/components/locales/tr.json'
import InterestEn from '../../components/interest/components/locales/en.json'
import InterestSelectionTr from '../../components/interest/locales/tr.json'
import InterestSelectionEn from '../../components/interest/locales/en.json'

tr['tr'].Login = LoginTr['tr']
en['en'].Login = LoginEn['en']

tr['tr'].Interest = InterestTr['tr']
en['en'].Interest = InterestEn['en']

tr['tr'].InterestSelection = InterestSelectionTr['tr']
en['en'].InterestSelection = InterestSelectionEn['en']

export {
    tr,
    en,
};