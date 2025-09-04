---
title: Context Menu
description: Displays a menu to the user—such as a set of actions or functions—triggered by right-clicking.
section: Components
links:
  - title: "Component Source"
    href: "https://bits-ui.com/docs/components/context-menu"
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
  <ContextMenu.Trigger class="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
    Right click here
  </ContextMenu.Trigger>
  <ContextMenu.Content class="w-64">
    <ContextMenu.Item inset>
      Back
      <ContextMenu.Shortcut>⌘[</ContextMenu.Shortcut>
    </ContextMenu.Item>
    <ContextMenu.Item inset disabled>
      Forward
      <ContextMenu.Shortcut>⌘]</ContextMenu.Shortcut>
    </ContextMenu.Item>
    <ContextMenu.Item inset>
      Reload
      <ContextMenu.Shortcut>⌘R</ContextMenu.Shortcut>
    </ContextMenu.Item>
    <ContextMenu.Separator />
    <ContextMenu.CheckboxItem>
      Show Bookmarks Bar
      <ContextMenu.CheckboxIndicator />
    </ContextMenu.CheckboxItem>
    <ContextMenu.CheckboxItem checked>
      Show Full URLs
      <ContextMenu.CheckboxIndicator />
    </ContextMenu.CheckboxItem>
    <ContextMenu.Separator />
    <ContextMenu.Label inset>People</ContextMenu.Label>
    <ContextMenu.RadioGroup value="pedro">
      <ContextMenu.RadioItem value="pedro">
        Pedro Duarte
      </ContextMenu.RadioItem>
      <ContextMenu.RadioItem value="colm">
        Colm Tuite
      </ContextMenu.RadioItem>
    </ContextMenu.RadioGroup>
  </ContextMenu.Content>
</ContextMenu.Root>
```

<br />

## Examples

### Default

<ComponentPreview name="context-menu-default" />

### With Icons

<ComponentPreview name="context-menu-with-icons" />

### Submenu

<ComponentPreview name="context-menu-submenu" />
