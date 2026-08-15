<script lang="ts">
	import GymCard from '$lib/components/GymCard.svelte';
	import { gyms } from '$lib/data/gyms';
</script>

<!-- Root container mimicking the swipe viewport -->
<div class="flex min-h-screen flex-col items-center bg-gray-900 p-4 pt-16 font-sans text-white">
	<h1
		class="mb-12 bg-linear-to-r from-indigo-400 to-purple-600 bg-clip-text text-center text-5xl font-extrabold text-transparent"
	>
		Compare Gym Tapes
	</h1>
	<div>
		{#each gyms as gym, i}
			<GymCard {gym} />
		{/each}
	</div>
</div>
