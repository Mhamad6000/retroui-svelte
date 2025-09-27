---
title: Dialog
description: A modal dialog that interrupts the user with important content and expects a response.
section: Components
links:
  - title: "Docs"
    href: "https://bits-ui.com/docs/components/dialog"
  - title: "API Reference"
    href: "https://bits-ui.com/docs/components/dialog#api-reference"
  - title : "Component Source"
    href: "https://github.com/Mhamad6000/retroui-svelte/tree/main/registry/ui/dialog"
---

<script>
  import { ComponentPreview, PMCommand } from "$lib/components";
  const installArgs = ["shadcn-svelte@latest", "add", "https://retroui-svelte.netlify.app/r/dialog.json"];
</script>

<ComponentPreview name="dialog-usage-example" />
<br />
<br />


## Installation
<PMCommand command="execute" args={installArgs} />
<br />
<br />

## Usage

```svelte
<script lang="ts">
 import * as Dialog from "$lib/components/ui/dialog/index.js";
</script>
 
<Dialog.Root>
 <Dialog.Trigger>Open</Dialog.Trigger>
 <Dialog.Content>
  <Dialog.Header>
   <Dialog.Title>Are you sure absolutely sure?</Dialog.Title>
   <Dialog.Description>
    This action cannot be undone. This will permanently delete your account
    and remove your data from our servers.
   </Dialog.Description>
  </Dialog.Header>
 </Dialog.Content>
</Dialog.Root>
```