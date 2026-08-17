<script lang="ts">
	import CompareGymsCard from '$lib/components/CompareGymsCard.svelte';
	import GymSelect from '$lib/components/GymSelect.svelte';
	import { gyms, type GymInfo } from '$lib/data/gyms';

	let gymLeft: GymInfo | null = $state(gyms[0]);
	let gymRight: GymInfo | null = $state(gyms[1]);
</script>

<div
	class="container mx-auto flex h-screen flex-col gap-4 bg-base-200 p-12 font-sans text-white lg:max-w-6xl"
>
	<div class="flex items-center justify-between">
		<GymSelect value={gymLeft} />
		<GymSelect value={gymRight} />
	</div>
	<CompareGymsCard {gymLeft} {gymRight} />
</div>
