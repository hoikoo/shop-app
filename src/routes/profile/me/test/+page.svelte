<script lang="ts"> 
    import type { PageData } from "./$types";
    export let data: PageData



// const fileInput = document.getElementById('userPFPId'); 

//is not happy about document.getelementById 

//  if (fileInput !== null) {
//         fileInput.addEventListener('change', (e) =>
//         doSomething(e.target.files),

    
//     );

// }

// function doSomething(r) {
//     if (r == null) {

//         return false

//     } else {
//     console.log(r, "CHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEECHK");
//     getiMGVAR = toString(r);
//     return getiMGVAR
//     }
// }



</script>

<form method="post" style = "place-items: center" enctype='multipart/form-data' action = "?/image">

    <input name="userId" value={data.user?.id} />

    <input type = "file" name="userPFP" accept="image/*"/>
    
    <button class = "submitPFP"  on:click={() => alert("Image has been added")}>Upload Image</button>

</form>


<div class = "tEST" id = "target"> DRAG IMAGE HERE</div>

<style>

.tEST {
    background-color: hotpink;
    width: 100%;
    height: 200px;
}






</style>