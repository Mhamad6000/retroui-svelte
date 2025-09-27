<script lang="ts">
	import * as Card from "$registry/ui/card/index.js";
	import { Rocket, CheckCircle, Wrench } from "@lucide/svelte";
</script>

<section class="min-h-screen w-full bg-background relative">
	<!-- White Sphere Grid Background -->
	<div
		class="absolute inset-0 z-0"
		style="
			background-image: 
				linear-gradient(to right, rgba(255,219,51,0.3) 1px, transparent 1px),
				linear-gradient(to bottom, rgba(255,219,51,0.3) 1px, transparent 1px),
				radial-gradient(circle at 50% 50%, rgba(255,219,51,0.05) 0%, rgba(255,219,51,0.05) 40%, transparent 80%);
			background-size: 32px 32px, 32px 32px, 100% 100%;
		"
	></div>
	<div class="relative z-10 container mx-auto py-24 px-4">
		<div class="text-center mb-20">
			<h2 class="text-5xl lg:text-6xl font-bold mb-6">
				Built for Modern <span class="relative">
					Development
					<div
						class="absolute -bottom-2 left-0 w-full h-3 bg-primary -z-10 transform -skew-x-12"
					></div>
				</span>
			</h2>
			<p class="text-xl text-muted-foreground max-w-3xl mx-auto">
				Built with Svelte 5 runes, TypeScript safety, Tailwind v4 performance, and shadcn-svelte
				compatibility. The modern stack for lightning-fast development.
			</p>
		</div>

		<!-- Technology Grid -->
		<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
			<!-- Svelte 5 -->
			<Card.Root class="transition-all group">
				<Card.Content class="p-8 text-center">
					<div
						class="w-20 h-20 text-white flex items-center justify-center text-3xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform"
					>
						<img src="/23617963.png" alt="Svelte 5" class="size-full object-contain" />
					</div>
					<h3 class="text-xl font-bold mb-2">Svelte 5</h3>
					<p class="text-muted-foreground text-sm">
						Built for the latest Svelte with runes and modern features
					</p>
				</Card.Content>
			</Card.Root>

			<!-- TypeScript -->
			<Card.Root class="transition-all group">
				<Card.Content class="p-8 text-center">
					<div
						class="w-20 h-20 text-white flex items-center justify-center text-3xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform"
					>
						<img src="/typescript.png" alt="TypeScript" class="size-full object-contain" />
					</div>
					<h3 class="text-xl font-bold mb-2">TypeScript</h3>
					<p class="text-muted-foreground text-sm">
						Full type safety with excellent IntelliSense support
					</p>
				</Card.Content>
			</Card.Root>

			<!-- TailwindCSS v4 -->
			<Card.Root class="transition-all group">
				<Card.Content class="p-8 text-center">
					<div
						class="w-20 h-20 text-white flex items-center justify-center text-3xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform"
					>
						<img
							src="/Tailwind_CSS_Logo.svg.png"
							alt="TailwindCSS v4"
							class="size-full object-contain"
						/>
					</div>
					<h3 class="text-xl font-bold mb-2">Tailwind v4</h3>
					<p class="text-muted-foreground text-sm">
						Modern utility-first CSS with zero-runtime overhead
					</p>
				</Card.Content>
			</Card.Root>

			<!-- shadcn-svelte Registry -->
			<Card.Root class="transition-all group">
				<Card.Content class="p-8 text-center">
					<div
						class="w-20 h-20 text-white flex items-center justify-center text-3xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform"
					>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="size-full"
							><rect width="256" height="256" fill="none"></rect><line
								x1="208"
								y1="128"
								x2="128"
								y2="208"
								fill="none"
								stroke="#EB4F27"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="32"
							></line><line
								x1="192"
								y1="40"
								x2="40"
								y2="192"
								fill="none"
								stroke="#EB4F27"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="32"
							></line></svg
						>
					</div>
					<h3 class="text-xl font-bold mb-2">shadcn-svelte</h3>
					<p class="text-muted-foreground text-sm">Compatible registry system for easy installs</p>
				</Card.Content>
			</Card.Root>
		</div>

		<!-- Integration Features -->
		<div class="grid lg:grid-cols-3 gap-8 mb-16">
			<div class="text-center">
				<div
					class="w-16 h-16 bg-primary flex items-center justify-center mx-auto mb-4 border-2 border-black"
				>
					<Rocket class="w-8 h-8 text-primary-foreground" />
				</div>
				<h3 class="text-xl font-bold mb-2">Lightning Fast Development</h3>
				<p class="text-muted-foreground">
					Build beautiful interfaces in minutes, not hours. Copy, paste, and ship faster than ever.
				</p>
			</div>
			<div class="text-center">
				<div
					class="w-16 h-16 bg-primary flex items-center justify-center mx-auto mb-4 border-2 border-black"
				>
					<CheckCircle class="w-8 h-8 text-primary-foreground" />
				</div>
				<h3 class="text-xl font-bold mb-2">shadcn-svelte Compatible</h3>
				<p class="text-muted-foreground">
					Built on top of shadcn-svelte's proven component architecture.
				</p>
			</div>
			<div class="text-center">
				<div
					class="w-16 h-16 bg-primary flex items-center justify-center mx-auto mb-4 border-2 border-black"
				>
					<Wrench class="w-8 h-8 text-primary-foreground" />
				</div>
				<h3 class="text-xl font-bold mb-2">Easy Integration</h3>
				<p class="text-muted-foreground">
					Install components with a single command and start building immediately.
				</p>
			</div>
		</div>

		<!-- Code Example -->
		<div class="bg-gray-900 border-4 border-black p-8 shadow-lg">
			<div class="flex items-center space-x-2 mb-6">
				<div class="w-3 h-3 bg-red-500"></div>
				<div class="w-3 h-3 bg-yellow-500"></div>
				<div class="w-3 h-3 bg-green-500"></div>
				<div class="ml-4 text-gray-400 text-sm font-mono">Installation</div>
			</div>
			<div class="space-y-4">
				<div class="flex items-center space-x-4">
					<span class="text-green-400 font-mono">$</span>
					<span class="text-white font-mono"
						>npx shadcn-svelte@latest add https://retroui-svelte.netlify.app/r/accordion.json</span
					>
				</div>
				<div class="flex items-center space-x-4">
					<span class="text-green-400 font-mono">$</span>
					<span class="text-white font-mono"
						>npx shadcn-svelte@latest add https://retroui-svelte.netlify.app/r/button.json</span
					>
				</div>
				<div class="text-gray-400 text-sm">✓ Components added to your Svelte project</div>
			</div>
		</div>
	</div>
</section>
