<script lang="ts">
	import { page } from "$app/stores";
	import type { PageData } from "./$types";


    export let data: PageData
    
</script>


<div class = "fontCL">
    data from server: {data.productId}
    data from client:{$page.params.id}
</div>





<style>

.fontCL {
    color: aliceblue;
}



</style>