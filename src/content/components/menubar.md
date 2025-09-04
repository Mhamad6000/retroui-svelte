---
title: Menubar
description: A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.
section: Components
links:
  - title: "Component Source"
    href: "https://bits-ui.com/docs/components/menubar"
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
        New Tab <Menubar.Shortcut>⌘T</Menubar.Shortcut>
      </Menubar.Item>
      <Menubar.Item>
        New Window <Menubar.Shortcut>⌘N</Menubar.Shortcut>
      </Menubar.Item>
      <Menubar.Item disabled>New Incognito Window</Menubar.Item>
      <Menubar.Separator />
      <Menubar.Sub>
        <Menubar.SubTrigger>Share</Menubar.SubTrigger>
        <Menubar.SubContent>
          <Menubar.Item>Email link</Menubar.Item>
          <Menubar.Item>Messages</Menubar.Item>
          <Menubar.Item>Notes</Menubar.Item>
        </Menubar.SubContent>
      </Menubar.Sub>
      <Menubar.Separator />
      <Menubar.Item>
        Print <Menubar.Shortcut>⌘P</Menubar.Shortcut>
      </Menubar.Item>
    </Menubar.Content>
  </Menubar.Menu>
</Menubar.Root>
```

<br />

## Examples

### Default

<ComponentPreview name="menubar-default" />

### With Icons

<ComponentPreview name="menubar-with-icons" />

### Radio Group

<ComponentPreview name="menubar-radio-group" />

### Checkboxes

<ComponentPreview name="menubar-checkboxes" />
