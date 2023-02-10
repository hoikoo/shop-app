<script lang="ts">
	export let name: string;
</script>

<div class="container">{name}</div>

<style>
	.container {
		font-size: normal;
		display: grid;
		align-content: center;
		width: 100%;
		height: 40px;
		border-top: 1px #e9e9e9 solid;
	}
</style>
