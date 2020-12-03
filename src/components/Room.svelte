<script>
    import { fly } from 'svelte/transition';
    import { room } from './stores';
    import Pulltab from './elements/Pulltab.svelte';
    import Member from './elements/Member.svelte';
</script>

<section transition:fly="{{ x: -320, duration: 200 }}" class="sidebar">
    <Pulltab side="room"/>
    <h1>Room Members: ({$room.users.length || 0})</h1>
    <div class="members">
        {#each $room.users as member}
            <Member {...member}/>
        {/each}
    </div>
</section>

<style>
    h1 {
        font: 18px var(--sans);
        font-variant: small-caps;
        font-variation-settings: 'wght'400;
        background-color: var(--grey-mid);
        padding: 0.6em;
        margin:0;
    }
    .sidebar {
        position: relative;
        height: 100%;
        /* display: flex;
        flex-direction: column;
        justify-content: space-between; */
        background-color: var(--grey-dark);
        color: var(--neutral);
    }
    .members {
        height: calc(100vh - 262px);
        padding-left: 8px;
        overflow-y: scroll;
        overflow-x: hidden;
    }
    @media (max-width: 1000px) {
        h1 {
            display: none;
        }
    }
</style>