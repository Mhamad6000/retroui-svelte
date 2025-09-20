---
title: Breadcrumb
description: Displays the path to the current resource using a hierarchy of links.
section: Components
links:
  - title: "Component Source"
    href: "https://github.com/Mhamad6000/retroui-svelte/tree/main/registry/ui/breadcrumb"
---

<script>
  import { ComponentPreview, PMCommand } from "$lib/components";
  const installArgs = ["shadcn-svelte@next", "add", "https://retroui-svelte.netlify.app/r/breadcrumb.json"];
</script>

<ComponentPreview name="breadcrumb-usage-example" />
<br />
<br />


## Installation
<PMCommand command="execute" args={installArgs} />
<br />
<br />

## Usage

```svelte
<script lang="ts">
  import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";
</script>

<Breadcrumb.Root>
  <Breadcrumb.List>
    <Breadcrumb.Item>
      <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item>
      <Breadcrumb.Link href="/docs/components">Components</Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item>
      <Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
    </Breadcrumb.Item>
  </Breadcrumb.List>
</Breadcrumb.Root>
```

<br />

## Examples

### Custom separator

Use a custom component in the `<slot>` of `<Breadcrumb.Separator />` to create a custom separator.

<br />

<ComponentPreview name="breadcrumb-custom-separator" />

<br />

### Dropdown

You can compose `<Breadcrumb.Item />` with a `<DropdownMenu />` to create a dropdown in the breadcrumb.

<br />

<ComponentPreview name="breadcrumb-dropdown" />

<br />

### Collapsed

We provide a `<Breadcrumb.Ellipsis />` component to show a collapsed state when the breadcrumb is too long.

<br />

<ComponentPreview name="breadcrumb-collapsed" />



