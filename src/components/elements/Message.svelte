<script>
    import { room } from "../stores.js";
    export let authorId, type, time, date, text, roll, index;
    import { onMount } from "svelte";

        $: author = $room.users[authorId];
        let userName, charName = "";
        let player = type === "player";
        
        const sum = roll ? (roll.result.toString().replace(/[()+/x]+/g,"")).split(" ").reduce((a, b) => Number(a) + Number(b)) : '';

        onMount(() => {
            userName = author.name.split(' ')[0];
            charName = author.character.split(' ')[0];
            console.log(userName);
        });
   
</script>

<section class="message" data-timestamp="{time}{date}" id="{index}{authorId}">
    <div class="icon">
        {#if !player}
        <img class="portrait" src={author.image} alt="portrait of {author.character}">
        {/if}
        <p class="timestamp">{time}</p>
        <!-- consider on hover for full time -->
    </div>
    <div class="text {player ? "muted" : "normal"}">
        <p >
            <span class="desc">{player ? userName : charName}:</span>
            <span style={player ? "font-style:italic" : ""}>{player ? text : '"' + text + '"'}</span>
        </p>
        {#if roll}
        <hr> 
        <div class="roll">
            <span style="color:var(--grey-mid)">{roll.dice}</span>
            &nbsp= {roll.result} =&nbsp;
            <span style="color:var(--color-dark)">{sum}</span>
        </div>
        {/if}
    </div>
</section>

<style>
    section {
        margin-bottom: 0.2em;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: var(--text);
        font-size: 14px;
        font-weight: 350;
        padding: 0 1em;
    }
    p {        
        color: var(--dark);
    }
    .message {
        display: grid;
        grid-template-columns: 80px 1fr;
        align-items: flex-start;
        gap: 0.5em;
        width: 100%;
    }
    .icon {
        height: 100%;
        display:flex;
        text-align: center;
        flex-direction: column;
        justify-content: center;

    }
    .timestamp {
        padding: 0.3em;
        font-family: var(--sans);
        font-variant: small-caps;
        font-variation-settings: 'wght'400;
    }
    .desc {
        margin-right: 0.6em;
        font-variant: small-caps;
        font-variation-settings: 'wght'400;
    }
    .portrait {
        width:70px;
        height:70px;
        object-fit: cover;
        border-radius: 100%;
        margin: 0.3em;
        z-index: 1;
        box-shadow: 0px 4px 7px 0px rgba(0,0,0,0.3);
    }
    .text {
        text-align: left;
        box-shadow: 0px 3px 7px 0px rgba(0,0,0,0.2);
        border: thin solid var(--grey-light);
        border-radius: 26px;
        padding: 1em;
        margin: 0.3em;
    }
    .normal {
        background-color: rgba(255,255,255,0.8);
    }
    .muted {
        background-color: rgba(235,235,235,0.8);
    }
    .roll {
        display:flex;
        font-family: var(--sans);
    }
</style>