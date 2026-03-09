import { writable, derived } from 'svelte/store';
import { en } from './i18n/en.js';
import { ar } from './i18n/ar.js';

export const theme = writable('dark');
/** @type {import('svelte/store').Writable<any>} */
export const currentUser = writable(null); // e.g., { name: 'Ali', email: 'ali@example.com' }

/** @type {import('svelte/store').Writable<any>} */
export const currentProject = writable(null); // e.g., { id: '...', name: 'Customer Support' }

export const locale = writable('en'); // 'en' or 'ar'

/** @type {import('svelte/store').Writable<string|null>} */
export const authToken = writable(null); // The JWT token

// Initialize from localStorage if in browser
if (typeof window !== 'undefined') {
    const storedToken = localStorage.getItem('dalila_auth_token');
    if (storedToken) authToken.set(storedToken);

    authToken.subscribe(value => {
        if (value) {
            localStorage.setItem('dalila_auth_token', value);
        } else {
            localStorage.removeItem('dalila_auth_token');
        }
    });

    // Also persist theme and locale if desired
    const storedTheme = localStorage.getItem('dalila_theme');
    if (storedTheme) theme.set(storedTheme);
    theme.subscribe(val => { if (val) localStorage.setItem('dalila_theme', val); });
}

export const dict = derived(locale, ($locale) => {
    return $locale === 'ar' ? ar : en;
});
