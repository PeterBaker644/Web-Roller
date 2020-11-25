<script>
    export let side;
    import { page } from "../stores.js";
    $: active = (side === "roller") ? $page.roller : $page.room;

    function handleClick () {
        if (side === "room") {
            active ? page.set({...$page, room:false}) : page.set({...$page, room:true})
        } else {
            active ? page.set({...$page, roller:false}) : page.set({...$page, roller:true})
        }
    }
</script>

<button on:click={handleClick} class="{active ? (side === "roller" ? "right-sidebar" : "left-sidebar") : side === "roller" ? "right" : "left"} tab">
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="var(--grey-dark)">
        <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
    </svg>
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="var(--grey-dark)">
        <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
    </svg>
</button>

<style>
button {
    position: absolute;
    height: 52px;
    width: 52px;
    border-radius: 30px;
    background-color: rgba(255,255,255,0.2);
    border: 1px solid var(--grey-dark);
    backdrop-filter: blur(2px);
    opacity: 0.3;
    font-size: 2em;
    display: flex;
    top: 50%;
    z-index: 1;
    transition: all 200ms ease-in-out;
}
button:hover {
    transition: all 200ms linear;
    opacity: 0.8;
    background-color: rgba(0,0,0,0.1);
}
svg {
    margin: -8px;
}
.right {
    clip-path: inset(0 50% 0 0);
    right: -26px;
}
.left {
    clip-path: inset(0 0 0 50%);
    left: -26px;
}
.right-sidebar {
    clip-path: inset(0 50% 0 0);
    flex-direction: row-reverse;
    left: -26px;
}
.left-sidebar {
    clip-path: inset(0 0 0 50%);
    flex-direction: row-reverse;
    right: -26px;
}

</style>