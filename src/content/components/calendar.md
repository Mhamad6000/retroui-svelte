---
title: Calendar
description: A date picker component with range and multiple selection.
section: Components
links:
  - title: "Component Source"
    href: "https://bits-ui.com/docs/components/calendar"
---
<script>
	import { ComponentPreview, PMCommand } from "$lib/components";

</script>

<ComponentPreview name="calendar-usage-example" />
<br />
<br />

## Installation
<PMCommand command="execute" args={["shadcn-svelte@next", "add", "calendar"]} />

<br />
<br />

## Usage

```svelte
<script lang="ts">
  import * as Calendar from "$lib/components/ui/calendar/index.js";

  let date = $state<Date | undefined>(new Date());
</script>

<Calendar.Root bind:value={date} />
```

<br />

## Examples

### Default

<ComponentPreview name="calendar-default" />

### Date Picker

<ComponentPreview name="calendar-date-picker" />

### Date Range Picker

<ComponentPreview name="calendar-date-range-picker" />

### Multiple Selection

<ComponentPreview name="calendar-multiple-selection" />

### Form

<ComponentPreview name="calendar-form" />
