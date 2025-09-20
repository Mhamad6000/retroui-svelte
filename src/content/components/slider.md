---
title: Slider
description: An input where the user selects a value from within a given range.
section: Components
links:
  - title: "Docs"
    href: "https://bits-ui.com/docs/components/slider"
  - title: "API Reference"
    href: "https://bits-ui.com/docs/components/slider#api-reference"
  - title : "Component Source"
    href: "https://github.com/Mhamad6000/retroui-svelte/tree/main/registry/ui/slider"
---

<script>
  import { ComponentPreview, PMCommand } from "$lib/components";
  const installArgs = ["shadcn-svelte@next", "add", "https://retroui-svelte.netlify.app/r/slider.json"];
</script>

<ComponentPreview name="slider-style-default" />
<br />
<br />


## Installation
<PMCommand command="execute" args={installArgs} />
<br />
<br />

## Usage

```svelte
<script lang="ts">
  import { Slider } from "$lib/components/ui/slider/index.js";
  let value = $state(33);
</script>
 
<Slider type="single" bind:value max={100} step={1} />
```

<br />

## Examples

### Default

<ComponentPreview name="slider-style-default" />

<br />

### Multiple Thumbs

<ComponentPreview name="slider-style-multi" />
