---
title: Select
description: Displays a list of options for the user to pick from—triggered by a button.
section: Components
links:
  - title: "Docs"
    href: "https://bits-ui.com/docs/components/select"
  - title: "API Reference"
    href: "https://bits-ui.com/docs/components/select#api-reference"
  - title : "Component Source"
    href: "https://bits-ui.com/docs/components/accordion"
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
</script>
 
<Select.Root type="single">
 <Select.Trigger class="w-[180px]"></Select.Trigger>
 <Select.Content>
  <Select.Item value="light">Light</Select.Item>
  <Select.Item value="dark">Dark</Select.Item>
  <Select.Item value="system">System</Select.Item>
 </Select.Content>
</Select.Root>
```

<br />

## Examples

### Default

<ComponentPreview name="select-style-default" />

<br />

### Disabled

<ComponentPreview name="select-style-disabled" />

<br />

### Error

<ComponentPreview name="select-style-error" />
