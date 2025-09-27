---
title: Alert
description: Displays a callout for user attention.
section: Components
links:
  - title : "Component Source"
    href: "https://github.com/Mhamad6000/retroui-svelte/tree/main/registry/ui/alert"
---

<script>
	import { ComponentPreview , PMCommand } from "$lib/components";
	const installArgs = ["shadcn-svelte@latest", "add", "https://retroui-svelte.netlify.app/r/alert.json"];
</script>

<ComponentPreview name="alert-style-default" />
<br />
<br />


## Installation
<PMCommand command="execute" args={installArgs} />
<br />
<br />

## Usage

```svelte
<script lang="ts">
  import * as Alert from "$lib/components/ui/alert/index.js";
</script>

<Alert.Root>
	<Alert.Title>Success! Your changes have been saved</Alert.Title>
	<Alert.Description>This is an alert with icon, title and description.</Alert.Description>
</Alert.Root>
```
<br />
<br />

## Examples

### Default

<ComponentPreview name="alert-style-default" />

<br />

### Solid

<ComponentPreview name="alert-style-solid" />

<br />

### With Icon

<ComponentPreview name="alert-style-icon" />

<br />

### Status

<ComponentPreview name="alert-status" />