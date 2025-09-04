<script lang="ts">
	import { Button } from "$registry/ui/button/index.js";
	import { Label } from "$registry/ui/label/index.js";
	import { Input } from "$registry/ui/input/index.js";
	import * as Card from "$registry/ui/card/index.js";
</script>

<Card.Root class="w-full max-w-sm rounded-sm">
	<Card.Header>
		<Card.Title class="mb-0">Login to your account</Card.Title>
		<Card.Action>
			<Button variant="link">Sign Up</Button>
		</Card.Action>
	</Card.Header>
	<Card.Content>
		<form>
			<div class="flex flex-col gap-3">
				<div class="grid gap-2">
					<Label for="email">Email</Label>
					<Input id="email" type="email" placeholder="m@example.com" required />
				</div>
				<div class="grid gap-2">
					<div class="flex items-center">
						<Label for="password">Password</Label>
						<a href="##" class="ml-auto inline-block text-sm underline-offset-4 hover:underline">
							Forgot your password?
						</a>
					</div>
					<Input id="password" type="password" required />
				</div>
			</div>
		</form>
	</Card.Content>
	<Card.Footer class="flex-col gap-2">
		<Button type="submit" class="w-full">Login</Button>
		<Button variant="outline" class="w-full">Login with Google</Button>
	</Card.Footer>
</Card.Root>
