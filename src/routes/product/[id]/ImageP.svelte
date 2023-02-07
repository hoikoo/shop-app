<script lang="ts">
	import { page } from "$app/stores";
	import type { Customer } from "@prisma/client";
	import { redirect } from "@sveltejs/kit";

    export let prodIMG: string;
    export let productCart: string;
    export let chackUs: Customer | null;

    function ckeckAuth() {

        if(chackUs !== null) {
            alert("Product added");

        } else {
            alert("Sign in first");
            
        }

    }
    
    

</script>

<div class="container"> 


    <div class="containIMG">
        <img class = "iMG" src = {prodIMG} alt = "img"/>
    </div>

    <form method="post" style = "place-items: center">

        <input name="productId" value={productCart} type="hidden" />
        <button class = "addCart"  on:click={ckeckAuth}>ADD TO CART</button>

    </form>
    
</div>

<style>

.container {
    display: grid;
    grid-template-rows: 6fr max-content;
    vertical-align: top ; 
    margin: 10px;
    background-color: hotpink;
    box-shadow: 10px 10px 1px  rgba(223, 223, 223, 0.3);
    border-radius: 5px;
   
    max-height: 550px;
    height: 100%; 
    aspect-ratio: 1/1;

    justify-self: end;
}

.containIMG {
    place-content: center;
    background-color: white;
    display: flex;
    width: 100%;
    box-shadow:inset 0px 0px 0px 2px rgb(228, 228, 228);

}

.iMG {
    width: 90%;
    height: 90%;
    place-self: center;
    max-height: 500px;
    object-fit: contain;

}

.addCart {
    padding:10px;
    overflow: hidden;
    width: 100%;
    background-color: #f54747;
    color: #300505 ;
    font-size: large;
    text-align:center;
    font-weight: bold;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border: #f54747 2px solid;
    box-shadow: inset 0px 4px rgb(255, 255, 255, 0.3) ;
    cursor: pointer;
    object-fit: contain;
    
}
.addCart:hover {
    background-color: #fc6d6d;
    border-color: #fc6d6d;
    color:#ab0909;

}
    
    
.addCart:active {
    background-color: #e22020;
    border-color: #e22020;
    color:#000000;
    box-shadow: inset 0px -4px #be1717;
    border-bottom-color: #be1717;
    border-right-color:#be1717;
}
</style>