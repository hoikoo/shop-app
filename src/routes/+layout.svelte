<script lang="ts">
	import type { PageData } from "./$types";
    import Bar from "./Bar.svelte";

    export let data: PageData

</script>


<!-- {data.user?.name} -->

<div class = "globalContainer">
    <div class="container1">
        <Bar redTrue = {true} text = "" serachTrue = {true} logoTrue = {true}  cartTrue = {true} checkUser = {true} userActive = {data.user !== null}></Bar>
    </div>

    <slot></slot>

</div>

<style>

.globalContainer {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    padding: 10px; 
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

}

.container1 {
    display: flex; 
    justify-content: space-around;
    
} 

:global(body) {
      background-color: #1d3557 ;

}

</style>