---
title: Textarea
description: Displays a form textarea or a component that looks like a textarea.
section: Components
links:
  - title: "Component Source"
    href: "https://bits-ui.com/docs/components/textarea"
---
<script>
	import { ComponentPreview, PMCommand } from "$lib/components";

</script>

<ComponentPreview name="textarea-style-default" />
<br />
<br />

## Installation
<PMCommand command="execute" args={["shadcn-svelte@next", "add", "textarea"]} />

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