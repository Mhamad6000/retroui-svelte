---
title: Alert Action
description: The Alert Action is a powerful Svelte action that enables you to create interactive alert dialogs for displaying information, confirming operations, or showing prompt messages.
section: Components
---

## Features

- Easy to integrate with any clickable element
- Customizable title and description
- Support for close and confirm callbacks
- Clean and modern design

## Installation

```bash
npm install svelte-legos
```

## Basic Usage

```svelte
<script>
	import { alertAction } from "svelte-legos";

	function onClose() {
		// Handle alert close event
		console.log("Alert closed");
	}

	function onOk() {
		// Handle confirmation
		console.log("Alert confirmed");
	}
</script>

<button
	use:alertAction={{
		title: "Confirm Action",
		description: "Are you sure you want to proceed?",
		onClose,
		onOk,
	}}
>
	Show Alert
</button>
```

## Parameters

The `alertAction` accepts an object with the following properties:

| Parameter   | Type       | Description                                      | Required |
| ----------- | ---------- | ------------------------------------------------ | -------- |
| title       | string     | The title text shown in the alert dialog         | Yes      |
| description | string     | The descriptive text shown below the title       | Yes      |
| onClose     | () => void | Callback function triggered when alert is closed | No       |
| onOk        | () => void | Callback function triggered when OK is clicked   | No       |

## Events

The alert provides two main events that you can handle:

1. **onClose**: Triggered when the user closes the alert (typically by clicking outside or pressing escape)
2. **onOk**: Triggered when the user confirms the alert by clicking the OK button

## Examples

### Basic Alert

```svelte
<button
	use:alertAction={{
		title: "Hello!",
		description: "This is a simple alert message.",
	}}
>
	Show Simple Alert
</button>
```

### Confirmation Alert

```svelte
<script>
	import { alertAction } from "svelte-legos";

	function handleDelete() {
		console.log("Item deleted!");
	}
</script>

<button
	use:alertAction={{
		title: "Delete Item",
		description: "Are you sure you want to delete this item? This action cannot be undone.",
		onOk: handleDelete,
	}}
>
	Delete Item
</button>
```

### Alert with Both Callbacks

```svelte
<script>
	import { alertAction } from "svelte-legos";

	function handleClose() {
		console.log("Operation cancelled");
	}

	function handleConfirm() {
		console.log("Operation confirmed");
	}
</script>

<button
	use:alertAction={{
		title: "Confirm Operation",
		description: "Please confirm to proceed with this operation.",
		onClose: handleClose,
		onOk: handleConfirm,
	}}
>
	Confirm Operation
</button>
```

## TypeScript Support

The action is fully typed and provides type safety when used in TypeScript projects:

```typescript
interface LoadingActionParams {
	title: string;
	description: string;
	onClose?: () => void;
	onOk?: () => void;
}
```
