<script lang="ts">
	import type { GymInfo } from '$lib/types/gymInfo';
	import type { TapeLevel } from '$lib/types/tapeLevel';
	import { sortVScale, type VScaleLevel } from '$lib/types/vScale';
	import { sortByArray } from '$lib/util/sort';
	import RouteTape from './RouteTape.svelte';

	interface Props {
		leftGym?: GymInfo | null;
		rightGym?: GymInfo | null;
	}

	interface ComparisonRow {
		leftGymTape: TapeLevel | null;
		vScale: VScaleLevel;
		rightGymTape: TapeLevel | null;
	}

	let { leftGym: gymLeft, rightGym: gymRight }: Props = $props();

	const tapeComparisons = $derived.by(() => {
		if (!gymLeft || !gymRight) {
			return [];
		}

		// Flatten all v Scales
		const leftGymVScales = gymLeft.tapeLevels.flatMap((tl) =>
			tl.vScale.map((v) => ({ gymTape: tl, vScale: v }))
		);
		const rightGymVScales = gymRight.tapeLevels.flatMap((tl) =>
			tl.vScale.map((v) => ({ gymTape: tl, vScale: v }))
		);

		// With the left, pair up with everything on the right based on VScale.
		// Then remaining right is added and sorted in vScale order
		const vScaleList: ComparisonRow[] = leftGymVScales.map((vScale) => {
			// Find matching VScale on the right side and pair up. Remove from right side
			const matchingRightVScaleIndex = rightGymVScales.findIndex(
				(rVScale) => vScale.vScale == rVScale.vScale
			);

			if (matchingRightVScaleIndex >= 0) {
				const rightTapeLevel = rightGymVScales.splice(matchingRightVScaleIndex, 1)[0];
				return {
					leftGymTape: vScale.gymTape,
					vScale: vScale.vScale,
					rightGymTape: rightTapeLevel.gymTape,
				};
			} else {
				return {
					leftGymTape: vScale.gymTape,
					vScale: vScale.vScale,
					rightGymTape: null,
				};
			}
		});

		const remainingRightTapeLevels: ComparisonRow[] = rightGymVScales.map((rightTapeLevel) => ({
			leftGymTape: null,
			vScale: rightTapeLevel.vScale,
			rightGymTape: rightTapeLevel.gymTape,
		}));

		const sortedComparisons = sortByArray(
			vScaleList.concat(remainingRightTapeLevels),
			(row) => row.vScale,
			sortVScale
		);

		return sortedComparisons;
	});
</script>

<div class="w-full bg-base-300 p-6">
	{#if tapeComparisons.length <= 0}
		<p>Please select two gyms to compare their tape levels.</p>
	{:else}
		<div class="grid grid-cols-1">
			{#each tapeComparisons as comparisonRow, index}
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
