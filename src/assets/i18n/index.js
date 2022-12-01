import en from './language/en';
import tr from './language/tr';

import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';

import {getItem, setItem} from '../../utils/mmkv';

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: getItem('@language') || 'en',
  resources: {en: en, tr: tr},
});

export default i18next;
