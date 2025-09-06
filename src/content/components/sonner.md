---
title: Sonner
description: An opinionated toast component for Svelte.
section: Components
links:
  - title: "Docs"
    href: "https://svelte-sonner.vercel.app"
  - title: "API Reference"
    href: "https://bits-ui.com/docs/components/switch#api-reference"
  - title : "Component Source"
    href: "https://bits-ui.com/docs/components/accordion"
---
<script>
  import { ComponentPreview, PMCommand } from "$lib/components";

</script>

<ComponentPreview name="sonner-usage-example" />
<br />
<br />

## About
The Sonner component is provided by [svelte-sonner](https://svelte-sonner.vercel.app), which is a Svelte port of [Sonner](https://sonner.emilkowal.ski), originally created by [Emil Kowalski](https://x.com/emilkowalski_) for React.

<br />
<br />

## Installation
<PMCommand command="execute" args={["shadcn-svelte@next", "add", "sonner"]} />

<br />
<br />

## Setup

First, add the Toaster component to your root layout.

```svelte
<!-- +layout.svelte -->
<script lang="ts">
  import { Toaster } from "$lib/components/ui/sonner/index.js";
  let { children } = $props();
</script>

<Toaster />

{@render children?.()}
```

## Usage

```svelte
<script lang="ts">
  import { toast } from "svelte-sonner";
  import { Button } from "$lib/components/ui/button/index.js";
</script>

<Button onclick={() => toast("Hello world")}>Show toast</Button>
```

<br />

## Examples

### Default

<ComponentPreview name="sonner-usage-example" />

<br />

### Status

<ComponentPreview name="sonner-style-status" />

<br />

### Colored Status

<ComponentPreview name="sonner-style-colored-status" />


