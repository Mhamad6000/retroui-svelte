---
title: Text
description: A polymorphic text component that renders as different HTML elements with predefined styles.
section: Components
links:
  - title: "Component Source"
    href: "https://github.com/Mhamad6000/retroui-svelte/tree/main/registry/ui/text"
---

<script>
  import { ComponentPreview, PMCommand } from "$lib/components";
  const installArgs = ["shadcn-svelte@latest", "add", "https://retroui-svelte.netlify.app/r/text.json"];
</script>

<ComponentPreview name="text-usage-example" />
<br />
<br />


## Installation
<PMCommand command="execute" args={installArgs} />
<br />
<br />

## Usage

```svelte
<script lang="ts">
  import { Text } from "$lib/components/ui/text/index.js";
</script>

<Text>This is default paragraph text</Text>
<Text as="h1">This is a heading</Text>
<Text as="a" href="#">This is a link</Text>
```

<br />

## API

### Props

- `as?: "p" | "li" | "a" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"` - The HTML element to render as. Defaults to "p".
- `class?: string` - Additional CSS classes.
- Other standard HTML attributes for the rendered element.

<br />

## Examples

### Paragraph

<ComponentPreview name="text-paragraph" />

