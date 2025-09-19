# Contributing to RetroUI Svelte

Thank you for your interest in contributing to RetroUI Svelte 🙏. This guide will help you get started with contributing to the project.

## Getting Started

### Fork and Clone

1. **Fork this repository** on GitHub
2. **Clone the forked repository** to your local machine:
```bash
git clone https://github.com/<YOUR_USERNAME>/retroui-svelte.git
```
3. **Navigate to the project directory**:
```bash
cd retroui-svelte
```
4. **Create a new branch** for your changes:
```bash
git switch -c feature/your-feature-name
```

### Setup Development Environment

1. **Install dependencies**:
```bash
pnpm install
```

2. **Start the development server**:
```bash
pnpm dev
```

3. **Open your browser** to `http://localhost:5173` to see the documentation site

## Adding a New Component

### 1. Create the Component Files

Create your component in the `registry/ui/` directory following the shadcn-svelte structure:

```
registry/ui/new-component/
├── new-component.svelte
├── index.ts
```

**Example component structure** (`registry/ui/new-component/new-component.svelte`):
```svelte
<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn, type WithElementRef } from "$registry/lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div
	bind:this={ref}
	data-slot="new-component"
	class={cn("your-component-classes", className)}
	{...restProps}
>
	{@render children?.()}
</div>
```

**Export in index.ts** (`registry/ui/new-component/index.ts`):
```typescript
import NewComponent from "./new-component.svelte";

export { NewComponent };
```

### 2. Add Documentation

Create documentation in `src/content/components/new-component.md`:

```markdown
---
title: New Component
description: Description of what this component does
---

<script>
	import { ComponentShowcase } from "$lib/components/component-showcase.svelte";
</script>

## New Component

<ComponentShowcase name="new-component" />

A brief description of your component and its usage.

### Usage

```svelte
<script>
	import { NewComponent } from "$registry/ui/new-component";
</script>

<NewComponent>
	Your content here
</NewComponent>
```

### 3. Update Component Registry

If needed, update the component registry in `registry.json` to include your new component for the documentation site.

## Component Guidelines

### Naming Conventions
- Use kebab-case for file names: `new-component.svelte`
- Follow existing patterns in the codebase

### Content Structure
- Start with a clear, concise description
- Include usage examples with code blocks
- Add examples for different variants/states
- Include accessibility notes if relevant

## Submitting Your Contribution

1. **Commit your changes**:
```bash
git add .
git commit -m "Add NewComponent component"
```

2. **Push to your branch**:
```bash
git push origin feature/your-feature-name
```

3. **Create a Pull Request** on GitHub with:
   - Clear description of what you added
   - Screenshots if it's a visual component
   - Reference to any related issues

## Need Help?

- **Open an issue** for bugs or feature requests
- **Start a discussion** for questions or ideas
- **Check existing issues** before creating new ones

Thank you for contributing to RetroUI Svelte! 🎉
