<script>
    import { fly } from 'svelte/transition';
    import Pulltab from './elements/Pulltab.svelte';
</script>

<div transition:fly="{{ x: -320, duration: 200 }}">
    <Pulltab side="room"/>
    Just a test
</div>

<style>
    div {
        position: relative;
        background-color: green;
        color: white;
        width: var(--column);
    }
</style>