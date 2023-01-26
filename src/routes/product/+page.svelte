<script lang="ts">
    //import const productIMG from "$routes/img/trousers.png"

</script>



<div class="globalContainer"> 

    <!-- searchbar element -->
    <div class="container1">

        <div class="bar">
            <div class = "othersBar"></div>
            <div class = "searchBar">Search</div>
        </div>

    </div>

    <!-- Image element -->
    <div class = "container2"> 
        <div class ="containerGrid">
            <div class = "itemIMG"> IMAGE</div>
            <div class = "itemCart"> ADD 2 CART</div>
            <div class = "itemPrice">
                PRICE
                <div class="itemPName">
                    This product has Name!
                </div>
            </div>
            <div class = "itemDesc"> Description of the product is OK!
            </div>
        </div>

    </div>

    <!-- Reviews element -->

    <div class = "field">
        <div>
            content



        </div>

    </div>

    <!-- Other Products element -->
    <div class = "field">
        <div class = "container3">
            cpntetn



        </div>

    </div>

</div>




<style>

    .globalContainer {
        display: grid;
        row-gap: 18px;
        padding: 10px;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    
    }
    
    .container1 {
        display: flex; 
        justify-content: space-around;
        
    } 

    .container2 {
        display: flex; 
        justify-content: space-around;

        
    } 
       
    .container3 {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr; 
        gap: 12px;
    
    }
    
    .containerGrid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;  
        grid-auto-rows: auto;
        column-gap: 2%;   
        max-width: 100%;
        overflow: hidden;
        grid-template-areas:
            "a a c c"
            "a a d d"
            "a a d d"
            "b b d d";
        align-content: end ;
        padding: 10px;    
        width: 85%;
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        
    } 
    
    .container1 div  {
        padding: 10px;    
    
    } 
    
    .itemIMG {
        grid-area: a;
        background-color: #ffffff;
        border: 2px rgb(231, 231, 231) solid;
        border-bottom: hidden;
        padding: 10px;    
    
    }

    .itemCart {
        grid-area: b;
        padding: 10px;   
        background-color: #fe7f2d;
        border: 2px #f17420 solid;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        text-align: end;
    
    }

    .itemPrice {
        grid-area: c;
        justify-content: center ;
        align-items: center ;
        display: grid;     
        grid-template-columns: 1fr 6fr;  
        color: #fe7f2d;
        font-weight: bold;    
        text-align: center;  
        background-color: #ffffff ;
        border: 2px #619b8a solid;
    
    }
    
    .itemPName {
        padding: 10px;
        background-color: #a1c181;
        color:  #303053;
        font-weight: normal;   
        text-align: center;

    }

    .itemDesc {
        grid-area: d;
        padding: 10px;    
        background-color: #ffffff;
        border: 2px rgb(231, 231, 231) solid;
        border-top: hidden;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;


    }


    
    .field {
        padding: 10px;
        background-color: white ;
        border: 3px #43728f solid;
        border-radius: 5px;
    
    }
    
    
    
    .bar {
        align-items: center ;
        display: flex;
        justify-content: space-between;
        font-family:monospace ;
        width: 90%;
        padding: 10px;
        background-color: #fe7f2d;
        border: 3px #f17420 solid;
        border-radius: 10px;
    
    }
    
    .searchBar {
        flex:1;
        width: 100%;
        padding: 10px;
        color: rgba(170, 54, 0, 0.3);
        background-color: #ffa263;
        border-radius: 8px;
    
    }
    
    .othersBar {
        flex:10;
        width: 100%;
        padding: 10px;
    
    }
    
    
    :global(body) {
          background-color: #233d4d ;
    
    }
    
    </style>