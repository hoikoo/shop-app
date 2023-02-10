<script lang="ts">
	export let price: number = 0;
</script>

<div class="container">{price.toFixed(2) + '$'}</div>

<style>
	.container {
		display: grid;
		align-content: center;
		width: 100%;
		height: 40px;
		text-align: center;
		border-top: 1px #e9e9e9 solid;
	}
</style>
