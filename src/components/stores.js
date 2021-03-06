import { writable } from 'svelte/store';

export const user = writable(
    {
        name:"SirChamomile",
        color:"red", 
        dm:false,
    }
);

export const character = writable(
    {
        name:"Wren Marking",
        abilities: [14, 17, 14, 16, 14, 16],
        class: [{name:"Rogue", level:3}, {name:"Warlock", level:2}],
        image: "/assets/images/wren.jpg"
    }
)

export const room = writable(
    {
        name:"Ravenloft",
        users: [
            {id:0, name:"Peter Baker", character: "Wren Marking", charClass: [{name:"Rogue", level:3}, {name:"Warlock", level:2}], image: "/assets/images/wren.jpg"},
            {id:1, name:"Jake Nelson", character: "Bree Tealeaf", charClass: {name:"Cleric", level:3}, image: "/assets/images/bree.jpg"},
            {id:2, name:"Damien Hutchins", character: "Reed Tealeaf", charClass: {name:"Wizard", level:3}, image: "/assets/images/reed.jpg"},
            {id:3, name:"Susan Menril", character: "Tawnely Nighthill", charClass: [{name:"Rogue", level:3}, {name:"Fighter", level:1}, ], image: "/assets/images/tawnely.jpg"}
        ],
        dm: {name:"Anthony Marcus", image:"/assets/images/dm.jpg"}
    }
)

export const page = writable(
    {
        roller:true,
        room:true
    }
)