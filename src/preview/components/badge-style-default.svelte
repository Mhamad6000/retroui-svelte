<!-- 
Badge Component Preview
Showcases different badge variants and styling options.

Props:
- variant: "default" | "outline" | "solid" | "surface"
- size: "sm" | "md" | "lg"
- class: string - additional CSS classes

Usage:
<Badge variant="default">New</Badge>
-->
<script lang="ts">
	import * as Badge from "$registry/ui/badge/index.js";
</script>

<div class="flex flex-wrap items-center gap-4">
	<Badge.Badge variant="default">Default</Badge.Badge>
	<Badge.Badge variant="outline">Outline</Badge.Badge>
	<Badge.Badge variant="solid">Solid</Badge.Badge>
	<Badge.Badge variant="surface">Surface</Badge.Badge>
</div>

<div class="mt-4 flex flex-wrap items-center gap-4">
	<Badge.Badge size="sm">Small Badge</Badge.Badge>
	<Badge.Badge size="md">Medium Badge</Badge.Badge>
	<Badge.Badge size="lg">Large Badge</Badge.Badge>
</div>

<div class="mt-4 flex flex-wrap items-center gap-4">
	<Badge.Badge>New Feature</Badge.Badge>
	<Badge.Badge variant="solid">Beta</Badge.Badge>
	<Badge.Badge variant="outline">v1.2.0</Badge.Badge>
	<Badge.Badge variant="surface">Updated</Badge.Badge>
</div>
