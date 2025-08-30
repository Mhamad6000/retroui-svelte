---
title: Component Preview System Test
description: Testing the new ComponentPreview system that loads from src/preview/components
---

# Component Preview System

The ComponentPreview system now loads preview components from `src/preview/components/` which showcase real-world usage of our registry components with explanatory comments about props and usage.

## Button Component

<ComponentPreview name="button-style-default" />

## Badge Component

<ComponentPreview name="badge-style-default" />

## Input Component

<ComponentPreview name="input-style-default" />

## Accordion Component

<ComponentPreview name="accordion-style-default" />

## How it works

1. **Pass the name**: `<ComponentPreview name="button-style-default" />`
2. **Auto-loads preview**: The component automatically loads `src/preview/components/button-style-default.svelte`
3. **Shows live preview**: The preview component renders with real examples and explanations
4. **Includes documentation**: Each preview component includes comments explaining props and usage

## Creating Preview Components

Create a new file in `src/preview/components/` with the pattern `{component-name}-style-{variant}.svelte`:

```svelte
<!-- src/preview/components/my-component-style-default.svelte -->
<!-- 
Component Description
Explain what the component does and how to use it.

Props:
- prop1: type - description
- prop2: type - description

Usage:
<MyComponent prop1="value">Content</MyComponent>
-->
<script lang="ts">
	import * as MyComponent from "$registry/ui/my-component/index.js";
</script>

<MyComponent.Root prop1="example">
	Example usage
</MyComponent.Root>
```

Then use it with: `<ComponentPreview name="my-component-style-default" />`
