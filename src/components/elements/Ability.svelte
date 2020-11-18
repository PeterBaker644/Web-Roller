<script>
    export let value, index;
    const abilites = ["str","dex","con","int","wis","cha"];

    function calcModifier(mod) {
        let rounded = parseInt(mod) > 30 ? 30 : parseInt(mod);
        let modifier = Math.floor(rounded/2) - 5;
        switch (Math.sign(modifier)) {
            case 0:
                return "+0";
            case -1:
                return modifier;
            default:
                return "+" + modifier;
        }
    }
</script>

<div class="ability">
    <div class="label">{abilites[index]}: {value}</div>
    <button>
        {calcModifier(value)}
    </button>
</div>


<style>
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--grey-dark);
        color: var(--neutral);
        font-size: 18px;
        width: 36px;
        height: 36px;
        padding: 0.2em 0.1em 0em 0em;
        border-radius: 50%;
    }
    button:hover {
        border: 2px solid rgba(0, 0, 0, .05);
    }
    .ability {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .label {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--grey-light);
        color: var(--neutral);
        width: 60px;
        height: 24px;
        padding: 0.2em 0.1em 0em 0em;
        margin-right: 0.6em;
        font-size: 12px;
        text-transform: uppercase;
        font-variation-settings: 'wght' 400;
        border-radius: 25px;
    }
</style>