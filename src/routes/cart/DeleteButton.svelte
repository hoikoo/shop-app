<script lang="ts">
	import trashIMG from '../img/trashbin.png';
	export let value: number;
</script>

<form method="post" style="display: grid; place-self: center;  height: 40px;" action="?/delete">
	<input name="cartProdId" {value} type="hidden" />
	<button class="button" on:click={() => console.log('Product deleted')}>
		<img class="iMG" src={trashIMG} alt="img" />
	</button>
</form>

<style>
	.button {
		background-color: #e63946;
		color: rgb(48, 5, 5, 0.5);
		border: 1px #e63946 solid;
		border-radius: 3px;
		box-shadow: inset 0px 4px rgb(255, 255, 255, 0.3);
		display: grid;
		align-self: center;
		width: 100%;
	}

	.button:hover {
		background-color: rgb(230, 57, 70, 0.7);
		color: rgb(48, 5, 5, 0.1);
		border: 1px rgb(230, 57, 70, 0.7) solid;
	}

	.button:hover > iMG {
		opacity: 0.4;
	}

	.button:active {
		background-color: rgb(184, 38, 50);
		color: rgb(48, 5, 5, 0.4);
		border: 1px rgb(184, 38, 50) solid;
		box-shadow: inset 0px -4px rgba(109, 25, 25, 0.3);
	}

	.button:active > iMG {
		opacity: 0.8;
	}

	.iMG {
		display: flex;
		justify-content: center;
		flex: 10;
		padding: 3px;
		height: 30px;
		max-width: 50px;
		object-fit: contain;
		opacity: 0.7;
	}
</style>
