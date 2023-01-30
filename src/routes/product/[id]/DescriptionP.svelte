<script lang="ts">
    export let title: string;
    export let price: number;
    export let rate: number;
    export let description: string;

</script>

<div class="container"> 
    <div class="title">{title}</div>
    <div class = "priceRateContain">
        <div class="price">{price + "$"}</div>
        <div class="rate">{rate}</div>
    </div>
    <div class = "">{description}</div>
    
</div>




<style>

.container {
    display: grid;
    grid-template-rows:max-content max-content 6fr;
    vertical-align: top ; 
    margin: 10px;
    background-color: hotpink;
    box-shadow: 10px 10px 1px  rgba(223, 223, 223, 0.3);
    border-radius: 5px;

}

.title {
    padding:10px;
    overflow: hidden;
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
    grid-template-columns: 1fr 1fr;

}

.price{
    background-color: blue;




}

.rate{
    background-color: green;




}
    
</style>