---
title: Command
description: Fast, composable, unstyled command menu for React.
section: Components
links:
  - title: "Component Source"
    href: "https://bits-ui.com/docs/components/command"
---
<script>
	import { ComponentPreview, PMCommand } from "$lib/components";

</script>

<ComponentPreview name="command-usage-example" />
<br />
<br />

## Installation
<PMCommand command="execute" args={["shadcn-svelte@next", "add", "command"]} />

<br />
<br />

## Usage

```svelte
<script lang="ts">
  import * as Command from "$lib/components/ui/command/index.js";
  import { Button } from "$lib/components/ui/button/index.js";

  let open = $state(false);
</script>

<Button onclick={() => open = true} variant="outline">
  Open Command Menu
</Button>

<Command.Root bind:open>
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

### Dialog

<ComponentPreview name="command-dialog" />

### Combobox

<ComponentPreview name="command-combobox" />

### Popover

<ComponentPreview name="command-popover" />
