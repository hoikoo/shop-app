<script lang="ts">
	import Card from '$lib/components/Card.svelte';

	function easterEgg() {
		window.location.assign('https://www.youtube.com/watch?v=3X-iqFRGqbc');
	}
</script>

<Card>
	<div class="successfield">
		<div class="successtext">★</div>
		<div class="successtext">TRANSACTION SUCCESSFUL!</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="successtext" on:click={easterEgg}>★</div>
	</div>
</Card>

<style>
	.successfield {
		display: grid;
		gap: 30px;
		grid-template-columns: 1fr 2fr 1fr;
		padding: 15%;
		place-self: center;
		cursor: default;
	}

	.successtext {
		text-align: center;
		font-size: xx-large;
		font-weight: bold;
		color: #7cadc4;
	}
</style>
