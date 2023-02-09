<script lang="ts">

    export let redTrue = false; 
    export let blueTrue = false;
    export let logoTrue = false;
    export let serachTrue = false;
    export let cartTrue = false;
    export let text: string;
    export let checkUser = false;
    export let userActive = false;

    import logo from './img/logo.png';
    import cartIMG from './img/cart.png';
    import user from './img/user.png';


    let c = false;

</script>

<div class ="header" 
    class:redTrue = {redTrue}
    class:blueTrue = {blueTrue}
>

    {#if logoTrue}
        <div class = "iMGContainer">
            <a href="/">
                <img class="iMG" src={logo} alt="img">
            </a>
        </div>
    {/if}
            
    <div class ="emptyText">{text}</div>   
        

    {#if checkUser}

        {#if userActive}
            
            <div class = "iMGContainer">
                <a href="/profile/me"> 
                    <img class="iMGpfp"  src={`/api/image/me`} alt="img">
                </a>
            </div>
            
        {:else}

            <div class = "iMGContainer">
                <a href="/login-customer"> 
                    <img class="iMGpfp" style="opacity: 0.2;"  src={user} alt="img">
                </a>
            </div>

        {/if}

    {/if}

    {#if cartTrue}

        {#if userActive}

            <div class = "iMGContainer">
                <a href="/cart"> 
                    <img class="iMG"  src={cartIMG} alt="img">
                </a>
            </div>

        {:else}

        <div class = "iMGContainer">
            <a href="/login-customer"> 
                <img class="iMG" style="opacity: 0.2;" src={cartIMG} alt="img">
            </a>
        </div>


        {/if}

    {/if}

    {#if serachTrue}
        <div class = "searchBar"> Search</div>

    {/if}

</div>


<style>

.header {
    display: flex;
    align-items: center;
    overflow: hidden;
    padding: 10px;
    width: 90%;
    height: 40px;
    border-radius: 8px;
    box-shadow: 10px 10px 1px  rgba(223, 223, 223, 0.3);

}

.redTrue{
    background-color: #e63946;
    color: #300505 ;
    border: 2px rgb(199, 24, 39) solid;

}

.blueTrue{
    background-color: #a8dadc;
    color: #1e5670;
    border: 2px #7cadc4 solid;

}

.iMGContainer {
    display: flex;      
    justify-content: center;
    flex: 10;  
    margin: 10px;
    height: 100%;  
    max-width: 50px;
    border-radius: 100%;
}

.iMGpfp {
    height: 100%;
    border-radius: 100%;
}

.iMG {
    height: 100%;

}

.searchBar {
    flex:1;
    padding: 10px;   
    width: 100%;
    max-width: 150px; 
    background-color: rgb(255, 255, 255 , 0.3);
    font-family:monospace ;
    color: rgba(100, 13, 13, 0.2);
    border-radius: 8px;
    cursor: pointer;


} 

.emptyText {
    flex:8;
    font-weight: bold;
    font-size: large;
    text-align: center;

}

iMG:hover {
    cursor: pointer;
    opacity:0.4;
    

}

iMG:active {
    box-shadow: inset 4px 4px 0 20px rgb(48, 5, 5, 0.2);

    border-radius: 4px;

}


</style>
