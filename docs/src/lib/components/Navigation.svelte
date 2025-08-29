<script lang="ts">
	import { page } from "$app/stores";
	import { ChevronLeft, ChevronRight } from "lucide-svelte";
	import * as Button from "$lib/components/ui/button";

	const navigation = [
		{
			title: "Getting Started",
			items: [
				{ title: "Introduction", href: "/" },
				{ title: "Installation", href: "/docs/installation" },
				{ title: "Theming", href: "/docs/theming" },
			],
		},
		{
			title: "Components",
			items: [
				{ title: "Accordion", href: "/docs/components/accordion" },
				{ title: "Alert Dialog", href: "/docs/components/alert-dialog" },
				{ title: "Alert", href: "/docs/components/alert" },
				{ title: "Aspect Ratio", href: "/docs/components/aspect-ratio" },
				{ title: "Avatar", href: "/docs/components/avatar" },
				{ title: "Badge", href: "/docs/components/badge" },
				{ title: "Breadcrumb", href: "/docs/components/breadcrumb" },
				{ title: "Button", href: "/docs/components/button" },
				{ title: "Calendar", href: "/docs/components/calendar" },
				{ title: "Card", href: "/docs/components/card" },
				{ title: "Carousel", href: "/docs/components/carousel" },
				{ title: "Checkbox", href: "/docs/components/checkbox" },
				{ title: "Collapsible", href: "/docs/components/collapsible" },
				{ title: "Command", href: "/docs/components/command" },
				{ title: "Context Menu", href: "/docs/components/context-menu" },
				{ title: "Data Table", href: "/docs/components/data-table" },
				{ title: "Dialog", href: "/docs/components/dialog" },
				{ title: "Dropdown Menu", href: "/docs/components/dropdown-menu" },
				{ title: "Hover Card", href: "/docs/components/hover-card" },
				{ title: "Input OTP", href: "/docs/components/input-otp" },
				{ title: "Input", href: "/docs/components/input" },
				{ title: "Label", href: "/docs/components/label" },
				{ title: "Menubar", href: "/docs/components/menubar" },
				{ title: "Navigation Menu", href: "/docs/components/navigation-menu" },
				{ title: "Pagination", href: "/docs/components/pagination" },
				{ title: "Popover", href: "/docs/components/popover" },
				{ title: "Progress", href: "/docs/components/progress" },
				{ title: "Radio Group", href: "/docs/components/radio-group" },
				{ title: "Range Calendar", href: "/docs/components/range-calendar" },
				{ title: "Resizable", href: "/docs/components/resizable" },
				{ title: "Scroll Area", href: "/docs/components/scroll-area" },
				{ title: "Select", href: "/docs/components/select" },
				{ title: "Separator", href: "/docs/components/separator" },
				{ title: "Sheet", href: "/docs/components/sheet" },
				{ title: "Sidebar", href: "/docs/components/sidebar" },
				{ title: "Skeleton", href: "/docs/components/skeleton" },
				{ title: "Slider", href: "/docs/components/slider" },
				{ title: "Switch", href: "/docs/components/switch" },
				{ title: "Table", href: "/docs/components/table" },
				{ title: "Tabs", href: "/docs/components/tabs" },
				{ title: "Textarea", href: "/docs/components/textarea" },
				{ title: "Toggle Group", href: "/docs/components/toggle-group" },
				{ title: "Toggle", href: "/docs/components/toggle" },
				{ title: "Tooltip", href: "/docs/components/tooltip" },
			],
		},
		{
			title: "Blocks",
			items: [
				{ title: "Authentication", href: "/docs/blocks/authentication" },
				{ title: "Dashboard", href: "/docs/blocks/dashboard" },
				{ title: "Forms", href: "/docs/blocks/forms" },
			],
		},
		{
			title: "Charts",
			items: [
				{ title: "Area Chart", href: "/docs/charts/area" },
				{ title: "Bar Chart", href: "/docs/charts/bar" },
				{ title: "Line Chart", href: "/docs/charts/line" },
				{ title: "Pie Chart", href: "/docs/charts/pie" },
			],
		},
		{
			title: "Colors",
			items: [
				{ title: "Default", href: "/docs/colors/default" },
				{ title: "Slate", href: "/docs/colors/slate" },
				{ title: "Gray", href: "/docs/colors/gray" },
				{ title: "Zinc", href: "/docs/colors/zinc" },
				{ title: "Neutral", href: "/docs/colors/neutral" },
				{ title: "Stone", href: "/docs/colors/stone" },
			],
		},
	];

	// Flatten all items for easier navigation
	const allItems = navigation.flatMap((section) => section.items);

	$: currentIndex = allItems.findIndex((item) => item.href === $page.url.pathname);
	$: previousItem = currentIndex > 0 ? allItems[currentIndex - 1] : null;
	$: nextItem = currentIndex < allItems.length - 1 ? allItems[currentIndex + 1] : null;
</script>

{#if previousItem || nextItem}
	<div class="mt-12 border-t pt-8">
		<div class="flex justify-between">
			{#if previousItem}
				<a
					href={previousItem.href}
					class="text-muted-foreground hover:text-foreground flex items-center space-x-2 text-sm"
				>
					<ChevronLeft class="h-4 w-4" />
					<div>
						<div class="text-xs">Previous</div>
						<div class="font-medium">{previousItem.title}</div>
					</div>
				</a>
			{:else}
				<div></div>
			{/if}

			{#if nextItem}
				<a
					href={nextItem.href}
					class="text-muted-foreground hover:text-foreground flex items-center space-x-2 text-right text-sm"
				>
					<div>
						<div class="text-xs">Next</div>
						<div class="font-medium">{nextItem.title}</div>
					</div>
					<ChevronRight class="h-4 w-4" />
				</a>
			{/if}
		</div>
	</div>
{/if}
