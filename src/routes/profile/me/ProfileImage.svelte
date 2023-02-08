<script lang="ts">
import profileImg from "../../img/user.png"


export let userId: number;

</script>


<div class = "container">
    
    <div class = "containIMG">


        <img class = "iMG" src = {`/api/image/me`} alt = "img"/>
        <!-- // figure out if user has a profile pricture?? -->


    </div>

</div>



<style>

.container {
    display: grid;
    /* grid-template-rows: 6fr max-content; */
    vertical-align: top ; 
    margin: 20px;
    border-bottom: 2px #e9e9e9 solid;
    border-right: 2px #e9e9e9 solid;
    box-shadow: 10px 10px 1px #e9e9e93f ;
    border-radius: 100%;
    height: 300px; 
    aspect-ratio: 1/1;

    justify-self: center;
}

.containIMG {
    place-content: center;

    display: flex;
    height: 100%;
    /* box-shadow:inset 0px 0px 0px 2px rgb(228, 228, 228); */

}

.iMG {
    width: 100%;
    height: 100%;
    place-self: center;
    max-height: 500px;
    object-fit: contain;
    border-radius: 100%;
}


</style>