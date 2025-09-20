---
title: Navigation Menu
description: A collection of navigation links that can be displayed in a horizontal or vertical layout.
section: Components
links:
  - title: "Docs"
    href: "https://bits-ui.com/docs/components/navigation-menu"
  - title: "API Reference"
    href: "https://bits-ui.com/docs/components/navigation-menu#api-reference"
  - title : "Component Source"
    href: "https://github.com/Mhamad6000/retroui-svelte/tree/main/registry/ui/navigation-menu"
---
<script>
	import { ComponentPreview, PMCommand } from "$lib/components";

</script>

<ComponentPreview name="navigation-menu-usage-example" />
<br />
<br />

## Installation
<!-- <PMCommand command="execute" `args={`["shadcn-svelte@next", "add", "https://retroui-svelte.netlify.app/r/navigation-menu"`} /> -->

<br />
<br />

## Usage

```svelte
<script lang="ts">
 import * as NavigationMenu from "$lib/components/ui/navigation-menu/index.js";
</script>
 
<NavigationMenu.Root>
 <NavigationMenu.List>
  <NavigationMenu.Item>
   <NavigationMenu.Trigger>Item One</NavigationMenu.Trigger>
   <NavigationMenu.Content>
    <NavigationMenu.Link>Link</NavigationMenu.Link>
   </NavigationMenu.Content>
  </NavigationMenu.Item>
 </NavigationMenu.List>
</NavigationMenu.Root>
```