---
title: Card
description: A flexible container for displaying content and actions.
section: Components
links:
  - title: "Component Source"
    href: "https://github.com/Mhamad6000/retroui-svelte/tree/main/registry/ui/card"
---

<script>
  import { ComponentPreview, PMCommand } from "$lib/components";
  const installArgs = ["shadcn-svelte@latest", "add", "https://retroui-svelte.netlify.app/r/card.json"];
</script>

<ComponentPreview name="card-usage-example" />
<br />
<br />


## Installation
<PMCommand command="execute" args={installArgs} />
<br />
<br />

## Usage

```svelte
<script lang="ts">
 import * as Card from "$lib/components/ui/card/index.js";
</script>
 
<Card.Root>
 <Card.Header>
  <Card.Title>Card Title</Card.Title>
  <Card.Description>Card Description</Card.Description>
 </Card.Header>
 <Card.Content>
  <p>Card Content</p>
 </Card.Content>
 <Card.Footer>
  <p>Card Footer</p>
 </Card.Footer>
</Card.Root>
```

<br />

## Examples

<ComponentPreview name="card-usage-example" />


