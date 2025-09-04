---
title: Slider
description: An input where the user selects a value from within a given range.
section: Components
links:
  - title: "Component Source"
    href: "https://bits-ui.com/docs/components/slider"
---
<script>
	import { ComponentPreview, PMCommand } from "$lib/components";

</script>

<ComponentPreview name="slider-usage-example" />
<br />
<br />

## Installation
<PMCommand command="execute" args={["shadcn-svelte@next", "add", "slider"]} />

<br />
<br />

## Usage

```svelte
<script lang="ts">
  import { Slider } from "$lib/components/ui/slider/index.js";

  let value = $state([50]);
</script>

<Slider bind:value max={100} step={1} />
```

<br />

## Examples

### Default

<ComponentPreview name="slider-default" />

### With Label

<ComponentPreview name="slider-with-label" />

### Range

<ComponentPreview name="slider-range" />

### Step

<ComponentPreview name="slider-step" />

### Disabled

<ComponentPreview name="slider-disabled" />

### Vertical

<ComponentPreview name="slider-vertical" />
