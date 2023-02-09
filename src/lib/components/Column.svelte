<script lang="ts">
	import HeadingText from './HeadingText.svelte';

	export let noBorder = false;
	export let headline: string;
</script>

<div class="Col" class:noBorder>
	<HeadingText>{headline}</HeadingText>
	<slot />
</div>

<style>
	.Col {
		gap: 5px;
		display: grid;
		padding: 10px;
		color: #9e9e9e;
		border-right: 1px #e9e9e9 solid;
	}
	.noBorder {
		border: none;
	}
</style>
