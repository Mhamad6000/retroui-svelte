<script lang="ts">
	import { Badge } from "$registry/ui/badge/index.js";
	import BadgeCheckIcon from "@lucide/svelte/icons/badge-check";
</script>

<div class="flex flex-col items-center gap-2">
	<div class="flex w-full flex-wrap gap-2">
		<Badge>Badge</Badge>
		<Badge variant="solid">Solid</Badge>
		<Badge variant="outline">Outline</Badge>
		<Badge variant="surface">Surface</Badge>
	</div>
	<div class="flex w-full flex-wrap gap-2">
		<Badge variant="default" class="bg-blue-500 text-white dark:bg-blue-600">
			<BadgeCheckIcon />
			Verified
		</Badge>
		<Badge class="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">8</Badge>
		<Badge class="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums" variant="solid">99</Badge>
		<Badge class="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums" variant="outline">
			20+
		</Badge>
	</div>
</div>
