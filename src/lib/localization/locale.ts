import { browser } from '$app/env';
import { loadLocale } from 'wuchale/load-utils';
import { locales } from '../../locales/data';

const LocalePreferenceKey = 'localePreference';

export type Locale = (typeof locales)[number];

export const loadLocalePreference = (): Locale => {
	if (!browser) {
		return 'en';
	}

	// Use configured locale
	const storedPreferredLocale = localStorage.getItem(LocalePreferenceKey);
	if (!!storedPreferredLocale) {
		const locale = locales.find((locale) => locale === storedPreferredLocale) ?? 'en';
		return locale;
	}

	// Not configured, assume from browser preference
	const browserPreferredUserLocale =
		navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language;

	if (browserPreferredUserLocale.startsWith('jp')) {
		const locale = 'jp';
		storeLocalePreference(locale);
		return locale;
	} else {
		const locale = 'en';
		storeLocalePreference(locale);
		return locale;
	}
};

export const storeLocalePreference = (locale: Locale) => {
	if (!browser) {
		return;
	}
	localStorage.setItem(LocalePreferenceKey, locale);
};
