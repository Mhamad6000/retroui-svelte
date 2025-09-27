<script lang="ts">
	import * as Card from "$registry/ui/card/index.js";
	import { Copy, Wrench, CheckCircle } from "@lucide/svelte";
</script>

<section class="py-24 px-4 bg-background">
	<div class="container mx-auto">
		<div class="text-center mb-20">
			<h2 class="text-5xl lg:text-6xl font-bold mb-6">
				Why Choose <span class="relative">
					RetroUI Svelte?
					<div
						class="absolute -bottom-2 left-0 w-full h-4 bg-primary -z-10 transform -skew-x-12"
					></div>
				</span>
			</h2>
			<p class="text-xl text-muted-foreground max-w-3xl mx-auto">
				Built specifically for Svelte with modern development practices and beautiful design
				patterns.
			</p>
		</div>

		<div class="grid lg:grid-cols-2 gap-16 items-center mb-20">
			<!-- Features List -->
			<div class="space-y-8">
				<div class="grid gap-6">
					<Card.Root>
						<div>
							<Card.Title class="font-bold text-xl  mb-2 flex flex-row items-center gap-2">
								<div
									class="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0 border-2 border-black"
								>
									<Copy class="w-6 h-6 text-primary-foreground" />
								</div>
								<p>Copy-Paste Ready</p>
							</Card.Title>
							<Card.Content class="text-muted-foreground">
								Components you can copy-paste directly or install via CLI. No complex setup
								required.
							</Card.Content>
						</div>
					</Card.Root>

					<Card.Root>
						<Card.Title class="font-bold text-xl  mb-2 flex flex-row items-center gap-2">
							<div
								class="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0 border-2 border-black"
							>
								<Wrench class="w-6 h-6 text-primary-foreground" />
							</div>
							<p>Tailwind Based</p>
						</Card.Title>
						<Card.Content class="text-muted-foreground">
							Fully customizable with Tailwind CSS. Override any style with utility classes.
						</Card.Content>
					</Card.Root>

					<Card.Root>
						<Card.Title class="font-bold text-xl  mb-2 flex flex-row items-center gap-2">
							<div
								class="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0 border-2 border-black"
							>
								<CheckCircle class="w-6 h-6 text-primary-foreground" />
							</div>
							<p>Type Safe</p>
						</Card.Title>
						<Card.Content class="text-muted-foreground">
							Full TypeScript support for all components with excellent IntelliSense.
						</Card.Content>
					</Card.Root>
				</div>
			</div>

			<!-- Interactive Code Examples -->
			<div class="relative">
				<!-- Replace terminal with component preview -->
				<div class="bg-gray-900 border-4 border-black shadow-lg overflow-hidden">
					<!-- Code Window Header -->
					<div
						class="bg-gray-800 px-2 sm:px-4 py-2 sm:py-3 flex items-center space-x-1 sm:space-x-2 border-b border-gray-700"
					>
						<div class="w-2 h-2 sm:w-3 sm:h-3 bg-red-500"></div>
						<div class="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500"></div>
						<div class="w-2 h-2 sm:w-3 sm:h-3 bg-green-500"></div>
						<div class="ml-2 sm:ml-4 text-gray-400 text-xs sm:text-sm font-mono">
							Component Preview
						</div>
					</div>

					<!-- Component Preview Content -->
					<div class="p-3 sm:p-6 bg-gray-900">
						<pre
							class="text-green-400 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap sm:whitespace-pre"><code
								class="language-svelte"
								>&lt;script&gt;
  import * as Button from "$registry/ui/button";
  import * as Card from "$registry/ui/card";
&lt;/script&gt;

&lt;Card.Root class="w-80"&gt;
  &lt;Card.Header&gt;
    &lt;Card.Title&gt;RetroUI Components&lt;/Card.Title&gt;
  &lt;/Card.Header&gt;
  &lt;Card.Content class="space-y-4"&gt;
    &lt;p class="text-sm text-muted-foreground"&gt;
      Beautiful, accessible components ready to use.
    &lt;/p&gt;
    &lt;Button.Root class="w-full"&gt;
      Get Started
    &lt;/Button.Root&gt;
  &lt;/Card.Content&gt;
&lt;/Card.Root&gt;</code
							></pre>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
