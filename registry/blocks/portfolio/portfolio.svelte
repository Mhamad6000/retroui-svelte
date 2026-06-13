<script lang="ts">
	import { Badge } from "$registry/ui/badge/index.js";
	import { Button } from "$registry/ui/button/index.js";
	import * as Alert from "$registry/ui/alert/index.js";
	import { Input } from "$registry/ui/input/index.js";
	import { Textarea } from "$registry/ui/textarea/index.js";
	import { Separator } from "$registry/ui/separator/index.js";
	import { Text } from "$registry/ui/text/index.js";
	import { Tabs, TabsList, TabsTrigger, TabsContent } from "$registry/ui/tabs/index.js";
	import {
		Code,
		Star,
		Mail,
		ArrowUpRight,
		Send,
		Github,
		Twitter,
		Linkedin,
		Link2,
		Rocket,
		Activity,
		Sparkles,
	} from "@lucide/svelte";

	const data = {
		name: "Mhamad",
		title: "Full-Stack Developer & Designer",
		tagline: "I build fast, accessible web apps",
		avatarUrl: "",
		location: "Sulaymaniyah",
		about:
			"Passionate developer with 5+ years of experience shipping modern web products. I specialize in Svelte, TypeScript, and design systems.",
		stats: [
			{ value: "5+", label: "Years" },
			{ value: "30+", label: "Projects" },
			{ value: "15+", label: "Clients" },
			{ value: "99%", label: "Satisfaction" },
		],
		skillGroups: [
			{ category: "Frontend", items: ["Svelte", "TypeScript", "React", "Tailwind CSS", "Next.js"] },
			{ category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "Redis", "GraphQL"] },
			{ category: "Infrastructure", items: ["Docker", "AWS", "CI/CD", "Linux", "Terraform"] },
		],
		projects: [
			{
				title: "RetroUI",
				description: "40+ neubrutalism components for Svelte 5 with 16 themes and CLI installer.",
				tags: ["Svelte", "TypeScript", "Tailwind"],
				url: "#",
			},
			{
				title: "FlowDash",
				description:
					"Real-time analytics dashboard processing 50k events/sec with live WebSocket updates.",
				tags: ["Svelte", "WebSocket", "D3"],
				url: "#",
			},
			{
				title: "Forge CLI",
				description: "Project scaffolding tool generating production-ready full-stack templates.",
				tags: ["Node.js", "CLI", "TypeScript"],
				url: "#",
			},
			{
				title: "PixelForge",
				description:
					"AI-powered design-to-code pipeline converting Figma to clean Svelte components.",
				tags: ["Python", "AI", "Figma"],
				url: "#",
			},
			{
				title: "TaskFlow",
				description: "Kanban-style project management board with real-time collaboration.",
				tags: ["Svelte", "Node.js", "WebSocket"],
				url: "#",
			},
			{
				title: "DevMetrics",
				description: "Developer productivity tracking dashboard with GitHub integration.",
				tags: ["React", "TypeScript", "GitHub API"],
				url: "#",
			},
		],
		steps: [
			{
				title: "Discovery",
				description:
					"We dive into your goals, users, and constraints. I ask the right questions so we build the right thing from day one.",
				icon: Link2,
			},
			{
				title: "Build & Iterate",
				description:
					"I ship working increments weekly. You get real progress, not mockups, and we refine together every step of the way.",
				icon: Activity,
			},
			{
				title: "Launch & Scale",
				description:
					"From deployment to monitoring, I make sure the product is production-ready and your team can own it.",
				icon: Rocket,
			},
		],
		testimonials: [
			{
				quote:
					"Alex delivered a design system that cut our UI development time in half. The components are beautiful and the DX is outstanding.",
				name: "Sarah Chen",
				role: "CTO, TechCorp",
				avatar: "https://i.pravatar.cc/150?u=sarah.chen",
			},
			{
				quote:
					"Clear communication, on-time delivery, and the final product exceeded every expectation. Alex is a true partner.",
				name: "Marcus Rivera",
				role: "Product Lead, Startup Inc",
			},
			{
				quote:
					"I've worked with many developers, but Alex stands out for attention to detail and genuine care about the product.",
				name: "Priya Patel",
				role: "Founder, InnoLabs",
			},
		],
		experience: [
			{
				role: "Senior Frontend Engineer",
				company: "TechCorp",
				period: "2023 - Present",
				description:
					"Leading the design system team. Built a component library used across 12 product teams, reducing UI dev time by 40%.",
				tags: ["Svelte", "Design Systems", "Leadership"],
			},
			{
				role: "Full-Stack Developer",
				company: "Startup Inc",
				period: "2021 - 2023",
				description:
					"Architected a real-time collaboration platform serving 50k+ users. Designed WebSocket infrastructure and component architecture.",
				tags: ["Svelte", "Node.js", "WebSocket"],
			},
			{
				role: "Junior Developer",
				company: "Agency Co",
				period: "2019 - 2021",
				description:
					"Delivered 20+ client projects. Built reusable component patterns that became the agency's internal standard library.",
				tags: ["React", "TypeScript", "CSS"],
			},
		],
		socialLinks: [
			{ label: "GitHub", url: "#", icon: Github, color: "bg-white text-black hover:bg-zinc-200" },
			{
				label: "LinkedIn",
				url: "#",
				icon: Linkedin,
				color: "bg-blue-500 text-white hover:bg-blue-600",
			},
			{
				label: "Twitter",
				url: "#",
				icon: Twitter,
				color: "bg-sky-500 text-white hover:bg-sky-600",
			},
		],
		footerLinks: [
			{ label: "Work", url: "#work" },
			{ label: "Skills", url: "#skills" },
			{ label: "Process", url: "#process" },
			{ label: "Contact", url: "#contact" },
		],
	};

	const {
		name,
		title,
		tagline,
		avatarUrl,
		location,
		about,
		stats,
		skillGroups,
		projects,
		steps,
		testimonials,
		experience,
		socialLinks,
		footerLinks,
	} = data;

	let activeTab = $state("all");
	let contactName = $state("");
	let contactEmail = $state("");
	let contactMessage = $state("");
	let navOpen = $state(false);
	let filteredProjects = $derived(
		projects.filter((p) =>
			activeTab === "all" ? true : p.tags.some((t) => t.toLowerCase() === activeTab)
		)
	);
	const skillBadgeColor = "bg-primary text-primary-foreground";

	const skillTools = [
		{ name: "Svelte", color: "#FF3E00" },
		{ name: "TypeScript", color: "#3178C6" },
		{ name: "React", color: "#61DAFB" },
		{ name: "Tailwind", color: "#06B6D4" },
		{ name: "Node.js", color: "#339933" },
		{ name: "Python", color: "#3776AB" },
		{ name: "PostgreSQL", color: "#4169E1" },
		{ name: "Docker", color: "#2496ED" },
		{ name: "AWS", color: "#FF9900" },
		{ name: "GraphQL", color: "#E10098" },
		{ name: "CI/CD", color: "#22C55E" },
		{ name: "Next.js", color: "#FFFFFF" },
	] as { name: string; color: string }[];

	const stepMeta = [
		{ iconBg: "bg-cyan-500", labelColor: "text-cyan-400", lineColor: "bg-cyan-500" },
		{ iconBg: "bg-primary", labelColor: "text-primary", lineColor: "bg-primary" },
		{ iconBg: "bg-green-500", labelColor: "text-green-400", lineColor: "bg-green-500" },
	];
	const testimonialLayers = [
		["bg-primary", "left-2 top-2"],
		["bg-cyan-400", "left-1.5 top-1.5"],
		["bg-rose-500", "left-1 top-1"],
	];
</script>

<div class="dark bg-background text-foreground">
	<!-- ═══ NAV ═══ -->
	<nav class="sticky top-0 z-50 border-b-2 border-foreground/10 bg-background/95 backdrop-blur-sm">
		<div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5">
			<span class="font-head text-xl">{name.split(" ")[0]}<span class="text-primary">.</span></span>
			<div class="hidden items-center gap-8 md:flex">
				<a
					href="#work"
					class="font-sans text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
					>Work</a
				>
				<a
					href="#skills"
					class="font-sans text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
					>Skills</a
				>
				<a
					href="#process"
					class="font-sans text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
					>Process</a
				>
				<a
					href="#experience"
					class="font-sans text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
					>Experience</a
				>
				<a
					href="#contact"
					class="font-sans text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
					>Contact</a
				>
			</div>
			<div class="hidden md:flex items-center gap-2">
				<Button size="sm" href="#contact">Get In Touch</Button>
			</div>
			<button
				onclick={() => (navOpen = !navOpen)}
				class="flex size-9 items-center justify-center border-2 border-foreground md:hidden"
				aria-label="Menu"
			>
				<div class="flex flex-col gap-1">
					<span class="block h-0.5 w-5 bg-foreground"></span><span
						class="block h-0.5 w-5 bg-foreground"
					></span>
				</div>
			</button>
		</div>
		{#if navOpen}
			<div class="border-t-2 border-foreground/10 bg-card px-4 py-4 md:hidden flex flex-col gap-3">
				<a href="#work" class="font-sans text-sm font-medium" onclick={() => (navOpen = false)}
					>Work</a
				>
				<a href="#skills" class="font-sans text-sm font-medium" onclick={() => (navOpen = false)}
					>Skills</a
				>
				<a href="#process" class="font-sans text-sm font-medium" onclick={() => (navOpen = false)}
					>Process</a
				>
				<a
					href="#experience"
					class="font-sans text-sm font-medium"
					onclick={() => (navOpen = false)}>Experience</a
				>
				<a href="#contact" class="font-sans text-sm font-medium" onclick={() => (navOpen = false)}
					>Contact</a
				>
				<Button size="sm" href="#contact" class="mt-2 w-full">Get In Touch</Button>
			</div>
		{/if}
	</nav>

	<!-- ═══ HERO ═══ -->
	<section
		class="relative overflow-hidden border-b-2 border-foreground/10 bg-background pt-16 pb-20 md:pt-24 md:pb-32"
	>
		<div
			class="absolute inset-0 opacity-20"
			style="background-image: linear-gradient(to right, var(--foreground) 0.3px, transparent 1px), linear-gradient(to bottom, var(--foreground) 0.3px, transparent 1px); background-size: 40px 40px;"
		></div>

		<div class="relative mx-auto max-w-6xl px-4">
			<div class="grid gap-12 lg:grid-cols-5">
				<div class="flex flex-col justify-center gap-6 lg:col-span-3">
					<div
						class="inline-flex w-fit items-center gap-2 rounded-md border border-foreground/20 bg-card px-3 py-1.5"
					>
						<div class="size-2 rounded-full bg-green-500"></div>
						<span class="font-sans text-xs font-medium text-muted-foreground"
							>{location} &middot; Available for work</span
						>
					</div>

					<h1 class="font-head text-5xl leading-[1.05] md:text-7xl lg:text-8xl uppercase">
						<span class="text-foreground">Build</span>
						<span class="text-foreground">Ship</span>
						<span class="text-cyan-400">Scale</span>
					</h1>

					<p class="max-w-lg font-sans text-base leading-relaxed md:text-lg text-muted-foreground">
						{tagline}. I specialize in Svelte, TypeScript, and building products people love to use.
					</p>

					<div class="flex flex-wrap gap-3">
						<Button size="lg" href="#work"><Code class="mr-2 size-4" />View My Work</Button>
						<Button
							variant="outline"
							size="lg"
							href="#contact"
							class="border-foreground text-foreground hover:bg-foreground hover:text-background"
							><Mail class="mr-2 size-4" />Get In Touch</Button
						>
					</div>

					<div class="mt-2 rounded-md border-2 border-foreground bg-card max-w-xl overflow-hidden">
						<div class="grid grid-cols-2 divide-x divide-foreground md:grid-cols-4">
							{#each stats as stat (stat.label)}
								<div class="px-3 py-4 text-center">
									<div class="font-head text-xl md:text-2xl text-foreground">{stat.value}</div>
									<div
										class="font-sans text-[10px] font-medium uppercase tracking-wide text-muted-foreground md:text-xs"
									>
										{stat.label}
									</div>
								</div>
							{/each}
						</div>
					</div>
				</div>

				<div class="flex items-center justify-center lg:col-span-2">
					<div class="relative w-full max-w-md">
						<div class="absolute left-4 top-4 -z-10 h-full w-full bg-cyan-400"></div>
						<div class="absolute left-2 top-2 -z-10 h-full w-full bg-primary"></div>
						<div class="relative border-2 border-foreground bg-card">
							<div
								class="flex items-center gap-1.5 border-b-2 border-foreground/10 bg-card px-4 py-2.5"
							>
								<div class="size-2.5 rounded-full bg-red-500"></div>
								<div class="size-2.5 rounded-full bg-primary"></div>
								<div class="size-2.5 rounded-full bg-green-500"></div>
								<span class="ml-3 font-mono text-xs text-muted-foreground">~/portfolio</span>
							</div>
							<div
								class="space-y-1.5 p-4 font-mono text-[13px] leading-relaxed text-muted-foreground"
							>
								<div>
									<span class="text-green-400">$</span>
									<span class="text-cyan-400">npm run deploy</span>
								</div>
								<div class="text-muted-foreground/60">&gt; portfolio@1.0.0 deploy</div>
								<div class="text-muted-foreground/60">
									Compiling <span class="text-primary">{projects.length}</span> projects
								</div>
								<div class="flex items-center gap-2">
									<span class="text-green-400">✓</span>
									<span class="text-muted-foreground">Svelte components compiled</span>
								</div>
								<div class="flex items-center gap-2">
									<span class="text-green-400">✓</span>
									<span class="text-muted-foreground">Assets optimized</span>
								</div>
								<div class="flex items-center gap-2">
									<span class="text-green-400">✓</span>
									<span class="text-muted-foreground">Deployment ready</span>
								</div>
								<div
									class="mt-2 border-t border-foreground/10 pt-2 text-xs text-muted-foreground/60"
								>
									<span class="text-green-400">●</span>
									{stats[0]?.value || "5+"} exp &middot;
									<span class="text-green-400">●</span>
									{stats[1]?.value || "30+"} shipped
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- ═══ WORK ═══ -->
	<section id="work" class="border-b-2 border-foreground/10 py-16 md:py-24 bg-card/30">
		<div class="mx-auto max-w-6xl px-4">
			<div class="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
				<div>
					<div class="mb-2 flex items-center gap-3">
						<Badge class="bg-primary text-primary-foreground uppercase tracking-wide"
							>Portfolio</Badge
						>
					</div>
					<Text as="h2" class="text-4xl md:text-5xl font-head uppercase">Selected Work</Text>
				</div>
			</div>

			<Tabs bind:value={activeTab} class="w-full">
				<TabsList class="mb-8 border-foreground/10">
					<TabsTrigger value="all">All</TabsTrigger>
					<TabsTrigger value="svelte">Svelte</TabsTrigger>
					<TabsTrigger value="node.js">Node.js</TabsTrigger>
					<TabsTrigger value="typescript">TypeScript</TabsTrigger>
				</TabsList>

				<TabsContent value={activeTab} class="border-0 p-0">
					<div class="grid gap-5 md:grid-cols-2">
						{#each filteredProjects as project (project.title)}
							<div
								class="group relative rounded-md border-2 border-foreground bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_var(--primary)]"
							>
								<div class="flex items-start justify-between mb-2">
									<h3 class="font-head text-lg text-foreground">{project.title}</h3>
									{#if project.url}
										<Button
											href={project.url}
											variant="ghost"
											size="icon"
											class="[&_svg]:size-4 shrink-0 text-muted-foreground hover:text-foreground"
											aria-label="View project"
										>
											<ArrowUpRight />
										</Button>
									{/if}
								</div>
								<p class="text-sm text-muted-foreground mb-3">{project.description}</p>
								<div class="flex flex-wrap gap-1.5">
									{#each project.tags as tag, ti (tag)}
										<Badge variant="primary" size="sm" class={skillBadgeColor}>{tag}</Badge>
									{/each}
								</div>
							</div>
						{/each}
					</div>
				</TabsContent>
			</Tabs>
		</div>
	</section>

	<!-- ═══ SKILLS ═══ -->
	<section id="skills" class="border-b-2 border-foreground/10 py-16 md:py-24 bg-background">
		<div class="mx-auto max-w-6xl px-4">
			<div class="mb-2 flex items-center gap-3">
				<Badge class="bg-green-500 text-white uppercase tracking-wide">Stack</Badge>
				<div class="h-px flex-1 bg-foreground/10"></div>
			</div>
			<Text as="h2" class="mb-10 text-4xl md:text-5xl font-head uppercase">Skills & Tools</Text>

			{#snippet skillIcon(name: string)}
				{#if name === "Svelte"}
					<svg
						class="size-6"
						xmlns="http://www.w3.org/2000/svg"
						width="1em"
						height="1em"
						viewBox="0 0 128 128"
					>
						<path d="M0 0h128v128H0z" fill="none" />
						<path
							fill="#ff3e00"
							d="M110.43 16.936C98.553-.076 75.09-5.118 58.13 5.696l-29.792 19a34.2 34.2 0 0 0-15.48 22.897a25.478 30.64 0 0 0-.572 6.396a36.15 36.15 0 0 0 4.163 16.73A34.4 34.4 0 0 0 11.34 83.5a25.348 30.483 0 0 0 .345 14.412a36.5 36.5 0 0 0 5.9 13.152c11.878 17.01 35.394 22.053 52.3 11.24l29.762-19.001a34.13 34.13 0 0 0 15.438-22.918a35.5 35.5 0 0 0 .572-6.386a36.2 36.2 0 0 0-4.112-16.71a34.4 34.4 0 0 0 5.112-12.77c.369-2.11.557-4.245.562-6.386a36.4 36.4 0 0 0-6.787-21.178z"
						/>
						<path
							fill="#fff"
							d="M55.219 112.662a28.463 34.23 0 0 1-5.954.76a23.64 23.64 0 0 1-19.435-10.187a21.9 21.9 0 0 1-4.08-12.74a15.658 18.83 0 0 1 .333-3.833a15.425 18.55 0 0 1 .72-2.782l.561-1.708l1.52 1.156a38.7 38.7 0 0 0 11.658 5.834l1.104.333l-.104 1.104v.573a6.63 6.63 0 0 0 1.228 3.854a7.1 7.1 0 0 0 2.538 2.288a8.262 9.936 0 0 0 3.312.837a8.251 9.923 0 0 0 1.79-.229a7.272 8.745 0 0 0 1.833-.802l29.76-19.094a6.26 6.26 0 0 0 2.904-5.302a6.62 6.62 0 0 0-1.26-3.844a7.14 7.14 0 0 0-2.553-2.252a8.313 9.997 0 0 0-3.307-.81a8.246 9.917 0 0 0-1.79.23a6.938 8.344 0 0 0-1.822.801l-11.346 7.25a24.376 29.314 0 0 1-6.048 2.656a23.64 23.64 0 0 1-25.39-9.416a21.94 21.94 0 0 1-4.08-12.74c.002-1.285.114-2.567.333-3.833a20.65 20.65 0 0 1 9.286-13.781l29.792-18.99a21.9 21.9 0 0 1 6.048-2.667a24 24 0 0 1 5.954-.75A23.68 23.68 0 0 1 98.22 24.745a21.94 21.94 0 0 1 4.029 12.75a15.748 18.939 0 0 1-.334 3.844a15.407 18.529 0 0 1-.718 2.781l-.562 1.708l-1.52-1.114a38.4 38.4 0 0 0-11.658-5.834l-1.104-.343l.104-1.105v-.572a6.7 6.7 0 0 0-1.228-3.865a7.1 7.1 0 0 0-2.55-2.25a8.309 9.992 0 0 0-3.3-.813a8.221 9.887 0 0 0-1.77.271a6.819 8.2 0 0 0-1.831.802l-29.793 18.99a5.88 7.071 0 0 0-1.836 1.79a4.75 5.713 0 0 0-.963 2.377a5.037 6.057 0 0 0-.136 1.104a6.62 6.62 0 0 0 1.228 3.844a7.1 7.1 0 0 0 2.549 2.25a8.299 9.98 0 0 0 3.301.812a8.247 9.918 0 0 0 1.79-.23a6.943 8.35 0 0 0 1.833-.801l11.367-7.292a24.218 29.125 0 0 1 6.048-2.656a28.526 34.305 0 0 1 5.954-.76A23.66 23.66 0 0 1 96.566 60.61a21.94 21.94 0 0 1 3.737 16.614a20.6 20.6 0 0 1-9.286 13.781l-29.74 18.99a24.308 29.233 0 0 1-6.057 2.667z"
						/>
					</svg>
				{:else if name === "TypeScript"}
					<svg
						class="size-6"
						xmlns="http://www.w3.org/2000/svg"
						width="1em"
						height="1em"
						viewBox="0 0 32 32"
					>
						<path d="M0 0h32v32H0z" fill="none" />
						<path
							fill="#007acc"
							d="M23.827 8.243a4.4 4.4 0 0 1 2.223 1.281a6 6 0 0 1 .852 1.143c.011.045-1.534 1.083-2.471 1.662c-.034.023-.169-.124-.322-.35a2.01 2.01 0 0 0-1.67-1c-1.077-.074-1.771.49-1.766 1.433a1.3 1.3 0 0 0 .153.666c.237.49.677.784 2.059 1.383c2.544 1.095 3.636 1.817 4.31 2.843a5.16 5.16 0 0 1 .416 4.333a4.76 4.76 0 0 1-3.932 2.815a11 11 0 0 1-2.708-.028a6.53 6.53 0 0 1-3.616-1.884a6.3 6.3 0 0 1-.926-1.371a3 3 0 0 1 .327-.208c.158-.09.756-.434 1.32-.761l1.024-.6l.214.312a4.8 4.8 0 0 0 1.35 1.292a3.3 3.3 0 0 0 3.458-.175a1.545 1.545 0 0 0 .2-1.974c-.276-.395-.84-.727-2.443-1.422a8.8 8.8 0 0 1-3.349-2.055a4.7 4.7 0 0 1-.976-1.777a7.1 7.1 0 0 1-.062-2.268a4.33 4.33 0 0 1 3.644-3.374a9 9 0 0 1 2.691.084m-8.343 1.483l.011 1.454h-4.63v13.148H7.6V11.183H2.97V9.755a14 14 0 0 1 .04-1.466c.017-.023 2.832-.034 6.245-.028l6.211.017Z"
						/>
					</svg>
				{:else if name === "React"}
					<svg class="size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
						><circle cx="12" cy="12" r="2" fill="currentColor" /><ellipse
							cx="12"
							cy="12"
							rx="9"
							ry="3.5"
							stroke="currentColor"
							stroke-width="1.5"
						/><ellipse
							cx="12"
							cy="12"
							rx="9"
							ry="3.5"
							stroke="currentColor"
							stroke-width="1.5"
							transform="rotate(60 12 12)"
						/><ellipse
							cx="12"
							cy="12"
							rx="9"
							ry="3.5"
							stroke="currentColor"
							stroke-width="1.5"
							transform="rotate(120 12 12)"
						/></svg
					>
				{:else if name === "Tailwind"}
					<svg
						class="size-6"
						xmlns="http://www.w3.org/2000/svg"
						width="1em"
						height="1em"
						viewBox="0 0 128 128"
					>
						<path d="M0 0h128v128H0z" fill="none" />
						<path
							fill="#38bdf8"
							d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597c6.398-8.531 13.867-11.73 22.398-9.597c4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602q-9.6 12.803-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738M32.004 64c-17.066 0-27.73 8.531-32 25.602Q9.603 76.799 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66c6.274 6.367 13.536 13.738 29.395 13.738c17.066 0 27.73-8.53 32-25.597q-9.6 12.797-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64m0 0"
						/>
					</svg>
				{:else if name === "Node.js"}
					<svg
						class="size-6"
						xmlns="http://www.w3.org/2000/svg"
						width="0.89em"
						height="1em"
						viewBox="0 0 256 289"
					>
						<path d="M0 0h256v289H0z" fill="none" />
						<path
							fill="#539e43"
							d="M128 288.464c-3.975 0-7.685-1.06-11.13-2.915l-35.247-20.936c-5.3-2.915-2.65-3.975-1.06-4.505c7.155-2.385 8.48-2.915 15.9-7.156c.796-.53 1.856-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.74-61.217c1.06-.53 1.59-1.59 1.59-2.915V83.08c0-1.325-.53-2.385-1.59-2.915l-105.74-60.953c-1.06-.53-2.385-.53-3.18 0L20.405 80.166c-1.06.53-1.59 1.855-1.59 2.915v122.17c0 1.06.53 2.385 1.59 2.915l28.887 16.695c15.636 7.95 25.44-1.325 25.44-10.6V93.68c0-1.59 1.326-3.18 3.181-3.18h13.516c1.59 0 3.18 1.325 3.18 3.18v120.58c0 20.936-11.396 33.126-31.272 33.126c-6.095 0-10.865 0-24.38-6.625l-27.827-15.9C4.24 220.885 0 213.465 0 205.515V83.346C0 75.396 4.24 67.976 11.13 64L116.87 2.783c6.625-3.71 15.635-3.71 22.26 0L244.87 64C251.76 67.975 256 75.395 256 83.346v122.17c0 7.95-4.24 15.37-11.13 19.345L139.13 286.08c-3.445 1.59-7.42 2.385-11.13 2.385m32.596-84.009c-46.377 0-55.917-21.2-55.917-39.221c0-1.59 1.325-3.18 3.18-3.18h13.78c1.59 0 2.916 1.06 2.916 2.65c2.12 14.045 8.215 20.936 36.306 20.936c22.261 0 31.802-5.035 31.802-16.96c0-6.891-2.65-11.926-37.367-15.372c-28.886-2.915-46.907-9.275-46.907-32.33c0-21.467 18.02-34.187 48.232-34.187c33.921 0 50.617 11.66 52.737 37.101q0 1.193-.795 2.385c-.53.53-1.325 1.06-2.12 1.06h-13.78c-1.326 0-2.65-1.06-2.916-2.385c-3.18-14.575-11.395-19.345-33.126-19.345c-24.38 0-27.296 8.48-27.296 14.84c0 7.686 3.445 10.07 36.306 14.31c32.597 4.24 47.967 10.336 47.967 33.127c-.265 23.321-19.345 36.571-53.002 36.571"
						/>
					</svg>
				{:else if name === "Python"}
					<svg class="size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
						><path
							d="M12 2c-2.5 0-4.5 1-4.5 2.5v2h5v1h-7C4 7.5 3 9.5 3 12s1 4.5 2.5 4.5h1.5v-2.5c0-1.5 1.5-3 3.5-3h4.5c1.5 0 2.5-1 2.5-2.5V4.5C17 3 15 2 12 2zm-2 2c.8 0 1.5.7 1.5 1.5S10.8 7 10 7s-1.5-.7-1.5-1.5S9.2 4 10 4z"
							fill="currentColor"
						/><path
							d="M12 22c2.5 0 4.5-1 4.5-2.5v-2h-5v-1h7c1.5 0 2.5-2 2.5-4.5s-1-4.5-2.5-4.5h-1.5v2.5c0 1.5-1.5 3-3.5 3H9C7.5 13 6.5 14 6.5 15.5v4C6.5 21 8.5 22 12 22zm2-2c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"
							fill="currentColor"
						/></svg
					>
				{:else if name === "PostgreSQL"}
					<svg
						class="size-6"
						xmlns="http://www.w3.org/2000/svg"
						width="1em"
						height="1em"
						viewBox="0 0 128 128"
					>
						<path d="M0 0h128v128H0z" fill="none" />
						<path
							d="M93.809 92.112c.785-6.533.55-7.492 5.416-6.433l1.235.108c3.742.17 8.637-.602 11.513-1.938c6.191-2.873 9.861-7.668 3.758-6.409c-13.924 2.873-14.881-1.842-14.881-1.842c14.703-21.815 20.849-49.508 15.543-56.287c-14.47-18.489-39.517-9.746-39.936-9.52l-.134.025c-2.751-.571-5.83-.912-9.289-.968c-6.301-.104-11.082 1.652-14.709 4.402c0 0-44.683-18.409-42.604 23.151c.442 8.841 12.672 66.898 27.26 49.362c5.332-6.412 10.484-11.834 10.484-11.834c2.558 1.699 5.622 2.567 8.834 2.255l.249-.212c-.078.796-.044 1.575.099 2.497c-3.757 4.199-2.653 4.936-10.166 6.482c-7.602 1.566-3.136 4.355-.221 5.084c3.535.884 11.712 2.136 17.238-5.598l-.22.882c1.474 1.18 1.375 8.477 1.583 13.69c.209 5.214.558 10.079 1.621 12.948s2.317 10.256 12.191 8.14c8.252-1.764 14.561-4.309 15.136-27.985"
						/>
						<path
							d="M75.458 125.256c-4.367 0-7.211-1.689-8.938-3.32c-2.607-2.46-3.641-5.629-4.259-7.522l-.267-.79c-1.244-3.358-1.666-8.193-1.916-14.419c-.038-.935-.064-1.898-.093-2.919c-.021-.747-.047-1.684-.085-2.664a18.8 18.8 0 0 1-4.962 1.568c-3.079.526-6.389.356-9.84-.507c-2.435-.609-4.965-1.871-6.407-3.82c-4.203 3.681-8.212 3.182-10.396 2.453c-3.853-1.285-7.301-4.896-10.542-11.037c-2.309-4.375-4.542-10.075-6.638-16.943c-3.65-11.96-5.969-24.557-6.175-28.693C4.292 23.698 7.777 14.44 15.296 9.129C27.157.751 45.128 5.678 51.68 7.915c4.402-2.653 9.581-3.944 15.433-3.851c3.143.051 6.136.327 8.916.823c2.9-.912 8.628-2.221 15.185-2.139c12.081.144 22.092 4.852 28.949 13.615c4.894 6.252 2.474 19.381.597 26.651c-2.642 10.226-7.271 21.102-12.957 30.57c1.544.011 3.781-.174 6.961-.831c6.274-1.295 8.109 2.069 8.607 3.575c1.995 6.042-6.677 10.608-9.382 11.864c-3.466 1.609-9.117 2.589-13.745 2.377l-.202-.013l-1.216-.107l-.12 1.014l-.116.991c-.311 11.999-2.025 19.598-5.552 24.619c-3.697 5.264-8.835 6.739-13.361 7.709c-1.544.33-2.947.474-4.219.474m-9.19-43.671c2.819 2.256 3.066 6.501 3.287 14.434c.028.99.054 1.927.089 2.802c.106 2.65.355 8.855 1.327 11.477c.137.371.26.747.39 1.146c1.083 3.316 1.626 4.979 6.309 3.978c3.931-.843 5.952-1.599 7.534-3.851c2.299-3.274 3.585-9.86 3.821-19.575l4.783.116l-4.75-.57l.14-1.186c.455-3.91.783-6.734 3.396-8.602c2.097-1.498 4.486-1.353 6.389-1.01c-2.091-1.58-2.669-3.433-2.823-4.193l-.399-1.965l1.121-1.663c6.457-9.58 11.781-21.354 14.609-32.304c2.906-11.251 2.02-17.226 1.134-18.356c-11.729-14.987-32.068-8.799-34.192-8.097l-.359.194l-1.8.335l-.922-.191c-2.542-.528-5.366-.82-8.393-.869c-4.756-.08-8.593 1.044-11.739 3.431l-2.183 1.655l-2.533-1.043c-5.412-2.213-21.308-6.662-29.696-.721c-4.656 3.298-6.777 9.76-6.305 19.207c.156 3.119 2.275 14.926 5.771 26.377c4.831 15.825 9.221 21.082 11.054 21.693c.32.108 1.15-.537 1.976-1.529a271 271 0 0 1 10.694-12.07l2.77-2.915l3.349 2.225c1.35.897 2.839 1.406 4.368 1.502l7.987-6.812l-1.157 11.808c-.026.265-.039.626.065 1.296l.348 2.238l-1.51 1.688l-.174.196l4.388 2.025z"
						/>
						<path
							fill="#336791"
							d="M115.731 77.44c-13.925 2.873-14.882-1.842-14.882-1.842c14.703-21.816 20.849-49.51 15.545-56.287C101.924.823 76.875 9.566 76.457 9.793l-.135.024c-2.751-.571-5.83-.911-9.291-.967c-6.301-.103-11.08 1.652-14.707 4.402c0 0-44.684-18.408-42.606 23.151c.442 8.842 12.672 66.899 27.26 49.363c5.332-6.412 10.483-11.834 10.483-11.834c2.559 1.699 5.622 2.567 8.833 2.255l.25-.212c-.078.796-.042 1.575.1 2.497c-3.758 4.199-2.654 4.936-10.167 6.482c-7.602 1.566-3.136 4.355-.22 5.084c3.534.884 11.712 2.136 17.237-5.598l-.221.882c1.473 1.18 2.507 7.672 2.334 13.557s-.29 9.926.871 13.082c1.16 3.156 2.316 10.256 12.192 8.14c8.252-1.768 12.528-6.351 13.124-13.995c.422-5.435 1.377-4.631 1.438-9.49l.767-2.3c.884-7.367.14-9.743 5.225-8.638l1.235.108c3.742.17 8.639-.602 11.514-1.938c6.19-2.871 9.861-7.667 3.758-6.408"
						/>
						<path
							fill="#fff"
							d="M75.957 122.307c-8.232 0-10.84-6.519-11.907-9.185c-1.562-3.907-1.899-19.069-1.551-31.503a1.59 1.59 0 0 1 1.64-1.55a1.594 1.594 0 0 1 1.55 1.639c-.401 14.341.168 27.337 1.324 30.229c1.804 4.509 4.54 8.453 12.275 6.796c7.343-1.575 10.093-4.359 11.318-11.46c.94-5.449 2.799-20.951 3.028-24.01a1.593 1.593 0 0 1 1.71-1.472a1.597 1.597 0 0 1 1.472 1.71c-.239 3.185-2.089 18.657-3.065 24.315c-1.446 8.387-5.185 12.191-13.794 14.037c-1.463.313-2.792.453-4 .454M31.321 90.466a6.7 6.7 0 0 1-2.116-.35c-5.347-1.784-10.44-10.492-15.138-25.885c-3.576-11.717-5.842-23.947-6.041-27.922c-.589-11.784 2.445-20.121 9.02-24.778c13.007-9.216 34.888-.44 35.813-.062a1.596 1.596 0 0 1-1.207 2.955c-.211-.086-21.193-8.492-32.768-.285c-5.622 3.986-8.203 11.392-7.672 22.011c.167 3.349 2.284 15.285 5.906 27.149c4.194 13.742 8.967 22.413 13.096 23.79c.648.216 2.62.873 5.439-2.517A245 245 0 0 1 45.88 73.046a1.596 1.596 0 0 1 2.304 2.208c-.048.05-4.847 5.067-10.077 11.359c-2.477 2.979-4.851 3.853-6.786 3.853m69.429-13.445a1.596 1.596 0 0 1-1.322-2.487c14.863-22.055 20.08-48.704 15.612-54.414c-5.624-7.186-13.565-10.939-23.604-11.156c-7.433-.16-13.341 1.738-14.307 2.069l-.243.099c-.971.305-1.716-.227-1.997-.849a1.6 1.6 0 0 1 .631-2.025c.046-.027.192-.089.429-.176l-.021.006l.021-.007c1.641-.601 7.639-2.4 15.068-2.315c11.108.118 20.284 4.401 26.534 12.388c2.957 3.779 2.964 12.485.019 23.887c-3.002 11.625-8.651 24.118-15.497 34.277c-.306.457-.81.703-1.323.703m.76 10.21c-2.538 0-4.813-.358-6.175-1.174c-1.4-.839-1.667-1.979-1.702-2.584c-.382-6.71 3.32-7.878 5.208-8.411c-.263-.398-.637-.866-1.024-1.349c-1.101-1.376-2.609-3.26-3.771-6.078c-.182-.44-.752-1.463-1.412-2.648c-3.579-6.418-11.026-19.773-6.242-26.612c2.214-3.165 6.623-4.411 13.119-3.716C97.6 28.837 88.5 10.625 66.907 10.271c-6.494-.108-11.82 1.889-15.822 5.93c-8.96 9.049-8.636 25.422-8.631 25.586a1.595 1.595 0 1 1-3.19.084c-.02-.727-.354-17.909 9.554-27.916C53.455 9.272 59.559 6.96 66.96 7.081c13.814.227 22.706 7.25 27.732 13.101c5.479 6.377 8.165 13.411 8.386 15.759c.165 1.746-1.088 2.095-1.341 2.147l-.576.013c-6.375-1.021-10.465-.312-12.156 2.104c-3.639 5.201 3.406 17.834 6.414 23.229c.768 1.376 1.322 2.371 1.576 2.985c.988 2.396 2.277 4.006 3.312 5.3c.911 1.138 1.7 2.125 1.982 3.283c.131.23 1.99 2.98 13.021.703c2.765-.57 4.423-.083 4.93 1.45c.997 3.015-4.597 6.532-7.694 7.97c-2.775 1.29-7.204 2.106-11.036 2.106m-4.696-4.021c.35.353 2.101.962 5.727.806c3.224-.138 6.624-.839 8.664-1.786c2.609-1.212 4.351-2.567 5.253-3.492l-.5.092c-7.053 1.456-12.042 1.262-14.828-.577a6 6 0 0 1-.54-.401c-.302.119-.581.197-.78.253c-1.58.443-3.214.902-2.996 5.105m-45.562 8.915c-1.752 0-3.596-.239-5.479-.71c-1.951-.488-5.24-1.957-5.19-4.37c.057-2.707 3.994-3.519 5.476-3.824c5.354-1.103 5.703-1.545 7.376-3.67c.488-.619 1.095-1.39 1.923-2.314c1.229-1.376 2.572-2.073 3.992-2.073c.989 0 1.8.335 2.336.558c1.708.708 3.133 2.42 3.719 4.467c.529 1.847.276 3.625-.71 5.006c-3.237 4.533-7.886 6.93-13.443 6.93m-7.222-4.943c.481.372 1.445.869 2.518 1.137c1.631.408 3.213.615 4.705.615c4.546 0 8.196-1.882 10.847-5.594c.553-.774.387-1.757.239-2.274c-.31-1.083-1.08-2.068-1.873-2.397c-.43-.178-.787-.314-1.115-.314c-.176 0-.712 0-1.614 1.009a41 41 0 0 0-1.794 2.162c-2.084 2.646-3.039 3.544-9.239 4.821c-1.513.31-2.289.626-2.674.835m12.269-7.36a1.596 1.596 0 0 1-1.575-1.354a8 8 0 0 1-.08-.799c-4.064-.076-7.985-1.82-10.962-4.926c-3.764-3.927-5.477-9.368-4.699-14.927c.845-6.037.529-11.366.359-14.229c-.047-.796-.081-1.371-.079-1.769c.003-.505.013-1.844 4.489-4.113c1.592-.807 4.784-2.215 8.271-2.576c5.777-.597 9.585 1.976 10.725 7.246c3.077 14.228.244 20.521-1.825 25.117c-.385.856-.749 1.664-1.04 2.447l-.257.69c-1.093 2.931-2.038 5.463-1.748 7.354a1.595 1.595 0 0 1-1.335 1.819zM42.464 42.26l.062 1.139c.176 2.974.504 8.508-.384 14.86c-.641 4.585.759 9.06 3.843 12.276c2.437 2.542 5.644 3.945 8.94 3.945h.068c.369-1.555.982-3.197 1.642-4.966l.255-.686c.329-.884.714-1.74 1.122-2.646c1.991-4.424 4.47-9.931 1.615-23.132c-.565-2.615-1.936-4.128-4.189-4.627c-4.628-1.022-11.525 2.459-12.974 3.837m9.63-.677c-.08.564 1.033 2.07 2.485 2.271c1.449.203 2.689-.975 2.768-1.539s-1.033-1.186-2.485-1.388s-2.691.092-2.768.656m2.818 2.826l-.407-.028c-.9-.125-1.81-.692-2.433-1.518c-.219-.29-.576-.852-.505-1.354c.101-.736.999-1.177 2.4-1.177c.313 0 .639.023.967.069c.766.106 1.477.327 2.002.62c.91.508.977 1.075.936 1.368c-.112.813-1.405 2.02-2.96 2.02m-2.289-2.732c.045.348.907 1.496 2.029 1.651l.261.018c1.036 0 1.81-.815 1.901-1.082c-.096-.182-.762-.634-2.025-.81a6 6 0 0 0-.821-.059c-.812 0-1.243.183-1.345.282m43.605-1.245c.079.564-1.033 2.07-2.484 2.272c-1.45.202-2.691-.975-2.771-1.539c-.076-.564 1.036-1.187 2.486-1.388c1.45-.203 2.689.092 2.769.655m-2.819 2.56c-1.396 0-2.601-1.086-2.7-1.791c-.115-.846 1.278-1.489 2.712-1.688c.316-.044.629-.066.93-.066c1.238 0 2.058.363 2.14.949c.053.379-.238.964-.739 1.492c-.331.347-1.026.948-1.973 1.079zm.943-3.013q-.416 0-.856.061c-1.441.201-2.301.779-2.259 1.089c.048.341.968 1.332 2.173 1.332l.297-.021c.787-.109 1.378-.623 1.66-.919c.443-.465.619-.903.598-1.052c-.028-.198-.56-.49-1.613-.49m3.965 32.843a1.594 1.594 0 0 1-1.324-2.483c3.398-5.075 2.776-10.25 2.175-15.255c-.257-2.132-.521-4.337-.453-6.453c.07-2.177.347-3.973.614-5.71c.317-2.058.617-4.002.493-6.31a1.595 1.595 0 1 1 3.186-.172c.142 2.638-.197 4.838-.525 6.967c-.253 1.643-.515 3.342-.578 5.327c-.061 1.874.178 3.864.431 5.97c.64 5.322 1.365 11.354-2.691 17.411a1.6 1.6 0 0 1-1.328.708"
						/>
					</svg>
				{:else if name === "Docker"}
					<svg class="size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
						><path d="M4 14h12c0 3-2 5-5 5H7c-2 0-3-2-3-5z" fill="currentColor" /><path
							d="M4 10h2v2H4zm3 0h2v2H7zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2M7 7h2v2H7zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2"
							fill="currentColor"
						/><path d="M19 9c0-2-1.5-3-3-3v2c1 0 1.5.5 1.5 1.5H19z" fill="currentColor" /></svg
					>
				{:else if name === "AWS"}
					<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
						<path d="M0 0h32v32H0z" fill="none" />
						<path
							fill="#9d5125"
							d="M30 19.152v1.273c0 2.307-2.545 4.693-5.648 4.693H7.648C4.506 25.118 2 22.771 2 20.424v-1.272Z"
						/>
						<path
							fill="#f58535"
							d="M12.778 6.782A7.11 7.11 0 0 1 19.3 11a3.64 3.64 0 0 1 2.068-.636a3.583 3.583 0 0 1 3.619 3.5A5.69 5.69 0 0 1 30 18.993v.477c0 2.347-2.545 4.693-5.688 4.693H7.648C4.506 24.163 2 21.816 2 19.47v-.477a5.53 5.53 0 0 1 3.619-4.853v-.2a7.13 7.13 0 0 1 7.159-7.158"
						/>
						<path
							fill="#fff"
							d="m9 15.095l-1.869 6.523h1.113l.438-1.591h1.909l.4 1.591H12.1l-1.75-6.523Zm-.159 4.1l.8-3.222l.756 3.222Zm7.954 1.031h-.039l-.875-5.131h-1.114l-.835 5.091h-.04l-.875-5.091h-1.034l1.273 6.562h1.193l.835-4.931h.04l.835 4.931h1.233l1.313-6.562h-1.074zm5.29-2.148l-.716-.239c-.716-.278-.994-.6-.994-1.153a.9.9 0 1 1 1.79 0v.119H23.2v-.159c0-.676-.159-1.71-1.869-1.71a1.8 1.8 0 0 0-2.031 1.869a1.73 1.73 0 0 0 1.392 1.79l.716.239a1.1 1.1 0 0 1 .955 1.153a.93.93 0 0 1-.994.955q-1.074 0-1.074-1.193v-.159h-1.034v.159a1.786 1.786 0 0 0 1.989 1.989c1.312 0 2.187-.557 2.187-1.949a1.73 1.73 0 0 0-1.352-1.711"
						/>
					</svg>
				{:else if name === "GraphQL"}
					<svg
						class="size-6"
						xmlns="http://www.w3.org/2000/svg"
						width="0.89em"
						height="1em"
						viewBox="0 0 256 288"
					>
						<path d="M0 0h256v288H0z" fill="none" />
						<path
							fill="#e535ab"
							fill-rule="evenodd"
							d="m152.576 32.963l59.146 34.15a25.8 25.8 0 0 1 5.818-4.604c12.266-7.052 27.912-2.865 35.037 9.402c7.052 12.267 2.865 27.912-9.402 35.037a25.7 25.7 0 0 1-6.831 2.72v68.325a25.7 25.7 0 0 1 6.758 2.702c12.34 7.125 16.527 22.771 9.402 35.038c-7.052 12.266-22.771 16.453-35.038 9.402a25.5 25.5 0 0 1-6.34-5.147l-58.786 33.94a25.7 25.7 0 0 1 1.295 8.08c0 14.103-11.458 25.636-25.635 25.636s-25.635-11.46-25.635-25.636c0-2.52.362-4.954 1.037-7.253l-59.13-34.14a25.8 25.8 0 0 1-5.738 4.52c-12.34 7.051-27.986 2.864-35.038-9.402c-7.051-12.267-2.864-27.913 9.402-35.038a25.7 25.7 0 0 1 6.758-2.703v-68.324a25.7 25.7 0 0 1-6.831-2.72C.558 99.897-3.629 84.178 3.423 71.911s22.77-16.454 35.037-9.402a25.8 25.8 0 0 1 5.79 4.575l59.163-34.159a25.7 25.7 0 0 1-1.048-7.29C102.365 11.46 113.823 0 128 0s25.635 11.459 25.635 25.635c0 2.548-.37 5.007-1.059 7.328m-6.162 10.522l59.287 34.23a25.6 25.6 0 0 0 2.437 19.831c3.609 6.278 9.488 10.44 16.013 12.062v68.41q-.5.122-.993.264L145.725 44.17q.351-.336.689-.684m-36.123.7l-77.432 134.11a26 26 0 0 0-1.01-.27v-68.417c6.525-1.622 12.404-5.784 16.013-12.062a25.6 25.6 0 0 0 2.427-19.869l59.27-34.22q.359.371.732.727m24.872 6.075l77.414 134.08a25.5 25.5 0 0 0-4.513 5.757a25.7 25.7 0 0 0-2.702 6.758H50.64a25.7 25.7 0 0 0-2.704-6.758a25.8 25.8 0 0 0-4.506-5.724l77.429-134.107A25.7 25.7 0 0 0 128 51.27c2.487 0 4.89-.352 7.163-1.01m11.795 194.478l58.902-34.008a26 26 0 0 1-.473-1.682H50.607q-.123.499-.266.992l59.19 34.175A25.56 25.56 0 0 1 128 236.373a25.56 25.56 0 0 1 18.958 8.365"
						/>
					</svg>
				{:else if name === "CI/CD"}
					<svg class="size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
						><circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.5" /><path
							d="M12 6v6l4 2"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
						/><circle cx="12" cy="12" r="2" fill="currentColor" /></svg
					>
				{:else if name === "Next.js"}
					<svg class="size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
						><rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" /><path
							d="M8.5 8v8h1.5v-5l4 5h1.5V8h-1.5v5l-4-5H8.5z"
							fill="#18181b"
						/></svg
					>
				{/if}
			{/snippet}

			{#snippet skillBox(tool: { name: string; color: string })}
				<div
					class="group flex min-h-[140px] flex-col items-center justify-center gap-2 rounded-2xl border-2 border-foreground bg-card p-3 transition-all hover:-translate-y-0.5 hover:shadow-[3px_3px_0_0_var(--tool-color)]"
					style="--tool-color: {tool.color};"
				>
					<div
						class="flex size-10 items-center justify-center rounded-xl border-2 border-foreground bg-background"
						style="color: {tool.color};"
					>
						{@render skillIcon(tool.name)}
					</div>
					<span class="font-head text-xs uppercase text-center">{tool.name}</span>
				</div>
			{/snippet}

			<div class="grid grid-cols-2 gap-3 md:grid-cols-4">
				{#each skillTools as tool (tool.name)}
					{@render skillBox(tool)}
				{/each}
			</div>
		</div>
	</section>

	<!-- ═══ MY PROCESS ═══ -->
	<section id="process" class="border-b-2 border-foreground/10 py-16 md:py-24 bg-card/30">
		<div class="mx-auto max-w-6xl px-4">
			<div class="text-center mb-12">
				<Badge class="bg-primary text-primary-foreground uppercase tracking-wide mb-4"
					>How It Works</Badge
				>
				<Text as="h2" class="text-4xl md:text-5xl font-head uppercase mb-3"
					>From Idea To Launch</Text
				>
				<Text as="h3" class="text-2xl md:text-3xl font-head uppercase text-primary">In Weeks</Text>
				<p class="mt-4 max-w-lg mx-auto font-sans text-muted-foreground">
					Three simple steps to transform your idea into a shipped product.
				</p>
			</div>

			<div class="grid gap-10 lg:grid-cols-2 items-center">
				<div class="relative pl-10">
					<div class="absolute left-[19px] top-4 bottom-4 w-0.5 bg-foreground/20"></div>
					{#each steps as step, i (step.title)}
						<div class="relative pb-10 last:pb-0">
							<div
								class="absolute -left-10 top-0 z-10 flex size-10 items-center justify-center border-2 border-foreground shadow-[2px_2px_0_0_var(--foreground)] {stepMeta[
									i
								].iconBg}"
							>
								<step.icon class="size-5 text-white" />
							</div>
							<div class="pl-12">
								<span class="font-mono text-xs font-medium uppercase {stepMeta[i].labelColor}"
									>Step 0{i + 1}</span
								>
								<h3 class="font-head text-lg uppercase mt-0.5 mb-1">{step.title}</h3>
								<p class="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
							</div>
						</div>
					{/each}
				</div>

				<div class="relative flex items-center justify-center min-h-[280px]">
					<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64">
						<div class="absolute inset-0 rounded-t-full border-[16px] border-foreground"></div>
						<div class="absolute inset-4 rounded-t-full border-[16px] border-primary"></div>
						<div class="absolute inset-8 rounded-t-full border-[16px] border-cyan-400"></div>
						<div class="absolute inset-12 rounded-t-full border-[16px] border-rose-500"></div>
					</div>
					<div
						class="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col-reverse items-center"
					>
						{#each Array(6) as _, i (i)}
							<div
								class="h-3 w-16 border-2 border-foreground bg-card -mt-0.5"
								style="width: {64 + i * 16}px;"
							></div>
						{/each}
					</div>
					<Sparkles class="absolute bottom-4 right-1/4 size-6 text-primary" />
					<Sparkles class="absolute top-8 right-8 size-4 text-cyan-400" />
				</div>
			</div>
		</div>
	</section>

	<!-- ═══ TESTIMONIALS ═══ -->
	<section class="border-b-2 border-foreground/10 py-16 md:py-24 bg-background">
		<div class="mx-auto max-w-6xl px-4">
			<div class="text-center mb-12">
				<Badge class="bg-green-500 text-white uppercase tracking-wide mb-4">Testimonials</Badge>
				<Text as="h2" class="text-4xl md:text-5xl font-head uppercase mb-1"
					>Loved By <span class="text-green-400">Clients</span></Text
				>
				<Text as="h2" class="text-4xl md:text-5xl font-head uppercase">Worldwide</Text>
			</div>

			<div class="grid gap-6 md:grid-cols-3">
				{#each testimonials as t, ti (t.name)}
					{@const starColors = ["text-primary", "text-cyan-400", "text-rose-500"]}
					<div class="relative h-full">
						<div class="relative h-full rounded-md border-2 border-foreground bg-card p-6">
							<div class="mb-4 flex items-center gap-3">
								<img
									src={t.avatar || `https://i.pravatar.cc/150?u=${t.name}`}
									alt={t.name}
									class="size-12 rounded-full border-2 border-foreground object-cover"
								/>
							</div>
							<p class="mb-5 text-sm leading-relaxed text-muted-foreground">"{t.quote}"</p>
							<div class="mb-4 flex gap-0.5">
								{#each Array(5) as _, si (si)}<Star
										class="size-4 fill-current {starColors[ti % starColors.length]}"
									/>{/each}
							</div>
							<div>
								<span class="block font-head text-sm text-foreground">{t.name}</span>
								<span class="block font-sans text-xs text-muted-foreground">{t.role}</span>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- ═══ EXPERIENCE ═══ -->
	<section id="experience" class="border-b-2 border-foreground/10 py-16 md:py-24 bg-card/30">
		<div class="mx-auto max-w-4xl px-4">
			<div class="mb-10 flex items-center gap-3">
				<Badge class="bg-cyan-500 text-white uppercase tracking-wide">Experience</Badge>
				<div class="h-px flex-1 bg-foreground/10"></div>
			</div>
			<Text as="h2" class="mb-10 text-4xl md:text-5xl font-head uppercase">Career Path</Text>

			<div class="relative pl-10">
				<div class="absolute left-[15px] top-3 bottom-3 w-0.5 bg-foreground/20"></div>
				{#each experience as exp, i (exp.role)}
					<div class="relative pb-10 last:pb-0">
						<div
							class="absolute -left-10 top-0.5 z-10 flex size-8 items-center justify-center rounded-full border-2 border-foreground bg-background font-head text-xs text-foreground"
						>
							{i + 1}
						</div>
						<div
							class="rounded-md border-2 border-foreground bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-[3px_3px_0_0_var(--primary)]"
						>
							<h3 class="font-head text-lg uppercase text-foreground">{exp.role}</h3>
							<p class="mt-0.5 font-sans text-sm font-medium text-muted-foreground">
								{exp.company} <span class="mx-2">&middot;</span>
								{exp.period}
							</p>
							<p class="mt-2 text-sm text-muted-foreground">{exp.description}</p>
							{#if exp.tags}
								<div class="mt-3 flex flex-wrap gap-1.5">
									{#each exp.tags as tag (tag)}<Badge variant="primary" size="sm">{tag}</Badge
										>{/each}
								</div>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- ═══ CONTACT ═══ -->
	<section id="contact" class="border-b-2 border-foreground/10 py-16 md:py-24 bg-background">
		<div class="mx-auto max-w-6xl px-4">
			<div class="grid gap-12 lg:grid-cols-2">
				<div class="flex flex-col justify-center gap-6">
					<Badge class="bg-primary text-primary-foreground uppercase tracking-wide w-fit"
						>Contact</Badge
					>
					<Text as="h2" class="text-3xl md:text-4xl font-head uppercase">Let's Build Together</Text>
					<Text as="p" class="font-sans leading-relaxed text-muted-foreground">{about}</Text>

					<Alert.Root class="items-center border-foreground/10 bg-card">
						<Mail class="mr-3 size-5 shrink-0 text-primary" />
						<Alert.Title>Have a project in mind? Drop me a message.</Alert.Title>
					</Alert.Root>

					<Separator class="bg-foreground/10" />

					<div class="flex flex-wrap gap-3">
						{#each socialLinks as link (link.label)}
							<Button
								href={link.url}
								size="sm"
								class="shadow-[2px_2px_0_0_var(--foreground)] hover:shadow-none hover:translate-y-0.5 {link.color ??
									''}"
							>
								<link.icon class="mr-2 size-4" />
								{link.label}
							</Button>
						{/each}
					</div>
				</div>

				<div
					class="rounded-md border-2 border-foreground bg-card p-6 shadow-[4px_4px_0_0_var(--primary)]"
				>
					<h3 class="mb-4 font-head text-xl uppercase">Send a message</h3>
					<form class="flex flex-col gap-4" onsubmit={(e) => e.preventDefault()}>
						<div class="grid gap-4 sm:grid-cols-2">
							<div class="grid gap-2">
								<label for="name" class="font-sans text-sm font-medium text-foreground">Name</label>
								<Input id="name" type="text" placeholder="Your name" bind:value={contactName} />
							</div>
							<div class="grid gap-2">
								<label for="email" class="font-sans text-sm font-medium text-foreground"
									>Email</label
								>
								<Input
									id="email"
									type="email"
									placeholder="you@example.com"
									bind:value={contactEmail}
								/>
							</div>
						</div>
						<div class="grid gap-2">
							<label for="message" class="font-sans text-sm font-medium text-foreground"
								>Message</label
							>
							<Textarea
								id="message"
								placeholder="Tell me about your project..."
								class="min-h-28"
								bind:value={contactMessage}
							/>
						</div>
						<Button type="submit" size="lg"><Send class="mr-2 size-4" />Send Message</Button>
					</form>
				</div>
			</div>
		</div>
	</section>

	<!-- ═══ FOOTER ═══ -->
	<footer class="bg-card text-foreground">
		<div class="mx-auto max-w-6xl px-4 py-12">
			<div
				class="grid gap-8 border-b-2 border-foreground/10 pb-10 md:grid-cols-3 md:divide-x md:divide-foreground/10"
			>
				<div class="md:pr-8">
					<h2 class="font-head text-4xl uppercase leading-none md:text-5xl">
						{name.split(" ")[0]}<br />{name.split(" ").slice(1).join(" ") || "Dev"}
					</h2>
					<div class="mt-4 h-1.5 w-16 bg-primary"></div>
					<div class="mt-5 border-l-2 border-foreground pl-4">
						<p class="font-sans text-sm text-muted-foreground">{about}</p>
					</div>
				</div>

				<div class="md:px-8">
					<div class="mb-5 inline-block bg-foreground px-3 py-1.5">
						<span class="font-head text-sm uppercase text-background">Index</span>
					</div>
					<ul class="space-y-3">
						{#each footerLinks as link (link.label)}
							<li class="flex items-center justify-between border-b border-foreground/10 pb-2">
								<a
									href={link.url}
									rel="external"
									class="font-head text-sm uppercase text-foreground hover:text-primary transition-colors"
									>{link.label}</a
								>
								<ArrowUpRight class="size-4 text-muted-foreground" />
							</li>
						{/each}
					</ul>
				</div>

				<div class="md:pl-8">
					<div class="mb-5 inline-block bg-foreground px-3 py-1.5">
						<span class="font-head text-sm uppercase text-background">Social</span>
					</div>
					<ul class="space-y-3">
						{#each socialLinks as link (link.label)}
							<li>
								<Button
									href={link.url}
									variant="ghost"
									class="w-full justify-start gap-3 px-0 text-foreground hover:bg-transparent hover:text-primary"
								>
									<link.icon class="size-4" />
									<span class="font-sans text-sm">{link.label}</span>
								</Button>
							</li>
						{/each}
					</ul>
				</div>
			</div>

			<div class="flex flex-col items-center justify-between gap-3 pt-6 md:flex-row">
				<span class="font-sans text-xs text-muted-foreground"
					>&copy; {new Date().getFullYear()} {name}. All rights reserved.</span
				>
				<span class="font-sans text-xs text-muted-foreground"
					>Built with <span class="font-head text-primary">RetroUI</span></span
				>
			</div>
		</div>
	</footer>
</div>
