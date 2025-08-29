---
title: "Installation"
description: "How to install and set up Zeno UI in your project."
---

# Installation

Add beautiful components to your application with the Zeno UI CLI.

## Requirements

- Node.js 16.14 or later
- SvelteKit project

## Create a new project

Start by creating a new SvelteKit project if you don't have one set up already.

```bash
npm create svelte@latest my-app
cd my-app
npm install
```

## Run the CLI

Use the CLI to add Zeno UI to your project.

```bash
npx zeno-ui@latest init
```

### Configure components.json

You will be asked a few questions to configure `components.json`:

```txt
Would you like to use TypeScript (recommended)? no / yes
Which style would you like to use? › Default
Which color would you like to use as base color? › Slate
Where is your global CSS file? › src/app.css
Do you want to use CSS variables for colors? › no / yes
Where is your tailwind.config located? › tailwind.config.js
Configure the import alias for components? › $lib/components
Configure the import alias for utils? › $lib/utils
```

### Fonts

We use [Inter](https://rsms.me/inter/) as the default font. Inter is not required. You can replace it with any other font.

Here's how we configure Inter for SvelteKit:

```css
@import "@fontsource/inter/latin.css";
```

### Install dependencies

```bash
npm install
```

### Add components

You can now start adding components to your project.

```bash
npx zeno-ui@latest add button
```

The command above will add the `Button` component to your project. You can then import it like this:

```svelte
<script>
	import { Button } from "$lib/components/ui/button";
</script>

<Button>Click me</Button>
```

## Manual Installation

If you prefer to install components manually, you can copy the source code from our [GitHub repository](https://github.com/Mhamad6000/zeno-ui) and paste it into your project.

### Add Tailwind CSS

Components are styled using Tailwind CSS. You need to install Tailwind CSS in your project.

Follow the [Tailwind CSS installation instructions](https://tailwindcss.com/docs/guides/sveltekit) to install Tailwind CSS.

### Add dependencies

Most components require additional dependencies. Make sure to install them:

```bash
npm install lucide-svelte class-variance-authority clsx tailwind-merge
npm install -D @tailwindcss/typography
```

### Configure path mapping

If you're not using the `$lib` alias, you need to update your `vite.config.ts` file to include the following:

```typescript
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$lib: "./src/lib",
		},
	},
});
```

### Copy and paste

You can now copy and paste any component from our documentation into your project.

That's it! You can now start building with Zeno UI.
