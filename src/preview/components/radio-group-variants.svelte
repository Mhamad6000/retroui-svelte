<script lang="ts">
	import * as RadioGroup from "$registry/ui/radio-group/index.js";
	import { Label } from "$registry/ui/label/index.js";
</script>

<RadioGroup.Root value="default">
	<div class="flex items-center space-x-2">
		<RadioGroup.Item value="default" id="default" />
		<Label for="default">Default</Label>
	</div>
	<div class="flex items-center space-x-2">
		<RadioGroup.Item variant="outline" value="outline" id="outline" />
		<Label for="outline">Outline</Label>
	</div>
	<div class="flex items-center space-x-2">
		<RadioGroup.Item variant="solid" value="solid" id="solid" />
		<Label for="solid">Solid</Label>
	</div>
</RadioGroup.Root>
