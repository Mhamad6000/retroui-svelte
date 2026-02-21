import { untrack } from "svelte";
import { page } from "$app/stores";
import { fromStore } from "svelte/store";
import { addEventListener } from "svelte-toolbelt";

export type TocItem = {
	title: string;
	url: string;
	items?: TocItem[];
};

export type TableOfContents = {
	items?: TocItem[];
};

export function useToc(getItemIds: () => string[]) {
	const itemIds = $derived(getItemIds());
	let activeId = $state<string | null>(null);
	const pageState = fromStore(page);
	const urlHash = $derived(pageState.current.url.hash);
	const isAtBottom = useIsAtBottom();

	const effectiveActiveId = $derived(isAtBottom.current ? itemIds[itemIds.length - 1] : activeId);

	let markerTopStyle = $state("0px");

	$effect(() => {
		const id = effectiveActiveId;
		if (!id) {
			markerTopStyle = "0px";
			return;
		}

		requestAnimationFrame(() => {
			if (typeof document !== "undefined") {
				const link = document.querySelector(`div[data-desktop-toc] a[href="#${id}"]`) as HTMLElement;
				if (link) {
					markerTopStyle = link.offsetTop + "px";
				}
			}
		});
	});

	function isActive(item: TocItem) {
		return (
			(item.url === urlHash && `#${effectiveActiveId}` === urlHash) ||
			isParentOfActiveItem(item) ||
			item.url === `#${effectiveActiveId}`
		);
	}

	function isParentOfActiveItem(item: TocItem) {
		return Boolean(item.items?.some((item) => item.url === `#${effectiveActiveId}`));
	}

	function isLastItem(item: TocItem) {
		return `#${itemIds[itemIds.length - 1]}` === item.url;
	}

	$effect(() => {
		const hash = urlHash;
		untrack(() => {
			if (hash === `#${activeId}`) return;
			activeId = hash.split("#")[1];
		});
	});

	$effect(() => {
		const visible = new Set<string>();

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						visible.add(entry.target.id);
					} else {
						visible.delete(entry.target.id);
					}
				}

				
				if (visible.size === 0) {
					const viewTop = entries.length > 0 && entries[0]?.rootBounds ? entries[0].rootBounds.top : 0;
					let fallbackId: string | null = null;
					let min = -1;

					// Untrack to safely read itemIds without creating dependencies
					const items = untrack(() => itemIds);
					
					for (const id of items) {
						const element = document.getElementById(id);
						if (!element) continue;

						const d = Math.abs(viewTop - element.getBoundingClientRect().top);
						if (min === -1 || d < min) {
							fallbackId = id;
							min = d;
						}
					}

					if (fallbackId) {
						untrack(() => {
							activeId = fallbackId;
						});
					}
				} else {
					const items = untrack(() => itemIds);
					const firstVisible = items.find((item) => visible.has(item));
					if (firstVisible) {
						untrack(() => {
							activeId = firstVisible;
						});
					}
				}
			},
			{ rootMargin: "0% 0% -40% 0%", threshold: 0 }
		);
		
		for (const id of itemIds) {
			const node = document.getElementById(id);
			if (node) observer.observe(node);
		}

		return () => {
			for (const id of itemIds) {
				const node = document.getElementById(id);
				if (node) observer.unobserve(node);
			}
			observer.disconnect();
		};
	});

	return {
		get activeId() {
			return effectiveActiveId;
		},
		get markerTopStyle() {
			return markerTopStyle;
		},
		isActive,
		isLastItem,
	};
}

export type TocState = ReturnType<typeof useToc>;

function useIsAtBottom() {
	let isAtBottom = $state(false);

	function checkScrollPos() {
		// Increase buffer to handle overscroll or weird subpixel layouts
		const buffer = 50;
		untrack(() => {
			const { innerHeight, scrollY } = window;
			const { scrollHeight } = document.documentElement;
			
			// If we haven't scrolled, or page fits on screen, we shouldn't force bottom item
			// This prevents it from getting stuck on load because scrollHeight hasn't expanded yet
			if (scrollY === 0 || scrollHeight <= innerHeight) {
				isAtBottom = false;
				return;
			}
			
			const isReallyAtBottom = Math.ceil(innerHeight + scrollY) >= scrollHeight - buffer;
			isAtBottom = isReallyAtBottom;
		});
	}

	$effect(() => {
		checkScrollPos(); // Initial check
		const unsubScroll = addEventListener(window, "scroll", checkScrollPos);
		const unsubResize = addEventListener(window, "resize", checkScrollPos);

		return () => {
			unsubScroll();
			unsubResize();
		};
	});

	return {
		get current() {
			return isAtBottom;
		},
	};
}