<script lang="ts">
	import { gyms, type GymInfo } from '$lib/data/gyms';
	import Select from './Select.svelte';

	interface Props {
		value: GymInfo | null;
	}

	let { value = $bindable() }: Props = $props();

	const gymOptions = gyms.map((gym) => ({ label: gym.name, value: gym }));
</script>

<Select options={gymOptions} prompt="Select a gym" bind:value />
