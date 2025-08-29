---
title: "Area Chart"
description: "An area chart showing data trends over time."
---

# Area Chart

An area chart is a line chart with the area below the line filled with color. It's useful for showing data trends over time.

## Example

```svelte
<script lang="ts">
	// Chart implementation would go here
	// This is a placeholder for the actual chart component
</script>

<div class="bg-muted flex h-96 w-full items-center justify-center rounded-lg">
	<p class="text-muted-foreground">Area Chart Component</p>
</div>
```

## Installation

```bash
pnpm dlx zeno-ui@latest add chart
```

## Usage

```svelte
<script lang="ts">
	import { AreaChart } from "$lib/components/ui/chart";

	const data = [
		{ month: "Jan", value: 400 },
		{ month: "Feb", value: 300 },
		{ month: "Mar", value: 200 },
		{ month: "Apr", value: 278 },
		{ month: "May", value: 189 },
		{ month: "Jun", value: 239 },
	];
</script>

<AreaChart {data} />
```

## API Reference

| Prop     | Type            | Default | Description                      |
| -------- | --------------- | ------- | -------------------------------- |
| `data`   | `Array<object>` | —       | The data to display in the chart |
| `width`  | `number`        | `400`   | The width of the chart           |
| `height` | `number`        | `300`   | The height of the chart          |
