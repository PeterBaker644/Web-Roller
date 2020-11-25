<script>
    import { fly } from 'svelte/transition';
    import { user, character, room } from './stores';
    import CalcButton from './elements/CalcButton.svelte'
    import Switch from './elements/Switch.svelte'
    import Ability from './elements/Ability.svelte'
    import Pulltab from './elements/Pulltab.svelte';

    const charClass = $character.class.map((entry) => Object.values(entry).join(" ")).join(" ");

    const profBonus = "+" + Math.ceil($character.class.reduce((a,b) => a.level + b.level)/4);

    let abilities = $character.abilities;

    const calcTop = [
        {text:"d12"},
        {text:"d8"},
        {text:"d4"},
        {text:"d%"},
        {text:"d20"},
        {text:"d10"},
        {text:"d6"},
        {text:"dx"}
    ];
    const calcBottom = [
        {text:"7", bgcolor:"white"},
        {text:"8", bgcolor:"white"},
        {text:"9", bgcolor:"white"},
        {text:"÷", bgcolor:"light"},
        {text:"4", bgcolor:"white"},
        {text:"5", bgcolor:"white"},
        {text:"6", bgcolor:"white"},
        {text:"×", bgcolor:"light"},
        {text:"1", bgcolor:"white"},
        {text:"2", bgcolor:"white"},
        {text:"3", bgcolor:"white"},
        {text:"-", bgcolor:"light"},
        {text:"0", bgcolor:"white"},
        {text:"←", bgcolor:"dark"},
        {text:"AC", bgcolor:"dark"},
        {text:"+", bgcolor:"light"}
    ]
</script>

<div transition:fly="{{ x: 320, duration: 200 }}" class="sidebar">
    <Pulltab side="roller"/>
    <section class="details">
        <div class="class">
            {charClass}
        </div>
        <div class="side">
            <button class="bonus">{profBonus}</button>
            <p>proficiency bonus</p>
            <Switch/> 
            <p>inspiration</p>
        </div>
        <div class="abilities">
            {#each abilities as value, index}
                <Ability {value} {index} />
            {/each}
        </div>
    </section>
    <section class="input">
        <div class="calculator">
            {#each calcTop as {text}}
                <CalcButton {text}></CalcButton>
            {/each}
        </div>
        <div class="advantage">
            <Switch/> 
            <p>advantage</p>
            <Switch/> 
            <p>disadvantage</p>
        </div>
        <div class="calculator">
            {#each calcBottom as {text, bgcolor}}
                <CalcButton {text} bgcolor="{bgcolor}"></CalcButton>
            {/each}
        </div>
    </section>
</div>

<style>
p {
    margin: 0.6em 0px;
}
.sidebar {
    position: relative;
    right: 0;
    width: 320px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--grey-mid);
    color: var(--neutral);
}
.bonus {
    width: 60px;
    height: 36px;
    background-color: var(--grey-dark);
    color: var(--neutral);
    font-size: 18px;
    padding: 0.2em 0.1em 0em 0em;
    border-radius: 20px;
}
.side {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-transform: uppercase;
    font-size: 12px;
    font-variation-settings: 'wght' 400;
}
.details {
    display: grid;  
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    padding-bottom: 0.5em;
    margin-right: 0.3em;
}
.class {
    grid-column: 2;
    text-align: center;
    width: 220px;
    font: 18px var(--sans);
    font-variant: small-caps;
    font-variation-settings: 'wght'400;
    color: var(--neutral);
    padding: 0.6em;
}
.abilities {
    grid-column: 2;
    display: grid;
    grid-auto-flow: column;
    gap: 0.3em;
    grid-template-rows: repeat(3, 1fr);
    grid-auto-columns: 110px;
}
.calculator {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: calc(var(--column)/4.8);
    font-size: 36px;
}
.advantage {
    display:flex;
    justify-content: space-between;
    align-items: center;
    font: 18px var(--sans);
    font-variant: small-caps;
    font-variation-settings: 'wght'400;
    height: 32px;
    margin: 0rem 0.5rem;
}
.arrow {
    bottom: 50vh;
    left: -28px;
    position: absolute;
    height: 52px;
    width: 52px;
    border-radius: 30px;
    padding: 0.5em 0 0 0;
    background-color: rgba(255,255,255,0.2);
    border: 2px solid var(--grey-dark);
    backdrop-filter: blur(2px);
    z-index: -1;
}
</style>