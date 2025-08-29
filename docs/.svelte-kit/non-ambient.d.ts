
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
		RouteId(): "/" | "/docs" | "/docs/blocks" | "/docs/blocks/authentication" | "/docs/charts" | "/docs/charts/area" | "/docs/colors" | "/docs/colors/default" | "/docs/components" | "/docs/components/card" | "/docs/installation";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/docs": Record<string, never>;
			"/docs/blocks": Record<string, never>;
			"/docs/blocks/authentication": Record<string, never>;
			"/docs/charts": Record<string, never>;
			"/docs/charts/area": Record<string, never>;
			"/docs/colors": Record<string, never>;
			"/docs/colors/default": Record<string, never>;
			"/docs/components": Record<string, never>;
			"/docs/components/card": Record<string, never>;
			"/docs/installation": Record<string, never>
		};
		Pathname(): "/" | "/docs" | "/docs/" | "/docs/blocks" | "/docs/blocks/" | "/docs/blocks/authentication" | "/docs/blocks/authentication/" | "/docs/charts" | "/docs/charts/" | "/docs/charts/area" | "/docs/charts/area/" | "/docs/colors" | "/docs/colors/" | "/docs/colors/default" | "/docs/colors/default/" | "/docs/components" | "/docs/components/" | "/docs/components/card" | "/docs/components/card/" | "/docs/installation" | "/docs/installation/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/pagefind.html" | string & {};
	}
}