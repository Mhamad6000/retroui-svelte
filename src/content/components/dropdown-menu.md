---
title: Dropdown Menu
description: Displays a menu to the user—such as a set of actions or functions—triggered by a button.
section: Components
links:
  - title: "Component Source"
    href: "https://bits-ui.com/docs/components/dropdown-menu"
---
<script>
	import { ComponentPreview, PMCommand } from "$lib/components";

</script>

<ComponentPreview name="dropdown-menu-usage-example" />
<br />
<br />

## Installation
<PMCommand command="execute" args={["shadcn-svelte@next", "add", "dropdown-menu"]} />

<br />
<br />

## Usage

```svelte
<script lang="ts">
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
</script>

<DropdownMenu.Root>
  <DropdownMenu.Trigger asChild>
    <Button variant="outline">Open</Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content class="w-56">
    <DropdownMenu.Label>My Account</DropdownMenu.Label>
    <DropdownMenu.Separator />
    <DropdownMenu.Item>Profile</DropdownMenu.Item>
    <DropdownMenu.Item>Billing</DropdownMenu.Item>
    <DropdownMenu.Item>Team</DropdownMenu.Item>
    <DropdownMenu.Item>Subscription</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>
```

<br />

## Examples

### Checkboxes

<ComponentPreview name="dropdown-menu-checkboxes" />

### Radio Group

<ComponentPreview name="dropdown-menu-radio-group" />

### With Icons

<ComponentPreview name="dropdown-menu-with-icons" />

### Submenu

<ComponentPreview name="dropdown-menu-submenu" />
