<script lang="ts">
    import ProductS from "./ProductS.svelte";
    import Bar from "./Bar.svelte";
    import productIMG from './img/throusers.png';
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
 


<div class="globalContainer">

    <div class="container1">
        <Bar blueTrue = {true} text = "YEXT TEXT TEXET TEXE" logoTrue = {true}></Bar>
    </div>

    <div class="container1">
        <Bar redTrue = {true} text = "TEXT TEXTE TEXT TEXT"></Bar>
    </div>

    <div class="container1">

        <div class="header">
            <div class = "othersBar"></div>
            <div class = "searchBar">Search</div>
        </div>

    </div>
    
    <div class="container2">


        {#each highlightProdduct as p}
            <ProductS image={p.image} line={p.title} price={p.price}></ProductS>
        {/each}

    </div>

    <div class="container1">

        <div class="couponBar"> DISCOUNT<span style="color:#e63946"> ! 99.99% OFF !!!</span> BUY 2 ITEMS BY THE PRICE OF 3 <span style="color:#e63946">!</span> </div>

    </div>

    <div class="main">

        <div class = "dataAllProd">


            {#each restProdduct as p}

                <ProductS image={p.image} line={p.title} price={p.price}></ProductS>

            {/each}
        </div>

    </div>

</div>



<style>

.globalContainer {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    padding: 10px; 
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

}

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
    gap: 12px;
    place-items: center;
    margin: 4%;
    
} 


.container1 div, .container2 {
    padding: 10px;    

} 



.main {
    display: flex;
    place-content: center;
    width: 90%;
    padding: 4%;
    background-color: 1d3557 ;
    border: 2px rgb(218, 218, 218) solid;
    border-radius: 3px;
    border: hidden;
    
}



.header {
    display: flex;
    align-items: center ;
    font-family:monospace ;
    width: 90%;
    background-color: #e63946;
    border: 2px rgb(199, 24, 39) solid;
    border-radius: 8px;
    box-shadow: 10px 10px 1px  rgba(223, 223, 223, 0.3);

}

.searchBar {
    flex:1;
    width: 100%;
    background-color: rgb(255, 255, 255 , 0.3);
    color: rgb(199, 24, 39, 0.5);
    border-radius: 8px;

} 

.othersBar {
    flex:10;
    width: 100%;

}

.couponBar {
    display: flex;
    place-content: center ;
    align-items: center;
    width: 90%;
    min-height: 30px;;
    color: #1e5670;
    font-weight: bold;
    font-size: large;
    text-align: center;
    background-color: #a8dadc;
    border: 2px #7cadc4 solid;
    border-radius: 8px;
    box-shadow: 10px 10px 1px  rgba(223, 223, 223, 0.3);

}

:global(body) {
      background-color: #1d3557 ;

}

</style>