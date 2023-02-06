<script lang="ts">
	import type { PageData } from "./$types";



    export let data: PageData
</script>


<div class = "meField">

<div class = "header"> Welcome to your account,   {data.user?.name}    {data.user?.surname} </div>

    <div class = "main1">Your delivery details:</div>
    <div class = "main2">Adress: {data.user?.adress} </div>
    <div class = "main2">Postal code: {data.user?.postCode} </div>
    <div class = "main2" style="border-bottom: 1px #e9e9e9 solid;">City: {data.user?.city}</div>

</div>

<style>

.meField {
    display: grid;
    grid-template-columns: 1fr;
    place-self: center;
    width: 90%;
    
    background-color: white;
    padding: 25px;
    border-radius: 5px;
    box-shadow: 10px 10px 1px  rgba(223, 223, 223, 0.3);
}

.header {
    place-self: center;
    font-size: larger;
    font-weight: lighter;
    padding: 20px;
    border-bottom: 1px #e9e9e9 solid;

}

.main1 {
    padding: 10px;
    font-size: large;

}

.main2 {
    padding: 10px;


}

</style>