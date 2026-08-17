<script lang="ts">
	import type { GymInfo } from '$lib/data/gyms';
	import { ArrowTopRightOnSquare } from 'svelte-heros-v2';

	interface Props {
		gym: GymInfo;
	}

	let { gym }: Props = $props();
</script>

<div class="card w-full bg-base-200 shadow-sm card-md">
	<div class="card-body">
		<a
			href={gym.website}
			target="_blank"
			rel="noopener noreferrer"
			class="mb-2 card-title flex items-center text-3xl font-bold text-primary hover:underline"
			>{gym.name}<ArrowTopRightOnSquare class="w-8" size="22" /></a
		>

		<div class="flex flex-col">
			{#each gym.tapeLevels as tapeLevel, i}
				<div
					class={[
						['text-md', 'rounded-xs', 'p-2', 'flex', 'justify-between'],
						{
							'text-white': (tapeLevel.textColor ?? 'light') === 'light',
							'text-black': (tapeLevel.textColor ?? 'light') === 'dark',
						},
					]}
					style={`background-color:#${tapeLevel.color}`}
				>
					<span>{tapeLevel.gymGrade}</span>
					<span>{tapeLevel.vScale}</span>
				</div>
			{/each}
		</div>
		<div class="card-actions justify-end">
			<!-- <button class="btn btn-primary">Compare</button> -->
		</div>
	</div>
</div>
