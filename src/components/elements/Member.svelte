<script>
    export let id, name, character, charClass, image;
    let compClass = null;

    if (Array.isArray(charClass)) {
        compClass = charClass.map((entry) => Object.values(entry).join(" ")).join(" ");
    } else {
        compClass = Object.values(charClass).join(" ");
    }
    
</script>

<button class="member" id="members{id}">
    <img class="portrait" src={image} alt="portrait of {character}">
    <div class="info">
        <p>{name}</p>
        <h2>{character}</h2>
        <p>{compClass}</p>
    </div>
</button>

<style>
    h2 {
        font: normal 32px "cyrodiil";
        margin-top: -3px;
        color: var(--neutral);
    }
    p {
        font-variant: small-caps;
        font-variation-settings: 'wght'400;
        color: var(--neutral);
        opacity: 0.7;
    }
    .member {
        display: flex;
        justify-content: space-between;
        gap: 6px;
        width: 100%;
        height: 90px;
        background-color: var(--grey-dark);
        
    }
    .portrait {
        width:70px;
        height:70px;
        object-fit: cover;
        border: 2px solid var(--color-dark);
        border-radius: 100%;
        margin: 0.3em;
        z-index: 1;
        box-shadow: 0px 4px 7px 0px rgba(0,0,0,0.34);
    }
    .info {
        flex-grow: 1;
        text-align: left;
    }
</style>