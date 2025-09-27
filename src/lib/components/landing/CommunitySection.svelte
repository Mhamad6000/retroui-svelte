<script lang="ts">
	import { onMount } from "svelte";
	import * as Button from "$registry/ui/button/index.js";
	import * as Alert from "$registry/ui/alert/index.js";
	import * as Avatar from "$registry/ui/avatar/index.js";
	import { Star, InfoIcon } from "@lucide/svelte";

	// Use reactive data from the store
	let contributors: {
		id: number;
		username: string;
		contributions: number;
		profileUrl: string;
		avatar: string;
		name: string;
		role: string;
		isAdmin: boolean;
	}[] = $state([]);
	let isLoadingCollaborators = $state(false);
	let collaboratorsError = $state<string | null>(null);

	async function getGithubStarCount() {
		try {
			const res = await fetch("https://ungh.cc/repos/Mhamad6000/retroui-svelte");
			const data = await res.json();
			return data.repo?.stars ?? 10;
		} catch (error) {
			console.error(error);
			return 10;
		}
	}
	async function getGithubContributors() {
		try {
			const res = await fetch("https://ungh.cc/repos/Mhamad6000/retroui-svelte/contributors");
			const data = await res.json();
			return data.contributors.map((c: any) => ({
				id: c.id,
				username: c.username,
				contributions: c.contributions,
				profileUrl: `https://github.com/${c.username}`,
				avatar: `https://github.com/${c.username}.png`,
				name: c.username,
				role: "Contributor",
				isAdmin: c.username === "Mhamad6000" || c.username === "ariflogs", // Adjust based on actual admins
			}));
		} catch (error: any) {
			console.error(error);
			collaboratorsError = error.message;
			return [];
		}
	}

	let stars = $state(10);

	onMount(async () => {
		stars = await getGithubStarCount();
		console.log(stars);
		isLoadingCollaborators = true;
		contributors = await getGithubContributors();
		isLoadingCollaborators = false;
	});

	$inspect(stars);
</script>

<section class="py-20 px-4 bg-primary">
	<div class="container mx-auto text-center">
		<h2 class="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
			A Growing Community of Developers and Designers
		</h2>
		<p class="text-xl text-secondary mb-12 max-w-2xl mx-auto">
			RetroUI Svelte is free and open-source, and it is made possible by our awesome contributors.
		</p>

		<div class="flex justify-center items-center space-x-16 mb-12">
			<div class="text-center">
				<div class="relative">
					<div class="text-6xl font-bold text-secondary mb-2">{stars}</div>
					<div class="absolute -top-4 -left-4">
						<Star class="w-8 h-8 text-secondary" />
					</div>
				</div>
				<div class="text-lg font-medium text-secondary">Github Stars</div>
			</div>
		</div>

		<!-- Contributors -->
		<div class="flex flex-wrap justify-center gap-4 mb-12">
			{#if isLoadingCollaborators}
				<!-- Loading state -->
				<div class="flex items-center justify-center w-full py-8">
					<div class="animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
					<span class="ml-2">Loading contributors...</span>
				</div>
			{:else if collaboratorsError}
				<!-- Error state -->
				<div class="flex items-center justify-center w-full py-8">
					<Alert.Root status="warning" class="items-center">
						<InfoIcon className="size-4 mr-4" />
						<Alert.Title class="text-sm"
							>Unable to load contributors: {collaboratorsError}</Alert.Title
						>
					</Alert.Root>
				</div>
			{:else if contributors.length > 0}
				<!-- Contributors list -->
				{#each contributors as contributor}
					<a
						href={contributor.profileUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="group relative"
						title={`${contributor.name} (${contributor.role})`}
					>
						<Avatar.Root class="w-16 h-16 border-2 border-black">
							<Avatar.Image src={contributor.avatar} alt={contributor.name} />
							<Avatar.Fallback>{contributor.name.charAt(0).toUpperCase()}</Avatar.Fallback>
						</Avatar.Root>
						{#if contributor.isAdmin}
							<div
								class="absolute top-0 right-0 w-4 h-4 bg-primary border border-black rounded-full flex items-center justify-center"
							>
								<Star class="w-2 h-2 text-secondary" />
							</div>
						{/if}
					</a>
				{/each}
			{:else}
				<!-- Fallback when no contributors -->
				<div class="flex items-center justify-center w-full py-8">
					<span class="text-muted-foreground">No contributors found</span>
				</div>
			{/if}
		</div>

		<div class="flex justify-center space-x-4">
			<Button.Root
				href="https://github.com/Mhamad6000/retroui-svelte"
				variant="default"
				class="!bg-white"
				target="_blank"
				size="lg"
			>
				<Star class="w-5 h-5 mr-2" />
				Star on Github
			</Button.Root>
		</div>
	</div>
</section>
