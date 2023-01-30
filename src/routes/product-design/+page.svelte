<script lang="ts">
    import prodIMG from '../img/throusers.png' ;

</script>
    
    
<div class="container"> 
    <div class="containIMG">
        <img class = "iMG" src = {prodIMG} alt = "img"/>
    </div>
    <div class = "addCart">ADD TO CART</div>

    
</div>
    

    
<style>
.container {
    display: grid;
    grid-template-rows: 6fr max-content;
    vertical-align: top ; 
    margin: 10px;
    background-color: hotpink;
    box-shadow: 10px 10px 1px  rgba(223, 223, 223, 0.3);
    border-radius: 5px;

}

.containIMG {
    place-content: center;
    background-color: white;
    display: flex;
    width: 100%;
    box-shadow:inset 0px 0px 0px 1px rgb(223, 223, 223);


}

.iMG {
    width: 90%;
    height: 90%;
    place-self: center;
    max-height: 500px;
    object-fit: contain;

}

.addCart {
    padding:10px;
    overflow: hidden;
    background-color: #f54747;
    color: #300505 ;
    text-align: center;
    font-weight: bold;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border: #f54747 2px solid;
    box-shadow: inset 0px 4px rgb(255, 255, 255, 0.3) ;


}

</style>