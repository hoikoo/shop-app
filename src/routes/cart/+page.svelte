<script lang="ts">
	import type { CartI } from "./+page.server";
	import type { PageData } from "./$types";
    import ProductName from "./ProductName.svelte";
    import ProductQuantity from "./ProductQuantity.svelte";
    import ProductNum from "./ProductNum.svelte";
    import ProductPrice from "./ProductPrice.svelte";
    import type { CartItem } from "@prisma/client";
    import type { Product } from "@prisma/client";

    export let data: PageData

    let cartItemArr: Array<CartI> = [];


         for ( let i = 0; i < data.bob.length ; i++ ) {
            cartItemArr.push( data.bob[i] ) ;   
        }


    let i = 1;

</script>


<div class = "cartField">

    <div class = "header"> Here are your cart products, {data.user?.name}!</div>

     <div class = "globalCartGrid">

        <div class = "numberCol">
            <div style = "font-weight: bold">No</div>
            {#each  cartItemArr as c, j}
                <ProductNum num = {j+i}></ProductNum>
            {/each}
        </div>

        <div class = "productCol">
            <div style = "font-weight: bold">Product name</div>
            {#each  cartItemArr as c}
                <ProductName name = {c.product.title}></ProductName>
            {/each}

        </div>

        <div class = "quantityCol">
            <div style = "font-weight: bold">Quantity</div>
            {#each  cartItemArr as c}
                <ProductQuantity quantity = {c.quantity}></ProductQuantity>
            {/each}

        </div>

        <div class = "priceCol">
            <div style = "font-weight: bold">Total price</div>
            {#each  cartItemArr as c}
            <ProductPrice price = {c.product.price*c.quantity}></ProductPrice>
            {/each}
            

        </div>

        <div class = "deleteCol">
            <div style = "font-weight: bold"> Delete </div>

            {#each cartItemArr as c}

            <form method="post" style="    display: grid; place-self: center;  height: 40px;">
                <input name="cartProdId" value={c.cartId} type="hidden" />
                <button class = "button"  on:click={ () => alert("Product deleted")}>Delete</button>
            </form> 

            {/each}

        </div>




    </div>




</div>

<style>

.cartField {
    display: grid;
    grid-template-columns: 1fr;

    width: 88%;
    place-self: center;
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 10px 10px 1px  rgba(223, 223, 223, 0.3);
}

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

.button {
    background-color: #e63946;
    color: rgb(48, 5, 5, 0.2);
    border: 1px #e63946 solid;
    border-radius: 3px;
    padding: 10px;

    font-size: normal;
    display: grid;
    align-self: center;
    width: 100%;
}

.button:hover {
    background-color: rgb(230, 57, 70, 0.7);
    color: rgb(48, 5, 5, 0.1);
    border: 1px rgb(230, 57, 70, 0.7) solid;

}

.button:active {
    background-color: rgb(184, 38, 50);
    color: rgb(48, 5, 5, 0.4);
    border: 1px rgb(184, 38, 50) solid;

}


</style>