<script>
    import Pulltab from "./elements/Pulltab.svelte";
    import { fade } from 'svelte/transition';
    import { page } from "./stores.js";

    const log = [
        {
            authorId:0,
            type:"character",
            time:"10:47 AM",
            date:"11/24/20",
            text:"Why didn't you let me sneak up on them!?",
            roll:false
        },
        {
            authorId:1,
            type:"player",
            time:"10:47 AM",
            date:"11/24/20",
            text:"You've been rolling terribly",
            roll:false
        },
        {
            authorId:2,
            type:"character",
            time:"10:47 AM",
            date:"11/24/20",
            text:"Back off Wren, I've got this",
            roll:false
        },
        {
            authorId:2,
            type:"character",
            time:"10:47 AM",
            date:"11/24/20",
            text:"Back off Wren, I've got this",
            roll:{
                dice: "2d10 + 6",
                result: "(6) + (10) + 6"
            }
        },
        {
            authorId:3,
            type:"player",
            time:"10:48 AM",
            date:"11/24/20",
            text:"Ha! That was a ton of damage.",
            roll:false
        },
        {
            authorId:0,
            type:"character",
            time:"10:48 AM",
            date:"11/24/20",
            text:"I'll just have to do without the element of surprise, fine.",
            roll:false
        },
    ];
</script>

<main class="test">
    <div class="chat">
        {#if !$page.room}
        <div in:fade="{{duration:200, delay:200}}">
            <Pulltab side="room"/>
        </div>
        {/if}
        Just a test
        {#if !$page.roller}
        <div in:fade="{{duration:200, delay:200}}">
            <Pulltab side="roller"/>
        </div>
        {/if}
    </div>
</main>

<style>
    main {
        position: relative;
        flex-grow: 1;
    }
</style>