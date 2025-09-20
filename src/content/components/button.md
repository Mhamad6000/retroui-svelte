---
title: Button
description: A button component to use in examples and documentation.
section: Components
links:
  - title: "Component Source"
    href: "https://github.com/Mhamad6000/retroui-svelte/tree/main/registry/ui/button"
---


<script>
  import { Button } from "$registry/ui/button/index.js";
  import { ComponentPreview, PMCommand } from "$lib/components";
  const installArgs = ["shadcn-svelte@next", "add", "https://retroui-svelte.netlify.app/r/button.json"];
</script>
## Installation
<PMCommand command="execute" args={installArgs} />
<br />
<br />

## Usage

```svelte
<script lang="ts">
 import { Button } from "$lib/components/ui/button/index.js";
</script>
 
<Button variant="outline">Button</Button>
```

### Link

You can convert the `<button>` into an `<a>` element by simply passing an href as a prop.

```svelte
<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
</script>
 
<Button href="/dashboard">Dashboard</Button>
```

Alternatively, you can use the `buttonVariants` helper to create a link that looks like a button.

```svelte
<script lang="ts">
  import { buttonVariants } from "$lib/components/ui/button";
</script>
 
<a href="/dashboard" class={buttonVariants({ variant: "outline" })}>
  Dashboard
</a>
```

<br/>

## Example

### Primary

<ComponentPreview name="button-style-default">
	
</ComponentPreview>

<br/>

### Secondary

<ComponentPreview name="button-style-secondary">
	
</ComponentPreview>

<br/>

### Destructive

<ComponentPreview name="button-style-destructive">
	
</ComponentPreview>

<br/>

### Outline

<ComponentPreview name="button-style-outline">
	
</ComponentPreview>

<br/>

### Ghost

<ComponentPreview name="button-style-ghost">
	
</ComponentPreview>

<br/>

### Link

<ComponentPreview name="button-style-link">
	
</ComponentPreview>

<br/>

### Icon

<ComponentPreview name="button-style-icon">
	
</ComponentPreview>