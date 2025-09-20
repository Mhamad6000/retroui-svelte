---
title: Label
description: Renders an accessible label associated with controls.
section: Components
links:
  - title: "Docs"
    href: "https://bits-ui.com/docs/components/label"
  - title: "API Reference"
    href: "https://bits-ui.com/docs/components/label#api-reference"
  - title : "Component Source"
    href: "https://github.com/Mhamad6000/retroui-svelte/tree/main/registry/ui/label"
---

<script>
  import { ComponentPreview, PMCommand } from "$lib/components";
  const installArgs = ["shadcn-svelte@next", "add", "https://retroui-svelte.netlify.app/r/label.json"];
</script>

<ComponentPreview name="label-usage-example" />
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
</script>
 
<Label for="email">Your email address</Label>
```



