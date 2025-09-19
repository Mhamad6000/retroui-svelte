---
title: Context Menu
description: Displays a menu to the user—such as a set of actions or functions—triggered by right-clicking.
section: Components
links:
  - title: "Docs"
    href: "https://bits-ui.com/docs/components/context-menu"
  - title: "API Reference"
    href: "https://bits-ui.com/docs/components/context-menu#api-reference"
  - title : "Component Source"
    href: "https://github.com/Mhamad6000/retroui-svelte/tree/main/registry/ui/context-menu"
---
<script>
	import { ComponentPreview, PMCommand } from "$lib/components";

</script>

<ComponentPreview name="context-menu-usage-example" />
<br />
<br />

## Installation
<PMCommand command="execute" args={["shadcn-svelte@next", "add", "context-menu"]} />

<br />
<br />

## Usage

```svelte
<script lang="ts">
 import * as ContextMenu from "$lib/components/ui/context-menu/index.js";
</script>
 
<ContextMenu.Root>
 <ContextMenu.Trigger>Right click</ContextMenu.Trigger>
 <ContextMenu.Content>
  <ContextMenu.Item>Profile</ContextMenu.Item>
  <ContextMenu.Item>Billing</ContextMenu.Item>
  <ContextMenu.Item>Team</ContextMenu.Item>
  <ContextMenu.Item>Subscription</ContextMenu.Item>
 </ContextMenu.Content>
</ContextMenu.Root>
```
