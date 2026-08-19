<script lang="ts">
	import './layout.css';
	import '../locales/main.loader.svelte.js';
	import favicon from '$lib/assets/favicon.png';
	import DockNav from '$lib/components/DockNav.svelte';
	import { onMount } from 'svelte';
	import { loadLocalePreference } from '$lib/localization/locale.js';
	import { loadLocale } from 'wuchale/load-utils';

	let { children } = $props();

	onMount(() => {
		loadLocale(loadLocalePreference());
	});
</script>

<svelte:head>
	<title>Bouldering Tape Comparison</title>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="container mx-auto pb-16 lg:max-w-2xl">
	{@render children()}
</div>

<DockNav />
