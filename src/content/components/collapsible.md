---
title: Collapsible
description: An interactive component which expands/collapses a panel.
section: Components
links:
  - title: "Component Source"
    href: "https://bits-ui.com/docs/components/collapsible"
---
<script>
	import { ComponentPreview, PMCommand } from "$lib/components";

</script>

<ComponentPreview name="collapsible-usage-example" />
<br />
<br />

## Installation
<PMCommand command="execute" args={["shadcn-svelte@next", "add", "collapsible"]} />

<br />
<br />

## Usage

```svelte
<script lang="ts">
  import * as Collapsible from "$lib/components/ui/collapsible/index.js";
  import { Button } from "$lib/components/ui/button/index.js";

  let open = $state(false);
</script>

<Collapsible.Root bind:open>
  <div class="flex items-center justify-between space-x-4 px-4">
    <h4 class="text-sm font-semibold">
      @peduarte starred 3 repositories
    </h4>
    <Collapsible.Trigger asChild>
      <Button variant="ghost" size="sm">
        <ChevronDownIcon class="h-4 w-4" />
        <span class="sr-only">Toggle</span>
      </Button>
    </Collapsible.Trigger>
  </div>
  <div class="rounded-md border px-4 py-3 font-mono text-sm">
    @radix-ui/primitives
  </div>
  <Collapsible.Content class="space-y-2">
    <div class="rounded-md border px-4 py-3 font-mono text-sm">
      @radix-ui/colors
    </div>
    <div class="rounded-md border px-4 py-3 font-mono text-sm">
      @radix-ui/themes
    </div>
  </Collapsible.Content>
</Collapsible.Root>
```

<br />

## Examples

### Default

<ComponentPreview name="collapsible-default" />

### Animated

<ComponentPreview name="collapsible-animated" />

### Custom Trigger

<ComponentPreview name="collapsible-custom-trigger" />
