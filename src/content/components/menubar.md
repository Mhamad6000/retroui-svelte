---
title: Menubar
description: A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.
section: Components
links:
  - title: "Docs"
    href: "https://bits-ui.com/docs/components/menubar"
  - title: "API Reference"
    href: "https://bits-ui.com/docs/components/menubar#api-reference"
  - title : "Component Source"
    href: "https://github.com/Mhamad6000/retroui-svelte/tree/main/registry/ui/menubar"
---
<script>
	import { ComponentPreview, PMCommand } from "$lib/components";

</script>

<ComponentPreview name="menubar-usage-example" />
<br />
<br />

## Installation
<PMCommand command="execute" args={["shadcn-svelte@next", "add", "menubar"]} />

<br />
<br />

## Usage

```svelte
<script lang="ts">
 import * as Menubar from "$lib/components/ui/menubar/index.js";
</script>
 
<Menubar.Root>
 <Menubar.Menu>
  <Menubar.Trigger>File</Menubar.Trigger>
  <Menubar.Content>
   <Menubar.Item>
    New Tab
    <Menubar.Shortcut>⌘T</Menubar.Shortcut>
   </Menubar.Item>
   <Menubar.Item>New Window</Menubar.Item>
   <Menubar.Separator />
   <Menubar.Item>Share</Menubar.Item>
   <Menubar.Separator />
   <Menubar.Item>Print</Menubar.Item>
  </Menubar.Content>
 </Menubar.Menu>
</Menubar.Root>
```