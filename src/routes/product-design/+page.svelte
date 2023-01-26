<script lang="ts">
    export let image2: string;
    export let line2: string;
    export let price2: string;

</script>
    
    
<div class="box"> 
         
    <div class = "image">{image2}</div>
    <div class = "line">
        {line2}
        <div class="price">
            {price2}
        </div>
    </div>
    
</div>
    

    
<style>
    
    .box {
        width: 380px;
        height: 400px;;
        border: 1px #ccc solid;
        display: flex;
        flex-direction: column;
    
    }
    
    .image {
        width: 100;
        height: 100%;
        border: 1px #ccc solid;
        padding: 10px;
    
    }
    
    .line {
        width: 100;
        height: 40px;
        border: 1px #ccc solid;
        justify-content: center ;
        align-items: center ;
        display: flex;
        justify-content: space-between;
    
    }
    
    .price {
        border: 1px #ccc solid;
        padding: 10px;
        height: 100;
    }
    
</style>