---
title: Calendar
description: A calendar component that allows users to select dates.
section: Components
links:
  - title: "Docs"
    href: "https://bits-ui.com/docs/components/calendar"
  - title: "API Reference"
    href: "https://bits-ui.com/docs/components/calendar#api-reference"
  - title : "Component Source"
    href: "https://github.com/Mhamad6000/retroui-svelte/tree/main/registry/ui/calendar"
---

<script>
  import { ComponentPreview, PMCommand } from "$lib/components";
  const installArgs = ["shadcn-svelte@next", "add", "https://retroui-svelte.netlify.app/r/calendar.json"];
</script>

<ComponentPreview name="calendar-usage-example" />
<br />
<br />


## Installation
<PMCommand command="execute" args={installArgs} />
<br />
<br />

## Examples

### Default

<ComponentPreview name="calendar-usage-example" />

<br />

### Range Calendar

<ComponentPreview name="calendar-style-range" />

<br />

### Date Picker

<ComponentPreview name="calendar-style-month-year" />
