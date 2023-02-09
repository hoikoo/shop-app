<div class="application">
    <slot />
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

</style>