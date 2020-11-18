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
            {name:"Peter Baker", character: "Wren Marking", class: [{name:"Rogue", level:3}, {name:"Warlock", level:2}]},
            {name:"Jake Nelson", character: "Bree Tealeaf", class: {name:"Cleric", level:3}},
            {name:"Damien Hutchins", character: "Reed Tealeaf", class: {name:"Wizard", level:3}},
            {name:"Susan Menril", character: "Tawnely Nighthill", class: [{name:"Rogue", level:3}, {name:"Fighter", level:1}]}
        ],
        dm: "Anthony Marcus"
    }
)