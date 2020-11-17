<script>
    import { user, character, room } from './stores';

    let now = new Date();
    const date = { year: 'numeric', month: 'long', day: 'numeric' };
    const time = { hour: 'numeric', minute: 'numeric' };
    // https://svelte.dev/repl/clock?version=3.29.7
</script>

<header>
    <div class="title">
        <h1>Web Roller</h1>
        <div class="user">
            <p>{$user.name}</p>
        </div>
    </div>
    <div class="subtitle">
        <div class="room">
            {$room.name}
            <span class="clock">
                {now.toLocaleDateString(undefined, date)}
                &nbsp
                {now.toLocaleTimeString(undefined, time)}
            </span>
        </div>
        <button>Edit Character</button>
        <div class="character">
            <img class='portrait' src={$character.image} alt="portrait of {$character.name}">      
            <span class="name">{$character.name}</span>
        </div>
    </div>
</header>


<style>
    header {
        margin: 0;
        background-color: var(--grey-mid);
        color: white;
    }
    h1 {
        margin: 0;
        font-family: 'toril';
        font-size: 72px;
        font-weight: normal;
        padding: 0.5rem 0 0 1rem;
    }
    button {
        color: white;
    }
    .title {
        /* height: 100px; */
        background-color: var(--grey-dark);
        border-bottom: 2px solid var(--color-dark);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .subtitle {
        display: flex;
        height: 50px;
        align-items: center;
        margin: 0em 1rem;
        font: 32px 'cyrodiil';
    }
    .user {
        font-family: 'NT-SC';
        margin: 1em;
    }
    .room {
        flex-grow: 2;
        display: flex;
        align-items: center;
    }
    .clock {
        margin: 0em 1em;
        font: 14px 'NT';
        /* justify-self: start; */
    }
    .character {
        /* justify-self: end; */
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .name {
        min-width: 150px;
    }
    .portrait {
        width:100px;
        height:100px;
        object-fit: cover;
        object-position: 50% 20%;
        z-index: 1;
        border: 4px solid var(--color-dark);
        border-radius: 100%;
        margin: 0.3em;
        box-shadow: 0px 4px 7px 0px rgba(0,0,0,0.34);
    }
</style>