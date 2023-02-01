<script lang="ts">
	import { error } from "@sveltejs/kit";
import type { ActionData } from "./$types";



export let form: ActionData;


</script>


error: {form?.error} 
<div class = "application">


    {#if form?.error==true} 
    <p class = "p" style="place-self: center ;  color:red">Please fill in all entries</p>
    {/if}

    {#if form?.error==false  } 
    <p class = "p" style="place-self: center ;  color:green">New account created!</p>
    {/if}

    <form method="post">

        <div class = "bar" > 
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

        <div class = "bar" > 
            <p class = "p">Password:</p>
            <input name="password" />
            <button>submit</button>
        </div> 

    </form>
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
    }

    .bar{
        display: grid;
        grid-template-columns: 1fr max-content max-content;
        padding: 10px;
    }

    .p {
        place-self: end;
    }

</style>