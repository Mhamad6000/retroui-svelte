---
title: Accordion
description: A vertically stacked set of interactive headings that each reveal a section of content.
section: Components
links:
  - title: "Docs"
    href: "https://bits-ui.com/docs/components/accordion"
  - title: "API Reference"
    href: "https://bits-ui.com/docs/components/accordion#api-reference"
  - title : "Component Source"
    href: "https://bits-ui.com/docs/components/accordion"
---
<script>
	import { Button } from "$registry/ui/button/index.js";
	import { ComponentPreview , PMCommand } from "$lib/components";
	
</script>

<ComponentPreview name="accordion-style-default" />
<br />
<br />

<PMCommand command="execute" args={["shadcn-svelte@next", "add"]} />

<!-- ## Installation

<ComponentInstall>
  <ComponentInstall.Cli npmCommand="npx shadcn@latest add 'https://retroui.dev/r/accordion.json'" />
  <ComponentInstall.Manual>
#### 1. Install dependencies:

```
npm install @radix-ui/react-accordion lucide-react
```

<br />

#### 2. Copy the code 👇 into your project:

<ComponentSource name="accordion" />

  </ComponentInstall.Manual>
</ComponentInstall> -->

<br />
<br />

## Examples

### Default

<ComponentPreview name="accordion-style-default" />