<script lang="ts">
	import * as Tabs from "$registry/ui/tabs/index.js";
	import { Button } from "$registry/ui/button/index.js";
	import { Input } from "$registry/ui/input/index.js";
	import { Label } from "$registry/ui/label/index.js";
</script>

<div class="flex w-full max-w-sm flex-col gap-6">
	<Tabs.Root value="account">
		<Tabs.List>
			<Tabs.Trigger value="account">Account</Tabs.Trigger>
			<Tabs.Trigger value="password">Password</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="account" class="gap-4 flex flex-col">
			<h3 class="text-2xl font-head">Account</h3>
			<p class="">Make changes to your account here. Click save when you&apos;re done.</p>
			<div class="grid gap-3">
				<Label for="tabs-demo-name">Name</Label>
				<Input id="tabs-demo-name" value="Pedro Duarte" />
			</div>
			<div class="grid gap-3">
				<Label for="tabs-demo-username">Username</Label>
				<Input id="tabs-demo-username" value="@peduarte" />
			</div>

			<Button>Save changes</Button>
		</Tabs.Content>
		<Tabs.Content value="password" class="gap-4 flex flex-col">
			<h3 class="text-2xl font-head">Password</h3>
			<p class="">Change your password here. After saving, you'll be logged out.</p>
			<div class="grid gap-3">
				<Label for="tabs-demo-current">Current password</Label>
				<Input id="tabs-demo-current" type="password" />
			</div>
			<div class="grid gap-3">
				<Label for="tabs-demo-new">New password</Label>
				<Input id="tabs-demo-new" type="password" />
			</div>

			<Button>Save password</Button>
		</Tabs.Content>
	</Tabs.Root>
</div>
