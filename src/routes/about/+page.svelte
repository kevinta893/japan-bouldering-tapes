<script lang="ts">
	import LanguageSelector from '$lib/components/LanguageSelector.svelte';
	import { ArrowTopRightOnSquare } from 'svelte-heros-v2';
</script>

<svelte:head>
	<title>Japan Bouldering Tape Comparison - About</title>
</svelte:head>

<div class="flex h-[calc(100vh-4rem)] flex-col gap-4 bg-base-200 p-4 md:p-12">
	<h1 class="text-3xl">About</h1>

	<div class="flex items-center justify-between">
		<a
			href="https://github.com/kevinta893/japan-bouldering-tapes"
			target="_blank"
			rel="noopener noreferrer"
			class="flex link items-center"
		>
			GitHub
			<ArrowTopRightOnSquare class="w-8" size="18" /></a
		>
		<LanguageSelector />
	</div>

	<p>
		This is a simple bouldering route comparison website for some gyms in Japan. Compares different
		colored tape systems and grounds them to the V-Scale system. While the actual difficulty may
		vary in the actual gym and between gyms, this website is only intended to provide a reference.
	</p>
	<p>
		<strong>Disclaimer:</strong> This website is not responsible for any inaccuracies or errors in the
		information provided. I do not represent nor sponsored by the individual bouldering gyms that are
		presented in this website. Please refer to the individual gyms for their specific difficulty levels
		and conditions.
	</p>
	<p>Happy climbing and GANBA!</p>
	<div class="flex w-full flex-col items-center gap-4"></div>
</div>
