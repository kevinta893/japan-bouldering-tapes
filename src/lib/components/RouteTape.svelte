<script lang="ts">
	import type { TapeLevel } from '$lib/types/tapeLevel';

	interface Props {
		tapeLevel: TapeLevel | null;
		showVScale?: boolean;
	}

	let { tapeLevel, showVScale = true }: Props = $props();
</script>

{#if !tapeLevel}
	<div class="text-md rounded-xs bg-neutral/20 p-2 text-center">-</div>
{:else}
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
		{#if showVScale}
			<span>{tapeLevel.vScale}</span>
		{/if}
	</div>
{/if}
