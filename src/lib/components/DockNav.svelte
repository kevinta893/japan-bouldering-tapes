<script lang="ts">
	import { ArrowsRightLeft, InformationCircle } from 'svelte-heros-v2';
	import climbingIcon from '$lib/assets/climbing_emoji.png';
	import { page } from '$app/state';

	const path = $derived(page.url.pathname);
</script>

<div class="dock bg-base-300">
	<a href="/gyms" class={[{ 'dock-active': path.startsWith('/gyms') ? true : false }]}>
		<img src={climbingIcon} class="size-[1.2em]" alt="Climbing Emoji" />
		<span class="dock-label">Gyms</span>
	</a>

	<a href="/compare" class={[{ 'dock-active': path.startsWith('/compare') ? true : false }]}>
		<ArrowsRightLeft />
		<span class="dock-label">Compare</span>
	</a>

	<a href="/about" class={[{ 'dock-active': path.startsWith('/about') ? true : false }]}>
		<InformationCircle />
		<span class="dock-label">About</span>
	</a>
</div>
