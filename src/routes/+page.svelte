<script lang="ts">
	import { Badge } from "$lib/registry/ui/badge";
	import { Button, buttonVariants } from "$lib/registry/ui/button";
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
	import * as Tooltip from "$lib/registry/ui/tooltip";
	import { Switch } from "$lib/registry/ui/switch";
	import { toast } from "svelte-sonner";
	import { Slider } from "$lib/registry/ui/slider";
	import * as Tabs from "$lib/registry/ui/tabs";
	import * as Popover from "$lib/registry/ui/popover";
	import { Progress } from "$lib/registry/ui/progress";
	import * as RadioGroup from "$lib/registry/ui/radio-group";
	import { ScrollArea } from "$lib/registry/ui/scroll-area";
	import { Skeleton } from "$lib/registry/ui/skeleton/";
	import CalendarDaysIcon from "@lucide/svelte/icons/calendar-days";
	import * as HoverCard from "$lib/registry/ui/hover-card";
	import * as InputOTP from "$lib/registry/ui/input-otp";
	let value = $state(33);
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
		<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-muted-foreground text-sm sm:pl-3">A login form with a CSS file.</h2>
			</div>
			<div class="relative flex min-h-[400px] flex-col items-center justify-center gap-5">
				<Tooltip.Provider>
					<Tooltip.Root>
						<Tooltip.Trigger>Hover</Tooltip.Trigger>
						<Tooltip.Content>
							<p>Add to library</p>
						</Tooltip.Content>
					</Tooltip.Root>
				</Tooltip.Provider>
				<Tooltip.Provider>
					<Tooltip.Root>
						<Tooltip.Trigger class={buttonVariants({ variant: "default" })}>Hover</Tooltip.Trigger>
						<Tooltip.Content variant="primary">
							<p>Add to library</p>
						</Tooltip.Content>
					</Tooltip.Root>
				</Tooltip.Provider>
				<Tooltip.Provider>
					<Tooltip.Root>
						<Tooltip.Trigger class={buttonVariants({ variant: "outline" })}>Hover</Tooltip.Trigger>
						<Tooltip.Content variant="solid">
							<p>Add to library</p>
						</Tooltip.Content>
					</Tooltip.Root>
				</Tooltip.Provider>
			</div>
		</div>
		<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-muted-foreground text-sm sm:pl-3">A login form with a CSS file.</h2>
			</div>
			<div class="relative flex min-h-[400px] flex-col items-center justify-center gap-5">
				<div class="flex items-center space-x-2">
					<Switch id="airplane-mode" />
					<Label for="airplane-mode">Airplane Mode</Label>
				</div>
			</div>
		</div>
		<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-muted-foreground text-sm sm:pl-3">A login form with a CSS file.</h2>
			</div>
			<div class="relative flex min-h-[400px] flex-col items-center justify-center gap-5">
				<div class="flex items-center space-x-2">
					<Button
						onclick={() =>
							toast.success("Event has been created", {
								richColors: true,
							})}>Show toast</Button
					>
				</div>
			</div>
		</div>

		<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-muted-foreground text-sm sm:pl-3">A login form with a CSS file.</h2>
			</div>
			<div class="relative flex min-h-[400px] flex-col items-center justify-center gap-5">
				<Slider type="single" bind:value max={100} step={1} />
			</div>
		</div>

		<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-muted-foreground text-sm sm:pl-3">A login form with a CSS file.</h2>
			</div>
			<div class="relative flex min-h-[400px] flex-col items-center justify-center gap-5">
				<Tabs.Root value="account" class="w-[400px]">
					<Tabs.List>
						<Tabs.Trigger value="account">Account</Tabs.Trigger>
						<Tabs.Trigger value="password">Password</Tabs.Trigger>
					</Tabs.List>
					<Tabs.Content value="account">Make changes to your account here.</Tabs.Content>
					<Tabs.Content value="password">Change your password here.</Tabs.Content>
				</Tabs.Root>
			</div>
		</div>

		<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-muted-foreground text-sm sm:pl-3">A login form with a CSS file.</h2>
			</div>
			<div class="relative flex min-h-[400px] flex-col items-center justify-center gap-5">
				<Popover.Root>
					<Popover.Trigger class={buttonVariants({ variant: "default" })}>Open</Popover.Trigger>
					<Popover.Content>Place content for the popover here.</Popover.Content>
				</Popover.Root>
			</div>
		</div>
		<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-muted-foreground text-sm sm:pl-3">A login form with a CSS file.</h2>
			</div>
			<div class="relative flex min-h-[400px] flex-col items-center justify-center gap-5">
				<Progress value={33} class="w-40" />
			</div>
		</div>

		<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-muted-foreground text-sm sm:pl-3">A login form with a CSS file.</h2>
			</div>
			<div class="relative flex min-h-[400px] flex-col items-center justify-center gap-5">
				<RadioGroup.Root value="option-one">
					<div class="flex items-center space-x-2">
						<RadioGroup.Item size="sm" value="option-one" id="option-one" />
						<Label for="option-one">Option One</Label>
					</div>
					<div class="flex items-center space-x-2">
						<RadioGroup.Item size="md" variant="outline" value="option-two" id="option-two" />
						<Label for="option-two">Option Two</Label>
					</div>
					<div class="flex items-center space-x-2">
						<RadioGroup.Item size="lg" variant="solid" value="option-three" id="option-three" />
						<Label for="option-three">Option Three</Label>
					</div>
				</RadioGroup.Root>
			</div>
		</div>
		<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-muted-foreground text-sm sm:pl-3">A login form with a CSS file.</h2>
			</div>
			<div class="relative flex min-h-[400px] flex-col items-center justify-center gap-5">
				<ScrollArea class="h-[200px] w-[350px] border p-4">
					Jokester began sneaking into the castle in the middle of the night and leaving jokes all
					over the place: under the king's pillow, in his soup, even in the royal toilet. The king
					was furious, but he couldn't seem to stop Jokester. And then, one day, the people of the
					kingdom discovered that the jokes left by Jokester were so funny that they couldn't help
					but laugh. And once they started laughing, they couldn't stop.
				</ScrollArea>
			</div>
		</div>
		<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-muted-foreground text-sm sm:pl-3">A login form with a CSS file.</h2>
			</div>
			<div class="relative flex min-h-[400px] flex-col items-center justify-center gap-5">
				<HoverCard.Root>
					<HoverCard.Trigger
						href="https://github.com/sveltejs"
						target="_blank"
						rel="noreferrer noopener"
						class="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black"
					>
						@sveltejs
					</HoverCard.Trigger>
					<HoverCard.Content class="w-80">
						<div class="flex justify-between space-x-4">
							<Avatar.Root>
								<Avatar.Image src="https://github.com/sveltejs.png" />
								<Avatar.Fallback>SK</Avatar.Fallback>
							</Avatar.Root>
							<div class="space-y-1">
								<h4 class="text-sm font-semibold">@sveltejs</h4>
								<p class="text-sm">Cybernetically enhanced web apps.</p>
								<div class="flex items-center pt-2">
									<CalendarDaysIcon class="mr-2 size-4 opacity-70" />
									<span class="text-muted-foreground text-xs"> Joined September 2022 </span>
								</div>
							</div>
						</div>
					</HoverCard.Content>
				</HoverCard.Root>
			</div>
		</div>
		<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-muted-foreground text-sm sm:pl-3">A login form with a CSS file.</h2>
			</div>
			<div class="relative flex min-h-[400px] flex-col items-center justify-center gap-5">
				<div class="flex items-center space-x-4">
					<Skeleton class="size-12 rounded-full" />
					<div class="space-y-2">
						<Skeleton variant="primary" class="h-4 w-[250px]" />
						<Skeleton variant="solid" class="h-4 w-[200px]" />
					</div>
				</div>
			</div>
		</div>
		<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-muted-foreground text-sm sm:pl-3">A login form with a CSS file.</h2>
			</div>
			<div class="relative flex min-h-[400px] flex-col items-center justify-center gap-5">
				<InputOTP.Root maxlength={6}>
					{#snippet children({ cells })}
						<InputOTP.Group>
							{#each cells.slice(0, 3) as cell (cell)}
								<InputOTP.Slot {cell} />
							{/each}
						</InputOTP.Group>
						<InputOTP.Separator />
						<InputOTP.Group>
							{#each cells.slice(3, 6) as cell (cell)}
								<InputOTP.Slot {cell} />
							{/each}
						</InputOTP.Group>
					{/snippet}
				</InputOTP.Root>
			</div>
		</div>
	</main>
</div>
