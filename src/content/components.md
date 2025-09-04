---
title: Components
description: Beautifully designed components built with Svelte and Tailwind CSS.
section: Components
---

<script>
	import { Card, CardDescription, CardHeader, CardTitle } from "$registry/ui/card/index.js";
	import { Badge } from "$registry/ui/badge/index.js";
</script>

A collection of reusable components built using Svelte and Tailwind CSS. These components are designed to be accessible, customizable, and easy to use in your projects.

## Available Components

<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

<Card>
	<CardHeader>
		<CardTitle>
			<a href="/docs/components/accordion" class="hover:underline">Accordion</a>
		</CardTitle>
		<CardDescription>
			A vertically stacked set of interactive headings that each reveal a section of content.
		</CardDescription>
	</CardHeader>
</Card>

<Card>
	<CardHeader>
		<CardTitle>
			<a href="/docs/components/alert" class="hover:underline">Alert</a>
		</CardTitle>
		<CardDescription>
			Displays a callout for user attention.
		</CardDescription>
	</CardHeader>
</Card>

<Card>
	<CardHeader>
		<CardTitle>
			<a href="/docs/components/alert-dialog" class="hover:underline">Alert Dialog</a>
		</CardTitle>
		<CardDescription>
			A modal dialog that interrupts the user with important content and expects a response.
		</CardDescription>
	</CardHeader>
</Card>

<Card>
	<CardHeader>
		<CardTitle>
			<a href="/docs/components/avatar" class="hover:underline">Avatar</a>
		</CardTitle>
		<CardDescription>
			An image element with a fallback for representing the user.
		</CardDescription>
	</CardHeader>
</Card>

<Card>
	<CardHeader>
		<CardTitle>
			<a href="/docs/components/badge" class="hover:underline">Badge</a>
		</CardTitle>
		<CardDescription>
			Displays a badge or a component that looks like a badge.
		</CardDescription>
	</CardHeader>
</Card>

<Card>
	<CardHeader>
		<CardTitle>
			<a href="/docs/components/breadcrumb" class="hover:underline">Breadcrumb</a>
		</CardTitle>
		<CardDescription>
			Displays the path to the current resource using a hierarchy of links.
		</CardDescription>
	</CardHeader>
</Card>

<Card>
	<CardHeader>
		<CardTitle>
			<a href="/docs/components/button" class="hover:underline">Button</a>
		</CardTitle>
		<CardDescription>
			Displays a button or a component that looks like a button.
		</CardDescription>
	</CardHeader>
</Card>

<Card>
	<CardHeader>
		<CardTitle>
			<a href="/docs/components/calendar" class="hover:underline">Calendar</a>
		</CardTitle>
		<CardDescription>
			A date field component that allows users to enter and edit date.
		</CardDescription>
	</CardHeader>
</Card>

<Card>
	<CardHeader>
		<CardTitle>
			<a href="/docs/components/card" class="hover:underline">Card</a>
		</CardTitle>
		<CardDescription>
			Displays a card with header, content, and footer.
		</CardDescription>
	</CardHeader>
</Card>

<Card>
	<CardHeader>
		<CardTitle>
			<a href="/docs/components/checkbox" class="hover:underline">Checkbox</a>
		</CardTitle>
		<CardDescription>
			A control that allows the user to toggle between checked and not checked.
		</CardDescription>
	</CardHeader>
</Card>

<Card>
	<CardHeader>
		<CardTitle>
			<a href="/docs/components/collapsible" class="hover:underline">Collapsible</a>
		</CardTitle>
		<CardDescription>
			An interactive component which expands/collapses a panel.
		</CardDescription>
	</CardHeader>
</Card>

<Card>
	<CardHeader>
		<CardTitle>
			<a href="/docs/components/command" class="hover:underline">Command</a>
		</CardTitle>
		<CardDescription>
			Fast, composable, unstyled command menu for Svelte.
		</CardDescription>
	</CardHeader>
</Card>

<Card>
	<CardHeader>
		<CardTitle>
			<a href="/docs/components/context-menu" class="hover:underline">Context Menu</a>
		</CardTitle>
		<CardDescription>
			Displays a menu to the user — such as a set of actions or functions — triggered by a button.
		</CardDescription>
	</CardHeader>
</Card>

<Card>
	<CardHeader>
		<CardTitle>
			<a href="/docs/components/dialog" class="hover:underline">Dialog</a>
		</CardTitle>
		<CardDescription>
			A window overlaid on either the primary window or another dialog window.
		</CardDescription>
	</CardHeader>
</Card>

<Card>
	<CardHeader>
		<CardTitle>
			<a href="/docs/components/dropdown-menu" class="hover:underline">Dropdown Menu</a>
		</CardTitle>
		<CardDescription>
			Displays a menu to the user — such as a set of actions or functions — triggered by a button.
		</CardDescription>
	</CardHeader>
</Card>

<Card>
	<CardHeader>
		<CardTitle>
			<a href="/docs/components/hover-card" class="hover:underline">Hover Card</a>
		</CardTitle>
		<CardDescription>
			For sighted users to preview content available behind a link.
		</CardDescription>
	</CardHeader>
</Card>

<Card>
	<CardHeader>
		<CardTitle>
			<a href="/docs/components/input" class="hover:underline">Input</a>
		</CardTitle>
		<CardDescription>
			Displays a form input field or a component that looks like an input field.
		</CardDescription>
	</CardHeader>
</Card>

<Card>
	<CardHeader>
		<CardTitle>
			<a href="/docs/components/input-otp" class="hover:underline">Input OTP</a>
		</CardTitle>
		<CardDescription>
			Accessible one-time password component with copy paste functionality.
		</CardDescription>
	</CardHeader>
</Card>

<Card>
	<CardHeader>
		<CardTitle>
			<a href="/docs/components/label" class="hover:underline">Label</a>
		</CardTitle>
		<CardDescription>
			Renders an accessible label associated with a control.
		</CardDescription>
	</CardHeader>
</Card>

<Card>
	<CardHeader>
		<CardTitle>
			<a href="/docs/components/loader" class="hover:underline">Loader</a>
		</CardTitle>
		<CardDescription>
			A loading spinner component to indicate processing state.
		</CardDescription>
	</CardHeader>
</Card>

<Card>
	<CardHeader>
		<CardTitle>
			<a href="/docs/components/menubar" class="hover:underline">Menubar</a>
		</CardTitle>
		<CardDescription>
			A visually persistent menu common in desktop applications.
		</CardDescription>
	</CardHeader>
</Card>

<Card>
	<CardHeader>
		<CardTitle>
			<a href="/docs/components/navigation-menu" class="hover:underline">Navigation Menu</a>
		</CardTitle>
		<CardDescription>
			A collection of navigation links that can be displayed in a horizontal or vertical layout.
		</CardDescription>
	</CardHeader>
</Card>

<Card>
	<CardHeader>
		<CardTitle>
			<a href="/docs/components/pagination" class="hover:underline">Pagination</a>
		</CardTitle>
		<CardDescription>
			Pagination with page navigation, next and previous links.
		</CardDescription>
	</CardHeader>
</Card>

<Card>
	<CardHeader>
		<CardTitle>
			<a href="/docs/components/popover" class="hover:underline">Popover</a>
		</CardTitle>
		<CardDescription>
			Displays rich content in a portal, triggered by a button.
		</CardDescription>
	</CardHeader>
</Card>

<Card>
	<CardHeader>
		<CardTitle>
			<a href="/docs/components/progress" class="hover:underline">Progress</a>
		</CardTitle>
		<CardDescription>
			Displays an indicator showing the completion progress of a task.
		</CardDescription>
	</CardHeader>
</Card>

<Card>
	<CardHeader>
		<CardTitle>
			<a href="/docs/components/radio-group" class="hover:underline">Radio Group</a>
		</CardTitle>
		<CardDescription>
			A set of checkable buttons—known as radio buttons—where no more than one can be checked at a time.
		</CardDescription>
	</CardHeader>
</Card>

<Card>
	<CardHeader>
		<CardTitle>
			<a href="/docs/components/range-calendar" class="hover:underline">Range Calendar</a>
		</CardTitle>
		<CardDescription>
			A calendar component that allows users to select a date range.
		</CardDescription>
	</CardHeader>
</Card>

<Card>
	<CardHeader>
		<CardTitle>
			<a href="/docs/components/scroll-area" class="hover:underline">Scroll Area</a>
		</CardTitle>
		<CardDescription>
			Augments native scroll functionality for custom, cross-browser styling.
		</CardDescription>
	</CardHeader>
</Card>

<Card>
	<CardHeader>
		<CardTitle>
			<a href="/docs/components/select" class="hover:underline">Select</a>
		</CardTitle>
		<CardDescription>
			Displays a list of options for the user to pick from—triggered by a button.
		</CardDescription>
	</CardHeader>
</Card>

<Card>
	<CardHeader>
		<CardTitle>
			<a href="/docs/components/separator" class="hover:underline">Separator</a>
		</CardTitle>
		<CardDescription>
			Visually or semantically separates content.
		</CardDescription>
	</CardHeader>
</Card>

<Card>
	<CardHeader>
		<CardTitle>
			<a href="/docs/components/sheet" class="hover:underline">Sheet</a>
		</CardTitle>
		<CardDescription>
			Extends the Dialog component to display content that complements the main content.
		</CardDescription>
	</CardHeader>
</Card>

<Card>
	<CardHeader>
		<CardTitle>
			<a href="/docs/components/sidebar" class="hover:underline">Sidebar</a>
		</CardTitle>
		<CardDescription>
			A collapsible sidebar component for navigation.
		</CardDescription>
	</CardHeader>
</Card>

<Card>
	<CardHeader>
		<CardTitle>
			<a href="/docs/components/skeleton" class="hover:underline">Skeleton</a>
		</CardTitle>
		<CardDescription>
			Use to show a placeholder while content is loading.
		</CardDescription>
	</CardHeader>
</Card>

<Card>
	<CardHeader>
		<CardTitle>
			<a href="/docs/components/slider" class="hover:underline">Slider</a>
		</CardTitle>
		<CardDescription>
			An input where the user selects a value from within a given range.
		</CardDescription>
	</CardHeader>
</Card>

<Card>
	<CardHeader>
		<CardTitle>
			<a href="/docs/components/sonner" class="hover:underline">Sonner</a>
		</CardTitle>
		<CardDescription>
			An opinionated toast component for Svelte.
		</CardDescription>
	</CardHeader>
</Card>

<Card>
	<CardHeader>
		<CardTitle>
			<a href="/docs/components/switch" class="hover:underline">Switch</a>
		</CardTitle>
		<CardDescription>
			A control that allows the user to toggle between checked and not checked.
		</CardDescription>
	</CardHeader>
</Card>

<Card>
	<CardHeader>
		<CardTitle>
			<a href="/docs/components/table" class="hover:underline">Table</a>
		</CardTitle>
		<CardDescription>
			A responsive table component.
		</CardDescription>
	</CardHeader>
</Card>

<Card>
	<CardHeader>
		<CardTitle>
			<a href="/docs/components/tabs" class="hover:underline">Tabs</a>
		</CardTitle>
		<CardDescription>
			A set of layered sections of content—known as tab panels—that are displayed one at a time.
		</CardDescription>
	</CardHeader>
</Card>

<Card>
	<CardHeader>
		<CardTitle>
			<a href="/docs/components/text" class="hover:underline">Text</a>
		</CardTitle>
		<CardDescription>
			Text component with consistent styling.
		</CardDescription>
	</CardHeader>
</Card>

<Card>
	<CardHeader>
		<CardTitle>
			<a href="/docs/components/textarea" class="hover:underline">Textarea</a>
		</CardTitle>
		<CardDescription>
			Displays a form textarea or a component that looks like a textarea.
		</CardDescription>
	</CardHeader>
</Card>

<Card>
	<CardHeader>
		<CardTitle>
			<a href="/docs/components/toggle" class="hover:underline">Toggle</a>
		</CardTitle>
		<CardDescription>
			A two-state button that can be either on or off.
		</CardDescription>
	</CardHeader>
</Card>

<Card>
	<CardHeader>
		<CardTitle>
			<a href="/docs/components/toggle-group" class="hover:underline">Toggle Group</a>
		</CardTitle>
		<CardDescription>
			A set of two-state buttons that can be toggled on or off.
		</CardDescription>
	</CardHeader>
</Card>

<Card>
	<CardHeader>
		<CardTitle>
			<a href="/docs/components/tooltip" class="hover:underline">Tooltip</a>
		</CardTitle>
		<CardDescription>
			A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
		</CardDescription>
	</CardHeader>
</Card>

</div>

## Getting Started

To start using these components in your project, you can install them individually or use the entire collection. Each component comes with its own documentation, examples, and customization options.

Visit the individual component pages to learn more about their usage, props, and examples.