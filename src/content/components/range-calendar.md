---
title: Range Calendar
description: A calendar component with range selection.
section: Components
links:
  - title: "Component Source"
    href: "https://bits-ui.com/docs/components/range-calendar"
---
<script>
	import { ComponentPreview, PMCommand } from "$lib/components";

</script>

<ComponentPreview name="range-calendar-usage-example" />
<br />
<br />

## Installation
<PMCommand command="execute" args={["shadcn-svelte@next", "add", "range-calendar"]} />

<br />
<br />

## Usage

```svelte
<script lang="ts">
  import * as RangeCalendar from "$lib/components/ui/range-calendar/index.js";

  let value = $state<{ start: Date; end: Date } | undefined>();
</script>

<RangeCalendar.Root bind:value />
```

<br />

## Examples

### Default

<ComponentPreview name="range-calendar-default" />

### With Time

<ComponentPreview name="range-calendar-with-time" />

### Disabled

<ComponentPreview name="range-calendar-disabled" />

### Custom Locale

<ComponentPreview name="range-calendar-custom-locale" />
