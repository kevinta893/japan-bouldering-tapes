<script lang="ts">
	import GymCard from '$lib/components/GymCard.svelte';
	import SearchInput from '$lib/components/SearchInput.svelte';
	import { gyms } from '$lib/data/gyms';
	import { onMount, type SvelteComponent } from 'svelte';

	let searchTerms = $state('');

	let searchInput: SearchInput | null = $state(null);

	const filteredGyms = $derived.by(() => {
		return gyms.filter((gym) => {
			const searchTerm = searchTerms.toLowerCase();
			const keywords = gym.keywords.concat([gym.name]);
			return keywords.some((keyword) => keyword.toLowerCase().indexOf(searchTerm) >= 0);
		});
	});

	onMount(() => {
		searchInput?.focus();
	});
</script>

<div class="p-4">
	<SearchInput bind:this={searchInput} placeholder="Search for a gym" bind:value={searchTerms} />
</div>

<div class="flex w-full flex-col items-center gap-4">
	{#if filteredGyms.length === 0}
		No gyms matched the search terms.
	{/if}
	{#each filteredGyms as gym, i}
		<GymCard {gym} />
	{/each}
</div>
