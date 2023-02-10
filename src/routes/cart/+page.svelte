<script lang="ts">
	import type { PageData } from './$types';
	import ProductName from './ProductName.svelte';
	import ProductQuantity from './ProductQuantity.svelte';
	import ProductNum from './ProductNum.svelte';
	import ProductPrice from './ProductPrice.svelte';
	import DeleteButton from './DeleteButton.svelte';
	import PayButton from './PayButton.svelte';
	import Card from '$lib/components/Card.svelte';
	import Column from '$lib/components/Column.svelte';
	
	export let data: PageData;

	const { cartItems } = data;

	let i = 1;
	let s = 0;

	cartItems.forEach((c) => {
		s += c.product.price * c.quantity;
	});

	let sum = parseInt(s.toFixed(2));
</script>

<Card>
	<div class="header">Here are your products, {data.user?.name}!</div>

	<div class="globalCartGrid">
		<Column headline="No" greyText>
			{#each cartItems as c, j}
				<ProductNum num={j + i} />
			{/each}
		</Column>

		<Column headline="Product name">
			{#each cartItems as c}
				<ProductName name={c.product.title} />
			{/each}
		</Column>

		<Column headline="Quantity">
			{#each cartItems as c}
				<ProductQuantity quantity={c.quantity} />
			{/each}
		</Column>

		<Column headline="Total price">
			{#each cartItems as c}
				<ProductPrice price={c.product.price * c.quantity} />
			{/each}
		</Column>

		<Column headline="Delete" noBorder>
			{#each cartItems as c}
				<DeleteButton value={c.cartId} />
			{/each}
		</Column>
	</div>

	{#if cartItems[0] == null}
		<div />
	{:else}
		<PayButton value={data.user?.id ?? 0} totalSum={sum} />
	{/if}
</Card>

<style>
	.header {
		width: 88%;
		justify-self: center;
		text-align: center;
		font-size: larger;
		font-weight: lighter;
		padding: 20px;
		margin: 10px;
		border-bottom: 2px #e9e9e9 solid;
	}

	.globalCartGrid {
		display: grid;
		place-self: center;
		grid-template-columns: max-content 1fr max-content max-content max-content;
		padding: 10px;
		width: 95%;
		border-bottom: 2px #e9e9e9 solid;
	}
</style>
