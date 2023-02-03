<script lang="ts">
	import type { PageData } from "./$types";



    export let data: PageData
</script>


<div class = "meField">
{data.user?.adress}
{data.user?.city}
{data.user?.name}
{data.user?.surname}
</div>

<style>

.meField {
    display: grid;
    
    width: 90%;
    place-self: center;
    background-color: white;
    padding: 20px;
    border-radius: 5px;

}







</style>