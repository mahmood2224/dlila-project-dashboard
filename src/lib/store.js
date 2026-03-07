import { writable, derived } from 'svelte/store';
import { en } from './i18n/en.js';
import { ar } from './i18n/ar.js';

export const theme = writable('dark');
export const currentUser = writable(null); // e.g., { name: 'Ali', email: 'ali@example.com' }
export const currentProject = writable(null); // e.g., { name: 'Customer Support' }
export const locale = writable('en'); // 'en' or 'ar'

export const dict = derived(locale, ($locale) => {
    return $locale === 'ar' ? ar : en;
});
