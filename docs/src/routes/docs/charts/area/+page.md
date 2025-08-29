---
title: "Area Chart"
description: "An area chart component for displaying data trends."
component: true
---

# Area Chart

A customizable area chart component built with Chart.js and Svelte.

## Preview

<div class="preview">
  <div class="w-full h-[300px] p-4">
    <div class="relative h-full w-full rounded-lg border bg-card">
      <div class="flex items-center justify-between p-6">
        <div class="grid gap-2">
          <h3 class="text-2xl font-bold">Area Chart</h3>
          <p class="text-muted-foreground">Showing total visitors for the last 6 months</p>
        </div>
      </div>
      <div class="h-[200px] w-full px-6 pb-6">
        <svg class="h-full w-full" viewBox="0 0 400 200">
          <defs>
            <linearGradient id="area-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style="stop-color:hsl(var(--primary));stop-opacity:0.3" />
              <stop offset="100%" style="stop-color:hsl(var(--primary));stop-opacity:0.05" />
            </linearGradient>
          </defs>
          <path d="M 0 180 L 40 160 L 80 140 L 120 130 L 160 120 L 200 110 L 240 105 L 280 100 L 320 95 L 360 90 L 400 85 L 400 200 L 0 200 Z" fill="url(#area-gradient)" />
          <path d="M 0 180 L 40 160 L 80 140 L 120 130 L 160 120 L 200 110 L 240 105 L 280 100 L 320 95 L 360 90 L 400 85" stroke="hsl(var(--primary))" stroke-width="2" fill="none" />
          <circle cx="0" cy="180" r="3" fill="hsl(var(--primary))" />
          <circle cx="40" cy="160" r="3" fill="hsl(var(--primary))" />
          <circle cx="80" cy="140" r="3" fill="hsl(var(--primary))" />
          <circle cx="120" cy="130" r="3" fill="hsl(var(--primary))" />
          <circle cx="160" cy="120" r="3" fill="hsl(var(--primary))" />
          <circle cx="200" cy="110" r="3" fill="hsl(var(--primary))" />
          <circle cx="240" cy="105" r="3" fill="hsl(var(--primary))" />
          <circle cx="280" cy="100" r="3" fill="hsl(var(--primary))" />
          <circle cx="320" cy="95" r="3" fill="hsl(var(--primary))" />
          <circle cx="360" cy="90" r="3" fill="hsl(var(--primary))" />
          <circle cx="400" cy="85" r="3" fill="hsl(var(--primary))" />
        </svg>
      </div>
    </div>
  </div>
</div>

## Installation

### Install Chart.js

```bash
npm install chart.js
```

<div class="steps">

### Copy and paste the following code into your project.

```svelte
<!-- src/lib/components/charts/area-chart.svelte -->
<script lang="ts">
	import { onMount } from "svelte";
	import {
		Chart,
		CategoryScale,
		LinearScale,
		PointElement,
		LineElement,
		Filler,
		Title,
		Tooltip,
		Legend,
	} from "chart.js";
	import { cn } from "$lib/utils.js";

	Chart.register(
		CategoryScale,
		LinearScale,
		PointElement,
		LineElement,
		Filler,
		Title,
		Tooltip,
		Legend
	);

	interface Props {
		class?: string;
		data: {
			labels: string[];
			datasets: Array<{
				label: string;
				data: number[];
				borderColor?: string;
				backgroundColor?: string;
				fill?: boolean;
			}>;
		};
		options?: any;
	}

	let { class: className, data, options = {}, ...props }: Props = $props();

	let canvas: HTMLCanvasElement;
	let chart: Chart;

	const defaultOptions = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				position: "top" as const,
			},
			title: {
				display: false,
			},
		},
		scales: {
			x: {
				grid: {
					display: false,
				},
			},
			y: {
				grid: {
					color: "rgba(0, 0, 0, 0.1)",
				},
				beginAtZero: true,
			},
		},
		elements: {
			line: {
				tension: 0.4,
			},
			point: {
				radius: 4,
				hoverRadius: 6,
			},
		},
	};

	onMount(() => {
		const ctx = canvas.getContext("2d");
		if (ctx) {
			chart = new Chart(ctx, {
				type: "line",
				data: {
					...data,
					datasets: data.datasets.map((dataset) => ({
						...dataset,
						fill: dataset.fill ?? true,
						backgroundColor: dataset.backgroundColor ?? "rgba(59, 130, 246, 0.1)",
						borderColor: dataset.borderColor ?? "rgb(59, 130, 246)",
					})),
				},
				options: { ...defaultOptions, ...options },
			});
		}

		return () => {
			if (chart) {
				chart.destroy();
			}
		};
	});

	$effect(() => {
		if (chart && data) {
			chart.data = {
				...data,
				datasets: data.datasets.map((dataset) => ({
					...dataset,
					fill: dataset.fill ?? true,
					backgroundColor: dataset.backgroundColor ?? "rgba(59, 130, 246, 0.1)",
					borderColor: dataset.borderColor ?? "rgb(59, 130, 246)",
				})),
			};
			chart.update();
		}
	});
</script>

<div class={cn("relative h-[300px] w-full", className)} {...props}>
	<canvas bind:this={canvas}></canvas>
</div>
```

</div>

## Usage

```svelte
<script lang="ts">
	import AreaChart from "$lib/components/charts/area-chart.svelte";

	const chartData = {
		labels: ["January", "February", "March", "April", "May", "June"],
		datasets: [
			{
				label: "Visitors",
				data: [1200, 1900, 3000, 5000, 2000, 3000],
				borderColor: "rgb(59, 130, 246)",
				backgroundColor: "rgba(59, 130, 246, 0.1)",
			},
		],
	};

	const chartOptions = {
		plugins: {
			title: {
				display: true,
				text: "Monthly Visitors",
			},
			legend: {
				display: true,
			},
		},
	};
</script>

<AreaChart data={chartData} options={chartOptions} />
```

## Examples

### Multiple Datasets

```svelte
<script lang="ts">
	import AreaChart from "$lib/components/charts/area-chart.svelte";

	const multiData = {
		labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
		datasets: [
			{
				label: "Desktop",
				data: [1200, 1900, 3000, 5000, 2000, 3000],
				borderColor: "rgb(59, 130, 246)",
				backgroundColor: "rgba(59, 130, 246, 0.1)",
			},
			{
				label: "Mobile",
				data: [800, 1200, 2000, 3500, 1500, 2200],
				borderColor: "rgb(34, 197, 94)",
				backgroundColor: "rgba(34, 197, 94, 0.1)",
			},
		],
	};
</script>

<AreaChart data={multiData} />
```

### Stacked Area Chart

```svelte
<script lang="ts">
	import AreaChart from "$lib/components/charts/area-chart.svelte";

	const stackedData = {
		labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
		datasets: [
			{
				label: "Desktop",
				data: [1200, 1900, 3000, 5000, 2000, 3000],
				borderColor: "rgb(59, 130, 246)",
				backgroundColor: "rgba(59, 130, 246, 0.8)",
			},
			{
				label: "Mobile",
				data: [800, 1200, 2000, 3500, 1500, 2200],
				borderColor: "rgb(34, 197, 94)",
				backgroundColor: "rgba(34, 197, 94, 0.8)",
			},
		],
	};

	const stackedOptions = {
		scales: {
			y: {
				stacked: true,
			},
		},
	};
</script>

<AreaChart data={stackedData} options={stackedOptions} />
```

## API Reference

### Props

| Prop      | Type           | Default | Description                                  |
| --------- | -------------- | ------- | -------------------------------------------- |
| `data`    | `ChartData`    | -       | The chart data including labels and datasets |
| `options` | `ChartOptions` | `{}`    | Chart.js configuration options               |
| `class`   | `string`       | -       | Additional CSS classes                       |

### Data Structure

The `data` prop should follow the Chart.js data structure:

```typescript
interface ChartData {
	labels: string[];
	datasets: Array<{
		label: string;
		data: number[];
		borderColor?: string;
		backgroundColor?: string;
		fill?: boolean;
	}>;
}
```
