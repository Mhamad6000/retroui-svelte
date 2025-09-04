---
title: Radio Group
description: A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.
section: Components
links:
  - title: "Component Source"
    href: "https://bits-ui.com/docs/components/radio-group"
---
<script>
	import { ComponentPreview, PMCommand } from "$lib/components";

</script>

<ComponentPreview name="radio-group-usage-example" />
<br />
<br />

## Installation
<PMCommand command="execute" args={["shadcn-svelte@next", "add", "radio-group"]} />

<br />
<br />

## Usage

```svelte
<script lang="ts">
  import * as RadioGroup from "$lib/components/ui/radio-group/index.js";

  let value = $state("default");
</script>

<RadioGroup.Root bind:value>
  <div class="flex items-center space-x-2">
    <RadioGroup.Item value="default" id="r1" />
    <Label for="r1">Default</Label>
  </div>
  <div class="flex items-center space-x-2">
    <RadioGroup.Item value="comfortable" id="r2" />
    <Label for="r2">Comfortable</Label>
  </div>
  <div class="flex items-center space-x-2">
    <RadioGroup.Item value="compact" id="r3" />
    <Label for="r3">Compact</Label>
  </div>
</RadioGroup.Root>
```

<br />

## Examples

### Default

<ComponentPreview name="radio-group-default" />

### With Label

<ComponentPreview name="radio-group-with-label" />

### Disabled

<ComponentPreview name="radio-group-disabled" />

### Form

<ComponentPreview name="radio-group-form" />
