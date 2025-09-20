<script lang="ts">
	import * as Button from "$registry/ui/button/index.js";
	import { onMount } from "svelte";
	import * as Badge from "../../../registry/ui/badge";
	import * as Card from "$registry/ui/card/index.js";
	import { Input } from "$registry/ui/input/index.js";
	import { Textarea } from "$registry/ui/textarea/index.js";
	import { Checkbox } from "$registry/ui/checkbox/index.js";
	import * as Alert from "$registry/ui/alert/index.js";
	import {
		Github,
		Moon,
		Star,
		Copy,
		ArrowRight,
		Rocket,
		Wrench,
		CheckCircle,
		Users,
		Zap,
		Book,
		GraduationCap,
		InfoIcon,
		CheckIcon,
		CheckCircle2Icon,
	} from "@lucide/svelte";

	import { Slider } from "$registry/ui/slider/index.js";

	let value = $state(50);

	let mounted = false;
	onMount(() => {
		mounted = true;
	});

	const copyCommand = () => {
		navigator.clipboard.writeText("npx shadcn-svelte@latest add button");
	};

	const contributors = [
		{ name: "John Doe", avatar: "/avatars/01.png" },
		{ name: "Jane Smith", avatar: "/avatars/02.png" },
		{ name: "Mike Johnson", avatar: "/avatars/03.png" },
		{ name: "Sarah Wilson", avatar: "/avatars/04.png" },
		{ name: "Alex Brown", avatar: "/avatars/05.png" },
		{ name: "Emma Davis", avatar: "/avatars/01.png" },
		{ name: "Chris Lee", avatar: "/avatars/02.png" },
		{ name: "Lisa Garcia", avatar: "/avatars/03.png" },
		{ name: "Tom Miller", avatar: "/avatars/04.png" },
		{ name: "Anna Taylor", avatar: "/avatars/05.png" },
		{ name: "David White", avatar: "/avatars/01.png" },
		{ name: "Maya Chen", avatar: "/avatars/02.png" },
	];

	const techLogos = [
		{ name: "Vite", icon: "⚡" },
		{ name: "Next.js", icon: "N" },
		{ name: "React", icon: "R" },
		{ name: "Svelte", icon: "S" },
		{ name: "Gatsby", icon: "G" },
	];
</script>

<svelte:head>
	<title>RetroUI - Ship Faster With Blocks and Templates</title>
	<meta
		name="description"
		content="React and TailwindCSS based UI library built for making unique and modern looking web applications. Perfect for any project using Shadcn/ui."
	/>
</svelte:head>

<div class="min-h-screen bg-background">
	<!-- Hero Section -->
	<section class="min-h-screen w-full bg-white relative">
		<!-- Grid Background -->
		<div
			class="absolute inset-0 z-0"
			style="
				background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px),
				linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
				background-size: 40px 40px;"
		></div>

		<!-- Hero Content -->
		<div class="relative z-10 container mx-auto px-4 py-24 min-h-screen flex items-center">
			<div class="grid lg:grid-cols-2 gap-16 items-center w-full">
				<div class="space-y-8">
					<!-- Announcement Badge -->
					<div class="inline-flex items-center space-x-2">
						<!-- <Badge.Badge
							variant="outline"
							class="bg-primary/10 border-primary text-black px-4 py-2"
						>
							<Rocket class="w-4 h-4 mr-2" />
							Introducing RetroUI Svelte v1.0!
						</Badge.Badge> -->

						<Alert.Root status="warning" class="items-center">
							<InfoIcon className="size-4 mr-4" />
							<Alert.Title>Introducing RetroUI Svelte v1.0!</Alert.Title>
						</Alert.Root>
					</div>

					<!-- Main Headline -->
					<div class="space-y-6">
						<h1 class="text-6xl lg:text-7xl font-bold text-black leading-tight">
							Build <span class="relative"> amazing </span>
							<br />
							Svelte apps
						</h1>
						<p class="text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
							The most beautiful UI component library for SvelteKit. Copy, paste, and customize with
							40+ components, 16 themes, and endless possibilities.
						</p>
					</div>

					<!-- Feature Pills -->
					<div class="flex flex-wrap gap-3">
						<Badge.Badge variant="primary">40+ Components</Badge.Badge>
						<Badge.Badge>16 Themes</Badge.Badge>
						<Badge.Badge>TypeScript</Badge.Badge>
						<Badge.Badge>SvelteKit Ready</Badge.Badge>
					</div>

					<!-- CTA Buttons -->
					<div class="flex flex-col sm:flex-row gap-4">
						<Button.Root
							size="lg"
							class="bg-primary text-black border-2 border-black hover:bg-primary-hover text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all"
						>
							<Star class="w-5 h-5 mr-2" />
							Get Started
						</Button.Root>
						<Button.Root
							variant="outline"
							size="lg"
							class="border-2 border-black text-black hover:bg-primary text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all"
							onclick={copyCommand}
						>
							<code class="mr-2 font-mono text-sm">npx shadcn-svelte@latest add button</code>
							<Copy class="w-4 h-4" />
						</Button.Root>
					</div>

					<!-- Stats -->
					<div class="grid grid-cols-3 gap-8 pt-8">
						<div class="text-center">
							<div class="text-3xl font-bold text-black">40+</div>
							<div class="text-sm text-secondary">Components</div>
						</div>
						<div class="text-center">
							<div class="text-3xl font-bold text-black">16</div>
							<div class="text-sm text-secondary">Themes</div>
						</div>
						<div class="text-center">
							<div class="text-3xl font-bold text-black">100%</div>
							<div class="text-sm text-secondary">SvelteKit</div>
						</div>
					</div>
				</div>

				<!-- Hero Code Example -->
				<div class="relative mx-2 sm:mx-0">
					<!-- Main Code Window -->
					<div class="bg-gray-900 border-2 sm:border-4 border-black shadow-2xl overflow-hidden">
						<!-- Window Header -->
						<div
							class="bg-gray-800 px-2 sm:px-4 py-2 sm:py-3 flex items-center space-x-1 sm:space-x-2 border-b border-gray-700"
						>
							<div class="w-2 h-2 sm:w-3 sm:h-3 bg-red-500"></div>
							<div class="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500"></div>
							<div class="w-2 h-2 sm:w-3 sm:h-3 bg-green-500"></div>
							<div class="ml-2 sm:ml-4 text-gray-400 text-xs sm:text-sm font-mono">App.svelte</div>
						</div>

						<!-- Code Content -->
						<div class="p-3 sm:p-6 bg-gray-900 overflow-x-auto">
							<pre
								class="text-green-400 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap sm:whitespace-pre"><code
									class="language-svelte"
									>{`import * as Card from "$registry/ui/card/index.js";
import * as Badge from "$registry/ui/badge/index.js";
import { Button } from "$registry/ui/button/index.js";

<Card.Root class="w-full sm:w-96">
  <Card.Header>
    <Card.Title class="flex items-center gap-2">
      Welcome to RetroUI
      <Badge.Badge>New</Badge.Badge>
    </Card.Title>
  </Card.Header>
  <Card.Content class="space-y-4">
    <p class="text-muted-foreground">
      Beautiful components for SvelteKit
    </p>
    <Button.Root class="w-full">
      Get Started
    </Button.Root>
  </Card.Content>
</Card.Root>`}</code
								></pre>
						</div>
					</div>

					<!-- Floating Elements - Hidden on very small screens, adjusted for mobile -->
					<div
						class="hidden absolute -top-4 -right-4 w-12 h-12 sm:w-16 sm:h-16 bg-primary border-2 sm:border-4 border-black sm:flex items-center justify-center shadow-lg"
					>
						<Star class="w-6 h-6 sm:w-8 sm:h-8 text-black" />
					</div>
					<div
						class="hidden absolute -bottom-4 -left-4 w-8 h-8 sm:w-12 sm:h-12 bg-blue-500 border-2 sm:border-4 border-black sm:flex items-center justify-center shadow-lg"
					>
						<Zap class="w-4 h-4 sm:w-6 sm:h-6 text-white" />
					</div>
					<div
						class="hidden sm:block absolute top-1/2 -left-6 sm:-left-8 w-6 h-6 sm:w-8 sm:h-8 bg-pink-500 border-2 sm:border-4 border-black transform rotate-45 shadow-lg"
					></div>

					<!-- Mobile floating elements - smaller and positioned differently -->
					<div
						class=" sm:hidden absolute -top-2 -right-2 w-8 h-8 bg-primary border-2 border-black flex items-center justify-center shadow-lg"
					>
						<Star class="w-4 h-4 text-black" />
					</div>
					<div
						class=" sm:hidden absolute -bottom-2 -left-2 w-6 h-6 bg-blue-500 border-2 border-black flex items-center justify-center shadow-lg"
					>
						<Zap class="w-3 h-3 text-white" />
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Features Section -->
	<section class="py-24 px-4 bg-white">
		<div class="container mx-auto">
			<div class="text-center mb-20">
				<h2 class="text-5xl lg:text-6xl font-bold text-black mb-6">
					Why Choose <span class="relative">
						RetroUI Svelte?
						<div
							class="absolute -bottom-2 left-0 w-full h-4 bg-primary -z-10 transform -skew-x-12"
						></div>
					</span>
				</h2>
				<p class="text-xl text-muted-foreground max-w-3xl mx-auto">
					Built specifically for SvelteKit with modern development practices and beautiful design
					patterns.
				</p>
			</div>

			<div class="grid lg:grid-cols-2 gap-16 items-center mb-20">
				<!-- Features List -->
				<div class="space-y-8">
					<div class="grid gap-6">
						<Card.Root
							class="bg-white border-4 border-black shadow-lg hover:shadow-xl transition-shadow"
						>
							<div>
								<Card.Title
									class="font-bold text-xl text-black mb-2 flex flex-row items-center gap-2"
								>
									<div
										class="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0 border-2 border-black"
									>
										<Copy class="w-6 h-6 text-black" />
									</div>
									<p>Copy-Paste Ready</p>
								</Card.Title>
								<Card.Content class="text-muted-foreground">
									Components that you can just copy and paste into your project. No complex setup
									required.
								</Card.Content>
							</div>
						</Card.Root>

						<Card.Root
							class="bg-white border-4 border-black shadow-lg hover:shadow-xl transition-shadow"
						>
							<Card.Title
								class="font-bold text-xl text-black mb-2 flex flex-row items-center gap-2"
							>
								<div
									class="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0 border-2 border-black"
								>
									<Wrench class="w-6 h-6 text-black" />
								</div>
								<p>Tailwind Based</p>
							</Card.Title>
							<Card.Content class="text-muted-foreground">
								Fully customizable with Tailwind CSS. Override any style with utility classes.
							</Card.Content>
						</Card.Root>

						<Card.Root
							class="bg-white border-4 border-black shadow-lg hover:shadow-xl transition-shadow"
						>
							<Card.Title
								class="font-bold text-xl text-black mb-2 flex flex-row items-center gap-2"
							>
								<div
									class="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0 border-2 border-black"
								>
									<CheckCircle class="w-6 h-6 text-black" />
								</div>
								<p>Type Safe</p>
							</Card.Title>
							<Card.Content class="text-muted-foreground">
								Full TypeScript support for all components with excellent IntelliSense.
							</Card.Content>
						</Card.Root>
					</div>

					<Button.Root
						size="lg"
						class="bg-primary text-black border-2 border-black hover:bg-primary-hover shadow-lg"
					>
						<Star class="w-5 h-5 mr-2" />
						Explore Components
					</Button.Root>
				</div>

				<!-- Interactive Code Examples -->
				<div class="relative">
					<!-- Terminal Window -->
					<div class="bg-gray-900 border-4 border-black shadow-2xl overflow-hidden">
						<!-- Terminal Header -->
						<div class="bg-gray-800 px-4 py-3 flex items-center space-x-2 border-b border-gray-700">
							<div class="w-3 h-3 bg-red-500"></div>
							<div class="w-3 h-3 bg-yellow-500"></div>
							<div class="w-3 h-3 bg-green-500"></div>
							<div class="ml-4 text-gray-400 text-sm font-mono">Terminal</div>
						</div>

						<!-- Terminal Content -->
						<div class="p-6 bg-gray-900">
							<div class="space-y-4">
								<div class="flex items-center space-x-2">
									<span class="text-green-400">$</span>
									<span class="text-white">npx shadcn-svelte@latest add button</span>
								</div>
								<div class="text-gray-400 text-sm">✓ Added button component to your project</div>
								<div class="flex items-center space-x-2">
									<span class="text-green-400">$</span>
									<span class="text-white">npx shadcn-svelte@latest add card</span>
								</div>
								<div class="text-gray-400 text-sm">✓ Added card component to your project</div>
								<div class="flex items-center space-x-2">
									<span class="text-green-400">$</span>
									<span class="text-white">npm run dev</span>
								</div>
								<div class="text-gray-400 text-sm">
									✓ Development server running on localhost:5173
								</div>
							</div>
						</div>
					</div>

					<!-- Floating Code Snippet -->
				</div>
			</div>

			<!-- Feature Stats -->
			<div class="grid md:grid-cols-4 gap-8 pt-16 border-t border-gray-200">
				<div class="text-center">
					<div
						class="w-16 h-16 bg-primary flex items-center justify-center mx-auto mb-4 border-2 border-black"
					>
						<Copy class="w-8 h-8 text-black" />
					</div>
					<div class="text-3xl font-bold text-black mb-2">Zero Config</div>
					<div class="text-muted-foreground">Just copy and paste</div>
				</div>
				<div class="text-center">
					<div
						class="w-16 h-16 bg-primary flex items-center justify-center mx-auto mb-4 border-2 border-black"
					>
						<Wrench class="w-8 h-8 text-black" />
					</div>
					<div class="text-3xl font-bold text-black mb-2">Fully Customizable</div>
					<div class="text-muted-foreground">Override any style</div>
				</div>
				<div class="text-center">
					<div
						class="w-16 h-16 bg-primary flex items-center justify-center mx-auto mb-4 border-2 border-black"
					>
						<CheckCircle class="w-8 h-8 text-black" />
					</div>
					<div class="text-3xl font-bold text-black mb-2">Type Safe</div>
					<div class="text-muted-foreground">Full TypeScript support</div>
				</div>
				<div class="text-center">
					<div
						class="w-16 h-16 bg-primary flex items-center justify-center mx-auto mb-4 border-2 border-black"
					>
						<Zap class="w-8 h-8 text-black" />
					</div>
					<div class="text-3xl font-bold text-black mb-2">Lightning Fast</div>
					<div class="text-muted-foreground">Optimized for SvelteKit</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Components Showcase -->
	<section class="py-20 px-4 bg-white">
		<div class="container mx-auto">
			<div class="text-center mb-16">
				<h2 class="text-4xl lg:text-5xl font-bold text-black mb-4">Beautiful Svelte Components</h2>
				<p class="text-xl text-muted-foreground max-w-2xl mx-auto">
					Over 40+ carefully crafted components built for SvelteKit with shadcn-svelte. Copy, paste,
					and customize to your heart's content.
				</p>
			</div>

			<!-- Component Categories Grid -->
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
				<!-- Form Components -->
				<Card.Root
					class="bg-white border-4 border-black shadow-lg hover:shadow-xl transition-shadow"
				>
					<Card.Header class="bg-primary p-4 items-center border-2 border-black">
						<Card.Title class="text-black text-center">Form Components</Card.Title>
					</Card.Header>
					<Card.Content class="p-6 space-y-4">
						<div class="space-y-3">
							<Input placeholder="Enter your email" />
							<Textarea placeholder="Your message..." class="h-20" />
							<div class="flex items-center space-x-2">
								<Checkbox id="terms" />
								<label for="terms" class="text-sm text-muted-foreground">I agree to the terms</label
								>
							</div>
						</div>
						<div class="flex space-x-2">
							<Button.Root size="sm" class="bg-primary text-black border-black">Submit</Button.Root>
							<Button.Root size="sm" variant="outline" class="border-black text-black"
								>Cancel</Button.Root
							>
						</div>
					</Card.Content>
				</Card.Root>

				<!-- Button Variants -->
				<Card.Root
					class="bg-white border-4 border-black shadow-lg hover:shadow-xl transition-shadow"
				>
					<Card.Header class="bg-primary p-4 items-center border-2 border-black">
						<Card.Title class="text-black text-center">Button Variants</Card.Title>
					</Card.Header>
					<Card.Content class="p-6 space-y-4">
						<div class="grid grid-cols-2 gap-3">
							<Button.Root class="bg-primary text-black border-black">Primary</Button.Root>
							<Button.Root variant="outline" class="border-black text-black">Outline</Button.Root>
							<Button.Root variant="secondary" class="bg-gray-200 text-black border-black"
								>Secondary</Button.Root
							>
							<Button.Root variant="ghost" class="text-black hover:bg-gray-100">Ghost</Button.Root>
						</div>
						<div class="flex space-x-2">
							<Button.Root size="sm" class="bg-black text-white">Small</Button.Root>
							<Button.Root class="bg-primary text-black border-black">Default</Button.Root>
							<Button.Root size="lg" class="bg-primary text-black border-black">Large</Button.Root>
						</div>
					</Card.Content>
				</Card.Root>

				<!-- Badge Collection -->
				<Card.Root
					class="bg-white border-4 border-black shadow-lg hover:shadow-xl transition-shadow"
				>
					<Card.Header class="bg-primary p-4 items-center border-2 border-black">
						<Card.Title class="text-black text-center">Badge Collection</Card.Title>
					</Card.Header>
					<Card.Content class="p-6 space-y-4">
						<div class="flex flex-wrap gap-2">
							<Badge.Badge class="bg-primary text-black">Default</Badge.Badge>
							<Badge.Badge variant="outline" class="border-black text-black">Outlined</Badge.Badge>
							<Badge.Badge variant="solid" class="bg-gray-200 text-black">Secondary</Badge.Badge>
							<Badge.Badge variant="primary" class="bg-primary text-black">Primary</Badge.Badge>
						</div>
					</Card.Content>
				</Card.Root>

				<!-- Alert Examples -->
				<Card.Root
					class="bg-white border-4 border-black shadow-lg hover:shadow-xl transition-shadow"
				>
					<Card.Header class="bg-primary p-4 items-center border-2 border-black">
						<Card.Title class="text-black text-center">Alert Components</Card.Title>
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

				<!-- Card Layouts -->
				<Card.Root
					class="bg-white border-4 border-black shadow-lg hover:shadow-xl transition-shadow"
				>
					<Card.Header class="bg-primary p-4 items-center border-2 border-black">
						<Card.Title class="text-black text-center">Card Layouts</Card.Title>
					</Card.Header>
					<Card.Content class="p-6">
						<div class="space-y-3">
							<div class="p-3 bg-gray-50 border border-gray-200">
								<h4 class="font-medium text-sm">Simple Card</h4>
								<p class="text-xs text-muted-foreground">Clean and minimal design</p>
							</div>
							<div class="p-3 bg-primary/10 border border-primary">
								<h4 class="font-medium text-sm text-primary">Highlighted Card</h4>
								<p class="text-xs text-muted-foreground">With accent styling</p>
							</div>
						</div>
					</Card.Content>
				</Card.Root>

				<!-- Interactive Elements -->
				<Card.Root
					class="bg-white border-4 border-black shadow-lg hover:shadow-xl transition-shadow"
				>
					<Card.Header class="bg-primary p-4 items-center border-2 border-black">
						<Card.Title class="text-black text-center">Interactive Elements</Card.Title>
					</Card.Header>
					<Card.Content class="p-6 space-y-4">
						<div class="flex items-center space-x-4">
							<div class="w-8 h-8 bg-primary flex items-center justify-center">
								<Star class="w-4 h-4 text-black" />
							</div>
							<span class="text-sm text-black">Interactive Icon</span>
						</div>
						<Slider type="single" bind:value max={100} step={1} class="w-full" />
					</Card.Content>
				</Card.Root>
			</div>

			<!-- Component Count & Features -->
			<div class="grid md:grid-cols-3 gap-8 mb-12">
				<div class="text-center">
					<div class="text-4xl font-bold text-black mb-2">40+</div>
					<div class="text-lg text-muted-foreground">Components</div>
				</div>
				<div class="text-center">
					<div class="text-4xl font-bold text-black mb-2">16</div>
					<div class="text-lg text-muted-foreground">Themes</div>
				</div>
				<div class="text-center">
					<div class="text-4xl font-bold text-black mb-2">100%</div>
					<div class="text-lg text-muted-foreground">SvelteKit Ready</div>
				</div>
			</div>

			<div class="text-center">
				<a href="/docs/components">
					<Button.Root size="lg" class="bg-primary text-black border-black hover:bg-primary-hover">
						View All Components
					</Button.Root>
				</a>
			</div>
		</div>
	</section>

	<!-- Community Section -->
	<section class="py-20 px-4 bg-primary">
		<div class="container mx-auto text-center">
			<h2 class="text-4xl lg:text-5xl font-bold text-black mb-4">
				A Growing Community of Developers and Designers
			</h2>
			<p class="text-xl text-black mb-12 max-w-2xl mx-auto">
				RetroUI core is free and open-source, and it is made possible by our awesome contributors.
			</p>

			<div class="flex justify-center items-center space-x-16 mb-12">
				<div class="text-center">
					<div class="relative">
						<div class="text-6xl font-bold text-black mb-2">700+</div>
						<div class="absolute -top-4 -left-4">
							<Star class="w-8 h-8 text-black" />
						</div>
					</div>
					<div class="text-lg font-medium text-black">Github Stars</div>
				</div>
				<div class="text-center">
					<div class="relative">
						<div class="text-6xl font-bold text-black mb-2">100+</div>
						<div class="absolute -bottom-4 -right-4">
							<Star class="w-8 h-8 text-black" />
						</div>
					</div>
					<div class="text-lg font-medium text-black">Discord Members</div>
				</div>
			</div>

			<!-- Contributors -->
			<div class="flex flex-wrap justify-center gap-4 mb-12">
				{#each contributors as contributor}
					<div class="w-12 h-12 bg-gray-300 border-2 border-black"></div>
				{/each}
			</div>

			<div class="flex justify-center space-x-4">
				<Button.Root
					variant="outline"
					size="lg"
					class="bg-white text-black border-black hover:bg-gray-100"
				>
					<Star class="w-5 h-5 mr-2" />
					Star on Github
				</Button.Root>
				<Button.Root
					variant="outline"
					size="lg"
					class="bg-white text-black border-black hover:bg-gray-100"
				>
					<Users class="w-5 h-5 mr-2" />
					Join Community
				</Button.Root>
			</div>
		</div>
	</section>

	<!-- Compatibility Section -->
	<section class="min-h-screen w-full bg-white relative">
		<!-- White Sphere Grid Background -->
		<div
			class="absolute inset-0 z-0"
			style="
				background: white;
				background-image: 
					linear-gradient(to right, rgba(255,219,51,0.6) 1px, transparent 1px),
					linear-gradient(to bottom, rgba(255,219,51,0.6) 1px, transparent 1px),
					radial-gradient(circle at 50% 50%, rgba(255,219,51,0.25) 0%, rgba(255,219,51,0.1) 40%, transparent 80%);
				background-size: 32px 32px, 32px 32px, 100% 100%;
			"
		></div>
		<div class="relative z-10 container mx-auto py-24 px-4">
			<div class="text-center mb-20">
				<h2 class="text-5xl lg:text-6xl font-bold text-black mb-6">
					Built for Modern <span class="relative">
						Development
						<div
							class="absolute -bottom-2 left-0 w-full h-4 bg-primary -z-10 transform -skew-x-12"
						></div>
					</span>
				</h2>
				<p class="text-xl text-muted-foreground max-w-3xl mx-auto">
					Perfect integration with SvelteKit's SSR, client-side hydration, and shadcn-svelte's
					component system. Works seamlessly with your favorite tools.
				</p>
			</div>

			<!-- Technology Grid -->
			<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
				<!-- SvelteKit -->
				<Card.Root
					class="bg-white border-4 border-black shadow-lg hover:shadow-xl transition-all group"
				>
					<Card.Content class="p-8 text-center">
						<div
							class="w-20 h-20 bg-orange-500 text-white flex items-center justify-center text-3xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform"
						>
							S
						</div>
						<h3 class="text-xl font-bold text-black mb-2">SvelteKit</h3>
						<p class="text-muted-foreground text-sm">
							Full SSR & SPA support with optimal performance
						</p>
					</Card.Content>
				</Card.Root>

				<!-- TypeScript -->
				<Card.Root
					class="bg-white border-4 border-black shadow-lg hover:shadow-xl transition-all group"
				>
					<Card.Content class="p-8 text-center">
						<div
							class="w-20 h-20 bg-blue-500 text-white flex items-center justify-center text-3xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform"
						>
							T
						</div>
						<h3 class="text-xl font-bold text-black mb-2">TypeScript</h3>
						<p class="text-muted-foreground text-sm">
							Full type safety with excellent IntelliSense
						</p>
					</Card.Content>
				</Card.Root>

				<!-- TailwindCSS -->
				<Card.Root
					class="bg-white border-4 border-black shadow-lg hover:shadow-xl transition-all group"
				>
					<Card.Content class="p-8 text-center">
						<div
							class="w-20 h-20 bg-cyan-500 text-white flex items-center justify-center text-3xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform"
						>
							T
						</div>
						<h3 class="text-xl font-bold text-black mb-2">TailwindCSS</h3>
						<p class="text-muted-foreground text-sm">Utility-first CSS with full customization</p>
					</Card.Content>
				</Card.Root>

				<!-- Vite -->
				<Card.Root
					class="bg-white border-4 border-black shadow-lg hover:shadow-xl transition-all group"
				>
					<Card.Content class="p-8 text-center">
						<div
							class="w-20 h-20 bg-green-500 text-white flex items-center justify-center text-3xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform"
						>
							V
						</div>
						<h3 class="text-xl font-bold text-black mb-2">Vite</h3>
						<p class="text-muted-foreground text-sm">Lightning-fast build tool and dev server</p>
					</Card.Content>
				</Card.Root>
			</div>

			<!-- Integration Features -->
			<div class="grid lg:grid-cols-3 gap-8 mb-16">
				<div class="text-center">
					<div class="w-16 h-16 bg-primary flex items-center justify-center mx-auto mb-4">
						<Zap class="w-8 h-8 text-black" />
					</div>
					<h3 class="text-xl font-bold text-black mb-2">Server-Side Rendering</h3>
					<p class="text-muted-foreground">
						Components work perfectly with SvelteKit's SSR for optimal SEO and performance.
					</p>
				</div>
				<div class="text-center">
					<div class="w-16 h-16 bg-primary flex items-center justify-center mx-auto mb-4">
						<CheckCircle class="w-8 h-8 text-black" />
					</div>
					<h3 class="text-xl font-bold text-black mb-2">shadcn-svelte Compatible</h3>
					<p class="text-muted-foreground">
						Built on top of shadcn-svelte's proven component architecture.
					</p>
				</div>
				<div class="text-center">
					<div class="w-16 h-16 bg-primary flex items-center justify-center mx-auto mb-4">
						<Wrench class="w-8 h-8 text-black" />
					</div>
					<h3 class="text-xl font-bold text-black mb-2">Easy Integration</h3>
					<p class="text-muted-foreground">
						Install with a single command and start building immediately.
					</p>
				</div>
			</div>

			<!-- Code Example -->
			<div class="bg-gray-900 border-4 border-black p-8 shadow-2xl">
				<div class="flex items-center space-x-2 mb-6">
					<div class="w-3 h-3 bg-red-500"></div>
					<div class="w-3 h-3 bg-yellow-500"></div>
					<div class="w-3 h-3 bg-green-500"></div>
					<div class="ml-4 text-gray-400 text-sm font-mono">Installation</div>
				</div>
				<div class="space-y-4">
					<div class="flex items-center space-x-4">
						<span class="text-green-400 font-mono">$</span>
						<span class="text-white font-mono">npx shadcn-svelte@latest init</span>
					</div>
					<div class="flex items-center space-x-4">
						<span class="text-green-400 font-mono">$</span>
						<span class="text-white font-mono">npx shadcn-svelte@latest add button card input</span>
					</div>
					<div class="text-gray-400 text-sm">✓ Components added to your SvelteKit project</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer class="bg-black text-white py-8">
		<div class="container mx-auto px-4">
			<div class="flex flex-col md:flex-row justify-between items-center">
				<div class="flex space-x-6 mb-4 md:mb-0">
					<a href="#" class="hover:text-primary">Twitter</a>
					<a href="#" class="hover:text-primary">GitHub</a>
					<a href="#" class="hover:text-primary">Documentation</a>
				</div>
				<div class="text-sm text-gray-400">Built by Arif Hossain.</div>
			</div>
		</div>
	</footer>
</div>

<style>
	/* Custom styles for the retro aesthetic */
	:global(.container) {
		max-width: 1200px;
	}

	/* Decorative stars */
	:global(.bg-primary) {
		position: relative;
	}
</style>
