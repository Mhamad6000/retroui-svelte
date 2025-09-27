<script lang="ts">
	import * as Button from "$registry/ui/button/index.js";
	import * as Badge from "$registry/ui/badge/index.js";
	import * as Alert from "$registry/ui/alert/index.js";
	import { Star, Zap, InfoIcon } from "@lucide/svelte";
</script>

<section class="min-h-screen w-full bg-card/60 relative">
	<!-- Grid Background -->
	<div
		class="absolute inset-0 z-0"
		style="
			background-image: linear-gradient(to right, var(--border) 0.3px, transparent 1px),
			linear-gradient(to bottom, var(--border) 0.3px, transparent 1px);
			background-size: 40px 40px;"
	></div>

	<!-- Hero Content -->
	<div class="relative z-10 container mx-auto px-4 py-24 min-h-screen flex items-center">
		<div class="grid lg:grid-cols-2 gap-16 items-center w-full">
			<div class="space-y-8">
				<!-- Announcement Badge -->
				<div class="inline-flex items-center space-x-2">
					<Alert.Root status="warning" class="items-center">
						<InfoIcon className="size-4 mr-4" />
						<Alert.Title>Introducing RetroUI Svelte</Alert.Title>
					</Alert.Root>
				</div>

				<!-- Main Headline -->
				<div class="space-y-6">
					<h1 class="text-6xl lg:text-7xl font-bold leading-tight">
						Build <span class="relative"> amazing </span>
						<br />
						Svelte apps
					</h1>
					<p class="text-xl lg:text-2xl dark:text-muted-foreground max-w-2xl leading-relaxed">
						Beautiful RetroUI component library for Svelte. Copy-paste components directly or
						install via CLI with 40+ components, 16 themes, and endless possibilities.
					</p>
				</div>

				<!-- CTA Buttons -->
				<div class="flex flex-col sm:flex-row gap-4">
					<Button.Root size="lg" href="/docs">Get Started</Button.Root>
				</div>
			</div>

			<!-- Hero Code Example -->
			<div class="relative mx-2 sm:mx-0">
				<!-- Main Code Window -->
				<div class="bg-gray-900 border-2 sm:border-4 border-black shadow-lg overflow-hidden">
					<!-- Window Header -->
					<div
						class="bg-gray-800 px-2 sm:px-4 py-2 sm:py-3 flex items-center space-x-1 sm:space-x-2 border-b border-gray-700"
					>
						<div class="w-2 h-2 sm:w-3 sm:h-3 bg-red-500"></div>
						<div class="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500"></div>
						<div class="w-2 h-2 sm:w-3 sm:h-3 bg-green-500"></div>
						<div class="ml-2 sm:ml-4 text-gray-400 text-xs sm:text-sm font-mono">Terminal</div>
					</div>

					<!-- Installation Command -->
					<div class="p-3 sm:p-6 bg-gray-900">
						<div class="space-y-4">
							<div class="flex items-center space-x-2">
								<span class="text-green-400">$</span>
								<span class="text-white font-mono"
									>npx shadcn-svelte@latest add https://retroui-svelte.netlify.app/r/button.json</span
								>
							</div>
							<div class="text-gray-400 text-sm">✓ Component installed successfully!</div>
							<div class="text-gray-400 text-sm mt-4">
								Ready to build beautiful Svelte apps in minutes
							</div>
						</div>
					</div>
				</div>

				<!-- Floating Elements - Hidden on very small screens, adjusted for mobile -->
				<div
					class="hidden absolute -top-4 -right-4 w-12 h-12 sm:w-16 sm:h-16 bg-primary border-2 sm:border-4 border-black sm:flex items-center justify-center shadow-lg"
				>
					<Star class="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
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
					<Star class="w-4 h-4 text-primary-foreground" />
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
