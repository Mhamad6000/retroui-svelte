---
title: Loader
description: A loading spinner component.
section: Components
links:
  - title: "Component Source"
    href: "https://bits-ui.com/docs/components/loader"
---
<script>
	import { ComponentPreview, PMCommand } from "$lib/components";

</script>

<ComponentPreview name="loader-usage-example" />
<br />
<br />

## Installation
<PMCommand command="execute" args={["shadcn-svelte@next", "add", "loader"]} />

<br />
<br />

## Usage

```svelte
<script lang="ts">
  import { Loader } from "$lib/components/ui/loader/index.js";
</script>

<Loader />
```

<br />

## Examples

### Default

<ComponentPreview name="loader-default" />

### Sizes

<ComponentPreview name="loader-sizes" />

### Colors

<ComponentPreview name="loader-colors" />

### Custom

<ComponentPreview name="loader-custom" />
