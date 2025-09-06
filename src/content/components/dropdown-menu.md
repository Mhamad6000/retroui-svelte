---
title: Dropdown Menu
description: Displays a menu to the user—such as a set of actions or functions—triggered by a button.
section: Components
links:
  - title: "Docs"
    href: "https://bits-ui.com/docs/components/dropdown-menu"
  - title: "API Reference"
    href: "https://bits-ui.com/docs/components/dropdown-menu#api-reference"
  - title : "Component Source"
    href: "https://bits-ui.com/docs/components/accordion"
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
</script>
 
<DropdownMenu.Root>
 <DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
 <DropdownMenu.Content>
  <DropdownMenu.Group>
   <DropdownMenu.Label>My Account</DropdownMenu.Label>
   <DropdownMenu.Separator />
   <DropdownMenu.Item>Profile</DropdownMenu.Item>
   <DropdownMenu.Item>Billing</DropdownMenu.Item>
   <DropdownMenu.Item>Team</DropdownMenu.Item>
   <DropdownMenu.Item>Subscription</DropdownMenu.Item>
  </DropdownMenu.Group>
 </DropdownMenu.Content>
</DropdownMenu.Root>
```

<br />

## Examples

### Checkboxes

<ComponentPreview name="dropdown-menu-checkboxes" />

<br />

### Radio Group

<ComponentPreview name="dropdown-menu-radio-group" />

