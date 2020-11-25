<script>
    import { fly } from 'svelte/transition';
    import { room } from './stores';
    import Pulltab from './elements/Pulltab.svelte';
    import Member from './elements/Member.svelte';

    console.log($room.users);
</script>

<div transition:fly="{{ x: -320, duration: 200 }}" class="sidebar">
    <Pulltab side="room"/>
    <h1>Room Members:</h1>
    {#each $room.users as member}
        <Member {...member}/>
    {/each}
</div>

<style>
h1 {
    font: 18px var(--sans);
    font-variant: small-caps;
    font-variation-settings: 'wght'400;
    padding: 0.6em;
    margin:0;
}
.sidebar {
    position: relative;
    width: var(--column);
    /* display: flex;
    flex-direction: column;
    justify-content: space-between; */
    background-color: var(--grey-mid);
    color: var(--neutral);
}
</style>