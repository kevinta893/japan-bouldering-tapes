<script lang="ts">
	import type { GymInfo } from '$lib/data/gyms';
	import { ArrowTopRightOnSquare } from 'svelte-heros-v2';

	interface Props {
		gym: GymInfo;
	}

	let { gym }: Props = $props();
</script>

<div
	class="card-container w-full transform overflow-hidden rounded-xl border border-gray-700/50 bg-gray-800 shadow-2xl transition-transform"
>
	<!-- Card Body -->
	<div class="flex h-full flex-col gap-2 p-6">
		<a
			href={gym.website}
			target="_blank"
			rel="noopener noreferrer"
			class="mb-2 flex items-center text-3xl font-bold text-indigo-400 hover:underline"
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
	</div>
</div>
