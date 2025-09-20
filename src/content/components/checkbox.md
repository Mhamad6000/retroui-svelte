---
title: Checkbox
description: A control that allows the user to toggle between checked and not checked.
section: Components
links:
  - title: "Docs"
    href: "https://bits-ui.com/docs/components/checkbox"
  - title: "API Reference"
    href: "https://bits-ui.com/docs/components/checkbox#api-reference"
  - title : "Component Source"
    href: "https://github.com/Mhamad6000/retroui-svelte/tree/main/registry/ui/checkbox"
---

<script>
  import { ComponentPreview, PMCommand } from "$lib/components";
  const installArgs = ["shadcn-svelte@next", "add", "https://retroui-svelte.netlify.app/r/checkbox.json"];
</script>

<ComponentPreview name="checkbox-usage-example" />
<br />
<br />


## Installation
<PMCommand command="execute" args={installArgs} />
<br />
<br />

## Usage

```svelte
<script lang="ts">
  import { Checkbox } from "$lib/components/ui/checkbox/index.js";
</script>
 
<Checkbox />
```

<br />

## Examples

### Variants

<ComponentPreview name="checkbox-variants" />

<br />

### Size

<ComponentPreview name="checkbox-size" />

