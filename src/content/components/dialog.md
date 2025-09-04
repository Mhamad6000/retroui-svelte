---
title: Dialog
description: A modal dialog that interrupts the user with important content and expects a response.
section: Components
links:
  - title: "Component Source"
    href: "https://bits-ui.com/docs/components/dialog"
---
<script>
	import { ComponentPreview, PMCommand } from "$lib/components";

</script>

<ComponentPreview name="dialog-usage-example" />
<br />
<br />

## Installation
<PMCommand command="execute" args={["shadcn-svelte@next", "add", "dialog"]} />

<br />
<br />

## Usage

```svelte
<script lang="ts">
  import * as Dialog from "$lib/components/ui/dialog/index.js";
  import { Button } from "$lib/components/ui/button/index.js";

  let open = $state(false);
</script>

<Button onclick={() => open = true}>Open Dialog</Button>

<Dialog.Root bind:open>
  <Dialog.Content>
    <Dialog.Header>
      <Dialog.Title>Are you sure absolutely sure?</Dialog.Title>
      <Dialog.Description>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </Dialog.Description>
    </Dialog.Header>
    <Dialog.Footer>
      <Button onclick={() => open = false} variant="outline">Cancel</Button>
      <Button onclick={() => open = false}>Continue</Button>
    </Dialog.Footer>
  </Dialog.Content>
</Dialog.Root>
```

<br />

## Examples

### Alert Dialog

<ComponentPreview name="dialog-alert" />

### Form

<ComponentPreview name="dialog-form" />

### Custom Close Button

<ComponentPreview name="dialog-custom-close" />

### Responsive

<ComponentPreview name="dialog-responsive" />
