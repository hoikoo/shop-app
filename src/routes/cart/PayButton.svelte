<script lang="ts">
	export let value: number;
	export let totalSum = 0;
</script>

<form method="post" class="inputF" action="?/pay">
	<div class="totalT">
		Total amount to pay: <div class="price">{totalSum + '$'}</div>
	</div>
	<input name="usercartId" {value} type="hidden" />
	<button class="button" on:click={() => console.log('Pay for items')}> PAY </button>
</form>

<style>
	.button {
		cursor: pointer;
		background-color: rgb(247, 247, 247);
		color: rgba(0, 0, 0, 0.801);
		border: hidden;
		border-bottom: 1px #d1d1d19a solid;
		border-radius: 10px;
		font-weight: bold;

		padding: 10px;
		height: 40px;
		display: grid;

		place-self: end;
		width: 40%;
	}

	.button:hover {
		background-color: rgb(255, 230, 177);
		color: rgb(206, 142, 5);
		border: hidden;
		border-bottom: 1px #ffb341cb solid;
		box-shadow: 0px 2px 1px #ffc36aa8;
	}

	.button:active {
		background-color: rgb(255, 216, 132);
		color: rgb(114, 78, 0);
		border: hidden;
		border-bottom: 1px #ffb341 solid;
		box-shadow: 0px 2px 1px #ffc36acc;
	}

	.inputF {
		width: 90%;
		display: grid;
		grid-auto-flow: column;
		place-self: end;
		height: 40px;
		margin: 10px;
		margin-right: 4%;
	}

	.totalT {
		gap: 10px;
		display: grid;
		grid-template-columns: max-content max-content;
		grid-auto-flow: column;
		align-self: center;
		font-size: large;
		font-weight: bold;
	}

	.price {
		place-self: start;
		color: #e63946;
	}
</style>
