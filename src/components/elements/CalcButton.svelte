<script>
    export let text, bgcolor;
</script>

<button class="button {bgcolor}">
    {text}
</button>

<style>
   button {
        background-color: var(--grey-dark);
        color: white;
        font-size: 20px;
    }
    button:hover {
        border: 2px solid rgba(0, 0, 0, .05);
    }
    .white {
        background-color: white;
        color: var(--dark);
        font-variation-settings: 'wght' 380;
    }
    .light {
        background-color: var(--color-light);
        color: var(--dark);
        font-variation-settings: 'wght' 350;
    }
    .dark {
        background-color: var(--color-dark);
        color: var(--dark);
    }
</style>