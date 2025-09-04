<script lang="ts">
	import { Badge } from "$registry/ui/badge";
	import { Button, buttonVariants } from "$registry/ui/button";
	import * as Avatar from "$registry/ui/avatar";
	import * as Breadcrumb from "$registry/ui/breadcrumb";
	import * as Card from "$registry/ui/card";
	import * as Text from "$registry/ui/text";
	import * as Checkbox from "$registry/ui/checkbox";
	import * as Alert from "$registry/ui/alert";
	import CheckCircle from "@lucide/svelte/icons/circle-check";
	import * as Accordion from "$registry/ui/accordion";
	import { Label } from "$registry/ui/label";
	import { Input } from "$registry/ui/input";
	import BoldIcon from "@lucide/svelte/icons/bold";
	import { Toggle } from "$registry/ui/toggle";
	import * as ToggleGroup from "$registry/ui/toggle-group";
	import { Textarea } from "$registry/ui/textarea";
	import * as Tooltip from "$registry/ui/tooltip";
	import { Switch } from "$registry/ui/switch";
	import { toast } from "svelte-sonner";
	import { Slider } from "$registry/ui/slider";
	import * as Tabs from "$registry/ui/tabs";
	import * as Popover from "$registry/ui/popover";
	import { Progress } from "$registry/ui/progress";
	import * as RadioGroup from "$registry/ui/radio-group";
	import { ScrollArea } from "$registry/ui/scroll-area";
	import { Skeleton } from "$registry/ui/skeleton/";
	import CalendarDaysIcon from "@lucide/svelte/icons/calendar-days";
	import * as HoverCard from "$registry/ui/hover-card";
	import * as InputOTP from "$registry/ui/input-otp";
	import ChevronsUpDownIcon from "@lucide/svelte/icons/chevrons-up-down";
	import * as Collapsible from "$registry/ui/collapsible";
	import { Loader } from "$registry/ui/loader";
	import * as Dialog from "$registry/ui/dialog";
	import * as AlertDialog from "$registry/ui/alert-dialog";
	import * as Table from "$registry/ui/table";
	import * as Command from "$registry/ui/command";
	import * as Pagination from "$registry/ui/pagination";
	import * as Select from "$registry/ui/select/index.js";
	import * as Sheet from "$registry/ui/sheet/index.js";
	import { Calendar } from "$registry/ui/calendar/index.js";
	import { RangeCalendar } from "$registry/ui/range-calendar/index.js";
	import * as ContextMenu from "$registry/ui/context-menu/index.js";
	import * as DropdownMenu from "$registry/ui/dropdown-menu/index.js";
	import * as Menubar from "$registry/ui/menubar/index.js";
	import * as NavigationMenu from "$registry/ui/navigation-menu/index.js";
	import { cn } from "$registry/lib/utils.js";
	import { navigationMenuTriggerStyle } from "$registry/ui/navigation-menu/navigation-menu-trigger.svelte";
	import type { HTMLAttributes } from "svelte/elements";

	let showBookmarks = $state(false);
	let showFullURLs = $state(true);

	let contextMenuValue = $state("pedro");

	let value = $state(33);
	const fruits = [
		{ value: "apple", label: "Apple" },
		{ value: "banana", label: "Banana" },
		{ value: "blueberry", label: "Blueberry" },
		{ value: "grapes", label: "Grapes" },
		{ value: "pineapple", label: "Pineapple" },
	];

	let selectValue = $state("");

	const triggerContent = $derived(
		fruits.find((f) => f.value === selectValue)?.label ?? "Select a fruit"
	);

	let bookmarks = $state(false);
	let fullUrls = $state(true);
	let profileRadioValue = $state("benoit");

	// navigation menu
	const components: { title: string; href: string; description: string }[] = [
		{
			title: "Alert Dialog",
			href: "/docs/components/alert-dialog",
			description:
				"A modal dialog that interrupts the user with important content and expects a response.",
		},
		{
			title: "Hover Card",
			href: "/docs/components/hover-card",
			description: "For sighted users to preview content available behind a link.",
		},
		{
			title: "Progress",
			href: "/docs/components/progress",
			description:
				"Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
		},
		{
			title: "Scroll-area",
			href: "/docs/components/scroll-area",
			description: "Visually or semantically separates content.",
		},
		{
			title: "Tabs",
			href: "/docs/components/tabs",
			description:
				"A set of layered sections of content—known as tab panels—that are displayed one at a time.",
		},
		{
			title: "Tooltip",
			href: "/docs/components/tooltip",
			description:
				"A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
		},
	];

	type ListItemProps = HTMLAttributes<HTMLAnchorElement> & {
		title: string;
		href: string;
		content: string;
	};
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
				<Button type="button" variant="link" shadow={false} disabled>Button</Button>
				<Button type="button" variant="ghost" shadow={false} disabled>Button</Button>
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
							<Breadcrumb.Link href="/docs/components">Components</Breadcrumb.Link>
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

		<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-muted-foreground text-sm sm:pl-3">A login form with a CSS file.</h2>
			</div>
			<div class="relative flex min-h-[400px] flex-col items-center justify-center gap-5">
				<Collapsible.Root class="w-[350px] space-y-2">
					<div class="flex items-center justify-between space-x-4 px-4">
						<h4 class="text-sm font-semibold">@huntabyte starred 3 repositories</h4>
						<Collapsible.Trigger
							class={buttonVariants({ variant: "outline", size: "icon", class: "h-9 w-9" })}
						>
							<ChevronsUpDownIcon />
							<span class="sr-only">Toggle</span>
						</Collapsible.Trigger>
					</div>
					<div class="border px-4 py-3 text-sm">@huntabyte/bits-ui</div>
					<Collapsible.Content class="space-y-2">
						<div class="border px-4 py-3 text-sm">@melt-ui/melt-ui</div>
						<div class="border px-4 py-3 text-sm">@sveltejs/svelte</div>
					</Collapsible.Content>
				</Collapsible.Root>
			</div>
		</div>
		<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-muted-foreground text-sm sm:pl-3">A login form with a CSS file.</h2>
			</div>
			<div class="relative flex min-h-[400px] flex-col items-center justify-center gap-5">
				<Loader size="sm" variant="default" />
				<Loader size="md" variant="outline" />
				<Loader size="lg" variant="secondary" />
			</div>
		</div>
		<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-muted-foreground text-sm sm:pl-3">A login form with a CSS file.</h2>
			</div>
			<div class="relative flex min-h-[400px] flex-col items-center justify-center gap-5">
				<Dialog.Root>
					<Dialog.Trigger class={buttonVariants({ variant: "outline" })}
						>Edit Profile</Dialog.Trigger
					>
					<Dialog.Content class="sm:max-w-[425px]">
						<Dialog.Header>
							<Dialog.Title>Edit profile</Dialog.Title>
							<Dialog.Description>
								Make changes to your profile here. Click save when you're done.
							</Dialog.Description>
						</Dialog.Header>
						<div class="grid gap-4 py-4">
							<div class="grid grid-cols-4 items-center gap-4">
								<Label for="name" class="text-right">Name</Label>
								<Input id="name" value="Pedro Duarte" class="col-span-3" />
							</div>
							<div class="grid grid-cols-4 items-center gap-4">
								<Label for="username" class="text-right">Username</Label>
								<Input id="username" value="@peduarte" class="col-span-3" />
							</div>
						</div>
						<Dialog.Footer>
							<Button type="submit">Save changes</Button>
						</Dialog.Footer>
					</Dialog.Content>
				</Dialog.Root>
			</div>
		</div>
		<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-muted-foreground text-sm sm:pl-3">A login form with a CSS file.</h2>
			</div>
			<div class="relative flex min-h-[400px] flex-col items-center justify-center gap-5">
				<AlertDialog.Root>
					<AlertDialog.Trigger class={buttonVariants({ variant: "outline" })}>
						Show Dialog
					</AlertDialog.Trigger>
					<AlertDialog.Content class="sm:max-w-[425px]">
						<AlertDialog.Header>
							<AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
							<AlertDialog.Description>
								This action cannot be undone. This will permanently delete your account and remove
								your data from our servers.
							</AlertDialog.Description>
						</AlertDialog.Header>
						<AlertDialog.Footer>
							<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
							<AlertDialog.Action>Continue</AlertDialog.Action>
						</AlertDialog.Footer>
					</AlertDialog.Content>
				</AlertDialog.Root>
			</div>
		</div>
		<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-muted-foreground text-sm sm:pl-3">A login form with a CSS file.</h2>
			</div>
			<div class="relative flex min-h-[400px] flex-col items-center justify-center gap-5">
				<Table.Root>
					<Table.Caption>A list of your recent invoices.</Table.Caption>
					<Table.Header>
						<Table.Row>
							<Table.Head class="w-[100px]">Invoice</Table.Head>
							<Table.Head>Status</Table.Head>
							<Table.Head>Method</Table.Head>
							<Table.Head class="text-right">Amount</Table.Head>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						<Table.Row>
							<Table.Cell class="font-medium">INV001</Table.Cell>
							<Table.Cell>Paid</Table.Cell>
							<Table.Cell>Credit Card</Table.Cell>
							<Table.Cell class="text-right">$250.00</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table.Root>
			</div>
		</div>
		<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-muted-foreground text-sm sm:pl-3">A login form with a CSS file.</h2>
			</div>
			<div class="relative flex min-h-[400px] flex-col items-center justify-center gap-5">
				<Command.Root class=" border shadow-md md:min-w-[450px]">
					<Command.Input placeholder="Type a command or search..." />
					<Command.List>
						<Command.Empty>No results found.</Command.Empty>
						<Command.Group heading="Suggestions">
							<Command.Item>
								<span>Calendar</span>
							</Command.Item>
							<Command.Item>
								<span>Search Emoji</span>
							</Command.Item>
							<Command.Item disabled>
								<span>Calculator</span>
							</Command.Item>
						</Command.Group>
						<Command.Separator />
						<Command.Group heading="Settings">
							<Command.Item>
								<span>Profile</span>
								<Command.Shortcut>⌘P</Command.Shortcut>
							</Command.Item>
							<Command.Item>
								<span>Billing</span>
								<Command.Shortcut>⌘B</Command.Shortcut>
							</Command.Item>
							<Command.Item>
								<span>Settings</span>
								<Command.Shortcut>⌘S</Command.Shortcut>
							</Command.Item>
						</Command.Group>
					</Command.List>
				</Command.Root>
			</div>
		</div>
		<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-muted-foreground text-sm sm:pl-3">A login form with a CSS file.</h2>
			</div>
			<div class=" flex min-h-[400px] flex-col items-center justify-center gap-5">
				<Pagination.Root count={100} perPage={10}>
					{#snippet children({ pages, currentPage })}
						<Pagination.Content>
							<Pagination.Item>
								<Pagination.PrevButton />
							</Pagination.Item>
							{#each pages as page (page.key)}
								{#if page.type === "ellipsis"}
									<Pagination.Item>
										<Pagination.Ellipsis />
									</Pagination.Item>
								{:else}
									<Pagination.Item>
										<Pagination.Link {page} isActive={currentPage === page.value}>
											{page.value}
										</Pagination.Link>
									</Pagination.Item>
								{/if}
							{/each}
							<Pagination.Item>
								<Pagination.NextButton />
							</Pagination.Item>
						</Pagination.Content>
					{/snippet}
				</Pagination.Root>
			</div>
		</div>
		<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-muted-foreground text-sm sm:pl-3">A login form with a CSS file.</h2>
			</div>
			<div class=" flex min-h-[400px] flex-col items-center justify-center gap-5">
				<Select.Root type="single" name="favoriteFruit" bind:value={selectValue}>
					<Select.Trigger class="w-[280px]">
						{triggerContent}
					</Select.Trigger>
					<Select.Content>
						<Select.Group>
							<Select.Label>Fruits</Select.Label>
							{#each fruits as fruit (fruit.value)}
								<Select.Item
									value={fruit.value}
									label={fruit.label}
									disabled={fruit.value === "grapes"}
								>
									{fruit.label}
								</Select.Item>
							{/each}
						</Select.Group>
					</Select.Content>
				</Select.Root>
			</div>
		</div>
		<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-muted-foreground text-sm sm:pl-3">A retro-themed sheet component</h2>
			</div>
			<div class=" flex min-h-[400px] flex-col items-center justify-center gap-5">
				<Sheet.Root>
					<Sheet.Trigger>Open Retro Sheet</Sheet.Trigger>
					<Sheet.Content>
						<Sheet.Header>
							<Sheet.Title>Retro Sheet Example</Sheet.Title>
							<Sheet.Description>
								This sheet now has a retro theme with rounded corners, thick borders, and enhanced
								shadows for that classic look.
							</Sheet.Description>
						</Sheet.Header>
						<div class="flex-1 space-y-4 p-6">
							<p class="text-sm">
								This is the main content area of the retro sheet. You can add any content here.
							</p>
							<div class="grid gap-4">
								<div class="space-y-2">
									<Label for="retro-input">Name</Label>
									<Input id="retro-input" placeholder="Enter your name..." />
								</div>
								<div class="space-y-2">
									<Label for="retro-textarea">Message</Label>
									<Textarea id="retro-textarea" placeholder="Write your message..." />
								</div>
							</div>
						</div>
						<Sheet.Footer>
							<Button variant="outline" class="w-full">Cancel</Button>
							<Button class="w-full">Save Changes</Button>
						</Sheet.Footer>
					</Sheet.Content>
				</Sheet.Root>
			</div>
		</div>

		<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-muted-foreground text-sm sm:pl-3">A retro-themed sheet component</h2>
			</div>
			<div class=" flex min-h-[400px] flex-col items-center justify-center gap-5">
				<Calendar variant="default" type="single" captionLayout="dropdown" />
			</div>
		</div>
		<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-muted-foreground text-sm sm:pl-3">A retro-themed sheet component</h2>
			</div>
			<div class=" flex min-h-[400px] flex-col items-center justify-center gap-5">
				<RangeCalendar class="" />
			</div>
		</div>
		<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-muted-foreground text-sm sm:pl-3">A retro-themed sheet component</h2>
			</div>
			<div class=" flex min-h-[400px] flex-col items-center justify-center gap-5">
				<ContextMenu.Root>
					<ContextMenu.Trigger
						class="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm"
					>
						Right click here
					</ContextMenu.Trigger>
					<ContextMenu.Content class="w-52">
						<ContextMenu.Item inset>
							Back
							<ContextMenu.Shortcut>⌘[</ContextMenu.Shortcut>
						</ContextMenu.Item>
						<ContextMenu.Item inset disabled>
							Forward
							<ContextMenu.Shortcut>⌘]</ContextMenu.Shortcut>
						</ContextMenu.Item>
						<ContextMenu.Item inset>
							Reload
							<ContextMenu.Shortcut>⌘R</ContextMenu.Shortcut>
						</ContextMenu.Item>
						<ContextMenu.Sub>
							<ContextMenu.SubTrigger inset>More Tools</ContextMenu.SubTrigger>
							<ContextMenu.SubContent class="w-48">
								<ContextMenu.Item>
									Save Page As...
									<ContextMenu.Shortcut>⇧⌘S</ContextMenu.Shortcut>
								</ContextMenu.Item>
								<ContextMenu.Item>Create Shortcut...</ContextMenu.Item>
								<ContextMenu.Item>Name Window...</ContextMenu.Item>
								<ContextMenu.Separator />
								<ContextMenu.Item>Developer Tools</ContextMenu.Item>
							</ContextMenu.SubContent>
						</ContextMenu.Sub>
						<ContextMenu.Separator />
						<ContextMenu.CheckboxItem bind:checked={showBookmarks}>
							Show Bookmarks
						</ContextMenu.CheckboxItem>
						<ContextMenu.CheckboxItem bind:checked={showFullURLs}>
							Show Full URLs
						</ContextMenu.CheckboxItem>
						<ContextMenu.Separator />
						<ContextMenu.RadioGroup bind:value={contextMenuValue}>
							<ContextMenu.Group>
								<ContextMenu.GroupHeading inset>People</ContextMenu.GroupHeading>
								<ContextMenu.RadioItem value="pedro">Pedro Duarte</ContextMenu.RadioItem>
								<ContextMenu.RadioItem value="colm">Colm Tuite</ContextMenu.RadioItem>
							</ContextMenu.Group>
						</ContextMenu.RadioGroup>
					</ContextMenu.Content>
				</ContextMenu.Root>
			</div>
		</div>
		<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-muted-foreground text-sm sm:pl-3">A retro-themed sheet component</h2>
			</div>
			<div class=" flex min-h-[400px] flex-col items-center justify-center gap-5">
				<DropdownMenu.Root>
					<DropdownMenu.Trigger>
						{#snippet child({ props })}
							<Button {...props} variant="outline">Open</Button>
						{/snippet}
					</DropdownMenu.Trigger>
					<DropdownMenu.Content class="w-56" align="start">
						<DropdownMenu.Label>My Account</DropdownMenu.Label>
						<DropdownMenu.Group>
							<DropdownMenu.Item>
								Profile
								<DropdownMenu.Shortcut>⇧⌘P</DropdownMenu.Shortcut>
							</DropdownMenu.Item>
							<DropdownMenu.Item>
								Billing
								<DropdownMenu.Shortcut>⌘B</DropdownMenu.Shortcut>
							</DropdownMenu.Item>
							<DropdownMenu.Item>
								Settings
								<DropdownMenu.Shortcut>⌘S</DropdownMenu.Shortcut>
							</DropdownMenu.Item>
							<DropdownMenu.Item>
								Keyboard shortcuts
								<DropdownMenu.Shortcut>⌘K</DropdownMenu.Shortcut>
							</DropdownMenu.Item>
						</DropdownMenu.Group>
						<DropdownMenu.Separator />
						<DropdownMenu.Group>
							<DropdownMenu.Item>Team</DropdownMenu.Item>
							<DropdownMenu.Sub>
								<DropdownMenu.SubTrigger>Invite users</DropdownMenu.SubTrigger>
								<DropdownMenu.SubContent>
									<DropdownMenu.Item>Email</DropdownMenu.Item>
									<DropdownMenu.Item>Message</DropdownMenu.Item>
									<DropdownMenu.Separator />
									<DropdownMenu.Item>More...</DropdownMenu.Item>
								</DropdownMenu.SubContent>
							</DropdownMenu.Sub>
							<DropdownMenu.Item>
								New Team
								<DropdownMenu.Shortcut>⌘+T</DropdownMenu.Shortcut>
							</DropdownMenu.Item>
						</DropdownMenu.Group>
						<DropdownMenu.Separator />
						<DropdownMenu.Item>GitHub</DropdownMenu.Item>
						<DropdownMenu.Item>Support</DropdownMenu.Item>
						<DropdownMenu.Item disabled>API</DropdownMenu.Item>
						<DropdownMenu.Separator />
						<DropdownMenu.Item>
							Log out
							<DropdownMenu.Shortcut>⇧⌘Q</DropdownMenu.Shortcut>
						</DropdownMenu.Item>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</div>
		</div>
		<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-muted-foreground text-sm sm:pl-3">A retro-themed sheet component</h2>
			</div>
			<div class=" flex min-h-[400px] flex-col items-center justify-center gap-5">
				<Menubar.Root>
					<Menubar.Menu>
						<Menubar.Trigger>File</Menubar.Trigger>
						<Menubar.Content>
							<Menubar.Item>
								New Tab <Menubar.Shortcut>⌘T</Menubar.Shortcut>
							</Menubar.Item>
							<Menubar.Item>
								New Window <Menubar.Shortcut>⌘N</Menubar.Shortcut>
							</Menubar.Item>
							<Menubar.Item>New Incognito Window</Menubar.Item>
							<Menubar.Separator />
							<Menubar.Sub>
								<Menubar.SubTrigger>Share</Menubar.SubTrigger>
								<Menubar.SubContent>
									<Menubar.Item>Email link</Menubar.Item>
									<Menubar.Item>Messages</Menubar.Item>
									<Menubar.Item>Notes</Menubar.Item>
								</Menubar.SubContent>
							</Menubar.Sub>
							<Menubar.Separator />
							<Menubar.Item>
								Print... <Menubar.Shortcut>⌘P</Menubar.Shortcut>
							</Menubar.Item>
						</Menubar.Content>
					</Menubar.Menu>
					<Menubar.Menu>
						<Menubar.Trigger>Edit</Menubar.Trigger>
						<Menubar.Content>
							<Menubar.Item>
								Undo <Menubar.Shortcut>⌘Z</Menubar.Shortcut>
							</Menubar.Item>
							<Menubar.Item>
								Redo <Menubar.Shortcut>⇧⌘Z</Menubar.Shortcut>
							</Menubar.Item>
							<Menubar.Separator />
							<Menubar.Sub>
								<Menubar.SubTrigger>Find</Menubar.SubTrigger>
								<Menubar.SubContent>
									<Menubar.Item>Search the web</Menubar.Item>
									<Menubar.Separator />
									<Menubar.Item>Find...</Menubar.Item>
									<Menubar.Item>Find Next</Menubar.Item>
									<Menubar.Item>Find Previous</Menubar.Item>
								</Menubar.SubContent>
							</Menubar.Sub>
							<Menubar.Separator />
							<Menubar.Item>Cut</Menubar.Item>
							<Menubar.Item>Copy</Menubar.Item>
							<Menubar.Item>Paste</Menubar.Item>
						</Menubar.Content>
					</Menubar.Menu>
					<Menubar.Menu>
						<Menubar.Trigger>View</Menubar.Trigger>
						<Menubar.Content>
							<Menubar.CheckboxItem bind:checked={bookmarks}
								>Always Show Bookmarks Bar</Menubar.CheckboxItem
							>
							<Menubar.CheckboxItem bind:checked={fullUrls}>
								Always Show Full URLs
							</Menubar.CheckboxItem>
							<Menubar.Separator />
							<Menubar.Item inset>
								Reload <Menubar.Shortcut>⌘R</Menubar.Shortcut>
							</Menubar.Item>
							<Menubar.Item inset>
								Force Reload <Menubar.Shortcut>⇧⌘R</Menubar.Shortcut>
							</Menubar.Item>
							<Menubar.Separator />
							<Menubar.Item inset>Toggle Fullscreen</Menubar.Item>
							<Menubar.Separator />
							<Menubar.Item inset>Hide Sidebar</Menubar.Item>
						</Menubar.Content>
					</Menubar.Menu>
					<Menubar.Menu>
						<Menubar.Trigger>Profiles</Menubar.Trigger>
						<Menubar.Content>
							<Menubar.RadioGroup bind:value={profileRadioValue}>
								<Menubar.RadioItem value="andy">Andy</Menubar.RadioItem>
								<Menubar.RadioItem value="benoit">Benoit</Menubar.RadioItem>
								<Menubar.RadioItem value="Luis">Luis</Menubar.RadioItem>
							</Menubar.RadioGroup>
							<Menubar.Separator />
							<Menubar.Item inset>Edit...</Menubar.Item>
							<Menubar.Separator />
							<Menubar.Item inset>Add Profile...</Menubar.Item>
						</Menubar.Content>
					</Menubar.Menu>
				</Menubar.Root>
			</div>
		</div>
		<div class="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-muted-foreground text-sm sm:pl-3">A retro-themed sheet component</h2>
			</div>
			<div class=" flex min-h-[400px] flex-col items-center justify-center gap-5">
				{#snippet ListItem({ title, content, href, class: className, ...restProps }: ListItemProps)}
					<li>
						<NavigationMenu.Link>
							{#snippet child()}
								<a
									{href}
									class={cn(
										"hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none",
										className
									)}
									{...restProps}
								>
									<div class="text-sm leading-none font-medium">{title}</div>
									<p class="text-muted-foreground line-clamp-2 text-sm leading-snug">
										{content}
									</p>
								</a>
							{/snippet}
						</NavigationMenu.Link>
					</li>
				{/snippet}

				<NavigationMenu.Root viewport={false}>
					<NavigationMenu.List>
						<NavigationMenu.Item>
							<NavigationMenu.Trigger>Home</NavigationMenu.Trigger>
							<NavigationMenu.Content>
								<ul class="grid gap-2 p-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
									<li class="row-span-3">
										<NavigationMenu.Link
											class="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
										>
											{#snippet child({ props })}
												<a {...props} href="/">
													<div class="mt-4 mb-2 text-lg font-medium">shadcn-svelte</div>
													<p class="text-muted-foreground text-sm leading-tight">
														Beautifully designed components built with Tailwind CSS.
													</p>
												</a>
											{/snippet}
										</NavigationMenu.Link>
									</li>
									{@render ListItem({
										href: "/docs",
										title: "Introduction",
										content: "Re-usable components built using Bits UI and Tailwind CSS.",
									})}
									{@render ListItem({
										href: "/docs/installation",
										title: "Installation",
										content: "How to install dependencies and structure your app.",
									})}
									{@render ListItem({
										href: "/docs/components/typography",
										title: "Typography",
										content: "Styles for headings, paragraphs, lists...etc",
									})}
								</ul>
							</NavigationMenu.Content>
						</NavigationMenu.Item>
						<NavigationMenu.Item>
							<NavigationMenu.Trigger>Components</NavigationMenu.Trigger>
							<NavigationMenu.Content>
								<ul class="grid w-[400px] gap-2 p-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
									{#each components as component, i (i)}
										{@render ListItem({
											href: component.href,
											title: component.title,
											content: component.description,
										})}
									{/each}
								</ul>
							</NavigationMenu.Content>
						</NavigationMenu.Item>

						<NavigationMenu.Item>
							<NavigationMenu.Link>
								{#snippet child()}
									<a href="/docs" class={navigationMenuTriggerStyle()}>Docs</a>
								{/snippet}
							</NavigationMenu.Link>
						</NavigationMenu.Item>
						<NavigationMenu.Item>
							<NavigationMenu.Trigger>List</NavigationMenu.Trigger>
							<NavigationMenu.Content>
								<ul class="grid w-[300px] gap-4 p-2">
									<li>
										<NavigationMenu.Link href="#">
											<div class="font-medium">Components</div>
											<div class="text-muted-foreground">Browse all components in the library.</div>
										</NavigationMenu.Link>
										<NavigationMenu.Link href="#">
											<div class="font-medium">Documentation</div>
											<div class="text-muted-foreground">Learn how to use the library.</div>
										</NavigationMenu.Link>
										<NavigationMenu.Link href="#">
											<div class="font-medium">Blog</div>
											<div class="text-muted-foreground">Read our latest blog posts.</div>
										</NavigationMenu.Link>
									</li>
								</ul>
							</NavigationMenu.Content>
						</NavigationMenu.Item>
						<NavigationMenu.Item>
							<NavigationMenu.Trigger>Simple</NavigationMenu.Trigger>
							<NavigationMenu.Content>
								<ul class="grid w-[200px] gap-4 p-2">
									<li>
										<NavigationMenu.Link href="#">Components</NavigationMenu.Link>
										<NavigationMenu.Link href="#">Documentation</NavigationMenu.Link>
										<NavigationMenu.Link href="#">Blocks</NavigationMenu.Link>
									</li>
								</ul>
							</NavigationMenu.Content>
						</NavigationMenu.Item>
						<NavigationMenu.Item>
							<NavigationMenu.Trigger>With Icon</NavigationMenu.Trigger>

							<NavigationMenu.Content>
								<ul class="grid w-[200px] gap-4 p-2">
									<li>
										<NavigationMenu.Link href="#" class="flex-row items-center gap-2">
											Backlog
										</NavigationMenu.Link>

										<NavigationMenu.Link href="#" class="flex-row items-center gap-2">
											To Do
										</NavigationMenu.Link>

										<NavigationMenu.Link href="#" class="flex-row items-center gap-2">
											Done
										</NavigationMenu.Link>
									</li>
								</ul>
							</NavigationMenu.Content>
						</NavigationMenu.Item>
					</NavigationMenu.List>
				</NavigationMenu.Root>
			</div>
		</div>
	</main>
</div>
