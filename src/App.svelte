<script>
    import { fly } from 'svelte/transition';
    import Header from "./components/Header.svelte";
    import Footer from "./components/Footer.svelte";
    import Roller from "./components/Roller.svelte";
    import Room from "./components/Room.svelte";
    import Background from "./components/Background.svelte"
    import { page } from "./components/stores.js";

</script>

<Header />

{#if $page.visible}
    <div transition:fly="{{ x: 320, duration: 200 }}"><Roller /></div>
{/if}
<Room />
<Background />
<Footer />

<style>

</style>