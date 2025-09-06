---
title: Separator
description: Visually or semantically separates content.
section: Components
links:
  - title: "Docs"
    href: "https://bits-ui.com/docs/components/separator"
  - title: "API Reference"
    href: "https://bits-ui.com/docs/components/dialog#api-reference"
  - title : "Component Source"
    href: "https://bits-ui.com/docs/components/accordion"
---
<script>
	import { ComponentPreview, PMCommand } from "$lib/components";

</script>

<ComponentPreview name="separator-usage-example" />
<br />
<br />

## Installation
<PMCommand command="execute" args={["shadcn-svelte@next", "add", "separator"]} />

<br />
<br />

## Usage

```svelte
<script lang="ts">
 import { Separator } from "$lib/components/ui/separator/index.js";
</script>
 
<Separator />
```