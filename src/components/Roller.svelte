<script>
    import { user, character, room } from './stores';
    import CalcButton from './elements/CalcButton.svelte'
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
        {text:"del", bgcolor:"dark"},
        {text:"AC", bgcolor:"dark"},
        {text:"+", bgcolor:"light"}
    ]
</script>

<div class="roller-sidebar">
    <div class="calculator top">
        {#each calcTop as {text}}
            <CalcButton {text}></CalcButton>
        {/each}
    </div>
    <div class="calculator bottom">
        {#each calcBottom as {text, bgcolor}}
            <CalcButton {text} bgcolor="{bgcolor}"></CalcButton>
        {/each}
    </div>
</div>

<style>

.roller-sidebar {
    position: fixed;
    right: 0;
    width: var(--column);
    height: 100%;
    background-color: var(--grey-light);
}
.calculator {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: calc(var(--column)/4.8);
    font-size: 36px;
}
</style>