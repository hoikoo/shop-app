<script lang="ts">
    export let image: string;
    export let line: string;
    export let price: string;
    export let large = false;
</script>
    
    
<div
    class="box"
    class:large={large}
> 
         
    <div class = "image"> <img style="width: 100% ; height: 100% ; object-fit: contain" src={image} alt="product image"> </div>
    <div class = "line">
        {line}
        <div class="price">
            {price}
        </div>
    </div>
    
</div>
    
    
    
    
<style>
    
    .box {
        display: flex;
        flex-direction: column;
        width: 95%;
        align-self: center;
        justify-self: center;
    }
    
    .large {
        width: 90%;
        height: 100%;


    }

    .image {
        justify-content: center ;
        align-items: center ;
        display: flex;
        width: 100;
        height: 100%;
        padding: 2px;
        background-color: rgb(255, 255, 255);
        border: 2px rgb(231, 231, 231) solid;
        border-bottom: hidden;

    }
    
    .line {
        justify-content: center ;
        align-items: center ;
        display: grid;     
        grid-template-columns: 6fr 1fr; 
        gap: 12px;   
        color: #303053;   
        text-align: center;     
        background-color: #a1c181 ;
        border: 2px #619b8a solid;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    
    }
    
    .price {
        padding: 10px;
        background-color: #ffffff;
        border-bottom-right-radius: 5px;
        color:  #fe7f2d;
        text-align: center;
        font-weight: bold;

    }

</style>