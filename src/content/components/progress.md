---
title: Progress
description: Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
section: Components
links:
  - title: "Docs"
    href: "https://bits-ui.com/docs/components/progress"
  - title: "API Reference"
    href: "https://bits-ui.com/docs/components/progress#api-reference"
  - title : "Component Source"
    href: "https://github.com/Mhamad6000/retroui-svelte/tree/main/registry/ui/progress"
---
<script>
	import { ComponentPreview, PMCommand } from "$lib/components";

</script>

<ComponentPreview name="progress-usage-example" />
<br />
<br />

## Installation
<!-- <PMCommand command="execute" `args={`["shadcn-svelte@next", "add", "https://retroui-svelte.netlify.app/r/progress"`} /> -->

<br />
<br />

## Usage

```svelte
<script lang="ts">
  import { Progress } from "$lib/components/ui/progress/index.js";
</script>
 
<Progress value={33} />
```
