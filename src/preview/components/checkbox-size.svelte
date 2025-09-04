<script lang="ts">
	import { Checkbox } from "$registry/ui/checkbox/index.js";
	import { Label } from "$registry/ui/label/index.js";
</script>

<div class="flex flex-col gap-6">
	<div class="flex items-center gap-3">
		<Checkbox id="small" size="sm" />
		<Label for="small">Small</Label>
	</div>
	<div class="flex items-center gap-3">
		<Checkbox id="medium" size="md" />
		<Label for="medium">Medium</Label>
	</div>
	<div class="flex items-center gap-3">
		<Checkbox id="large" size="lg" />
		<Label for="large">Large</Label>
	</div>
</div>
