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

    //  console.log(cartItemArr,"CHECK INPUT CHECHECHCEHCEH");

    let i = 1;

</script>


<div class = "cartField">

    <div class = "header"> Here are your cart products, {data.user?.name}!</div>

     <div class = "globalCartGrid">

        <div class = "numberCol">
            No
            {#each  cartItemArr as c, j}
                <ProductNum num = {j+i}></ProductNum>
            {/each}
        </div>

        <div class = "productCol">
            Product name
            {#each  cartItemArr as c}
                <ProductName name = {c.product.title}></ProductName>
            {/each}

        </div>

        <div class = "quantityCol">
            Quantity
            {#each  cartItemArr as c}
                <ProductQuantity quantity = {c.quantity}></ProductQuantity>
            {/each}

        </div>

        <div class = "priceCol">
            Total price
            {#each  cartItemArr as c}
            <ProductPrice price = {c.product.price}></ProductPrice>
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
    grid-template-columns: max-content 1fr max-content max-content;
    padding: 10px;
    width: 95%;

}

.numberCol {
    display: grid;

    padding: 10px;

    
    
    border-right: 1px #e9e9e9 solid;
}

.productCol {
    display: grid;

    padding: 10px;


    
    border-right: 1px #e9e9e9 solid;
}

.quantityCol {
    display: grid;

    padding: 10px;


    
    border-right: 1px #e9e9e9 solid;

}

.priceCol {
    display: grid;

    padding: 10px;


   

}




</style>