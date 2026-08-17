<script lang="ts">
	import GymCard from '$lib/components/GymCard.svelte';
	import { gyms } from '$lib/data/gyms';
</script>

<div class="container mx-auto flex flex-col font-sans text-white lg:max-w-6xl">
	<div class="flex w-full flex-col items-center gap-4">
		{#each gyms as gym, i}
			<GymCard {gym} />
		{/each}
	</div>
</div>
