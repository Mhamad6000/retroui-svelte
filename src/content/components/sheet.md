---
title: Sheet
description: Extends the Dialog component to display content that complements the main content of the screen.
section: Components
links:
  - title: "Docs"
    href: "https://bits-ui.com/docs/components/dialog"
  - title: "API Reference"
    href: "https://bits-ui.com/docs/components/dialog#api-reference"
  - title : "Component Source"
    href: "https://github.com/Mhamad6000/retroui-svelte/tree/main/registry/ui/sheet"
---

<script>
  import { ComponentPreview, PMCommand } from "$lib/components";
  const installArgs = ["shadcn-svelte@next", "add", "https://retroui-svelte.netlify.app/r/sheet.json"];
</script>

<ComponentPreview name="sheet-usage-example" />
<br />
<br />


## Installation
<PMCommand command="execute" args={installArgs} />
<br />
<br />

## Usage

```svelte
<script lang="ts">
 import * as Sheet from "$lib/components/ui/sheet/index.js";
</script>
 
<Sheet.Root>
 <Sheet.Trigger>Open</Sheet.Trigger>
 <Sheet.Content>
  <Sheet.Header>
   <Sheet.Title>Are you sure absolutely sure?</Sheet.Title>
   <Sheet.Description>
    This action cannot be undone. This will permanently delete your account
    and remove your data from our servers.
   </Sheet.Description>
  </Sheet.Header>
 </Sheet.Content>
</Sheet.Root>
```

<br />

## Examples

### Side

<ComponentPreview name="sheet-side" />
