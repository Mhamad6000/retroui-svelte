---
title: Tabs
description: A set of layered sections of content—known as tab panels—that are displayed one at a time.
section: Components
links:
  - title: "Component Source"
    href: "https://bits-ui.com/docs/components/tabs"
---
<script>
	import { ComponentPreview, PMCommand } from "$lib/components";

</script>

<ComponentPreview name="tabs-usage-example" />
<br />
<br />

## Installation
<PMCommand command="execute" args={["shadcn-svelte@next", "add", "tabs"]} />

<br />
<br />

## Usage

```svelte
<script lang="ts">
  import * as Tabs from "$lib/components/ui/tabs/index.js";
</script>

<Tabs.Root value="account" class="w-[400px]">
  <Tabs.List class="grid w-full grid-cols-2">
    <Tabs.Trigger value="account">Account</Tabs.Trigger>
    <Tabs.Trigger value="password">Password</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="account">
    <p class="text-sm text-muted-foreground">
      Make changes to your account here. Click save when you're done.
    </p>
  </Tabs.Content>
  <Tabs.Content value="password">
    <p class="text-sm text-muted-foreground">
      Change your password here. After saving, you'll be logged out.
    </p>
  </Tabs.Content>
</Tabs.Root>
```

<br />

## Examples

### Default

<ComponentPreview name="tabs-default" />

### Pill

<ComponentPreview name="tabs-pill" />

### Vertical

<ComponentPreview name="tabs-vertical" />
