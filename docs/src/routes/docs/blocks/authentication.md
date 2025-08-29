---
title: "Authentication Blocks"
description: "Ready-to-use authentication forms and layouts."
---

# Authentication Blocks

Beautiful, responsive authentication forms that you can copy and paste into your apps.

## Login Form

A simple login form with email and password fields.

```svelte
<script lang="ts">
	import * as Card from "$lib/components/ui/card";
	import * as Button from "$lib/components/ui/button";
	import * as Input from "$lib/components/ui/input";
	import * as Label from "$lib/components/ui/label";
</script>

<Card.Root class="w-full max-w-sm">
	<Card.Header>
		<Card.Title class="text-2xl">Login</Card.Title>
		<Card.Description>Enter your email below to login to your account</Card.Description>
	</Card.Header>
	<Card.Content class="grid gap-4">
		<div class="grid gap-2">
			<Label.Root for="email">Email</Label.Root>
			<Input.Root id="email" type="email" placeholder="m@example.com" required />
		</div>
		<div class="grid gap-2">
			<div class="flex items-center">
				<Label.Root for="password">Password</Label.Root>
				<a href="#" class="ml-auto inline-block text-sm underline"> Forgot your password? </a>
			</div>
			<Input.Root id="password" type="password" required />
		</div>
		<Button.Root type="submit" class="w-full">Login</Button.Root>
		<Button.Root variant="outline" class="w-full">Login with Google</Button.Root>
	</Card.Content>
	<Card.Footer>
		<div class="text-center text-sm">
			Don&apos;t have an account?{" "}
			<a href="#" class="underline"> Sign up </a>
		</div>
	</Card.Footer>
</Card.Root>
```

## Register Form

A registration form with additional fields.

```svelte
<script lang="ts">
	import * as Card from "$lib/components/ui/card";
	import * as Button from "$lib/components/ui/button";
	import * as Input from "$lib/components/ui/input";
	import * as Label from "$lib/components/ui/label";
</script>

<Card.Root class="w-full max-w-sm">
	<Card.Header>
		<Card.Title class="text-xl">Sign Up</Card.Title>
		<Card.Description>Enter your information to create an account</Card.Description>
	</Card.Header>
	<Card.Content>
		<div class="grid gap-4">
			<div class="grid grid-cols-2 gap-4">
				<div class="grid gap-2">
					<Label.Root for="first-name">First name</Label.Root>
					<Input.Root id="first-name" placeholder="Max" required />
				</div>
				<div class="grid gap-2">
					<Label.Root for="last-name">Last name</Label.Root>
					<Input.Root id="last-name" placeholder="Robinson" required />
				</div>
			</div>
			<div class="grid gap-2">
				<Label.Root for="email">Email</Label.Root>
				<Input.Root id="email" type="email" placeholder="m@example.com" required />
			</div>
			<div class="grid gap-2">
				<Label.Root for="password">Password</Label.Root>
				<Input.Root id="password" type="password" />
			</div>
			<Button.Root type="submit" class="w-full">Create an account</Button.Root>
			<Button.Root variant="outline" class="w-full">Sign up with GitHub</Button.Root>
		</div>
	</Card.Content>
	<Card.Footer>
		<div class="text-center text-sm">
			Already have an account?{" "}
			<a href="#" class="underline"> Sign in </a>
		</div>
	</Card.Footer>
</Card.Root>
```
