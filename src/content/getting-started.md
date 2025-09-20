---
title: Getting Started
description: A quick guide to get started using RetroUI Svelte
section: Overview
---

The following guide will walk you through the process of getting a RetroUI Svelte project up and running.

<br/>

## Prerequisites

**Important**: RetroUI Svelte is built on top of the [shadcn-svelte](https://www.shadcn-svelte.com/) registry system. You **must** have shadcn-svelte installed and configured in your project before using RetroUI Svelte components.

<br/>

## Quick Start

Import and use RetroUI components in your Svelte project:

```svelte
<script>
	import { Button } from '$lib/components/ui/button';
</script>

<Button>Get Started</Button>
```

<br/>

## RetroUI Svelte Setup

Follow these steps to set up RetroUI Svelte in your project:

<br/>

### 1. Add RetroUI Fonts and Theme

Add the RetroUI fonts and theme to your `src/app.css` file:

```css
/* src/app.css */
@import url("https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Grotesk:wght@300;400;500;600;700&display=swap");

@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline{
	--font-head: "Archivo Black", sans-serif;
	--font-sans: "Space Grotesk", sans-serif;
	--shadow-xs: 1px 1px 0 0 var(--border);
	--shadow-sm: 2px 2px 0 0 var(--border);
	--shadow: 3px 3px 0 0 var(--border);
	--shadow-md: 4px 4px 0 0 var(--border);
	--shadow-lg: 6px 6px 0 0 var(--border);
	--shadow-xl: 10px 10px 0 1px var(--border);
	--shadow-2xl: 16px 16px 0 1px var(--border);

	--color-background: var(--background);
	--color-foreground: var(--foreground);
	--color-primary: var(--primary);
	--color-primary-foreground: var(--primary-foreground);
	--color-secondary: var(--secondary);
	--color-secondary-foreground: var(--secondary-foreground);
	--color-primary-hover: var(--primary-hover);
	--color-card: var(--card);
	--color-card-foreground: var(--card-foreground);
	--color-muted: var(--muted);
	--color-muted-foreground: var(--muted-foreground);
	--color-accent: var(--accent);
	--color-accent-foreground: var(--accent-foreground);
	--color-destructive: var(--destructive);
	--color-destructive-foreground: var(--destructive-foreground);
	--color-border: var(--border);

    --color-chart-1: var(--chart-1);
	--color-chart-2: var(--chart-2);
	--color-chart-3: var(--chart-3);
	--color-chart-4: var(--chart-4);
	--color-chart-5: var(--chart-5);
}

:root {
	--radius: 0.5rem;
	--background: #fff;
	--foreground: #000;
	--card: #fff;
	--card-foreground: #000;
	--primary: #ffdb33;
	--primary-hover: #ffcc00;
	--primary-foreground: #000;
	--secondary: #000;
	--secondary-foreground: #fff;
	--muted: #aeaeae;
	--muted-foreground: #5a5a5a;
	--accent: #fae583;
	--accent-foreground: #000;
	--destructive: #e63946;
	--destructive-foreground: #fff;
	--border: #000;
	--chart-1: #fff176;
	--chart-2: #ffee58;
	--chart-3: #ffeb3b;
	--chart-4: #fdd835;
	--chart-5: #f9a825;
}

.dark {
	--background: #1a1a1a;
	--foreground: #f5f5f5;
	--card: #242424;
	--card-foreground: #f5f5f5;
	--primary: #ffdb33;
	--primary-hover: #ffcc00;
	--primary-foreground: #000;
	--secondary: #3a3a3a;
	--secondary-foreground: #f5f5f5;
	--muted: #3f3f46;
	--muted-foreground: #a0a0a0;
	--accent: #fae583;
	--accent-foreground: #000;
	--destructive: #e63946;
	--destructive-foreground: #fff;
	--border: #3a3a3a;
}
```

### 2. Install RetroUI Components

Install RetroUI components using the shadcn-svelte CLI:

```bash
# Install components
npx shadcn-svelte@next add https://retroui-svelte.netlify.app/r/button
npx shadcn-svelte@next add https://retroui-svelte.netlify.app/r/input
npx shadcn-svelte@next add https://retroui-svelte.netlify.app/r/card
```

### 3. Use RetroUI Components

Now you can import and use RetroUI components in your Svelte components:

```svelte
<script>
  import { Button } from '$lib/components/ui/button/index.js';
  import { Input } from '$lib/components/ui/input/index.js';
  import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card/index.js';
</script>

<Card class="w-96">
  <CardHeader>
    <CardTitle>Welcome to RetroUI</CardTitle>
  </CardHeader>
  <CardContent class="space-y-4">
    <Input placeholder="Enter your name" />
    <Button>Get Started</Button>
  </CardContent>
</Card>
```

<br/>

## Available Themes

RetroUI Svelte comes with 16 beautiful themes that are faithful to the original RetroUI design system:

- **Green** - Forest Green theme
- **Orange** - Sunset Orange theme
- **Yellow** - Neon Yellow theme
- **Teal** - Ocean Teal theme
- **Purple** - Grape Purple theme
- **Gold** - Amber Gold theme
- **Coral** - Hot Coral theme
- **Cyan** - Crystal Cyan theme
- **Blue** - Ocean Blue theme
- **Red** - Crimson Red theme
- **Pink** - Blush Pink theme
- **Indigo** - Deep Indigo theme
- **Lime** - Bright Lime theme
- **Rose** - Rose Pink theme
- **Sky** - Sky Blue theme
- **Slate** - Modern Slate theme

<br/>

## Customization

### Custom CSS Variables

Override default theme colors using CSS custom properties:

```css
:root {
	--primary: #your-color;
	--secondary: #your-color;
	--accent: #your-color;
}
```

## Next Steps

- Explore our [Components](/docs/components) section
- View theme examples in our [Themes](/themes) section
