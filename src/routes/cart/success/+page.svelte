<script lang="ts">
	import Card from "$lib/components/Card.svelte";



</script>

<Card>
    
    <div class = "successfield"> 
        <div class="successtext">★</div>
        <div class="successtext">TRANSACTION SUCCESSFUL!</div> 
        <div class="successtext">★</div>
    </div>

</Card>


<style>
.successfield{
    display:grid;
    gap:30px;
    grid-template-columns: 1fr 2fr 1fr;
    padding:15%;
    place-self: center;
    

}

.successtext {
    text-align: center;
    font-size: xx-large;
    font-weight: bold;
    color: #7cadc4;

}
</style>