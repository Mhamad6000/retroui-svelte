---
title: Command
description: Fast, composable, unstyled command menu for React.
section: Components
links:
  - title: "Docs"
    href: "https://bits-ui.com/docs/components/command"
  - title: "API Reference"
    href: "https://bits-ui.com/docs/components/command#api-reference"
  - title : "Component Source"
    href: "https://github.com/Mhamad6000/retroui-svelte/tree/main/registry/ui/command"
---

<script>
  import { ComponentPreview, PMCommand } from "$lib/components";
  const installArgs = ["shadcn-svelte@next", "add", "https://retroui-svelte.netlify.app/r/command.json"];
</script>

<ComponentPreview name="command-usage-example" />
<br />
<br />


## Installation
<PMCommand command="execute" args={installArgs} />
<br />
<br />

## Usage

```svelte
<script lang="ts">
 import * as Command from "$lib/components/ui/command/index.js";
</script>
 
<Command.Root>
 <Command.Input placeholder="Type a command or search..." />
 <Command.List>
  <Command.Empty>No results found.</Command.Empty>
  <Command.Group heading="Suggestions">
   <Command.Item>Calendar</Command.Item>
   <Command.Item>Search Emoji</Command.Item>
   <Command.Item>Calculator</Command.Item>
  </Command.Group>
  <Command.Separator />
  <Command.Group heading="Settings">
   <Command.Item>Profile</Command.Item>
   <Command.Item>Billing</Command.Item>
   <Command.Item>Settings</Command.Item>
  </Command.Group>
 </Command.List>
</Command.Root>
```

<br />

## Examples

### Default

<ComponentPreview name="command-usage-example" />

<br />

### Dialog

<ComponentPreview name="command-dialog" />

