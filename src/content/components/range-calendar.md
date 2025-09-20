---
title: Range Calendar
description: A calendar component with range selection.
section: Components
links:
  - title: "Docs"
    href: "https://bits-ui.com/docs/components/range-calendar"
  - title: "API Reference"
    href: "https://bits-ui.com/docs/components/range-calendar#api-reference"
  - title : "Component Source"
    href: "https://github.com/Mhamad6000/retroui-svelte/tree/main/registry/ui/range-calendar"
---

<script>
  import { ComponentPreview, PMCommand } from "$lib/components";
  const installArgs = ["shadcn-svelte@next", "add", "https://retroui-svelte.netlify.app/r/range-calendar.json"];
</script>

<ComponentPreview name="range-calendar-usage-example" />
<br />
<br />


## Installation
<PMCommand command="execute" args={installArgs} />
<br />
<br />

## Usage

```svelte
<script lang="ts">
	import { RangeCalendar } from "$registry/ui/range-calendar/index.js";
</script>

<RangeCalendar class="rounded-md border" />
```