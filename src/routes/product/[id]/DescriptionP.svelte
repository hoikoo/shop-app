<script lang="ts">
    export let title: string;
    export let price: number;
    export let rate: number;
    export let description: string;
    // export let category: string;
</script>

<div class="container"> 
    <div class="title">{title}</div>
    <div class = "priceRateContain">
        <div class="price">{price + "$"}</div>
        <div class="rate">{"Rating " + rate + "★"}</div>
    </div>
    <div class = "description">
        <!-- <div>Description: </div> -->
        {description}
    </div>
    <!-- <div class = "category">{"Category: " + category}</div> -->
</div>




<style>

.container {
    display: grid;    

    grid-template-rows:max-content max-content 6fr;
    vertical-align: top ;     
    height: 100%; 
    aspect-ratio: 1/1;
    max-height: 550px;    
    overflow: hidden;
    margin: 10px;
    font-size: large;
    background-color: white;
    box-shadow: 10px 10px 1px  rgba(223, 223, 223, 0.3);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;


}

.title {    
    overflow: hidden;
    padding: 15px;
    background-color: #a8dadc ;
    color: #1e5670 ;
    text-align: center;
    font-weight: bold;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border: #a8dadc  2px solid;
    box-shadow: inset 0px 4px rgb(255, 255, 255, 0.3) ;

}

.priceRateContain {
    display: grid;    
    justify-items: center;
    grid-template-columns: 1fr 1fr;
    background-color: #f54747;
    color: #300505 ;
    border: #f54747 2px solid;
    box-shadow: inset 0px -6px  rgb(255, 255, 255, 0.3);

}

.price{
    padding: 10px;

}

.rate{
    padding: 10px;

}
    
.description {    
    padding: 20px;
    background-color: white;
    color:black;
    box-shadow:inset 0px 0px 0px 2px rgb(228, 228, 228);
    border-top: hidden;

}

/* .category {
    overflow: hidden;
    padding: 10px;
    background-color: #a8dadc ;
    color: #1e5670 ;
    text-align: center;
    font-weight: bold;
    border: #a8dadc  2px solid;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: inset 0px 4px rgb(255, 255, 255, 0.3) ;
    
} */


</style>