<script lang="ts">

    export let redTrue = false;
    export let blueTrue = false;
    export let logoTrue = false;

    import logo from './img/logo.png';
    export let text: string;

</script>


    <div class ="header" 
    class:redTrue = {redTrue}
    class:blueTrue = {blueTrue}
    >
        {#if logoTrue}
            <div class = "logoContainer">
                <img class="logoIMG" src={logo} alt="img">
            </div>
        {/if}
        {text}
        


</div>


<style>

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

.logoContainer {

    display: flex;
    height: 100%;
    flex: 10;

}

.logoIMG {

    height: 100%;

}




.header {
    display: flex;
    justify-content: center;  
    align-items: center;

    overflow: hidden;

    width: 90%;
    min-height: 30px;
    max-height: 40px;

    padding: 10px;

    font-weight: bold;
    font-size: large;
    text-align: center;

    border-radius: 8px;

    box-shadow: 10px 10px 1px  rgba(223, 223, 223, 0.3);

}

</style>
