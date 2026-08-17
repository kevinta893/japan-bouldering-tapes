<script lang="ts">
	import CompareGymsCard from '$lib/components/CompareGymsCard.svelte';
	import GymSelect from '$lib/components/GymSelect.svelte';
	import { gyms } from '$lib/data/gyms';
	import type { GymInfo } from '$lib/types/gymInfo';
	import { ArrowsRightLeft } from 'svelte-heros-v2';

	let leftGym: GymInfo | null = $state(gyms[0]);
	let rightGym: GymInfo | null = $state(gyms[1]);

	const swapComparison = () => {
		const temp = leftGym;
		leftGym = rightGym;
		rightGym = temp;
	};
</script>

<div
	class="container mx-auto flex h-screen flex-col gap-4 bg-base-200 p-12 font-sans text-white lg:max-w-2xl"
>
	<div class="flex items-center justify-between">
		<GymSelect bind:value={leftGym} />
		<button class="btn btn-ghost" onclick={swapComparison}><ArrowsRightLeft /></button>
		<GymSelect bind:value={rightGym} />
	</div>
	<CompareGymsCard {leftGym} {rightGym} />
</div>
