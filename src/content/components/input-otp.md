---
title: Input OTP
description: A one-time password input component.
section: Components
links:
  - title: "Component Source"
    href: "https://bits-ui.com/docs/components/input-otp"
---
<script>
	import { ComponentPreview, PMCommand } from "$lib/components";

</script>

<ComponentPreview name="input-otp-usage-example" />
<br />
<br />

## Installation
<PMCommand command="execute" args={["shadcn-svelte@next", "add", "input-otp"]} />

<br />
<br />

## Usage

```svelte
<script lang="ts">
  import * as InputOTP from "$lib/components/ui/input-otp/index.js";

  let value = $state("");
</script>

<InputOTP.Root maxlength={6} bind:value>
  <InputOTP.Group>
    <InputOTP.Slot index={0} />
    <InputOTP.Slot index={1} />
    <InputOTP.Slot index={2} />
  </InputOTP.Group>
  <InputOTP.Separator />
  <InputOTP.Group>
    <InputOTP.Slot index={3} />
    <InputOTP.Slot index={4} />
    <InputOTP.Slot index={5} />
  </InputOTP.Group>
</InputOTP.Root>
```

<br />

## Examples

### Default

<ComponentPreview name="input-otp-default" />

### With Separator

<ComponentPreview name="input-otp-with-separator" />

### Controlled

<ComponentPreview name="input-otp-controlled" />

### Disabled

<ComponentPreview name="input-otp-disabled" />
