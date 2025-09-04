---
title: Label
description: Renders an accessible label associated with controls.
section: Components
links:
  - title: "Component Source"
    href: "https://bits-ui.com/docs/components/label"
---
<script>
	import { ComponentPreview, PMCommand } from "$lib/components";

</script>

<ComponentPreview name="label-usage-example" />
<br />
<br />

## Installation
<PMCommand command="execute" args={["shadcn-svelte@next", "add", "label"]} />

<br />
<br />

## Usage

```svelte
<script lang="ts">
  import { Label } from "$lib/components/ui/label/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
</script>

<div class="grid w-full max-w-sm items-center gap-1.5">
  <Label for="email">Email</Label>
  <Input type="email" id="email" placeholder="Email" />
</div>
```

<br />

## Examples

### With Input

<ComponentPreview name="label-with-input" />

### With Checkbox

<ComponentPreview name="label-with-checkbox" />

### With Switch

<ComponentPreview name="label-with-switch" />

### With Radio Group

<ComponentPreview name="label-with-radio-group" />
