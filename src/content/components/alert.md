---
title: Alert
description: Displays a callout for user attention.
section: Components
links:
  - title : "Component Source"
    href: "https://bits-ui.com/docs/components/accordion"
---
<script>
	import { ComponentPreview , PMCommand } from "$lib/components";
</script>

<ComponentPreview name="alert-style-default" />
<br />
<br />

## Installation
<PMCommand command="execute" args={["shadcn-svelte@next", "add"]} />

<br />
<br />

## Usage

```svelte
<script lang="ts">
  import * as Accordion from "$lib/components/ui/accordion/index.js";
</script>

<Accordion.Root type="single" class="space-y-4">
  <Accordion.Item value="item-1">
    <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
    <Accordion.Content>
      Yes. It adheres to the WAI-ARIA design pattern.
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>
```