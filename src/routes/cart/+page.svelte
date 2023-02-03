<script lang="ts">
	import type { PageData } from "./$types";

    export let data: PageData


</script>

<div class = "cartField">
CART items of {data.user?.name}
<div>Item 1</div>

</div>

<style>

.cartField {
    display: grid;
    
    width: 90%;
    place-self: center;
    background-color: white;
    padding: 20px;
    border-radius: 5px;

}





</style>