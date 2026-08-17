<script lang="ts">
	import type { GymInfo } from '$lib/types/gymInfo';
	import type { TapeLevel } from '$lib/types/tapeLevel';
	import { sortVScale } from '$lib/types/vScale';
	import RouteTape from './RouteTape.svelte';

	interface Props {
		leftGym?: GymInfo | null;
		rightGym?: GymInfo | null;
	}

	interface ComparisonRow {
		leftGymTape: TapeLevel | null;
		vScale: string;
		rightGymTape: TapeLevel | null;
	}

	let { leftGym: gymLeft, rightGym: gymRight }: Props = $props();

	const gymCompares = $derived.by(() => {
		if (!gymLeft || !gymRight) {
			return [];
		}

		const leftGymVScales = gymLeft.tapeLevels.flatMap((tl) => tl.vScale);
		const rightGymVScales = gymRight.tapeLevels.flatMap((tl) => tl.vScale);
		const allVScales = Array.from(new Set(leftGymVScales.concat(rightGymVScales)))
			.sort(sortVScale)
			.reverse();

		return allVScales.map((vScale) => {
			const leftGymTape = gymLeft.tapeLevels.find((tl) => tl.vScale.indexOf(vScale) >= 0) ?? null;
			const rightGymTape = gymRight.tapeLevels.find((tl) => tl.vScale.indexOf(vScale) >= 0) ?? null;

			return {
				leftGymTape,
				vScale,
				rightGymTape,
			} satisfies ComparisonRow;
		});
	});
</script>

<div class="w-full bg-base-300 p-6">
	{#if !gymLeft || !gymRight}
		<p>Please select two gyms to compare their tape levels.</p>
	{:else}
		<div class="grid grid-cols-1">
			{#each gymCompares as comparisonRow, index}
				<div class="flex w-full items-center justify-between gap-4">
					<div class="w-48">
						<RouteTape tapeLevel={comparisonRow.leftGymTape} showVScale={false} />
					</div>
					<div class="divider w-full">{comparisonRow.vScale}</div>
					<div class="w-48">
						<RouteTape tapeLevel={comparisonRow.rightGymTape} showVScale={false} />
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>
