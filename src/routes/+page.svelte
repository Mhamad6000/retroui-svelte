<script lang="ts">
	import { Badge } from "$lib/registry/ui/badge";
	import { Button } from "$lib/registry/ui/button";
	import * as Avatar from "$lib/registry/ui/avatar";
	import * as Breadcrumb from "$lib/registry/ui/breadcrumb";
	import * as Card from "$lib/registry/ui/card";
	import * as Text from "$lib/registry/ui/text";
	import * as Checkbox from "$lib/registry/ui/checkbox";
	import * as Alert from "$lib/registry/ui/alert";
	import CheckCircle from "@lucide/svelte/icons/circle-check";
	import * as Accordion from "$lib/registry/ui/accordion";
	import { Label } from "$lib/registry/ui/label";
	import { Input } from "$lib/registry/ui/input";
	import BoldIcon from "@lucide/svelte/icons/bold";
	import { Toggle } from "$lib/registry/ui/toggle";
	import * as ToggleGroup from "$lib/registry/ui/toggle-group";
	import { Textarea } from "$lib/registry/ui/textarea";
</script>

<div class="mx-auto flex min-h-svh max-w-3xl flex-col gap-8 px-4 py-8">
	<header class="flex flex-col gap-1">
		<h1 class="text-3xl font-bold tracking-tight">Custom Registry</h1>
		<p class="text-muted-foreground">
			A custom registry for distributing code using shadcn-svelte.
		</p>
	</header>
	<main class="flex flex-1 flex-col gap-8">
		<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-muted-foreground text-sm sm:pl-3">A simple hello world component</h2>
			</div>
			<div class="relative flex min-h-[400px] items-center justify-center gap-5">
				<!-- <HelloWorld /> -->
				<Button type="button" variant="default" disabled>Button</Button>
				<Button type="button" variant="secondary" disabled>Button</Button>
				<Button type="button" variant="outline" disabled>Button</Button>
				<Button type="button" variant="link" disabled>Button</Button>
			</div>
		</div>

		<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-muted-foreground text-sm sm:pl-3">A contact form with Zod validation.</h2>
			</div>
			<div class="relative flex min-h-[500px] flex-col flex-wrap items-center justify-center gap-5">
				<div class="flex items-center justify-center gap-2">
					<Badge variant="default">badge</Badge>
					<Badge variant="outline">badge</Badge>
					<Badge variant="solid">badge</Badge>
					<Badge variant="surface">badge</Badge>
				</div>
			</div>
		</div>

		<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-muted-foreground text-sm sm:pl-3">
					A complex component showing hooks, libs and components.
				</h2>
			</div>
			<div class="relative flex min-h-[400px] items-center justify-center gap-5">
				<Avatar.Root>
					<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
					<Avatar.Fallback>CN</Avatar.Fallback>
				</Avatar.Root>

				<Avatar.Root>
					<Avatar.Image src="https://github.com/shg" alt="@shadcn" />
					<Avatar.Fallback>CN</Avatar.Fallback>
				</Avatar.Root>
			</div>
		</div>

		<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-muted-foreground text-sm sm:pl-3">A login form with a CSS file.</h2>
			</div>
			<div class="relative flex min-h-[400px] items-center justify-center gap-5">
				<Breadcrumb.Root>
					<Breadcrumb.List>
						<Breadcrumb.Item>
							<Breadcrumb.Link href="/">Home</Breadcrumb.Link>
						</Breadcrumb.Item>
						<Breadcrumb.Separator />
						<Breadcrumb.Item>
							<Breadcrumb.Link href="/components">Components</Breadcrumb.Link>
						</Breadcrumb.Item>
						<Breadcrumb.Separator />
						<Breadcrumb.Item>
							<Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
						</Breadcrumb.Item>
					</Breadcrumb.List>
				</Breadcrumb.Root>
			</div>
		</div>
		<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-muted-foreground text-sm sm:pl-3">A login form with a CSS file.</h2>
			</div>
			<div class="relative flex min-h-[400px] items-center justify-center gap-5">
				<Card.Root class="w-full max-w-[400px] shadow-none hover:shadow-md">
					<Card.Content>
						<Text.Root class="text-lg">
							&quot; RetroUI is the cooling looking UI library out there! &quot;
						</Text.Root>
						<div class="mt-6 flex items-center space-x-2">
							<Avatar.Root class="h-10 w-10">
								<Avatar.Image
									alt="avatar"
									src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
								/>
							</Avatar.Root>
							<div>
								<div class="font-medium">Leroy Jenkins</div>
								<div class="text-sm text-gray-500 dark:text-gray-400">CEO of Uber</div>
							</div>
						</div>
					</Card.Content>

					<!-- <Card.Content>
						<p>Card Content</p>
					</Card.Content>
					<Card.Footer>
						<p>Card Footer</p>
					</Card.Footer> -->
				</Card.Root>
			</div>
		</div>

		<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-muted-foreground text-sm sm:pl-3">A login form with a CSS file.</h2>
			</div>
			<div class="relative flex min-h-[400px] items-center justify-center gap-5">
				<Checkbox.Root />
				<Checkbox.Root variant="outline" />
				<Checkbox.Root variant="solid" />
			</div>
		</div>

		<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-muted-foreground text-sm sm:pl-3">A login form with a CSS file.</h2>
			</div>
			<div class="relative flex min-h-[400px] flex-col items-center justify-center gap-5">
				<Alert.Root>
					<Alert.Title>Heads up!</Alert.Title>
					<Alert.Description
						>This is where you can write description that no one reads...</Alert.Description
					>
				</Alert.Root>
				<Alert.Root variant="solid">
					<Alert.Title>Heads up!</Alert.Title>
					<Alert.Description
						>This is where you can write description that no one reads...</Alert.Description
					>
				</Alert.Root>
				<Alert.Root status="success" class="flex items-center">
					<CheckCircle className="h-4 w-4 mr-4" />
					<Alert.Title>This is a success alert!</Alert.Title>
				</Alert.Root>
				<Alert.Root status="error" class="flex items-center">
					<CheckCircle className="h-4 w-4 mr-4" />
					<Alert.Title>This is an error alert!</Alert.Title>
				</Alert.Root>
				<Alert.Root status="warning" class="flex items-center">
					<CheckCircle className="h-4 w-4 mr-4" />
					<Alert.Title>This is a warning alert!</Alert.Title>
				</Alert.Root>
				<Alert.Root status="info" class="flex items-center">
					<CheckCircle className="h-4 w-4 mr-4" />
					<Alert.Title>This is an info alert!</Alert.Title>
				</Alert.Root>
				<Alert.Root status="success" variant="solid" class="flex items-center">
					<CheckCircle className="h-4 w-4 mr-4" />
					<Alert.Title>This is a success alert!</Alert.Title>
				</Alert.Root>
			</div>
		</div>

		<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-muted-foreground text-sm sm:pl-3">A login form with a CSS file.</h2>
			</div>
			<div class="relative flex min-h-[400px] items-center justify-center gap-5">
				<Accordion.Root type="single" class="w-full space-y-4">
					<Accordion.Item value="item-1">
						<Accordion.Trigger>Accordion Item</Accordion.Trigger>
						<Accordion.Content>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.Content>
					</Accordion.Item>
					<Accordion.Item value="item-2">
						<Accordion.Trigger>Is it accessible?</Accordion.Trigger>
						<Accordion.Content>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.Content>
					</Accordion.Item>
				</Accordion.Root>
			</div>
		</div>
		<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-muted-foreground text-sm sm:pl-3">A login form with a CSS file.</h2>
			</div>
			<div class="relative flex min-h-[400px] items-center justify-center gap-5">
				<div class="flex items-center space-x-2">
					<Checkbox.Root id="terms" />
					<Label for="terms">Accept terms and conditions</Label>
				</div>
			</div>
		</div>
		<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-muted-foreground text-sm sm:pl-3">A login form with a CSS file.</h2>
			</div>
			<div class="relative flex min-h-[400px] items-center justify-center gap-5">
				<div class="flex flex-col space-y-2">
					<Label for="name">Name:</Label>
					<Input id="name" />
				</div>
			</div>
		</div>

		<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-muted-foreground text-sm sm:pl-3">A login form with a CSS file.</h2>
			</div>
			<div class="relative flex min-h-[400px] items-center justify-center gap-5">
				<Toggle variant="solid" aria-label="toggle bold">
					<BoldIcon class="size-4" />
				</Toggle>
			</div>
		</div>

		<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-muted-foreground text-sm sm:pl-3">A login form with a CSS file.</h2>
			</div>
			<div class="relative flex min-h-[400px] flex-col items-center justify-center gap-5">
				<ToggleGroup.Root type="multiple">
					<ToggleGroup.Item value="bold" aria-label="Toggle bold">
						<BoldIcon class="size-4" />
					</ToggleGroup.Item>
					<ToggleGroup.Item value="italic" aria-label="Toggle italic">
						<BoldIcon class="size-4" />
					</ToggleGroup.Item>
					<ToggleGroup.Item value="strikethrough" aria-label="Toggle strikethrough">
						<BoldIcon class="size-4" />
					</ToggleGroup.Item>
				</ToggleGroup.Root>

				<ToggleGroup.Root type="multiple" variant="outlined">
					<ToggleGroup.Item value="bold" aria-label="Toggle bold">
						<BoldIcon class="size-4" />
					</ToggleGroup.Item>
					<ToggleGroup.Item value="italic" aria-label="Toggle italic">
						<BoldIcon class="size-4" />
					</ToggleGroup.Item>
					<ToggleGroup.Item value="strikethrough" aria-label="Toggle strikethrough">
						<BoldIcon class="size-4" />
					</ToggleGroup.Item>
				</ToggleGroup.Root>

				<ToggleGroup.Root type="multiple" variant="outline-muted">
					<ToggleGroup.Item value="bold" aria-label="Toggle bold">
						<BoldIcon class="size-4" />
					</ToggleGroup.Item>
					<ToggleGroup.Item value="italic" aria-label="Toggle italic">
						<BoldIcon class="size-4" />
					</ToggleGroup.Item>
					<ToggleGroup.Item value="strikethrough" aria-label="Toggle strikethrough">
						<BoldIcon class="size-4" />
					</ToggleGroup.Item>
				</ToggleGroup.Root>

				<ToggleGroup.Root type="multiple" variant="solid">
					<ToggleGroup.Item value="bold" aria-label="Toggle bold">
						<BoldIcon class="size-4" />
					</ToggleGroup.Item>
					<ToggleGroup.Item value="italic" aria-label="Toggle italic">
						<BoldIcon class="size-4" />
					</ToggleGroup.Item>
					<ToggleGroup.Item value="strikethrough" aria-label="Toggle strikethrough">
						<BoldIcon class="size-4" />
					</ToggleGroup.Item>
				</ToggleGroup.Root>
			</div>
		</div>
		<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-muted-foreground text-sm sm:pl-3">A login form with a CSS file.</h2>
			</div>
			<div class="relative flex min-h-[400px] items-center justify-center gap-5">
				<Textarea placeholder="type something..." />
			</div>
		</div>
	</main>
</div>
