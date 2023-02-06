<script lang="ts">
	import type { PageData } from "./$types";
    import ProductName from "./ProductName.svelte";
    import ProductQuantity from "./ProductQuantity.svelte";
    import ProductNum from "./ProductNum.svelte";
    import ProductPrice from "./ProductPrice.svelte";
    export let data: PageData


</script>

<div class = "cartField">

    <div class = "header"> Here are your cart products, {data.user?.name}!</div>

     <div class = "globalCartGrid">

        <div class = "numberCol">
            No
            <ProductNum num = {1}></ProductNum>
            <ProductNum num = {2}></ProductNum>

        </div>

        <div class = "productCol">
            Product name
            <ProductName name = "PROD naME"></ProductName>
            <ProductName name = "PROD naME"></ProductName>

        </div>

        <div class = "quantityCol">
            Quantity
            <ProductQuantity quantity = {2}></ProductQuantity>
            <ProductQuantity quantity = {1}></ProductQuantity>

        </div>

        <div class = "priceCol">
            Total price
            <ProductPrice price = {99.99}></ProductPrice>
            <ProductPrice price = {78.99}></ProductPrice>

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


    border-bottom: 1px #e9e9e9 solid;
    border-right: 1px #e9e9e9 solid;
}

.productCol {
    display: grid;

    padding: 10px;


    border-bottom: 1px #e9e9e9 solid;
    border-right: 1px #e9e9e9 solid;
}

.quantityCol {
    display: grid;

    padding: 10px;


    border-bottom: 1px #e9e9e9 solid;
    border-right: 1px #e9e9e9 solid;

}

.priceCol {
    display: grid;

    padding: 10px;


    border-bottom: 1px #e9e9e9 solid;

}

/* .cartProdGridHead{    
    display: grid;
    place-self: center;
    width: 96%;


    grid-template-columns: max-content 1fr max-content max-content;
}

.cartProdGrid {
    place-self: center;
    width: 96%;
    display: grid;

    grid-template-columns: max-content 1fr max-content max-content;
}


.cartProdGridHead > div{
    padding: 12px;
    border-bottom: 1px #e9e9e9 solid;
    border-right: 1px #e9e9e9 solid;

}

.cartProdGrid > div {
    padding: 12px;
    border-bottom: 1px #e9e9e9 solid;
    border-right: 1px #e9e9e9 solid;

}


.number{ 
    background-color: blue;


}
 */



</style>