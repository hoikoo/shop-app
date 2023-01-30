<script lang="ts">
    import Bar from "../Bar.svelte";
    import ImageP from "./ImageP.svelte";
    import DescriptionP from "./DescriptionP.svelte";

</script>



<div class="globalContainer"> 

    <div class="container1">    
        <Bar redTrue = {true} text = "" serachTrue = {true} logoTrue = {true} cartTrue = {true}></Bar>
    </div>

    <div class = "main">




    </div>







    <div class = "field">
        <div >
            content

        </div>

    </div>


    <div class = "field">
        <div >
            cpntetn

        </div>

    </div>

</div>




<style>

.globalContainer {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    padding: 10px; 
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

}

    
.container1 {
    display: flex; 
    justify-content: space-around;
    
} 

.container1 {
    padding: 10px;    

} 

.main {
    display: flex;
    place-self: center;
    place-content: center;
    width: 90%;
    padding: 4%;
    
}
  
.field {
    place-self: center;
    padding: 10px;
    background-color: white ;
    border: 2px #e6e6e6 solid;
    border-radius: 5px;
    width: 93%;
    
}
    
    
    
.dataAllProd {
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(300px, 1fr));
    column-gap: 3%;
    row-gap: 25px;
    width: 100%;

}
    
    
    </style>