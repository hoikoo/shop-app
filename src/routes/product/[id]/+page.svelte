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


    <div class = "container1">
    <ImageP prodIMG={data.products.image} ></ImageP>
    <DescriptionP title={data.products.title} price={data.products.price} description={data.products.description} rate={data.products.rating.rate}></DescriptionP>
    </div>


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