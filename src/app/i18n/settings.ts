//
import { InitOptions } from 'i18next';
import enLocales from './locales/en';
import viLocales from './locales/vi';
import type { NameSpace } from './@types';

export type LanguageValue = 'en' | 'vi';

export const fallbackLng = 'en';
export const languages = [fallbackLng, 'vi'];

export const defaultNS: NameSpace = 'marketing';
export const cookieI18NextName = 'i18next';

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
    resources: {
      en: enLocales,
      vi: viLocales,
    },
  } as InitOptions;
}
