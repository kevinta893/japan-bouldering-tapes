<script lang="ts">
	let isOpen = $state(false);
	let dialog: HTMLDialogElement | null = $state(null);

	export const showModal = () => {
		if (!isOpen) {
			isOpen = false;
			dialog?.showModal();
		} else {
			isOpen = true;
			dialog?.close();
		}
	};
</script>

<dialog bind:this={dialog} class="modal">
	<div class="modal-box">
		<h3 class="text-lg font-bold">V-Scale Info</h3>
		<p class="pt-4">
			The V-Scale is a common system used in America to grade bouldering routes. It starts from the
			easiest to hardest: VB, V0, V1, V2, etc.
		</p>
		<p class="pt-4">
			Each gym's setter may vary on what they consider their route's grade is. Although generally as
			grades increase more climbing techniques are necessary.
		</p>
		<div class="pt-4">
			<ul class="list-disc pl-4">
				<li class="">Beginner (VB-V2) - Large holds and straight-forward moves</li>
				<li class="">Intermediate (V3-V5) - More advanced movements/balance</li>
				<li class="">Advanced (V6-V8) - Smaller holds, more complex moves/balance</li>
				<li class="">Expert (V9-V11) - Very demanding in skill and technique</li>
				<li class="">Pro (V12+) - Extreme skill required</li>
			</ul>
		</div>
		<div class="modal-action">
			<form method="dialog">
				<button class="btn">Close</button>
			</form>
		</div>
	</div>
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>
