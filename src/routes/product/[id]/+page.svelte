<script lang="ts">
	import { page } from "$app/stores";	
    import type { PageData } from "./$types";
    import ImageP from "./ImageP.svelte";
    import DescriptionP from "./DescriptionP.svelte";

	import { dataset_dev } from "svelte/internal";
	import type { Product } from "./+page.server";
    import type { productGetId } from "./+page.server"; /// gets id from server ?

    export let data: PageData


</script>


<div class = "fontCL">

    <div class = "container1">
    <ImageP prodIMG={data.products.image}></ImageP>
    <DescriptionP title={data.products.title} price={data.products.price} description={data.products.description} rate={data.products.rate}></DescriptionP>
    </div>





IDID:
{data.products.id}-------
DESCRIPTION:
{data.products.description}-------
PRICE:
{data.products.price}--------
TITLE:
{data.products.title}-------------------



    id:{data.productId}
    get products: {data.products}

    data from server: {data.productId} 
    data from client:{$page.params.id}


</div>





<style>

.fontCL {
    color: aliceblue;
}

.container1 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    vertical-align: top ; 
    margin: 3%;
    gap: 3%;

}

</style>