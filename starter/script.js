// Your code below...

// Wrap your whole game in a function, then call your function at the end...

const playGame = () => {
    let answer = confirm("You just got off the Greyhound in Nashville with nothing but the boots on your feet and an old acoustic guitar. You're determined to become a bonafide country music star - platinum records, multiple grammy awards, a transition into feature films, the works! You step through the bus station door and out onto the dusty streets of Music City, USA. Just then a brief, fleeting, moment of doubt washes over you like a cold wave. For a split second you're scared, uncertain... Are you sure you want to do this? There's still time to choose a more stable career path... Continue?");
    if (answer === true) {
        let name = prompt("You're damn right you want to do this. You didn't travel all the way from the outskirts of Thompson, Manitoba to bail now. Before you do anything else, you've got to create a catchy stage name. ")
        let age = prompt(`${name}... Great choice. It will look real nice etched on a grammy.  And how old are you, ${name}?`)
        if (age >= 40) {
            let planB = prompt ("Oooooh, I hate to break it to you, but anyone over 40 might as well be a corpse as far as record labels are concerned. I'm sure you can still get that Grammy, you might just have to get creative about it. Do you want to become a (G)host writer for a younger, more attractive artist, an (A)udio engineer for a younger, more attractive band, or a (M)asked EDM producer so you can hide your old wrinkly face behind some sort of costume?")

            switch (planB) {
                case 'G':
                    let lyricsOrMusic = prompt (" Great decision. Writing music for other people can be very lucrative. What's your specialty - (L)yrics or (M)usic?")
                    if (lyricsOrMusic === 'L') {
                        alert("Hmmm... Unfortunately these days most country lyrics are actually generated via an automated algorithm programmed by drunk orangatans. I recommend you get a job waiting tables and enroll in a coding bootcamp in hopes of making a career change.")
                    } else if (lyricsOrMusic === 'M') {
                        alert ("Harlan Howard once said that country music is just '3 chords and the truth.' Well, this is Nashville, home of some of the most talented pickers in the world, and every one of them already knows all three of those chords. You're really bringing nothing new to the table. Maybe you should call your former boss at Tim Horton's in Manitoba and ask if you can get your old job back.")
                    } else {
                        return
                    }
                    break;
                case 'A': 
                    let majorOrIndie = prompt ("Engineer. Great choice! There are studios all over this town. I'm sure you can get a job working behind the glass. Do you want to work with (M)ajor artists or (I)ndy acts?")
                    if (majorOrIndie === 'M') {
                        alert("Major Country artist don't actually require an engineer at their sessions. They all use a ProTools template that was set up by Rascall Flatts in 1998. Maybe you should go back to school for business like your parents wanted you to.")
                    } else if (majorOrIndie === 'I') {
                        alert ("My friend has a great indie studio in his mom's basement. some raelly talented acts record there. Unfortunately they can only afford to pay you in cases of Schlitz. Your landlord requires real money for rent, so maybe you should cash in some of those empties and buy a ticket back to Manitoba.")
                    } else {
                        return
                    }
                    break;
                case 'M':
                    let skiOrMouse = prompt ("Hey, you know what - if Daft Punk can make it big without showing their faces, so can you! The only question is what kind of mask will you wear? A (S)ki Mask, or a (m)ickey mouse mask?")
                    if (skiOrMouse === 'S') {
                        alert("You begin performing as a DJ in your ski mask at local dance clubs. Things are going well until one morning when you're walking to grab a coffee in your signature black ski mask and you're mistaken for a suspect in a recent bank robery. A classic cops & robbers shootout ensues in the middle of broad daylight. You, an unarmed Canadian, are no match for the fire power of the militarized american police force and sadly, you are killed.")
                    } else if (skiOrMouse === 'M') {
                        alert ("You find a cheap micky mouse mask at a local costume shop and begin performing your EDM set at local raves, clubs, and house parties. But just as your career starts picking up steam, Disney sues the ever-loving shit out of you for trademark infringement and you lose everything. Broke and broken, you hitchhike back to Manitoba.")
                    } else {
                        return
                    }
                    break;
                default:
                    alert("Something went wrong!") 
            }
        } else if (age < 40) {
            alert("welcome to door two")
        } else
        if (door === 3) {
            alert("welcome to door three")
        } else {
            alert("I said pick a door.")
        }
    } else {
        alert("That's probably a wise choice.");
    }
}

playGame()