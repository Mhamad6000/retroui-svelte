<script lang="ts">
	import { Checkbox } from "$registry/ui/checkbox/index.js";
	import { Label } from "$registry/ui/label/index.js";
</script>

<div class="flex flex-col gap-6">
	<div class="flex items-center gap-3">
		<Checkbox id="primary" />
		<Label for="primary">Primary</Label>
	</div>
	<div class="flex items-center gap-3">
		<Checkbox id="outline" variant="outline" />
		<Label for="outline">Outline</Label>
	</div>
	<div class="flex items-center gap-3">
		<Checkbox id="solid" variant="solid" />
		<Label for="solid">Solid</Label>
	</div>
</div>
