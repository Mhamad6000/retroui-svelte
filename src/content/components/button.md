---
title: Button
description: A button component to use in examples and documentation.
section: Components
---

<script>
	import { Button } from "$registry/ui/button/index.js";
	import { ComponentPreview } from "$lib/components";
	
</script>

## Usage

```svelte
<script>
	import { Button } from "@svecodocs/kit";
</script>

<Button>Default</Button>
<Button variant="brand">Brand</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="outline">Outline</Button>
<Button variant="subtle">Subtle</Button>
<Button variant="link">Link</Button>
```

## Example

### Default Size

<ComponentPreview name="button-style-default" align="center">
	
</ComponentPreview>

