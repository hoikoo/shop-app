<script lang="ts">
    import type { PageData } from "./$types";
    import ImageP from "./ImageP.svelte";
    import DescriptionP from "./DescriptionP.svelte";

    export let data: PageData
    export const productCart = data.productId;

    let rateNotNull = false;
    if(data.products !== null  && data.products.rating !== null && data.products.rating !== null) {
        rateNotNull = true
    }


</script>

    {#if data.products !== null}
    <div class = "container1">
    <ImageP prodIMG={data.products.image} productCart = {productCart} chackUs = {data.user}></ImageP>
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

}

</style>