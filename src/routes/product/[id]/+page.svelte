<script lang="ts">
	import { page } from "$app/stores";	
    import type { PageData } from "./$types";
    import ImageP from "./ImageP.svelte";
    import DescriptionP from "./DescriptionP.svelte";

	import { dataset_dev } from "svelte/internal";
	import type { ProductI } from "./+page.server";
    import type { productGetId } from "./+page.server"; /// gets id from server ?



    
    export let data: PageData


    export const productCart = data.productId;


    let rateNotNull = false;
    if(data.products !== null  && data.products.rating !== null && data.products.rating !== null) {
        rateNotNull = true
    }


</script>

<!-- <form method="post">
    <input name="productId" value={productCart} type="hidden" />
    <button>add to cart button</button>

</form> -->

    {#if data.products !== null}
    <div class = "container1">
        <!-- some error with image ughhhhhhhh specifically with button on click -->
    <ImageP prodIMG={data.products.image} productCart = {productCart}></ImageP>
    <DescriptionP title={data.products.title} price={data.products.price} description={data.products.description} rate={data.products.rating} rateNotNull={rateNotNull}></DescriptionP>
    </div>
    {/if}

<style>


.container1 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    vertical-align: top ; 
    margin: 3%;
    gap: 3%;
    /*place-items: center;*/

}

</style>