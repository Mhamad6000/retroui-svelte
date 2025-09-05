---
title: Switch
description: A control that allows the user to toggle between checked and not checked.
section: Components
links:
  - title: "Docs"
    href: "https://bits-ui.com/docs/components/switch"
  - title: "API Reference"
    href: "https://bits-ui.com/docs/components/switch#api-reference"
  - title : "Component Source"
    href: "https://bits-ui.com/docs/components/accordion"
---
<script>
	import { ComponentPreview, PMCommand } from "$lib/components";

</script>

<ComponentPreview name="switch-usage-example" />
<br />
<br />

## Installation
<PMCommand command="execute" args={["shadcn-svelte@next", "add", "switch"]} />

<br />
<br />

## Usage

```svelte
<script lang="ts">
  import { Switch } from "$lib/components/ui/switch/index.js";
</script>
 
<Switch />
```

<br />

## Examples

### Default

<ComponentPreview name="switch-usage-example" />

<br />

### Disabled

<ComponentPreview name="switch-disabled" />

