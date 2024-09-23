import { NextRequest } from 'next/server';
import acceptLanguage from 'accept-language';
import { Lang } from './@types';
import { cookieI18NextName, fallbackLng } from './settings';

/**
 * We're using sub-path language strategy => so sub-path always start with /${lng}
 * See it in: middleware.ts
 */

export const pathHasLocale = (pathname: string, lng: Lang) => pathname.startsWith(`/${lng}`);

export const replaceLngInPath = ({
  srcLng,
  pathname,
  desLng,
}: {
  pathname: string;
  srcLng: Lang;
  desLng: Lang;
}) => pathname.replace(`/${srcLng}`, `/${desLng}`);

export const getLng = (cookies: NextRequest['cookies'], headers: NextRequest['headers']) => {
  // Read priority order: cookie > header > fallback
  if (cookies.has(cookieI18NextName)) {
    return cookies.get(cookieI18NextName)!.value;
  }

  return acceptLanguage.get(headers.get('Accept-Language')) ?? fallbackLng;
};
