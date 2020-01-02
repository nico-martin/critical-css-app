// @flow

//import { addLocaleData } from 'react-intl';
//import locale_en from 'react-intl/locale-data/en';
import * as enMessages from './en.json';

export const locales = { en: ['en-US', enMessages.default] };
export const defaultLocale = Object.keys(locales)[0];
