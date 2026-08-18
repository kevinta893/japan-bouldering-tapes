<script lang="ts">
	import type { VScaleLevel } from '$lib/types/vScale';

	interface Props {
		vScale: VScaleLevel;
		onclick: (e: MouseEvent) => void;
	}

	let { vScale = $bindable(), onclick }: Props = $props();
</script>

<button class="btn w-12 btn-neutral" {onclick}>{vScale}</button>
