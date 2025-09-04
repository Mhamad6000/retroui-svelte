---
title: Progress
description: Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
section: Components
links:
  - title: "Component Source"
    href: "https://bits-ui.com/docs/components/progress"
---
<script>
	import { ComponentPreview, PMCommand } from "$lib/components";

</script>

<ComponentPreview name="progress-usage-example" />
<br />
<br />

## Installation
<PMCommand command="execute" args={["shadcn-svelte@next", "add", "progress"]} />

<br />
<br />

## Usage

```svelte
<script lang="ts">
  import { Progress } from "$lib/components/ui/progress/index.js";

  let progress = $state(33);
</script>

<Progress value={progress} class="w-[60%]" />
```

<br />

## Examples

### Default

<ComponentPreview name="progress-default" />

### With Label

<ComponentPreview name="progress-with-label" />

### Loading

<ComponentPreview name="progress-loading" />

### Custom Color

<ComponentPreview name="progress-custom-color" />
