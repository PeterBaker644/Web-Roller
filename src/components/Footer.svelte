<script>

</script>

<footer>
    <div class="field">
        <div class="input">
            <button class="button character">
                Character:
            </button>
            <button class="button player">
                Player:
            </button>
        </div>
        <textarea/>
    </div>
    <button class="icon">
        roll
    </button>
    <div class="field">
        <div class="roll">
            Something
        </div>
    </div>
</footer>

<style>
    footer {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 80px;
        background-color: var(--grey-dark);
        display: grid;
        grid-template-columns: 1fr 60px 320px;
        justify-content: center;
        align-items: center;
    }
    textarea {
        width: 100%;
        margin-right: 20px;
        height: 100%;
        background: transparent;
        border: none;
        resize: none;
        box-sizing: border-box;
        padding: 8px;
    }
    .field, .icon {
        height: 60px;
        box-shadow: 0px 4px 7px 0px rgba(0,0,0,0.34);
    }
    .field {
        background-color: white;
        margin: 0em 0.6em;
        border-radius: 20px;
        display: flex;
        align-items: center;
    }
    .button {
        text-transform: uppercase;
        font-variation-settings: 'wght' 400;
        padding: 0.2em 0.1em 0em 0em;
        height: 30px;
        width: 140px;
    }
    .character {
        background-color: var(--color-light);
        border-radius: 18px 0px 0px 0px;
    }
    .player {
        background-color: var(--color-dark);
        border-radius: 0px 0px 0px 18px;
    }
    .icon {
        background-color: var(--dark);
        color: var(--neutral);
        text-transform: uppercase;
        padding: 0.2em 0.1em 0em 0em;
        border-radius: 100%;
        border: 3px solid var(--neutral);
    }
</style>