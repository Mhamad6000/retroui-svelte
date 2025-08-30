<!-- 
Input Component Preview
Showcases the input component with different states and configurations.

Props:
- placeholder: string - placeholder text
- disabled: boolean - disables the input
- type: string - input type (text, email, password, etc.)
- class: string - additional CSS classes

Usage:
<Input placeholder="Enter your name" />
-->
<script lang="ts">
	import * as Input from "$registry/ui/input/index.js";
</script>

<div class="flex w-full max-w-sm flex-col gap-4">
	<Input.Root placeholder="Enter your name" />
	<Input.Root placeholder="Enter your email" type="email" />
	<Input.Root placeholder="Enter your password" type="password" />
	<Input.Root placeholder="Disabled input" disabled />
</div>

<div class="mt-6 flex w-full max-w-sm flex-col gap-2">
	<label for="example-input" class="text-sm font-medium"> Label Example </label>
	<Input.Root id="example-input" placeholder="Input with label" />
	<p class="text-muted-foreground text-xs">This is a helper text for the input field.</p>
</div>
