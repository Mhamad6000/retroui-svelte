<script lang="ts">
	import * as RadioGroup from "$registry/ui/radio-group/index.js";
	import { Label } from "$registry/ui/label/index.js";
</script>

<RadioGroup.Root value="comfortable">
	<div class="flex items-center space-x-2">
		<RadioGroup.Item value="small" size="sm" id="small" />
		<Label for="small">Small</Label>
	</div>
	<div class="flex items-center space-x-2">
		<RadioGroup.Item value="medium" size="md" id="medium" />
		<Label for="medium">Medium</Label>
	</div>
	<div class="flex items-center space-x-2">
		<RadioGroup.Item value="large" size="lg" id="large" />
		<Label for="large">Large</Label>
	</div>
</RadioGroup.Root>
