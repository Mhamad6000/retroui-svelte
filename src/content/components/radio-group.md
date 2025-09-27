---
title: Radio Group
description: A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.
section: Components
links:
  - title: "Docs"
    href: "https://bits-ui.com/docs/components/radio-group"
  - title: "API Reference"
    href: "https://bits-ui.com/docs/components/radio-group#api-reference"
  - title : "Component Source"
    href: "https://github.com/Mhamad6000/retroui-svelte/tree/main/registry/ui/radio-group"
---

<script>
  import { ComponentPreview, PMCommand } from "$lib/components";
  const installArgs = ["shadcn-svelte@latest", "add", "https://retroui-svelte.netlify.app/r/radio-group.json"];
</script>

<ComponentPreview name="radio-group-usage-example" />
<br />
<br />


## Installation
<PMCommand command="execute" args={installArgs} />
<br />
<br />

## Usage

```svelte
<script lang="ts">
  import { Label } from "$lib/components/ui/label/index.js";
  import * as RadioGroup from "$lib/components/ui/radio-group/index.js";
</script>
 
<RadioGroup.Root value="option-one">
  <div class="flex items-center space-x-2">
    <RadioGroup.Item value="option-one" id="option-one" />
    <Label for="option-one">Option One</Label>
  </div>
  <div class="flex items-center space-x-2">
    <RadioGroup.Item value="option-two" id="option-two" />
    <Label for="option-two">Option Two</Label>
  </div>
</RadioGroup.Root>
```

<br />

## Examples

### Variants

<ComponentPreview name="radio-group-variants" />

<br />

### Sizes

<ComponentPreview name="radio-group-sizes" />

<br />

### Disabled

<ComponentPreview name="radio-group-disabled" />
