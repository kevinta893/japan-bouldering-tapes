<script lang="ts">
	import type { GymInfo } from '$lib/data/gyms';

	interface Props {
		gymLeft?: GymInfo | null;
		gymRight?: GymInfo | null;
	}

	let { gymLeft, gymRight }: Props = $props();
</script>

<div class="w-full bg-base-300 p-6"></div>
