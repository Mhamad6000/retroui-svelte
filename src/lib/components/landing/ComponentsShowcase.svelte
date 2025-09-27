<script lang="ts">
	import * as Card from "$registry/ui/card/index.js";
	import * as Button from "$registry/ui/button/index.js";
	import { Input } from "$registry/ui/input/index.js";
	import { Textarea } from "$registry/ui/textarea/index.js";
	import { Checkbox } from "$registry/ui/checkbox/index.js";
	import * as Alert from "$registry/ui/alert/index.js";
	import * as Badge from "$registry/ui/badge/index.js";
	import { Slider } from "$registry/ui/slider/index.js";
	import { CheckCircle2Icon, InfoIcon, Star } from "@lucide/svelte";

	let value = $state(50);
</script>

<section class="py-20 px-4 bg-card/60">
	<div class="container mx-auto">
		<div class="text-center mb-16">
			<h2 class="text-4xl lg:text-5xl font-bold mb-4">Beautiful Svelte Components</h2>
			<p class="text-xl text-muted-foreground max-w-2xl mx-auto">
				Over 40+ carefully crafted components built for Svelte with shadcn-svelte. Copy, paste, and
				customize to your heart's content.
			</p>
		</div>

		<!-- Component Categories Grid -->
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
			<!-- Form Components -->
			<Card.Root>
				<Card.Header class="bg-primary p-4 items-center border-2 border-black">
					<Card.Title class="text-primary-foreground text-center">Form Components</Card.Title>
				</Card.Header>
				<Card.Content class="p-6 space-y-4">
					<div class="space-y-3">
						<Input placeholder="Enter your email" />
						<Textarea placeholder="Your message..." class="h-20" />
						<div class="flex items-center space-x-2">
							<Checkbox id="terms" />
							<label for="terms" class="text-sm text-muted-foreground">I agree to the terms</label>
						</div>
					</div>
					<div class="flex space-x-2">
						<Button.Root size="sm" class="bg-primary  border-black">Submit</Button.Root>
						<Button.Root size="sm" variant="outline" class="border-black ">Cancel</Button.Root>
					</div>
				</Card.Content>
			</Card.Root>

			<!-- Button Variants -->
			<Card.Root>
				<Card.Header class="bg-primary p-4 items-center border-2 border-black">
					<Card.Title class="text-primary-foreground text-center">Button Variants</Card.Title>
				</Card.Header>
				<Card.Content class="p-6 space-y-4">
					<div class="grid grid-cols-2 gap-3">
						<Button.Root class="">Primary</Button.Root>
						<Button.Root variant="outline" class=" ">Outline</Button.Root>
						<Button.Root variant="secondary" class="">Secondary</Button.Root>
						<Button.Root variant="ghost" class="">Ghost</Button.Root>
					</div>
					<div class="flex space-x-2">
						<Button.Root size="sm" class="">Small</Button.Root>
						<Button.Root class="">Default</Button.Root>
						<Button.Root size="lg" class="">Large</Button.Root>
					</div>
				</Card.Content>
			</Card.Root>

			<!-- Badge Collection -->
			<Card.Root>
				<Card.Header class="bg-primary p-4 items-center border-2 border-black">
					<Card.Title class="text-primary-foreground text-center">Badge Collection</Card.Title>
				</Card.Header>
				<Card.Content class="p-6 space-y-4">
					<div class="flex flex-wrap gap-2">
						<Badge.Badge class="bg-primary ">Default</Badge.Badge>
						<Badge.Badge variant="outline" class="border-black ">Outlined</Badge.Badge>
						<Badge.Badge variant="solid" class="bg-gray-200 ">Secondary</Badge.Badge>
						<Badge.Badge variant="primary" class="bg-primary ">Primary</Badge.Badge>
					</div>
				</Card.Content>
			</Card.Root>

			<!-- Alert Examples -->
			<Card.Root>
				<Card.Header class="bg-primary p-4 items-center border-2 border-black">
					<Card.Title class="text-primary-foreground text-center">Alert Components</Card.Title>
				</Card.Header>
				<Card.Content class="p-6 space-y-3">
					<Alert.Root status="success" class="items-center">
						<CheckCircle2Icon className="size-4 mr-4" />
						<Alert.Title class="text-xs">Success! Your changes have been saved</Alert.Title>
					</Alert.Root>
					<Alert.Root status="warning" class="items-center">
						<InfoIcon className="size-4 mr-4" />
						<Alert.Title class="text-xs">Warning: Please review your input.</Alert.Title>
					</Alert.Root>
				</Card.Content>
			</Card.Root>

			<!-- Interactive Elements -->
			<Card.Root>
				<Card.Header class="bg-primary p-4 items-center border-2 border-black">
					<Card.Title class="text-primary-foreground text-center">Interactive Elements</Card.Title>
				</Card.Header>
				<Card.Content class="p-6 space-y-4">
					<div class="flex items-center space-x-4">
						<div class="w-8 h-8 bg-primary flex items-center justify-center">
							<Star class="w-4 h-4 " />
						</div>
						<span class="text-sm">Interactive Icon</span>
					</div>
					<Slider type="single" bind:value max={100} step={1} class="w-full" />
				</Card.Content>
			</Card.Root>
		</div>

		<!-- Component Count & Features -->
		<div class="grid md:grid-cols-3 gap-8 mb-12">
			<div class="text-center">
				<div class="text-4xl font-bold mb-2">40+</div>
				<div class="text-lg text-muted-foreground">Components</div>
			</div>
			<div class="text-center">
				<div class="text-4xl font-bold mb-2">16</div>
				<div class="text-lg text-muted-foreground">Themes</div>
			</div>
			<div class="text-center">
				<div class="text-4xl font-bold mb-2">100%</div>
				<div class="text-lg text-muted-foreground">Svelte 5 Ready</div>
			</div>
		</div>

		<div class="text-center">
			<a href="/docs/components">
				<Button.Root size="lg" class="bg-primary  border-black hover:bg-primary-hover">
					View All Components
				</Button.Root>
			</a>
		</div>
	</div>
</section>
