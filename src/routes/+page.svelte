<script lang="ts">
	import GymCard from '$lib/components/GymCard.svelte';
	import { gyms } from '$lib/data/gyms';
</script>

<div class="container mx-auto flex flex-col bg-gray-900 font-sans text-white lg:max-w-6xl">
	<h1
		class="mb-12 bg-linear-to-r from-indigo-400 to-purple-600 bg-clip-text text-center text-5xl font-extrabold text-transparent"
	>
		Compare Gym Tapes
	</h1>
	<div class="flex w-full flex-col items-center gap-4">
		{#each gyms as gym, i}
			<GymCard {gym} />
		{/each}
	</div>
</div>
