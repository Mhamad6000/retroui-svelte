---
title: Textarea
description: Displays a form textarea or a component that looks like a textarea.
section: Components
links:
  - title: "Component Source"
    href: "https://github.com/Mhamad6000/retroui-svelte/tree/main/registry/ui/textarea"
---

<script>
  import { ComponentPreview, PMCommand } from "$lib/components";
  const installArgs = ["shadcn-svelte@latest", "add", "https://retroui-svelte.netlify.app/r/textarea.json"];
</script>

<ComponentPreview name="textarea-style-default" />
<br />
<br />


## Installation
<PMCommand command="execute" args={installArgs} />
<br />
<br />

## Usage

```svelte
<script lang="ts">
  import { Textarea } from "$lib/components/ui/textarea/index.js";
</script>

<Textarea placeholder="Type your message here." />
```

<br />

## Examples

### Default

<ComponentPreview name="textarea-style-default" />

<br />

### Diabled

<ComponentPreview name="textarea-style-disabled" />