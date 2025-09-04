---
title: Avatar
description: An image element with a fallback for representing the user.
section: Components
links:
  - title: "Docs"
    href: "https://bits-ui.com/docs/components/avatar"
  - title: "API Reference"
    href: "https://bits-ui.com/docs/components/avatar#api-reference"
  - title : "Component Source"
    href: "https://bits-ui.com/docs/components/accordion"
---
<script>
	import { ComponentPreview , PMCommand } from "$lib/components";
	
</script>

<ComponentPreview name="avatar-usage-example" />
<br />
<br />

## Installation
<PMCommand command="execute" args={["shadcn-svelte@next", "add"]} />

<br />
<br />

## Usage

```svelte
<script lang="ts">
  import * as Avatar from "$lib/components/ui/avatar/index.js";
</script>

<Avatar.Root>
		<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
		<Avatar.Fallback>CN</Avatar.Fallback>
</Avatar.Root>
```