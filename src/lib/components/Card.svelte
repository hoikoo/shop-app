<div class="cartField">
    <slot />
</div>


<style>
    .cartField {
        display: grid;
        grid-template-columns: 1fr;

        width: 88%;
        place-self: center;
        background-color: white;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 10px 10px 1px  rgba(223, 223, 223, 0.3);
    }

</style>