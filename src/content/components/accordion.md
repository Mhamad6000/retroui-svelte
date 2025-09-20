---
title: Accordion
description: A vertically stacked set of interactive headings that each reveal a section of content.
section: Components
links:
  - title: "Docs"
    href: "https://bits-ui.com/docs/components/accordion"
  - title: "API Reference"
    href: "https://bits-ui.com/docs/components/accordion#api-reference"
  - title : "Component Source"
    href: "https://github.com/Mhamad6000/retroui-svelte/tree/main/registry/ui/accordion"
---
<script>
	import { ComponentPreview , PMCommand } from "$lib/components";
	const installArgs = ["shadcn-svelte@next", "add", "https://retroui-svelte.netlify.app/r/accordion"];
</script>

<ComponentPreview name="accordion-style-default" />
<br />
<br />

## Installation

<PMCommand command="execute" args={installArgs} />

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