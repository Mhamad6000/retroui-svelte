<script lang="ts">
	import * as Select from "$registry/ui/select/index.js";
</script>

<Select.Root type="single" disabled>
	<Select.Trigger class="w-[180px]">theme</Select.Trigger>
	<Select.Content>
		<Select.Item value="light">Light</Select.Item>
		<Select.Item value="dark">Dark</Select.Item>
		<Select.Item value="system">System</Select.Item>
	</Select.Content>
</Select.Root>
