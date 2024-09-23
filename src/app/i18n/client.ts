'use client';

import i18next from 'i18next';
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
  UseTranslationOptions,
} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
//
import { getOptions } from './settings';
import type { Lang, NameSpace } from './@types';

//
i18next.use(LanguageDetector).use(initReactI18next).init(getOptions());

export function useTranslation(
  lng: Lang,
  ns?: NameSpace,
  options: UseTranslationOptions<string> = {}
) {
  // console.log('lng: ', lng);
  if (i18next.resolvedLanguage !== lng) i18next.changeLanguage(lng);
  return useTranslationOrg(ns, options);
}
