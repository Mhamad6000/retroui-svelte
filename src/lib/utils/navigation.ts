export interface NavigationItem {
	title: string;
	href: string;
	icon?: any;
	label?: string;
	disabled?: boolean;
    external?: boolean;

}

export interface NavigationSection {
	title: string;
	items: NavigationItem[];
}

export interface Navigation {
	anchors?: NavigationItem[];
	sections?: NavigationSection[];
	header?: NavigationItem[];
    items?: NavigationItem[];
}

export function defineNavigation(navigation: Navigation) {
	return navigation;
}
