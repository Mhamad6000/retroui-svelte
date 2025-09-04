---
title: Sheet
description: Extends the Dialog component to display content that complements the main content of the screen.
section: Components
links:
  - title: "Component Source"
    href: "https://bits-ui.com/docs/components/sheet"
---
<script>
	import { ComponentPreview, PMCommand } from "$lib/components";

</script>

<ComponentPreview name="sheet-usage-example" />
<br />
<br />

## Installation
<PMCommand command="execute" args={["shadcn-svelte@next", "add", "sheet"]} />

<br />
<br />

## Usage

```svelte
<script lang="ts">
  import * as Sheet from "$lib/components/ui/sheet/index.js";
  import { Button } from "$lib/components/ui/button/index.js";

  let open = $state(false);
</script>

<Button onclick={() => open = true} variant="outline">Open</Button>

<Sheet.Root bind:open>
  <Sheet.Content>
    <Sheet.Header>
      <Sheet.Title>Are you sure absolutely sure?</Sheet.Title>
      <Sheet.Description>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </Sheet.Description>
    </Sheet.Header>
    <div class="grid gap-4 py-4">
      <div class="grid grid-cols-4 items-center gap-4">
        <label for="name" class="text-right">Name</label>
        <Input id="name" value="Pedro Duarte" class="col-span-3" />
      </div>
      <div class="grid grid-cols-4 items-center gap-4">
        <label for="username" class="text-right">Username</label>
        <Input id="username" value="@peduarte" class="col-span-3" />
      </div>
    </div>
    <Sheet.Footer>
      <Sheet.Close asChild>
        <Button type="submit">Save changes</Button>
      </Sheet.Close>
    </Sheet.Footer>
  </Sheet.Content>
</Sheet.Root>
```

<br />

## Examples

### Side

<ComponentPreview name="sheet-side" />

### Size

<ComponentPreview name="sheet-size" />

### Position

<ComponentPreview name="sheet-position" />
