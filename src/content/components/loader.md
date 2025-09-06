---
title: Loader
description: A loading indicator component.
section: Components
links:
  - title: "Component Source"
    href: "https://bits-ui.com/docs/components/loader"
---
<script>
	import { ComponentPreview, PMCommand } from "$lib/components";

</script>

<ComponentPreview name="loader-style-default" />
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

<ComponentPreview name="loader-style-default" />

<br/>

### Secondary

<ComponentPreview name="loader-style-secondary" />

<br/>

### Outline

<ComponentPreview name="loader-style-outline" />

<br/>

### Sizes

<ComponentPreview name="loader-sizes" />
