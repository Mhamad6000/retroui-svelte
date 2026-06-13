<script lang="ts">
	import { Badge } from "$registry/ui/badge/index.js";
	import { Button } from "$registry/ui/button/index.js";
	import { Input } from "$registry/ui/input/index.js";
	import { Textarea } from "$registry/ui/textarea/index.js";
	import { Separator } from "$registry/ui/separator/index.js";
	import {
		ShoppingCart,
		Menu,
		X,
		Sparkles,
		Palette,
		Download,
		Star,
		Instagram,
		Twitter,
		Facebook,
		Mail,
		ArrowRight,
	} from "@lucide/svelte";

	const data = {
		brand: "Retro Characters",
		tagline: "Hand-drawn cartoon characters with a vintage soul.",
		hero: {
			title: "Bring Retro Vibes to Your Projects",
			subtitle:
				"A curated collection of nostalgic, customizable cartoon characters perfect for apps, websites, stickers, and merch.",
			ctaPrimary: "Shop Characters",
			ctaSecondary: "Customize Yours",
		},
		stats: [
			{ value: "120+", label: "Characters" },
			{ value: "50+", label: "Outfits" },
			{ value: "4k", label: "PNG exports" },
			{ value: "∞", label: "Combinations" },
		],
		products: [
			{ id: 1, name: "Pixel Buddy", price: "$12", tag: "Best Seller", color: "#D94A7A" },
			{ id: 2, name: "Cassette Cat", price: "$15", tag: "New", color: "#3AAFA9" },
			{ id: 3, name: "Disco Duck", price: "$10", tag: "Popular", color: "#F4D03F" },
			{ id: 4, name: "Arcade Alien", price: "$14", tag: "Bundle", color: "#8E44AD" },
			{ id: 5, name: "Synth Bear", price: "$18", tag: "Premium", color: "#E67E22" },
			{ id: 6, name: "Boombox Bunny", price: "$13", tag: "Sale", color: "#D94A7A" },
		],
		features: [
			{
				title: "Pick a base",
				description: "Browse our library of hand-drawn retro characters.",
				icon: Sparkles,
			},
			{
				title: "Customize looks",
				description: "Change outfits, colors, accessories, and poses.",
				icon: Palette,
			},
			{
				title: "Download & use",
				description: "Get high-res PNGs, SVGs, or Figma components.",
				icon: Download,
			},
		],
		customize: {
			title: "Have a character idea?",
			subtitle:
				"We can turn your sketch, doodle, or dream into a polished retro character ready for any project.",
			cta: "Start a custom request",
		},
		testimonials: [
			{
				quote: "The characters gave our app a warm, nostalgic personality our users love.",
				name: "Jamie Doe",
				role: "Founder, Pixel Studio",
				avatar: "https://i.pravatar.cc/150?u=jamie",
			},
			{
				quote: "Retro Characters delivered exactly the mascot we had in mind. Fast and playful.",
				name: "Sam Lee",
				role: "Design Lead, Arcade Co",
				avatar: "https://i.pravatar.cc/150?u=sam",
			},
		],
		socials: [
			{ label: "Instagram", icon: Instagram, url: "#" },
			{ label: "Twitter", icon: Twitter, url: "#" },
			{ label: "Facebook", icon: Facebook, url: "#" },
		],
		footerLinks: [
			{ label: "Shop", url: "#products" },
			{ label: "Customize", url: "#customize" },
			{ label: "How it works", url: "#how-it-works" },
			{ label: "Contact", url: "#contact" },
		],
		navLinks: [
			{ label: "Shop", url: "#products" },
			{ label: "Customize", url: "#customize" },
			{ label: "How it works", url: "#how-it-works" },
		],
	};

	const {
		brand,
		tagline,
		hero,
		stats,
		products,
		features,
		customize,
		testimonials,
		socials,
		footerLinks,
		navLinks,
	} = data;

	let menuOpen = $state(false);
	let cartCount = $state(0);
	let customIdea = $state("");
	let customEmail = $state("");

	function addToCart() {
		cartCount += 1;
	}

	function submitIdea(e: Event) {
		e.preventDefault();
		customIdea = "";
		customEmail = "";
	}
</script>

<div
	class="retro-characters min-h-screen font-sans"
	style="--rc-bg: #F5F0E6; --rc-fg: #1E1B2E; --rc-primary: #D94A7A; --rc-primary-fg: #ffffff; --rc-secondary: #3AAFA9; --rc-accent: #F4D03F; --rc-card: #FFFDF7; --rc-border: #1E1B2E; --rc-muted: #8A849E;"
>
	{#snippet productIcon(id: number)}
		{#if id === 1}
			<svg viewBox="0 0 120 120" fill="none"
				><rect x="20" y="20" width="80" height="80" rx="16" fill="#D94A7A" /><circle
					cx="45"
					cy="55"
					r="6"
					fill="#fff"
				/><circle cx="75" cy="55" r="6" fill="#fff" /><circle
					cx="47"
					cy="55"
					r="2.5"
					fill="#1E1B2E"
				/><circle cx="77" cy="55" r="2.5" fill="#1E1B2E" /><path
					d="M45 78c8 8 22 8 30 0"
					stroke="#fff"
					stroke-width="4"
					stroke-linecap="round"
				/><rect x="38" y="34" width="12" height="6" rx="3" fill="#F4D03F" /><rect
					x="70"
					y="34"
					width="12"
					height="6"
					rx="3"
					fill="#F4D03F"
				/></svg
			>
		{:else if id === 2}
			<svg viewBox="0 0 120 120" fill="none"
				><circle cx="60" cy="60" r="48" fill="#3AAFA9" /><circle
					cx="44"
					cy="55"
					r="7"
					fill="#fff"
				/><circle cx="76" cy="55" r="7" fill="#fff" /><circle
					cx="46"
					cy="55"
					r="3"
					fill="#1E1B2E"
				/><circle cx="78" cy="55" r="3" fill="#1E1B2E" /><path
					d="M42 76c10 8 26 8 36 0"
					stroke="#fff"
					stroke-width="4"
					stroke-linecap="round"
				/><rect x="34" y="44" width="52" height="28" rx="6" fill="#F4D03F" opacity=".9" /><circle
					cx="44"
					cy="58"
					r="5"
					fill="#1E1B2E"
				/><circle cx="76" cy="58" r="5" fill="#1E1B2E" /><rect
					x="52"
					y="56"
					width="16"
					height="4"
					rx="2"
					fill="#D94A7A"
				/></svg
			>
		{:else if id === 3}
			<svg viewBox="0 0 120 120" fill="none"
				><circle cx="60" cy="65" r="42" fill="#F4D03F" /><ellipse
					cx="45"
					cy="58"
					rx="8"
					ry="10"
					fill="#fff"
				/><ellipse cx="75" cy="58" rx="8" ry="10" fill="#fff" /><circle
					cx="47"
					cy="58"
					r="3.5"
					fill="#1E1B2E"
				/><circle cx="77" cy="58" r="3.5" fill="#1E1B2E" /><path
					d="M48 82c7 6 17 6 24 0"
					stroke="#D94A7A"
					stroke-width="4"
					stroke-linecap="round"
				/><path
					d="M30 40c8-12 52-12 60 0"
					stroke="#3AAFA9"
					stroke-width="5"
					stroke-linecap="round"
				/><circle cx="60" cy="28" r="6" fill="#D94A7A" /></svg
			>
		{:else if id === 4}
			<svg viewBox="0 0 120 120" fill="none"
				><path
					d="M28 60c0-26 18-42 32-42s32 16 32 42c0 22-18 38-32 38S28 82 28 60z"
					fill="#8E44AD"
				/><ellipse cx="42" cy="58" rx="10" ry="12" fill="#fff" /><ellipse
					cx="78"
					cy="58"
					rx="10"
					ry="12"
					fill="#fff"
				/><circle cx="45" cy="58" r="4" fill="#1E1B2E" /><circle
					cx="81"
					cy="58"
					r="4"
					fill="#1E1B2E"
				/><path
					d="M48 82c8 6 16 6 24 0"
					stroke="#F4D03F"
					stroke-width="4"
					stroke-linecap="round"
				/><path
					d="M22 48c-4-8 6-14 10-6"
					stroke="#3AAFA9"
					stroke-width="4"
					stroke-linecap="round"
				/><path
					d="M98 48c4-8-6-14-10-6"
					stroke="#3AAFA9"
					stroke-width="4"
					stroke-linecap="round"
				/></svg
			>
		{:else if id === 5}
			<svg viewBox="0 0 120 120" fill="none"
				><circle cx="60" cy="66" r="40" fill="#E67E22" /><circle
					cx="34"
					cy="42"
					r="10"
					fill="#E67E22"
				/><circle cx="86" cy="42" r="10" fill="#E67E22" /><circle
					cx="44"
					cy="60"
					r="7"
					fill="#fff"
				/><circle cx="76" cy="60" r="7" fill="#fff" /><circle
					cx="46"
					cy="60"
					r="3"
					fill="#1E1B2E"
				/><circle cx="78" cy="60" r="3" fill="#1E1B2E" /><ellipse
					cx="60"
					cy="78"
					rx="10"
					ry="7"
					fill="#F4D03F"
				/><rect x="30" y="52" width="60" height="8" rx="4" fill="#3AAFA9" opacity=".8" /></svg
			>
		{:else if id === 6}
			<svg viewBox="0 0 120 120" fill="none"
				><ellipse cx="60" cy="70" rx="38" ry="34" fill="#D94A7A" /><ellipse
					cx="44"
					cy="62"
					rx="9"
					ry="11"
					fill="#fff"
				/><ellipse cx="76" cy="62" rx="9" ry="11" fill="#fff" /><circle
					cx="46"
					cy="62"
					r="3.5"
					fill="#1E1B2E"
				/><circle cx="78" cy="62" r="3.5" fill="#1E1B2E" /><path
					d="M48 84c8 5 16 5 24 0"
					stroke="#fff"
					stroke-width="4"
					stroke-linecap="round"
				/><path
					d="M28 44c0-12 10-20 16-14"
					stroke="#F4D03F"
					stroke-width="5"
					stroke-linecap="round"
				/><path
					d="M92 44c0-12-10-20-16-14"
					stroke="#F4D03F"
					stroke-width="5"
					stroke-linecap="round"
				/><rect x="32" y="88" width="56" height="14" rx="4" fill="#1E1B2E" /><circle
					cx="42"
					cy="95"
					r="4"
					fill="#3AAFA9"
				/><circle cx="78" cy="95" r="4" fill="#3AAFA9" /></svg
			>
		{/if}
	{/snippet}

	<!-- NAV -->
	<nav
		class="sticky top-0 z-50 border-b-2 bg-[var(--rc-bg)]"
		style="border-color: var(--rc-border);"
	>
		<div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
			<a
				href="#top"
				class="flex items-center gap-2 font-head text-2xl tracking-tight text-[var(--rc-fg)]"
			>
				<span
					class="flex size-8 items-center justify-center rounded-lg bg-[var(--rc-primary)] text-[var(--rc-primary-fg)]"
				>
					<Sparkles class="size-5" />
				</span>
				{brand}
			</a>

			<div class="hidden items-center gap-8 md:flex">
				{#each navLinks as link (link.label)}
					<a
						href={link.url}
						rel="external"
						class="text-sm font-medium text-[var(--rc-fg)] hover:text-[var(--rc-primary)]"
						>{link.label}</a
					>
				{/each}
			</div>

			<div class="flex items-center gap-3">
				<Button
					variant="outline"
					size="icon"
					class="relative border-2 border-[var(--rc-border)] bg-[var(--rc-card)] text-[var(--rc-fg)] hover:bg-[var(--rc-accent)] hover:text-[var(--rc-fg)]"
				>
					<ShoppingCart class="size-5" />
					{#if cartCount > 0}
						<span
							class="absolute -right-1.5 -top-1.5 flex size-5 items-center justify-center rounded-full bg-[var(--rc-primary)] text-[10px] font-bold text-[var(--rc-primary-fg)]"
							>{cartCount}</span
						>
					{/if}
				</Button>
				<Button
					class="hidden border-2 border-[var(--rc-border)] bg-[var(--rc-primary)] text-[var(--rc-primary-fg)] hover:bg-[var(--rc-primary)]/90 md:inline-flex"
					style="box-shadow: 3px 3px 0 0 var(--rc-border);">Get Started</Button
				>
				<Button
					size="icon"
					class="md:hidden text-black bg-transparent!"
					onclick={() => (menuOpen = !menuOpen)}
				>
					{#if menuOpen}<X class="size-5" />{:else}<Menu class="size-5 text-black" />{/if}
				</Button>
			</div>
		</div>

		{#if menuOpen}
			<div class="border-t-2 border-[var(--rc-border)] bg-[var(--rc-bg)] px-4 py-4 md:hidden">
				<div class="flex flex-col gap-3">
					{#each navLinks as link (link.label)}
						<a
							href={link.url}
							rel="external"
							class="text-sm font-medium text-[var(--rc-fg)]"
							onclick={() => (menuOpen = false)}>{link.label}</a
						>
					{/each}
					<Button
						class="mt-2 w-full border-2 border-[var(--rc-border)] bg-[var(--rc-primary)] text-[var(--rc-primary-fg)]"
						style="box-shadow: 3px 3px 0 0 var(--rc-border);">Get Started</Button
					>
				</div>
			</div>
		{/if}
	</nav>

	<!-- HERO -->
	<section
		class="relative overflow-hidden border-b-2 border-[var(--rc-border)] bg-[var(--rc-bg)] py-16 md:py-24"
	>
		<div class="mx-auto max-w-6xl px-4">
			<div class="grid gap-12 lg:grid-cols-2 lg:items-center">
				<div class="flex flex-col gap-6">
					<Badge
						class="w-fit border-2 border-[var(--rc-border)] bg-[var(--rc-accent)] text-[var(--rc-fg)] hover:bg-[var(--rc-accent)]"
						>New drops every Friday</Badge
					>
					<h1 class="font-head text-4xl leading-[1.1] text-[var(--rc-fg)] md:text-6xl lg:text-7xl">
						{hero.title}
					</h1>
					<p class="max-w-md text-lg text-[var(--rc-muted)]">{hero.subtitle}</p>
					<div class="flex flex-wrap gap-3">
						<Button
							href="#products"
							class="border-2 border-[var(--rc-border)] bg-[var(--rc-primary)] text-[var(--rc-primary-fg)] hover:bg-[var(--rc-primary)]/90"
							style="box-shadow: 4px 4px 0 0 var(--rc-border);">{hero.ctaPrimary}</Button
						>
						<Button
							href="#customize"
							variant="outline"
							class="border-2 border-[var(--rc-border)] bg-[var(--rc-card)] text-[var(--rc-fg)] hover:bg-[var(--rc-secondary)] hover:text-[var(--rc-primary-fg)]"
							>{hero.ctaSecondary}</Button
						>
					</div>

					<div class="mt-4 grid grid-cols-4 gap-4 border-t-2 border-[var(--rc-border)]/20 pt-6">
						{#each stats as stat (stat.label)}
							<div>
								<div class="font-head text-2xl text-[var(--rc-fg)] md:text-3xl">{stat.value}</div>
								<div class="text-xs text-[var(--rc-muted)]">{stat.label}</div>
							</div>
						{/each}
					</div>
				</div>

				<div class="relative">
					<div
						class="absolute -left-4 -top-4 z-0 hidden h-full w-full rounded-2xl border-2 border-[var(--rc-border)] bg-[var(--rc-secondary)] lg:block"
					></div>
					<div
						class="relative z-10 grid grid-cols-2 gap-4 rounded-2xl border-2 border-[var(--rc-border)] bg-[var(--rc-card)] p-5 shadow-[6px_6px_0_0_var(--rc-border)]"
					>
						{#each products.slice(0, 4) as product (product.id)}
							<div
								class="flex flex-col items-center gap-2 rounded-xl border-2 border-[var(--rc-border)] bg-[var(--rc-bg)] p-3 transition-transform hover:-translate-y-1"
							>
								<div class="size-24" style="color: {product.color};">
									{@render productIcon(product.id)}
								</div>
								<span class="font-head text-sm text-[var(--rc-fg)]">{product.name}</span>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- PRODUCTS -->
	<section id="products" class="bg-[var(--rc-bg)] py-16 md:py-24">
		<div class="mx-auto max-w-6xl px-4">
			<div class="mb-10 text-center">
				<Badge
					class="mb-3 border-2 border-[var(--rc-border)] bg-[var(--rc-secondary)] text-[var(--rc-primary-fg)] hover:bg-[var(--rc-secondary)]"
					>The Shop</Badge
				>
				<h2 class="font-head text-3xl text-[var(--rc-fg)] md:text-5xl">Retro Characters</h2>
				<p class="mx-auto mt-3 max-w-lg text-[var(--rc-muted)]">
					Pick a character, mix outfits, and export in any format you need.
				</p>
			</div>

			<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each products as product (product.id)}
					<div
						class="group relative flex flex-col gap-4 rounded-2xl border-2 border-[var(--rc-border)] bg-[var(--rc-card)] p-5 transition-all hover:-translate-y-1"
						style="box-shadow: 4px 4px 0 0 var(--rc-border);"
					>
						<div class="absolute -right-2 -top-2 z-10">
							<Badge
								class="border-2 border-[var(--rc-border)] bg-[var(--rc-accent)] text-[var(--rc-fg)]"
								>{product.tag}</Badge
							>
						</div>
						<div
							class="flex aspect-square items-center justify-center rounded-xl border-2 border-[var(--rc-border)] bg-[var(--rc-bg)]"
							style="color: {product.color};"
						>
							<div class="size-40">{@render productIcon(product.id)}</div>
						</div>
						<div>
							<h3 class="font-head text-lg text-[var(--rc-fg)]">{product.name}</h3>
							<p class="text-sm text-[var(--rc-muted)]">High-res PNG + SVG bundle</p>
						</div>
						<div class="mt-auto flex items-center justify-between">
							<span class="font-head text-xl text-[var(--rc-fg)]">{product.price}</span>
							<Button
								size="sm"
								class="border-2 border-[var(--rc-border)] bg-[var(--rc-primary)] text-[var(--rc-primary-fg)] hover:bg-[var(--rc-primary)]/90"
								style="box-shadow: 2px 2px 0 0 var(--rc-border);"
								onclick={addToCart}>Add to Cart</Button
							>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- CUSTOMIZE -->
	<section
		id="customize"
		class="border-y-2 border-[var(--rc-border)] bg-[var(--rc-secondary)] py-16 md:py-24"
	>
		<div class="mx-auto max-w-6xl px-4">
			<div class="grid gap-10 lg:grid-cols-2 lg:items-center">
				<div>
					<Badge
						class="mb-3 border-2 border-[var(--rc-border)] bg-[var(--rc-accent)] text-[var(--rc-fg)] hover:bg-[var(--rc-accent)]"
						>Custom Work</Badge
					>
					<h2 class="font-head text-3xl text-[var(--rc-primary-fg)] md:text-5xl">
						{customize.title}
					</h2>
					<p class="mt-4 max-w-md text-lg text-[var(--rc-primary-fg)]/80">{customize.subtitle}</p>
					<ul class="mt-6 space-y-3">
						{#each ["Original character design", "Unlimited revisions", "Commercial license included", "Source files delivered"] as item (item)}
							<li class="flex items-center gap-2 text-[var(--rc-primary-fg)]">
								<Star class="size-4 fill-[var(--rc-accent)] text-[var(--rc-accent)]" />
								{item}
							</li>
						{/each}
					</ul>
				</div>

				<form
					onsubmit={submitIdea}
					class="rounded-2xl border-2 border-[var(--rc-border)] bg-[var(--rc-card)] p-6 shadow-[6px_6px_0_0_var(--rc-border)]"
				>
					<h3 class="mb-4 font-head text-xl text-[var(--rc-fg)]">Tell us your idea</h3>
					<div class="space-y-4">
						<div>
							<label for="idea" class="mb-1 block text-sm font-medium text-[var(--rc-fg)]"
								>Describe your character</label
							>
							<Textarea
								id="idea"
								placeholder="A 90s roller-skating robot with sunglasses..."
								class="min-h-[120px] border-2 border-[var(--rc-border)] bg-[var(--rc-bg)] text-[var(--rc-fg)] placeholder:text-[var(--rc-muted)]"
								bind:value={customIdea}
							/>
						</div>
						<div>
							<label for="email" class="mb-1 block text-sm font-medium text-[var(--rc-fg)]"
								>Email</label
							>
							<Input
								id="email"
								type="email"
								placeholder="you@example.com"
								class="border-2 border-[var(--rc-border)] bg-[var(--rc-bg)] text-[var(--rc-fg)] placeholder:text-[var(--rc-muted)]"
								bind:value={customEmail}
							/>
						</div>
						<Button
							type="submit"
							class="w-full border-2 border-[var(--rc-border)] bg-[var(--rc-primary)] text-[var(--rc-primary-fg)] hover:bg-[var(--rc-primary)]/90"
							style="box-shadow: 3px 3px 0 0 var(--rc-border);">{customize.cta}</Button
						>
					</div>
				</form>
			</div>
		</div>
	</section>

	<!-- HOW IT WORKS -->
	<section id="how-it-works" class="bg-[var(--rc-bg)] py-16 md:py-24">
		<div class="mx-auto max-w-6xl px-4">
			<div class="mb-10 text-center">
				<Badge
					class="mb-3 border-2 border-[var(--rc-border)] bg-[var(--rc-primary)] text-[var(--rc-primary-fg)] hover:bg-[var(--rc-primary)]"
					>How it works</Badge
				>
				<h2 class="font-head text-3xl text-[var(--rc-fg)] md:text-5xl">From idea to asset</h2>
			</div>
			<div class="grid gap-6 md:grid-cols-3">
				{#each features as feature, i (feature.title)}
					<div
						class="relative rounded-2xl border-2 border-[var(--rc-border)] bg-[var(--rc-card)] p-6"
						style="box-shadow: 4px 4px 0 0 var(--rc-border);"
					>
						<div
							class="mb-4 flex size-12 items-center justify-center rounded-xl border-2 border-[var(--rc-border)] bg-[var(--rc-accent)] text-[var(--rc-fg)]"
						>
							<feature.icon class="size-6" />
						</div>
						<div class="absolute right-4 top-4 font-head text-4xl text-[var(--rc-border)]/20">
							0{i + 1}
						</div>
						<h3 class="font-head text-lg text-[var(--rc-fg)]">{feature.title}</h3>
						<p class="mt-2 text-sm text-[var(--rc-muted)]">{feature.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- TESTIMONIALS -->
	<section class="border-y-2 border-[var(--rc-border)] bg-[var(--rc-bg)] py-16 md:py-24">
		<div class="mx-auto max-w-6xl px-4">
			<div class="mb-10 text-center">
				<Badge
					class="mb-3 border-2 border-[var(--rc-border)] bg-[var(--rc-secondary)] text-[var(--rc-primary-fg)] hover:bg-[var(--rc-secondary)]"
					>Loved by creators</Badge
				>
				<h2 class="font-head text-3xl text-[var(--rc-fg)] md:text-5xl">What they say</h2>
			</div>
			<div class="grid gap-6 md:grid-cols-2">
				{#each testimonials as t (t.name)}
					<div
						class="rounded-2xl border-2 border-[var(--rc-border)] bg-[var(--rc-card)] p-6"
						style="box-shadow: 4px 4px 0 0 var(--rc-border);"
					>
						<div class="mb-4 flex gap-0.5">
							{#each Array(5) as _, i (i)}<Star
									class="size-4 fill-[var(--rc-accent)] text-[var(--rc-accent)]"
								/>{/each}
						</div>
						<p class="mb-5 text-[var(--rc-fg)]">“{t.quote}”</p>
						<div class="flex items-center gap-3">
							<img
								src={t.avatar}
								alt={t.name}
								class="size-10 rounded-full border-2 border-[var(--rc-border)] object-cover"
							/>
							<div>
								<div class="font-head text-sm text-[var(--rc-fg)]">{t.name}</div>
								<div class="text-xs text-[var(--rc-muted)]">{t.role}</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- FOOTER -->
	<footer class="bg-[var(--rc-fg)] text-[var(--rc-bg)]">
		<div class="mx-auto max-w-6xl px-4 py-12">
			<div class="grid gap-10 md:grid-cols-3">
				<div>
					<a href="#top" class="flex items-center gap-2 font-head text-2xl">
						<span
							class="flex size-8 items-center justify-center rounded-lg bg-[var(--rc-primary)] text-[var(--rc-primary-fg)]"
							><Sparkles class="size-5" /></span
						>
						{brand}
					</a>
					<p class="mt-3 max-w-xs text-sm text-[var(--rc-bg)]/70">{tagline}</p>
				</div>
				<div>
					<h4 class="mb-3 font-head text-sm uppercase tracking-wide">Links</h4>
					<ul class="space-y-2">
						{#each footerLinks as link (link.label)}
							<li>
								<a
									href={link.url}
									rel="external"
									class="text-sm text-[var(--rc-bg)]/70 hover:text-[var(--rc-bg)]">{link.label}</a
								>
							</li>
						{/each}
					</ul>
				</div>
				<div>
					<h4 class="mb-3 font-head text-sm uppercase tracking-wide">Connect</h4>
					<div class="flex gap-3">
						{#each socials as social (social.label)}
							<Button
								href={social.url}
								variant="outline"
								size="icon"
								class="border-[var(--rc-bg)]/30 bg-transparent text-[var(--rc-bg)] hover:border-[var(--rc-bg)] hover:bg-[var(--rc-bg)] hover:text-[var(--rc-fg)]"
							>
								<social.icon class="size-4" />
							</Button>
						{/each}
					</div>
					<div class="mt-4 flex items-center gap-2 text-sm text-[var(--rc-bg)]/70">
						<Mail class="size-4" /> hello@retrocharacters.studio
					</div>
				</div>
			</div>
			<Separator class="my-8 bg-[var(--rc-bg)]/20" />
			<div class="flex flex-col items-center justify-between gap-3 md:flex-row">
				<span class="text-xs text-[var(--rc-bg)]/60"
					>© {new Date().getFullYear()} {brand}. All rights reserved.</span
				>
				<span class="text-xs text-[var(--rc-bg)]/60">Made with retro love.</span>
			</div>
		</div>
	</footer>
</div>
