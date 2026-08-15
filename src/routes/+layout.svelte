<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.png';

	let { children } = $props();
</script>

<svelte:head>
	<title>Bouldering Tape Comparison</title>
	<link rel="icon" href={favicon} />
</svelte:head>
{@render children()}
