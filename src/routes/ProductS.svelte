<script lang="ts">
	import type { Product } from "./proxy+page.server";



    export let product: Pick<Product, "id" | "title" | "image" | "price" >;
 

    function moveToPage() {
        return alert("moved to page")


    }



</script>
    

    <a href={"/product/" + product.id} class = "data1Prod" >
        
        <div class = "dataProdTitle">{product.title}</div>
        
        <div class ="dataContainProdIMG">
            <img class ="dataProdIMG" src={product.image} alt = "img"/>
        </div>

        <div class = "dataProdPrice">{product.price+ "$"}</div>
        
    </a>
      
    
    
    
<style>
    
.data1Prod {
    display: grid;
    grid-template-rows: max-content 6fr max-content;
    vertical-align: top ; 
    margin: 10px;
    box-shadow: 10px 10px 1px  rgba(223, 223, 223, 0.3);
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
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

.dataContainProdIMG {
    place-content: center;
    background-color: white;
    display: flex;
    width: 100%;
    box-shadow:inset 0px 0px 0px 1px rgb(223, 223, 223);
    
}

.dataProdIMG {
    width: 90%;
    height: 90%;
    place-self: center;
    max-height: 300px;
    object-fit: contain;

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

.data1Prod:hover {
    opacity: 0.86;
}

.data1Prod:active {
    opacity: 0.5;
}


</style>