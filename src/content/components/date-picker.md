---
title: Date Picker
description: A date picker component with range and presets.
section: Components
---
<script>
	import { ComponentPreview, PMCommand } from "$lib/components";
</script>

<ComponentPreview name="date-picker-usage-example" />
<br />
<br />

## Installation

The Date Picker is built using a composition of the `<Popover />` and either the `<Calendar />` or `<RangeCalendar />` components.
See installations instructions for the [Popover](/docs/components/popover), [Calendar](/docs/components/calendar), and [Range Calendar](/docs/components/range-calendar) components.

<br />
<br />

## Usage

```svelte
<script lang="ts">
 import CalendarIcon from "@lucide/svelte/icons/calendar";
 import {
  type DateValue,
  DateFormatter,
  getLocalTimeZone,
 } from "@internationalized/date";
 import { cn } from "$lib/utils.js";
 import { Button } from "$lib/components/ui/button/index.js";
 import { Calendar } from "$lib/components/ui/calendar/index.js";
 import * as Popover from "$lib/components/ui/popover/index.js";
 
 const df = new DateFormatter("en-US", {
  dateStyle: "long",
 });
 
 let value = $state<DateValue>();
</script>
 
<Popover.Root>
 <Popover.Trigger>
  {#snippet child({ props })}
   <Button
    variant="outline"
    class={cn(
     "w-[280px] justify-start text-left font-normal",
     !value && "text-muted-foreground"
    )}
    {...props}
   >
    <CalendarIcon class="mr-2 size-4" />
    {value ? df.format(value.toDate(getLocalTimeZone())) : "Select a date"}
   </Button>
  {/snippet}
 </Popover.Trigger>
 <Popover.Content class="w-auto p-0">
  <Calendar bind:value type="single" initialFocus />
 </Popover.Content>
</Popover.Root>
```

<br />
<br />

## Examples

### Date Picker

<ComponentPreview name="date-picker-usage-example" />

<br />

### Date Range Picker

<ComponentPreview name="date-picker-range" />

