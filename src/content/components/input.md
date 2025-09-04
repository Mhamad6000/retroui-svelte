---
title: Input
description: Displays a form input field or a component that looks like an input field.
section: Components
links:
  - title: "Component Source"
    href: "https://bits-ui.com/docs/components/input"
---
<script>
	import { ComponentPreview, PMCommand } from "$lib/components";

</script>

<ComponentPreview name="input-usage-example" />
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

<Input type="email" placeholder="Email" />
```

<br />

## Examples

### Default

<ComponentPreview name="input-default" />

### With Label

<ComponentPreview name="input-with-label" />

### With Button

<ComponentPreview name="input-with-button" />

### File

<ComponentPreview name="input-file" />

### Disabled

<ComponentPreview name="input-disabled" />

### With Icon

<ComponentPreview name="input-with-icon" />
