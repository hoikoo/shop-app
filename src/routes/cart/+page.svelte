<script lang="ts">
	import type { PageData } from "./$types";
    import ProductName from "./ProductName.svelte";
    import ProductQuantity from "./ProductQuantity.svelte";
    import ProductNum from "./ProductNum.svelte";
    import ProductPrice from "./ProductPrice.svelte";
    import DeleteButton from "./DeleteButton.svelte";
    import PayButton from "./PayButton.svelte";
	import Card from "$lib/components/Card.svelte";
    export let data: PageData

    const {cartItems} = data;

    let i = 1;
    let s = 0;

    cartItems.forEach(c => {
        s += c.product.price*c.quantity
    });

    let sum = s.toFixed(2) ;
</script>


<Card>

    <div class = "header"> Here are your products, {data.user?.name}!</div>

    <div class = "globalCartGrid">

        <div class = "numberCol">
            <div style = "font-weight: bold">No</div>
            {#each  cartItems as c, j}
                <ProductNum num = {j+i}></ProductNum>
            {/each}
        </div>

        <div class = "productCol">
            <div style = "font-weight: bold">Product name</div>
            {#each  cartItems as c}
                <ProductName name = {c.product.title}></ProductName>
            {/each}

        </div>

        <div class = "quantityCol">
            <div style = "font-weight: bold">Quantity</div>
            {#each  cartItems as c}
                <ProductQuantity quantity = {c.quantity}></ProductQuantity>
            {/each}

        </div>

        <div class = "priceCol">
            <div style = "font-weight: bold">Total price</div>
            {#each  cartItems as c}
            <ProductPrice price = {c.product.price*c.quantity}></ProductPrice>
            {/each}
            

        </div>

        <div class = "deleteCol">
            <div style = "font-weight: bold"> Delete </div>

            {#each cartItems as c}

            <DeleteButton value = {c.cartId}></DeleteButton>

            {/each}

        </div>


    </div>
    
    {#if cartItems[0] == null} 
        <div></div>
    {:else} 

    <PayButton value = {data.user?.id} totalSum = {sum}></PayButton>

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

.numberCol {
    gap: 5px;
    display: grid;
    padding: 10px;
    color: #9e9e9e;
    border-right: 1px #e9e9e9 solid;

}

.productCol {
    gap: 5px;
    display: grid;
    padding: 10px;
    border-right: 1px #e9e9e9 solid;

}

.quantityCol {
    gap: 5px;
    display: grid;
    padding: 10px;
    border-right: 1px #e9e9e9 solid;

}

.priceCol {
    gap: 5px;
    display: grid;
    padding: 10px;
    border-right: 1px #e9e9e9 solid;

}


.deleteCol {
    gap: 5px;
    display: grid;
    padding: 10px;

}



</style>