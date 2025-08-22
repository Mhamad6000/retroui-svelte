
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
		RouteId(): "/(landing)" | "/(docs)" | "/" | "/api" | "/api/search.json" | "/(docs)/docs" | "/(docs)/docs/[...slug]";
		RouteParams(): {
			"/(docs)/docs/[...slug]": { slug: string }
		};
		LayoutParams(): {
			"/(landing)": Record<string, never>;
			"/(docs)": { slug?: string };
			"/": { slug?: string };
			"/api": Record<string, never>;
			"/api/search.json": Record<string, never>;
			"/(docs)/docs": { slug?: string };
			"/(docs)/docs/[...slug]": { slug: string }
		};
		Pathname(): "/" | "/api" | "/api/" | "/api/search.json" | "/api/search.json/" | "/docs" | "/docs/" | `/docs/${string}` & {} | `/docs/${string}/` & {};
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/android-chrome-192x192.png" | "/android-chrome-512x512.png" | "/apple-touch-icon.png" | "/favicon copy.png" | "/favicon-16x16.png" | "/favicon-32x32.png" | "/favicon.ico" | "/logo-dark.svg" | "/logo-light.svg" | "/og.png" | "/site.webmanifest" | string & {};
	}
}