---
title: Select
description: Displays a list of options for the user to pick from—triggered by a button.
section: Components
links:
  - title: "Component Source"
    href: "https://bits-ui.com/docs/components/select"
---
<script>
	import { ComponentPreview, PMCommand } from "$lib/components";

</script>

<ComponentPreview name="select-usage-example" />
<br />
<br />

## Installation
<PMCommand command="execute" args={["shadcn-svelte@next", "add", "select"]} />

<br />
<br />

## Usage

```svelte
<script lang="ts">
  import * as Select from "$lib/components/ui/select/index.js";

  let value = $state("");
</script>

<Select.Root bind:value>
  <Select.Trigger>
    <Select.Value placeholder="Select a fruit..." />
  </Select.Trigger>
  <Select.Content>
    <Select.Group>
      <Select.Label>Fruits</Select.Label>
      <Select.Item value="apple">Apple</Select.Item>
      <Select.Item value="banana">Banana</Select.Item>
      <Select.Item value="blueberry">Blueberry</Select.Item>
      <Select.Item value="grapes">Grapes</Select.Item>
      <Select.Item value="pineapple">Pineapple</Select.Item>
    </Select.Group>
  </Select.Content>
</Select.Root>
```

<br />

## Examples

### Scrollable

<ComponentPreview name="select-scrollable" />

### Form

<ComponentPreview name="select-form" />

### Disabled

<ComponentPreview name="select-disabled" />
