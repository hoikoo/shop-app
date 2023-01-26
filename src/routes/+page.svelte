<script lang="ts">
    import Product from "./Product.svelte";
    import productIMG from './img/throusers.png';
	import type { PageData } from "./$types";

    export let data: PageData
    
</script>
 


<div class="globalContainer">




    <div class = "dataAllProd">
        {#each data.products as p}

            <div class ="data1Prod">

                <div  class ="dataProdTitle">{p.title}</div>

                <div class ="dataSepProdIMG">
                        <img class ="dataProdIMG" src={p.image} alt = "img"/>

                </div>

                <div class ="dataProdPrice" style ="">{p.price  + "$"}</div>

            </div>
        {/each}
    </div>




    <!-- searchbar element -->
    <div class="container1">

        <div class="bar">
            <div class = "othersBar"></div>
            <div class = "searchBar">Search</div>
        </div>

    </div>

    <!-- main top 3 products element -->
        <div class="container2">

            <Product price = "39.66$" line = "This product is definitely good!" image = {productIMG} large = true ></Product>
            <Product price = "40$" line = "This product is definitely not good!" image = {productIMG} large = true ></Product> 
            <Product price = "41$" line = "This product is definitely bad!" image = {productIMG} large = true ></Product>

        </div>


    <!-- other products in field element -->
    <div class="field">


        <div class="container3">

            <Product price = "15$" line = "This product is definitely good!" image = {productIMG}></Product> 
            <Product price = "16$" line = "This product is definitely awesome!" image = {productIMG}></Product>
            <Product price = "17$" line = "This product is definitely not good!" image = {productIMG}></Product>
            <Product price = "18$" line = "This product is definitely sus!" image = {productIMG}></Product>
        
            <Product price = "15$" line = "This product is definitely no!" image = {productIMG}></Product> 
            <Product price = "16$" line = "This product is definitely not good!" image = {productIMG}></Product>
            <Product price = "17.55$" line = "This product is definitely bad!" image = {productIMG}></Product>
            <Product price = "18$" line = "This product is definitely yes!" image = {productIMG}></Product>

        </div>

    </div>
</div>



<style>

.globalContainer {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    padding: 10px; 
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

}

.dataAllProd {
    display: grid;

    grid-template-columns: 1fr 1fr 1fr ; 
    column-gap: 5%;
    width: 70%;

    align-self: center;
    justify-self: center;
    

}

.data1Prod {
    display: grid;
    grid-template-rows: max-content 6fr max-content;
    vertical-align: top ; 
    padding: 10px;



}

/*.data1Prod {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding:10px;
}*/

/*.dataProd {
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 10px;
    align-self: center;
    justify-content: center;
    background-color: hotpink;

}*/

.dataProdTitle {
    background-color: #a1c181;
    padding:10px;
    overflow: hidden;
    text-align: center;

    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border: #619b8a 3px solid;
    border-bottom: hidden;

}

.dataProdPrice {
    background-color: #fe7f2d;
    padding:10px;
    max-height: 15px;
    overflow: hidden;
    text-align: center;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border: #f17420 3px solid;
    font-weight: bold;


}


.dataSepProdIMG {
    background-color: white;
    display: flex;
    justify-self: center;
    width: 100%;
}

.dataProdIMG {
    display: grid;
    flex-direction: column;
    width: 100%;
    align-self: center;
    justify-self: center;
    max-height: 300px;
    object-fit: contain;

}

.container1 {
    display: flex; 
    justify-content: space-around;
    
} 

.container2 {
    display: grid;
    grid-template-columns: 15px 1fr 1fr; 
    gap: 12px;
    
} 


.container3 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr; 
    gap: 12px;

} 

.container1 div, .container2  {
    padding: 10px;    

} 



.field {
    padding: 10px;
    background-color: white ;
    border: 3px #43728f solid;
    border-radius: 5px;

}



.bar {
    align-items: center ;
    display: flex;
    justify-content: space-between;
    font-family:monospace ;
    width: 90%;
    padding: 10px;
    background-color: #fe7f2d;
    border: 3px #f17420 solid;
    border-radius: 10px;

}

.searchBar {
    flex:1;
    width: 100%;
    padding: 10px;
    color: rgba(170, 54, 0, 0.3);
    background-color: #ffa263;
    border-radius: 8px;

}

.othersBar {
    flex:10;
    width: 100%;
    padding: 10px;

}


:global(body) {
      background-color: #233d4d ;

}

</style>