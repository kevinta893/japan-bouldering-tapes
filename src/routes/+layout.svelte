<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.png';
	import DockNav from '$lib/components/DockNav.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Bouldering Tape Comparison</title>
	<link rel="icon" href={favicon} />
</svelte:head>
<div class="container mx-auto lg:max-w-2xl">
	{@render children()}
</div>

<DockNav />
