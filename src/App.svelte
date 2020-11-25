<script>
    import Header from "./components/Header.svelte";
    import Footer from "./components/Footer.svelte";
    import Roller from "./components/Roller.svelte";
    import Room from "./components/Room.svelte";
    import Main from './components/Main.svelte';
    import Background from "./components/Background.svelte"
    import { page } from "./components/stores.js";
</script>

<Header />
<div class="container">
    {#if $page.room}
        <Room />
    {/if}
    <Main/>
    {#if $page.roller}
        <Roller />
    {/if}
</div>
<Background />
<Footer />

<style>
    .container {
        display: flex;
        align-items: stretch;
        height: calc(100vh - 222px);
    }
</style>