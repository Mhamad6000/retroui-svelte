import { defineNavigation } from "./utils/navigation.js";
import { BookOpen, Rocket, Tag } from "@lucide/svelte";
import { getAllDocs } from "./utils.js";

const allDocs = getAllDocs();

const components = allDocs
	.filter((doc : any) => doc.section === "Components")
	.map((doc :any) => ({
		title: doc.title,
		href: `/docs/${doc.slug}`,
	}));

const configuration = allDocs
	.filter((doc :any) => doc.section === "Configuration")
	.map((doc :any) => ({
		title: doc.title,
		href: `/docs/${doc.slug}`,
	}));

export const navigation = defineNavigation({
	anchors: [
		{
			title: "Introduction",
			href: "/docs",
			icon: BookOpen,
		},
		{
			title: "Getting Started",
			href: "/docs/getting-started",
			icon: Rocket,
		},
		{
			title: "Releases",
			href: "https://github.com/Mhamad6000/retroui-svelte/releases",
			icon: Tag,
		},
	],
	sections: [
		{
			title: "Configuration",
			items: configuration,
		},
		{
			title: "Components",
			items: components,
		},
	],
	header: [
		{
			href: "/docs",
			title: "Docs",
		},
		{
			href: "/docs/components",
			title: "Components",
		},
		// {
		// 	href: "/blocks",
		// 	title: "Blocks",
		// },
		{
			href: "/themes",
			title: "Themes",
		},
	],
});
