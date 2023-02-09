<script lang="ts">
	import { error } from "@sveltejs/kit";
    import downloadIMG from "../../../img/download.png"
import type { ActionData } from "./$types";



export let form: ActionData;

import type { PageData } from "./$types";
    export let data: PageData

    let changeIsTrue = false;

    function inputOnChange () {

        changeIsTrue = true
    }



</script>


<!-- error: {form?.error}   -->
<div class = "application">


    <div class = "text" style="font-size: large;">Edit your profile</div>

    {#if form?.error==true} 
    <p class = "p" style="place-self: center ;  color:red">Please fill in all entries</p>
    {/if}

    {#if form?.error==false  } 
    <p class = "p" style="place-self: center ;  color:green">Information updated!</p>
    {/if}

    <form method="post"  action ="?/submit">

        <div class = "bar" style="border-top: 1px #e9e9e9 solid;"> 
            <p class = "p">Name:</p>
            <input class = "input" name="name" />

        </div>    

        <div class = "bar" >
            <p class = "p">Surname:</p>
            <input class = "input" name = "surname" />

        </div> 

        <div class = "bar" > 
            <p class = "p">City:</p>
            <input class = "input" name = "city" />

        </div> 

        <div class = "bar" > 
            <p class = "p">Post code:</p>
            <input class = "input" name="postcode" />

        </div> 

        <div class = "bar" > 
            <p class = "p">Adress:</p>
            <input class = "input" name="adress" />

        </div> 

        <button class="button">Submit</button>



        <div style="width:100%; border-top: 1px #e9e9e9 solid; height:10px"></div>

        
        erorr: { form?.error}
        <form method="post" style = "display: grid; place-items: center" enctype='multipart/form-data' action = "?/image">

            <input name="userId" value={data.user?.id} type="hidden"/>

            <div class = "containIMG">
                <img class = "iMG"src = {downloadIMG} alt = "img"/>
                
                <input class= "inputIMG"
                
                class:inputTrue={changeIsTrue}
                type = "file" name="userPFP" accept="image/*" on:change={inputOnChange}/>

            </div>


            <button class = "submitPFP"  on:click={() => alert("Image has been added")} >Upload Image</button>




        </form>



        <div style="width:100%; border-top: 1px #e9e9e9 solid; height:10px"></div>
   
       

    </form>

    <form method="post" action ="?/cancel">
        
        <button class="button2">Cancel changes</button>
    </form>


</div>

<style>
    .application {
        display: grid;
        gap:10px;
        grid-template-columns: 1fr;
        vertical-align: top ;     
        background-color: white;
        padding: 20px;
        margin: 2%;
        border-radius: 5px;
        place-self: center;
        font-family: Arial, Helvetica, sans-serif;
        box-shadow: 10px 10px 1px  rgba(223, 223, 223, 0.3);
    }

    .bar{
        display: grid;
        grid-template-columns: 1fr max-content max-content;
        padding: 10px;
    }

    .p {
        place-self: end;
    }

    .text {
        place-self: center;
        margin: 15px;
    }

    .button {
        border: hidden;
        padding: 10px;
        margin-bottom:10px;
        width: 100%;
        place-self: center;
        border-radius: 5px;
        background-color: #a8dadc;
        color: #1e5670;
    }
    .button:hover {
        cursor: pointer;
        background-color: rgb(170, 227, 230);

    }

    button:active {
        cursor: pointer;
        background-color: #7cadc4;
    }

    .button2 {
        border: hidden;
        padding: 10px;
        width: 100%;
        place-self: center;
        border-radius: 5px;
        background-color: #e9e9e9;
        color: #818181;
    }
    .button2:hover {
        cursor: pointer;
        color:#a7a7a7;
        background-color: rgb(245, 245, 245);

    }

    .button2:active {
        cursor: pointer;
        color: #6b6b6b;
        background-color: #c4c4c4;
    }

    .input{
        border-radius: 3px;
        border: 1px #ccc solid;

    }

    .input:hover {
        background-color: #f7f7f7;
    }


    ::-webkit-file-upload-button {
        display: grid;
        place-self: end;
        
        color: rgba(0, 0, 0, 0);
        background-image: linear-gradient(to bottom right, rgb(255, 255, 255), rgb(226, 226, 226));
        border:none;
        border-bottom: 2px #ccc solid;
        border-right: 2px #ccc solid;
        width:100%;
        height: 80%;
        border-radius: 10px;
    }

    ::-webkit-file-upload-button:hover {
        color: rgba(0, 0, 0, 0);
        opacity: 0.5;
        background-image: linear-gradient(to bottom right, rgb(252, 252, 252), rgb(209, 209, 209));
        border:none;
        border-bottom: 2px #ccc solid;
        border-right: 2px #ccc solid;
    }

    ::-webkit-file-upload-button:valid {
        color: rgba(0, 0, 0, 0);
        opacity: 0.5;
        background-image: linear-gradient(to bottom right,#a8dadc, #1e5670);
        border:none;

    }


    .submitPFP {
        margin: 10px;
        border: hidden;
        padding: 10px;
        width: 100%;
        place-self: center;
        border-radius: 5px;
        background-color: #a8dadc;
        color: #1e5670;

    }
    
    .submitPFP:disabled {
        background-color: #ececec;
        color: #cecece;

    }

    .containIMG {
    align-content: center;
        
    display: flex;
    height: 100px;
    /* box-shadow:inset 0px 0px 0px 2px rgb(228, 228, 228); */

    }
    .iMG {
    padding: 10px;
    height: 30px;
    opacity: 0.4;
    align-self: center;
    max-height: 500px;
    object-fit: contain;
    
    }

    .inputTrue { 
        place-items: center;
        background-color:hotpink;
    }


</style>