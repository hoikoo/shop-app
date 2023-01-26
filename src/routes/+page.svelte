<script lang="ts">
    import Product from "./Product.svelte";
    import productIMG from './img/throusers.png';
	import type { PageData } from "./$types";

    export let data: PageData
    
</script>
 


<div class="globalContainer">

    <div class="container1">

        <div class="header">
            <div class = "othersBar"></div>
            <div class = "searchBar">Search</div>
        </div>

    </div>
    
    <div class="container2">

        <Product price = "39.66$" line = "This product is definitely good!" image = {productIMG} large = {true} ></Product>
        <Product price = "40$" line = "This product is definitely not good!" image = {productIMG} large = {true} ></Product> 
        <Product price = "41$" line = "This product is definitely bad!" image = {productIMG} large = {true} ></Product>

    </div>

    <div class="container1">

        <div class="couponBar"> DISCOUNT <span style="color:#e63946"> ! </span> 99.99% OFF<span style="color:#e63946">!!!</span> BUY 2 ITEMS BY THE PRICE OF 3 <span style="color:#e63946">!</span> </div>

    </div>

    <div class="main">

        <div class = "dataAllProd">
            {#each data.products as p}

                <div class ="data1Prod">

                    <div  class ="dataProdTitle">{p.title}</div>

                    <div class ="dataContainProdIMG">
                            <img class ="dataProdIMG" src={p.image} alt = "img"/>

                    </div>

                    <div class ="dataProdPrice" style ="">{p.price  + "$"}</div>

                </div>
            {/each}
        </div>

    </div>




    <!-- main top 3 products element 


        <div class="container2">

            <Product price = "39.66$" line = "This product is definitely good!" image = {productIMG}></Product>
            <Product price = "40$" line = "This product is definitely not good!" image = {productIMG}></Product> 
            <Product price = "41$" line = "This product is definitely bad!" image = {productIMG}></Product>

        </div> -->
           


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

.data1Prod {
    display: grid;
    grid-template-rows: max-content 6fr max-content;
    vertical-align: top ; 
    margin: 10px;
    box-shadow: 10px 10px 1px  rgba(223, 223, 223, 0.3);
    border-radius: 5px;

}

.dataProdTitle {
    overflow: hidden;
    padding:10px;
    background-color: #a8dadc;
    color: #1d3557;
    text-align: center;
    border: #a8dadc 2px solid;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    box-shadow: inset 0px 6px rgb(255, 255, 255, 0.3) ;

}

.dataProdPrice {
    padding:10px;
    overflow: hidden;
    background-color: #f54747;
    color: #300505 ;
    text-align: center;
    font-weight: bold;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border: #f54747 2px solid;
    box-shadow: inset 0px 4px rgb(255, 255, 255, 0.3) ;

}


.dataContainProdIMG {
    background-color: white;
    display: flex;
    width: 100%;
    box-shadow:inset 0px 0px 0px 1px rgb(223, 223, 223);
    place-content: center;
    
    
}

.dataProdIMG {
    width: 90%;
    height: 90%;
    place-self: center;
    max-height: 300px;
    object-fit: contain;

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