
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/(dashboard)" | "/" | "/(dashboard)/analytics" | "/(dashboard)/audit" | "/auth" | "/auth/callback" | "/(dashboard)/billing" | "/(dashboard)/knowledge" | "/onboarding" | "/(dashboard)/playground" | "/(dashboard)/settings" | "/(dashboard)/usage";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/(dashboard)": Record<string, never>;
			"/": Record<string, never>;
			"/(dashboard)/analytics": Record<string, never>;
			"/(dashboard)/audit": Record<string, never>;
			"/auth": Record<string, never>;
			"/auth/callback": Record<string, never>;
			"/(dashboard)/billing": Record<string, never>;
			"/(dashboard)/knowledge": Record<string, never>;
			"/onboarding": Record<string, never>;
			"/(dashboard)/playground": Record<string, never>;
			"/(dashboard)/settings": Record<string, never>;
			"/(dashboard)/usage": Record<string, never>
		};
		Pathname(): "/" | "/analytics" | "/audit" | "/auth" | "/auth/callback" | "/billing" | "/knowledge" | "/onboarding" | "/playground" | "/settings" | "/usage";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): string & {};
	}
}