---
title: "Authentication Block"
description: "Complete authentication forms with login, register, and forgot password."
component: true
---

# Authentication Block

A complete authentication solution with login, register, and forgot password forms.

## Preview

<div class="preview">
  <div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
    <div class="flex flex-col space-y-2 text-center">
      <h1 class="text-2xl font-semibold tracking-tight">
        Create an account
      </h1>
      <p class="text-sm text-muted-foreground">
        Enter your email below to create your account
      </p>
    </div>
    <div class="grid gap-6">
      <form>
        <div class="grid gap-2">
          <div class="grid gap-1">
            <label class="sr-only" for="email">
              Email
            </label>
            <input
              id="email"
              placeholder="name@example.com"
              type="email"
              autocapitalize="none"
              autocomplete="email"
              autocorrect="off"
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
            Sign In with Email
          </button>
        </div>
      </form>
      <div class="relative">
        <div class="absolute inset-0 flex items-center">
          <span class="w-full border-t" />
        </div>
        <div class="relative flex justify-center text-xs uppercase">
          <span class="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
        GitHub
      </button>
    </div>
    <p class="px-8 text-center text-sm text-muted-foreground">
      By clicking continue, you agree to our{" "}
      <a
        href="/terms"
        class="underline underline-offset-4 hover:text-primary"
      >
        Terms of Service
      </a>{" "}
      and{" "}
      <a
        href="/privacy"
        class="underline underline-offset-4 hover:text-primary"
      >
        Privacy Policy
      </a>
      .
    </p>
  </div>
</div>

## Installation

<div class="steps">

### Copy and paste the following code into your project.

```svelte
<!-- src/lib/components/blocks/auth-form.svelte -->
<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { Input } from "$lib/components/ui/input";
	import { Label } from "$lib/components/ui/label";
	import { Github } from "lucide-svelte";
	import { cn } from "$lib/utils.js";

	interface Props {
		class?: string;
	}

	let { class: className, ...props }: Props = $props();

	let isLoading = $state(false);

	async function onSubmit(event: SubmitEvent) {
		event.preventDefault();
		isLoading = true;

		setTimeout(() => {
			isLoading = false;
		}, 3000);
	}
</script>

<div class={cn("grid gap-6", className)} {...props}>
	<form onsubmit={onSubmit}>
		<div class="grid gap-2">
			<div class="grid gap-1">
				<Label class="sr-only" for="email">Email</Label>
				<Input
					id="email"
					placeholder="name@example.com"
					type="email"
					autocapitalize="none"
					autocomplete="email"
					autocorrect="off"
					disabled={isLoading}
				/>
			</div>
			<Button disabled={isLoading}>
				{#if isLoading}
					<div
						class="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
					></div>
				{/if}
				Sign In with Email
			</Button>
		</div>
	</form>
	<div class="relative">
		<div class="absolute inset-0 flex items-center">
			<span class="w-full border-t"></span>
		</div>
		<div class="relative flex justify-center text-xs uppercase">
			<span class="bg-background text-muted-foreground px-2">Or continue with</span>
		</div>
	</div>
	<Button variant="outline" type="button" disabled={isLoading}>
		{#if isLoading}
			<div
				class="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
			></div>
		{:else}
			<Github class="mr-2 h-4 w-4" />
		{/if}
		GitHub
	</Button>
</div>
```

</div>

## Usage

```svelte
<script lang="ts">
	import AuthForm from "$lib/components/blocks/auth-form.svelte";
</script>

<div
	class="relative container hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0"
>
	<div class="bg-muted relative hidden h-full flex-col p-10 text-white lg:flex dark:border-r">
		<div class="absolute inset-0 bg-zinc-900"></div>
		<div class="relative z-20 flex items-center text-lg font-medium">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="mr-2 h-6 w-6"
			>
				<path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path>
			</svg>
			Acme Inc
		</div>
		<div class="relative z-20 mt-auto">
			<blockquote class="space-y-2">
				<p class="text-lg">
					"This library has saved me countless hours of work and helped me deliver stunning designs
					to my clients faster than ever before."
				</p>
				<footer class="text-sm">Sofia Davis</footer>
			</blockquote>
		</div>
	</div>
	<div class="lg:p-8">
		<div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
			<div class="flex flex-col space-y-2 text-center">
				<h1 class="text-2xl font-semibold tracking-tight">Create an account</h1>
				<p class="text-muted-foreground text-sm">Enter your email below to create your account</p>
			</div>
			<AuthForm />
			<p class="text-muted-foreground px-8 text-center text-sm">
				By clicking continue, you agree to our{" "}
				<a href="/terms" class="hover:text-primary underline underline-offset-4">
					Terms of Service
				</a>{" "}
				and{" "}
				<a href="/privacy" class="hover:text-primary underline underline-offset-4">
					Privacy Policy
				</a>
				.
			</p>
		</div>
	</div>
</div>
```

## Examples

### Login Form

```svelte
<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { Input } from "$lib/components/ui/input";
	import { Label } from "$lib/components/ui/label";
</script>

<div class="mx-auto grid w-[350px] gap-6">
	<div class="grid gap-2 text-center">
		<h1 class="text-3xl font-bold">Login</h1>
		<p class="text-muted-foreground text-balance">
			Enter your email below to login to your account
		</p>
	</div>
	<div class="grid gap-4">
		<div class="grid gap-2">
			<Label for="email">Email</Label>
			<Input id="email" type="email" placeholder="m@example.com" required />
		</div>
		<div class="grid gap-2">
			<div class="flex items-center">
				<Label for="password">Password</Label>
				<a href="/forgot-password" class="ml-auto inline-block text-sm underline">
					Forgot your password?
				</a>
			</div>
			<Input id="password" type="password" required />
		</div>
		<Button type="submit" class="w-full">Login</Button>
		<Button variant="outline" class="w-full">Login with Google</Button>
	</div>
	<div class="mt-4 text-center text-sm">
		Don't have an account?{" "}
		<a href="/register" class="underline">Sign up</a>
	</div>
</div>
```

### Register Form

```svelte
<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { Input } from "$lib/components/ui/input";
	import { Label } from "$lib/components/ui/label";
</script>

<div class="mx-auto grid w-[350px] gap-6">
	<div class="grid gap-2 text-center">
		<h1 class="text-3xl font-bold">Sign Up</h1>
		<p class="text-muted-foreground text-balance">Enter your information to create an account</p>
	</div>
	<div class="grid gap-4">
		<div class="grid grid-cols-2 gap-4">
			<div class="grid gap-2">
				<Label for="first-name">First name</Label>
				<Input id="first-name" placeholder="Max" required />
			</div>
			<div class="grid gap-2">
				<Label for="last-name">Last name</Label>
				<Input id="last-name" placeholder="Robinson" required />
			</div>
		</div>
		<div class="grid gap-2">
			<Label for="email">Email</Label>
			<Input id="email" type="email" placeholder="m@example.com" required />
		</div>
		<div class="grid gap-2">
			<Label for="password">Password</Label>
			<Input id="password" type="password" />
		</div>
		<Button type="submit" class="w-full">Create an account</Button>
		<Button variant="outline" class="w-full">Sign up with GitHub</Button>
	</div>
	<div class="mt-4 text-center text-sm">
		Already have an account?{" "}
		<a href="/login" class="underline">Sign in</a>
	</div>
</div>
```
