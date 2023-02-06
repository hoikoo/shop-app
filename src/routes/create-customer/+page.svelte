<script lang="ts">
	import { error } from "@sveltejs/kit";
import type { ActionData } from "./$types";



export let form: ActionData;


</script>


error: {form?.error} 
<div class = "application">


    <div class = "text" style="font-size: large;">Create your account</div>

    {#if form?.error==true} 
    <p class = "p" style="place-self: center ;  color:red">Please fill in all entries</p>
    {/if}

    {#if form?.error==false  } 
    <p class = "p" style="place-self: center ;  color:green">New account created!</p>
    {/if}

    <form method="post">

        <div class = "bar" style="border-top: 1px #e9e9e9 solid;"> 
            <p class = "p">Name:</p>
            
            <input name="name" />
            <button>submit</button>
        </div>    

        <div class = "bar" >
            <p class = "p">Surname:</p>

            <input name = "surname" />
            <button>submit</button>
        </div> 

        <div class = "bar" > 
            <p class = "p">City:</p>
            <input name = "city" />
            <button>submit</button>
        </div> 

        <div class = "bar" > 
            <p class = "p">Post code:</p>
            <input name="postcode" />
            <button>submit</button>
        </div> 

        <div class = "bar" > 
            <p class = "p">Adress:</p>
            <input name="adress" />
            <button>submit</button>
        </div> 

        <div class = "bar" > 
            <p class = "p">E-mail:</p>
            <input name="email" />
            <button>submit</button>
        </div> 

        <div class = "bar" style="border-bottom: 1px #e9e9e9 solid;"> 
            <p class = "p">Password:</p>
            <input name="password" />
            <button>submit</button>
        </div> 

    </form>

    <div class = "text">Already have an account?</div>
    <a href="./login-customer" class = "text" style=" margin: 5px;">
        <div >Sign in</div>
    </a>


</div>

<style>
    .application {
        display: grid;
        grid-template-columns: 1fr;
        vertical-align: top ;     
        background-color: white;
        padding: 20px;
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


</style>