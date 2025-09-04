---
title: Popover
description: Displays rich content in a portal, triggered by a button.
section: Components
links:
  - title: "Component Source"
    href: "https://bits-ui.com/docs/components/popover"
---
<script>
	import { ComponentPreview, PMCommand } from "$lib/components";

</script>

<ComponentPreview name="popover-usage-example" />
<br />
<br />

## Installation
<PMCommand command="execute" args={["shadcn-svelte@next", "add", "popover"]} />

<br />
<br />

## Usage

```svelte
<script lang="ts">
  import * as Popover from "$lib/components/ui/popover/index.js";
  import { Button } from "$lib/components/ui/button/index.js";

  let open = $state(false);
</script>

<Popover.Root bind:open>
  <Popover.Trigger asChild>
    <Button variant="outline">Open popover</Button>
  </Popover.Trigger>
  <Popover.Content class="w-80">
    <div class="grid gap-4">
      <div class="space-y-2">
        <h4 class="font-medium leading-none">Dimensions</h4>
        <p class="text-sm text-muted-foreground">
          Set the dimensions for the layer.
        </p>
      </div>
      <div class="grid gap-2">
        <div class="grid grid-cols-3 items-center gap-4">
          <label for="width">Width</label>
          <Input id="width" defaultValue="100%" class="col-span-2 h-8" />
        </div>
        <div class="grid grid-cols-3 items-center gap-4">
          <label for="maxWidth">Max. width</label>
          <Input id="maxWidth" defaultValue="300px" class="col-span-2 h-8" />
        </div>
        <div class="grid grid-cols-3 items-center gap-4">
          <label for="height">Height</label>
          <Input id="height" defaultValue="25px" class="col-span-2 h-8" />
        </div>
        <div class="grid grid-cols-3 items-center gap-4">
          <label for="maxHeight">Max. height</label>
          <Input id="maxHeight" defaultValue="none" class="col-span-2 h-8" />
        </div>
      </div>
    </div>
  </Popover.Content>
</Popover.Root>
```

<br />

## Examples

### Default

<ComponentPreview name="popover-default" />

### With Form

<ComponentPreview name="popover-with-form" />

### Hover Card

<ComponentPreview name="popover-hover-card" />
