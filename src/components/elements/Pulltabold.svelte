<script>
    export let left, center;
    
    // =================== I CAN'T GET THIS WORKING

    function handleClick () {
        console.log("test");
        $page.visible ? page.set({visible:false, ...page}) : page.set({visible:true, ...page})
    }

</script>

{#if left}
    {#if center }
    <button on:click={handleClick} class="left-center tab">
        <svg width="2em" height="2em" viewBox="0 0 16 16" fill="var(--grey-dark)">
            <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
        </svg>
    </button>
    {:else}
    <button on:click={handleClick} class="left tab">
        <svg width="2em" height="2em" viewBox="0 0 16 16" fill="var(--grey-dark)"> 
            <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
        </svg>
    </button>
    {/if}
{:else}
    {#if $page.visible}
        <button on:click={handleClick} class="tab right"> 
            <svg width="2em" height="2em" viewBox="0 0 16 16" fill="var(--grey-dark)">
                <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
            </svg>
        </button>
    {:else}
        <button on:click={handleClick} class="tab right-center"> 
            <svg width="2em" height="2em" viewBox="0 0 16 16" fill="var(--grey-dark)">
                <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
            </svg>
        </button>
    {/if}
{/if}

<style>
.tab {
    bottom: 50vh;
    position: absolute;
    height: 52px;
    width: 52px;
    border-radius: 30px;
    background-color: rgba(255,255,255,0.2);
    border: 2px solid var(--grey-dark);
    backdrop-filter: blur(2px);
} 
.left {
    left: -28px;
    padding: 0em 0 0 0.5em;
    clip-path: inset(0 46% 0 0);
}
.left-center {
    left: -28px;
    padding: 0em 0 0 0.5em;
    clip-path: inset(0 46% 0 0);
}
.right {
    left: -28px;
    padding: 0.5em 0 0 0;
    clip-path: inset(0 46% 0 0);
}
.right-center {
    right: -24px;
    padding: 0.5em 0 0 0;
    clip-path: inset(0 46% 0 0);
}
</style>