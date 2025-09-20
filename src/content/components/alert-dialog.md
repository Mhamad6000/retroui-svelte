---
title: Alert Dialog
description: A modal dialog that interrupts the user with important content and expects a response.
section: Components
links:
  - title: "Docs"
    href: "https://bits-ui.com/docs/components/alert-dialog"
  - title: "API Reference"
    href: "https://bits-ui.com/docs/components/alert-dialog#api-reference"
  - title : "Component Source"
    href: "https://github.com/Mhamad6000/retroui-svelte/tree/main/registry/ui/alert-dialog"
---
<script>
	import { ComponentPreview, PMCommand } from "$lib/components";
  const installArgs = ["shadcn-svelte@next", "add", "https://retroui-svelte.netlify.app/r/alert-dialog"];
</script>

<ComponentPreview name="alert-dialog-usage-example" />
<br />
<br />

## Installation

<PMCommand command="execute" args={installArgs} />

<br />
<br />

## Usage

```svelte
<script lang="ts">
 import * as AlertDialog from "$lib/components/ui/alert-dialog/index.js";
</script>
 
<AlertDialog.Root>
 <AlertDialog.Trigger>Open</AlertDialog.Trigger>
 <AlertDialog.Content>
  <AlertDialog.Header>
   <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
   <AlertDialog.Description>
    This action cannot be undone. This will permanently delete your account
    and remove your data from our servers.
   </AlertDialog.Description>
  </AlertDialog.Header>
  <AlertDialog.Footer>
   <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
   <AlertDialog.Action>Continue</AlertDialog.Action>
  </AlertDialog.Footer>
 </AlertDialog.Content>
</AlertDialog.Root>
```