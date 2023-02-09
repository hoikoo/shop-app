<script lang="ts">
	import Card from "$lib/components/Card.svelte";
	import type { PageData } from "./$types";
     
    import ProfileImage from "./ProfileImage.svelte";


   export let data: PageData




</script>


<Card>

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
        <form method="post" class = "formStyle" action ="?/logout">

            <input name="userId" value={data.user?.id} type="hidden" />
            <button class = "button1"  on:click={ () => console.log("Logging out")}>Log out</button>

        </form> 

        <form method="post" class = "formStyle" action ="?/edit">

                <input name="userId" value={data.user?.id} type="hidden" />
                <button class = "button2"  on:click={ () => console.log("change User info")}>Edit profile</button>

        </form> 
    </div>





</Card>

<style>



.headWImg {
    display: grid;
    grid-template-columns: 2fr 5fr;
    padding: 20px;
    justify-items: center;
    gap : 30px;

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

.button1 {
    font-size: large;
    justify-self: center;
    justify-content: center;
    padding: 10px;
    border-radius: 12px;
    width: 50%;
    background-color: white;
    color: #818181;
    border: hidden;
    border-bottom: 1px #e9e9e9 solid;
    box-shadow: 0px 10px 1px #e9e9e93f ;


}

.button1:hover, .button2:hover {
    background-color: #fafafa;
    border: hidden;
    border-bottom: 1px #fafafa solid;
    color: #aaaaaa;
    box-shadow: 0px 6px 1px #cecece3f ;

}

.button1:active, .button2:active {
    background-color: rgba(223, 223, 223, 0.8);
    color: #535353;
    border: hidden;
    border-bottom: 1px rgba(223, 223, 223, 0.8) solid;
    box-shadow: 0px 4px 1px #b8b8b83f ;

}


.button2 {
    font-size: medium;
    justify-self: end;
    justify-content: center;
    padding: 10px;
    border-radius: 12px;
    width: 15%;
    background-color: white;
    color: #818181;
    border: hidden;
    border-bottom: 1px #e9e9e9 solid;
    box-shadow: 0px 10px 1px #e9e9e93f ;

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