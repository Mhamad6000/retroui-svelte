---
title: Tabs
description: A set of layered sections of content—known as tab panels—that are displayed one at a time.
section: Components
links:
  - title: "Component Source"
    href: "https://github.com/Mhamad6000/retroui-svelte/tree/main/registry/ui/tabs"
---
<script>
	import { ComponentPreview, PMCommand } from "$lib/components";

</script>

<ComponentPreview name="tabs-usage-example" />
<br />
<br />

## Installation
<!-- <PMCommand command="execute" `args={`["shadcn-svelte@next", "add", "https://retroui-svelte.netlify.app/r/tabs"`} /> -->

<br />
<br />

## Usage

```svelte
<script lang="ts">
  import * as Tabs from "$lib/components/ui/tabs/index.js";
</script>
 
<Tabs.Root value="account" class="w-[400px]">
  <Tabs.List>
    <Tabs.Trigger value="account">Account</Tabs.Trigger>
    <Tabs.Trigger value="password">Password</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="account">
    Make changes to your account here.
  </Tabs.Content>
  <Tabs.Content value="password">Change your password here.</Tabs.Content>
</Tabs.Root>
```