<script lang="ts">
    import ProductS from "./ProductS.svelte";
    import Bar from "./Bar.svelte";
	import type { PageData } from "./$types";
	import type { Product } from "./+page.server";

    export let data: PageData
    let highlightProdduct: Array<Product> = [] ;
    let restProdduct: Array<Product> = [] ;
    
        
    for ( let i = 0; i < data.products.length ; i++ ) {
        if (i >= 3) {
            restProdduct.push( data.products[i] ) ;
        } else {
        highlightProdduct.push( data.products[i] )  ;
        }

    } 

</script>

    <div class="container2">
        {#each highlightProdduct as p}
            <ProductS image={p.image} line={p.title} price={p.price}></ProductS>
        
        {/each}

    </div>
    
    <div class="container1">
        <Bar blueTrue = {true} text = "BUY NOW AND GET FREE SHIPPING" ></Bar>
    </div>

    <div class="main">
        <div class = "dataAllProd">
            {#each restProdduct as p}
                <ProductS image={p.image} line={p.title} price={p.price}></ProductS>

            {/each}

        </div>

    </div>

<style>

.dataAllProd {
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(300px, 1fr));
    column-gap: 3%;
    row-gap: 25px;
    width: 100%;

}

.container1 {
    display: flex; 
    justify-content: space-around;
    
} 

.container2 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; 
    gap: 2%;
    margin: 4%;
    aspect-ratio: 3/1;
    
} 

.container1 , .container2 {
    padding: 10px;    

} 

.main {
    display: flex;
    place-self: center;
    place-content: center;
    width: 90%;
    padding: 4%;
    
}

</style>