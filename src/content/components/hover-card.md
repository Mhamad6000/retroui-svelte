---
title: Hover Card
description: For sighted users to preview content available behind a link.
section: Components
links:
  - title: "Component Source"
    href: "https://bits-ui.com/docs/components/hover-card"
---
<script>
	import { ComponentPreview, PMCommand } from "$lib/components";

</script>

<ComponentPreview name="hover-card-usage-example" />
<br />
<br />

## Installation
<PMCommand command="execute" args={["shadcn-svelte@next", "add", "hover-card"]} />

<br />
<br />

## Usage

```svelte
<script lang="ts">
  import * as HoverCard from "$lib/components/ui/hover-card/index.js";
</script>

<HoverCard.Root>
  <HoverCard.Trigger asChild>
    <a
      class="text-primary underline-offset-4 hover:underline"
      href="https://twitter.com/@shadcn"
    >
      @shadcn
    </a>
  </HoverCard.Trigger>
  <HoverCard.Content class="w-80">
    <div class="flex justify-between space-x-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>SH</AvatarFallback>
      </Avatar>
      <div class="space-y-1">
        <h4 class="text-sm font-semibold">@shadcn</h4>
        <p class="text-sm">
          The React component library you love, now in Svelte.
        </p>
        <div class="flex items-center pt-2">
          <CalendarDaysIcon class="mr-2 h-4 w-4 opacity-70" />
          <span class="text-xs text-muted-foreground">
            Joined December 2021
          </span>
        </div>
      </div>
    </div>
  </HoverCard.Content>
</HoverCard.Root>
```

<br />

## Examples

### Default

<ComponentPreview name="hover-card-default" />

### With Link

<ComponentPreview name="hover-card-with-link" />

### Custom Delay

<ComponentPreview name="hover-card-custom-delay" />
