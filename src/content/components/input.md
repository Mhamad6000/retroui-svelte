---
title: Input
description: Displays a form input field or a component that looks like an input field.
section: Components
links:
  - title: "Component Source"
    href: "https://github.com/Mhamad6000/retroui-svelte/tree/main/registry/ui/input"
---
<script>
	import { ComponentPreview, PMCommand } from "$lib/components";

</script>

<ComponentPreview name="input-style-default" />
<br />
<br />

## Installation
<PMCommand command="execute" args={["shadcn-svelte@next", "add", "input"]} />

<br />
<br />

## Usage

```svelte
<script lang="ts">
  import { Input } from "$lib/components/ui/input/index.js";
</script>
 
<Input />
```

<br />

## Examples

### Default

<ComponentPreview name="input-style-default" />

<br/>

### With Label

<ComponentPreview name="input-style-label" />

<br/>

### Error

<ComponentPreview name="input-style-error" />

<br/>

### Disabled

<ComponentPreview name="input-style-disabled" />