<script lang="ts">
	import HeroSection from "$lib/components/landing/HeroSection.svelte";
	import FeaturesSection from "$lib/components/landing/FeaturesSection.svelte";
	import ComponentsShowcase from "$lib/components/landing/ComponentsShowcase.svelte";
	import CommunitySection from "$lib/components/landing/CommunitySection.svelte";
	import CompatibilitySection from "$lib/components/landing/CompatibilitySection.svelte";
	import FooterSection from "$lib/components/landing/FooterSection.svelte";
</script>

<div class="min-h-screen bg-background">
	<HeroSection />
	<FeaturesSection />
	<ComponentsShowcase />
	<CommunitySection />
	<CompatibilitySection />
	<FooterSection />
</div>
