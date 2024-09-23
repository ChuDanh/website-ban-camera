import { NextRequest } from 'next/server';
import { createInstance } from 'i18next';
import ChainedBackend from 'i18next-chained-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { UseTranslationOptions } from 'react-i18next';
import { cookies, headers } from 'next/headers';
//
import { getOptions } from './settings';
import { getLng } from './utils';
import type { NameSpace, Lang } from './@types';

const initI18next = async (lng: Lang, ns: NameSpace) => {
  const i18nInstance = createInstance();
  await i18nInstance.use(ChainedBackend).use(initReactI18next).init(getOptions(lng, ns));
  return i18nInstance;
};

export async function useTranslation(ns?: NameSpace, options: UseTranslationOptions<string> = {}) {
  const lng = getLng(cookies() as unknown as NextRequest['cookies'], headers());
  const i18nextInstance = await initI18next(lng, ns);
  return {
    t: i18nextInstance.getFixedT(
      lng,
      (Array.isArray(ns) ? ns[0] : ns) as string,
      options.keyPrefix
    ),
    i18n: i18nextInstance,
  };
}
