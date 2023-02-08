<script lang="ts">
	import type { PageData } from "./$types";
    import ProfileImage from "./ProfileImage.svelte";


    export let data: PageData




</script>


<div class = "meField">

    <div class = "headWImg"> 
        <ProfileImage userId={data.user?.id ?? 0}></ProfileImage>
        <div class = "info"> 

            <div class = "headText">Welcome to your account,   {data.user?.name}    {data.user?.surname} </div>
            
            <div> 

                <div class = "main1">Your delivery details:</div>
                <div class = "main2">Adress: {data.user?.adress} </div>
                <div class = "main2">Postal code: {data.user?.postCode} </div>
                <div class = "main2" >City: {data.user?.city}</div>

            </div>

        </div>

    </div>

    <div class = "headWImg"> 
        <form method="post" class = "formStyle">

            <input name="userId" value={data.user?.id} type="hidden" />
            <button class = "button"  on:click={ () => console.log("Logging out")}>Log out</button>

        </form> 
    </div>





</div>

<style>



.headWImg {
    display: grid;
    grid-template-columns: 2fr 5fr;
    padding: 20px;
    justify-items: center;
    gap : 30px;

}


.meField {
    display: grid;
    grid-template-columns: 1fr;
    place-self: center;
    width: 88%;
    gap: 20px;
    background-color: white;
    padding: 25px;
    border-radius: 5px;
    box-shadow: 10px 10px 1px  rgba(223, 223, 223, 0.3);
    overflow: hidden;
}

.info {
    display: grid;
    width:90%;
    grid-template-rows: 2fr 5fr;
    justify-self: center;
    font-size: large;
    margin: 20px;
    padding: 10px;
    border-bottom: 1px #e9e9e9 solid; 
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    object-fit: contain;
    overflow: hidden;
    box-shadow: 0px 10px 1px #e9e9e93f ;
}

.headText {
    font-size: larger;
    font-weight: bold;
    color: #1d3557;
    background-color: #a8dadc;
    box-shadow: inset 0px 6px rgb(255, 255, 255, 0.3) ;
    border: #a8dadc 2px solid;

    text-align: center;
    place-self: center;
    width: 94%;
    padding: 25px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    overflow: hidden;
}

.formStyle {
    place-self: center;
    min-width: 300px;
    display: grid;
    padding: 20px;
    width: 100%;

}

.button {
    font-size: large;
    justify-self: center;
    justify-content: center;
    padding: 10px;
    border-radius: 12px;
    width: 50%;
    background-color: rgba(223, 223, 223, 0.3);
    color: #818181;
    border: 1px rgb(243, 243, 243) solid;


}

.button:hover {
    background-color: #fafafa;
    border: 1px #fafafa solid;
    color: #aaaaaa;


}

.button:active {
    background-color: rgba(223, 223, 223, 0.8);
    color: #535353;
    border: 1px rgba(223, 223, 223, 0.8) solid;


}


.main1 {
    padding: 10px;
    margin: 10px;
    font-weight: bold;
}

.main2 {
    padding: 10px;
    margin: 10px;
    font-size: medium;
    color: #555555;
    
}

</style>