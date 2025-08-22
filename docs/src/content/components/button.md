---
title: Button
description: Versatile button component that supports various styles, states, and sizes.
section: Components
---

<script>
	import { Button, DemoContainer, } from "@svecodocs/kit";
</script>

## Installation

You can install the button component using your preferred package manager:

```bash copy
npm install @zeno-ui/button
```

```bash copy
pnpm add @zeno-ui/button
```

```bash copy
yarn add @zeno-ui/button
```

### Manual Installation

You can also manually install the button component by downloading the required files:

1. Download the button component files:
   - [button.svelte](https://raw.githubusercontent.com/Mhamad6000/zeno-ui/main/src/lib/registry/ui/button/button.svelte)
   - [index.ts](https://raw.githubusercontent.com/Mhamad6000/zeno-ui/main/src/lib/registry/ui/button/index.ts)

2. Add them to your project's components directory.

## Usage

Import and use the Button component in your Svelte files:

```svelte copy
<script>
	import { Button } from "@zeno-ui/button";
</script>

<Button>Click me</Button>
```

## Examples

### Variants

All available button variants:

<DemoContainer class="flex items-center gap-2.5 flex-wrap">
	<Button>Default</Button>
	<Button variant="secondary">Secondary</Button>
	<Button variant="destructive">Destructive</Button>
	<Button variant="outline">Outline</Button>
	<Button variant="ghost">Ghost</Button>
	<Button variant="link">Link</Button>
	<Button variant="success">Success</Button>
	<Button variant="warning">Warning</Button>
	<Button variant="info">Info</Button>
</DemoContainer>

```svelte copy
<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button variant="success">Success</Button>
<Button variant="warning">Warning</Button>
<Button variant="info">Info</Button>
```

### Outline Variants

<DemoContainer class="flex items-center gap-2.5 flex-wrap">
	<Button variant="outline-destructive">Destructive</Button>
	<Button variant="outline-success">Success</Button>
	<Button variant="outline-warning">Warning</Button>
	<Button variant="outline-info">Info</Button>
</DemoContainer>

```svelte copy
<Button variant="outline-destructive">Destructive</Button>
<Button variant="outline-success">Success</Button>
<Button variant="outline-warning">Warning</Button>
<Button variant="outline-info">Info</Button>
```

### Dashed Variants

<DemoContainer class="flex items-center gap-2.5 flex-wrap">
	<Button variant="dashed">Default</Button>
	<Button variant="dashed-destructive">Destructive</Button>
	<Button variant="dashed-success">Success</Button>
	<Button variant="dashed-warning">Warning</Button>
	<Button variant="dashed-info">Info</Button>
</DemoContainer>

```svelte copy
<Button variant="dashed">Default</Button>
<Button variant="dashed-destructive">Destructive</Button>
<Button variant="dashed-success">Success</Button>
<Button variant="dashed-warning">Warning</Button>
<Button variant="dashed-info">Info</Button>
```

### Ghost Variants

<DemoContainer class="flex items-center gap-2.5 flex-wrap">
	<Button variant="ghost">Default</Button>
	<Button variant="ghost-destructive">Destructive</Button>
	<Button variant="ghost-success">Success</Button>
	<Button variant="ghost-warning">Warning</Button>
	<Button variant="ghost-info">Info</Button>
</DemoContainer>

```svelte copy
<Button variant="ghost">Default</Button>
<Button variant="ghost-destructive">Destructive</Button>
<Button variant="ghost-success">Success</Button>
<Button variant="ghost-warning">Warning</Button>
<Button variant="ghost-info">Info</Button>
```

### Link Variants

<DemoContainer class="flex items-center gap-2.5 flex-wrap">
	<Button variant="link">Default</Button>
	<Button variant="link-destructive">Destructive</Button>
	<Button variant="link-success">Success</Button>
	<Button variant="link-warning">Warning</Button>
	<Button variant="link-info">Info</Button>
</DemoContainer>

```svelte copy
<Button variant="link">Default</Button>
<Button variant="link-destructive">Destructive</Button>
<Button variant="link-success">Success</Button>
<Button variant="link-warning">Warning</Button>
<Button variant="link-info">Info</Button>
```

### Sizes

Available button sizes:

<DemoContainer class="flex items-center gap-2.5 flex-wrap">
	<Button size="sm">Small</Button>
	<Button size="default">Default</Button>
	<Button size="lg">Large</Button>
	<Button size="icon"></Button>
</DemoContainer>

```svelte copy
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon"></Button>
```

### With Icons

Examples of buttons with icons:

<DemoContainer class="flex items-center gap-2.5 flex-wrap">
	<Button>
		Add Item
	</Button>
	<Button variant="outline">
		Settings
	</Button>
	<Button variant="ghost">
		Delete
	</Button>
	<Button size="sm">
		Download
	</Button>
</DemoContainer>

```svelte copy
<Button>Add Item</Button>
<Button variant="outline">Settings</Button>
<Button variant="ghost">Delete</Button>
<Button size="sm">Download</Button>
```

### States

#### Loading State

<DemoContainer class="flex items-center gap-2.5 flex-wrap">
	<Button disabled>
		Please wait
	</Button>
	<Button variant="outline" disabled>
		Loading...
	</Button>
</DemoContainer>

```svelte copy
<Button disabled>Please wait</Button>
<Button variant="outline" disabled>Loading...</Button>
```

#### Disabled State

<DemoContainer class="flex items-center gap-2.5 flex-wrap">
	<Button disabled>Disabled</Button>
	<Button variant="secondary" disabled>Disabled</Button>
	<Button variant="destructive" disabled>Disabled</Button>
	<Button variant="ghost" disabled>Disabled</Button>
</DemoContainer>

```svelte copy
<Button disabled>Disabled</Button>
<Button variant="secondary" disabled>Disabled</Button>
<Button variant="destructive" disabled>Disabled</Button>
<Button variant="ghost" disabled>Disabled</Button>
```

### As Links

Buttons can be rendered as links using the `href` prop:

<DemoContainer class="flex items-center gap-2.5 flex-wrap">
	<Button href="#" variant="link">Link Button</Button>
	<Button href="https://example.com" target="_blank">
		External Link
	</Button>
</DemoContainer>

```svelte copy
<Button href="#" variant="link">Link Button</Button>
<Button href="https://example.com" target="_blank">External Link</Button>
```

## Props

| Prop     | Type            | Default     | Description                                          |
| -------- | --------------- | ----------- | ---------------------------------------------------- |
| variant  | `ButtonVariant` | `"default"` | The visual style variant of the button               |
| size     | `ButtonSize`    | `"default"` | The size of the button                               |
| disabled | `boolean`       | `false`     | Whether the button is disabled                       |
| href     | `string`        | `undefined` | If provided, the button will render as an anchor tag |
| class    | `string`        | `""`        | Additional CSS classes to apply to the button        |
| ref      | `HTMLElement`   | `null`      | A reference to the underlying button/anchor element  |
