<script lang="ts">
	import {
		loadLocalePreference,
		storeLocalePreference,
		type Locale,
	} from '$lib/localization/locale';
	import { onMount } from 'svelte';
	import { loadLocale } from 'wuchale/load-utils';

	let locale: Locale = $state('en');

	onMount(() => {
		locale = loadLocalePreference();
		loadLocale(locale);
	});

	const setLocale = () => {
		loadLocale(locale);
		storeLocalePreference(locale);
	};
</script>

<select class="select w-48" onchange={setLocale} bind:value={locale}>
	<option value="en">English</option>
	<option value="jp">日本語</option>
</select>
