<script>
    export let checked = false;
    // export let color = "#2196F3";
    // https://svelte.dev/repl/35d77f2ab11e4197a19ffd8e7c4ac74e?version=3.9.1
</script>

<label class="switch">
    <input type="checkbox" bind:checked />
    <span class="slider" />
</label>

<style>
    .switch {
        position: relative;
        display: inline-block;
        width: 40px;
        height: 20px;
    }

    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--grey-dark);
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 34px;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 16px;
        width: 16px;
        left: 2px;
        bottom: 2px;
        background-color: var(--grey-mid);
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 50%;
    }

    input:checked + .slider {
        background-color: white;
    }

    input:checked + .slider {
        box-shadow: 0 0 1px var(--neutral);
    }
    
    input:checked + .slider:before {
        -webkit-transform: translateX(20px);
        -ms-transform: translateX(20px);
        transform: translateX(20px);
    }
</style>