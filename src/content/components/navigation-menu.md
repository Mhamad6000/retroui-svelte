---
title: Navigation Menu
description: A collection of navigation links that can be displayed in a horizontal or vertical layout.
section: Components
links:
  - title: "Component Source"
    href: "https://bits-ui.com/docs/components/navigation-menu"
---
<script>
	import { ComponentPreview, PMCommand } from "$lib/components";

</script>

<ComponentPreview name="navigation-menu-usage-example" />
<br />
<br />

## Installation
<PMCommand command="execute" args={["shadcn-svelte@next", "add", "navigation-menu"]} />

<br />
<br />

## Usage

```svelte
<script lang="ts">
  import * as NavigationMenu from "$lib/components/ui/navigation-menu/index.js";
</script>

<NavigationMenu.Root>
  <NavigationMenu.List>
    <NavigationMenu.Item>
      <NavigationMenu.Trigger>Getting started</NavigationMenu.Trigger>
      <NavigationMenu.Content>
        <ul class="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
          <li class="row-span-3">
            <NavigationMenu.Link asChild>
              <a
                class="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                href="/"
              >
                <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div class="mb-2 mt-4 text-lg font-medium">
                  shadcn/ui
                </div>
                <p class="text-sm leading-tight text-muted-foreground">
                  Beautifully designed components built with Radix UI and Tailwind CSS.
                </p>
              </a>
            </NavigationMenu.Link>
          </li>
          <li>
            <NavigationMenu.Link asChild>
              <a class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" href="/docs">
                <div class="text-sm font-medium leading-none">Introduction</div>
                <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </p>
              </a>
            </NavigationMenu.Link>
          </li>
          <li>
            <NavigationMenu.Link asChild>
              <a class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" href="/docs/installation">
                <div class="text-sm font-medium leading-none">Installation</div>
                <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  How to install dependencies and structure your app.
                </p>
              </a>
            </NavigationMenu.Link>
          </li>
          <li>
            <NavigationMenu.Link asChild>
              <a class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" href="/docs/primitives/typography">
                <div class="text-sm font-medium leading-none">Typography</div>
                <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  Styles for headings, paragraphs, lists...etc
                </p>
              </a>
            </NavigationMenu.Link>
          </li>
        </ul>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
    <NavigationMenu.Item>
      <NavigationMenu.Trigger>Components</NavigationMenu.Trigger>
      <NavigationMenu.Content>
        <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
          {components.map((component) => (
            <li key={component.title}>
              <NavigationMenu.Link asChild>
                <a
                  class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  href={component.href}
                >
                  <div class="text-sm font-medium leading-none">{component.title}</div>
                  <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    {component.description}
                  </p>
                </a>
              </NavigationMenu.Link>
            </li>
          ))}
        </ul>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
    <NavigationMenu.Item>
      <NavigationMenu.Link href="/docs">
        Documentation
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  </NavigationMenu.List>
</NavigationMenu.Root>
```

<br />

## Examples

### Default

<ComponentPreview name="navigation-menu-default" />

### Vertical

<ComponentPreview name="navigation-menu-vertical" />

### With Viewport

<ComponentPreview name="navigation-menu-with-viewport" />
