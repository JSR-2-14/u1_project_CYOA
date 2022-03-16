// Your code below...

// Wrap your whole game in a function, then call your function at the end...

const playAgainPrompt = () => {
    let replay = confirm('Play again? (Y) or (N)')
    if (replay === true) {
        playGame()
    } else alert ("Quitter...")
}

const playGame = () => {
    let answer = confirm("You just got off the Greyhound in Nashville with nothing but the boots on your feet and an old acoustic guitar. You're determined to become a bonafide country music star - platinum records, multiple grammy awards, a transition into feature films, the works! You step through the bus station door and out onto the dusty streets of Music City, USA. Just then a brief, fleeting moment of doubt washes over you like a cold wave. For a split second you're scared, uncertain... Are you sure you want to do this? There's still time to choose a more stable career path... Continue?");
    if (answer === true) {
        let name = prompt("You're damn right you want to do this. You didn't travel all the way from Moose Jaw, Saskatchewan to bail now. Before you do anything else, you've got to create a catchy stage name.")
        let age = prompt(`${name}... That's great stage name. It will look real nice etched on a grammy. And how old are you, ${name}?`)
        if (age >= 40) {
            let planB = prompt ("Oooooh, I hate to break it to you, but anyone over 40 might as well be a corpse as far as record labels are concerned. I'm sure you can still get that Grammy, you just might have to get creative about it. Do you want to become a (G)host writer for a younger, more attractive artist, an (A)udio engineer for a younger, more attractive band, or a (M)asked EDM producer so you can hide your old wrinkly face behind some sort of costume?")

            switch (planB) {
                case 'G':
                    let lyricsOrMusic = prompt (" Great decision. Writing music for other people can be very lucrative. What's your specialty as a writer - (L)yrics or (M)usic?")
                    if (lyricsOrMusic === 'L') {
                        alert("Hmmm... Unfortunately these days most country lyrics are generated using an automated algorithm programmed by drunk orangatans. Maybe you should get a job waiting tables and enroll in a coding bootcamp.")
                        playAgainPrompt()
                    } else if (lyricsOrMusic === 'M') {
                        alert ("Harlan Howard once said that country music is just '3 chords and the truth.' Well, this is Nashville, home of some of the most talented pickers in the world, and every one of them already knows all three of those chords. So you're really bringing nothing new to the table. Maybe you should head back to Moose Jaw and get a job as a zamboni driver.")
                        playAgainPrompt()
                    } else {
                        return
                    }
                    break;
                case 'A': 
                    let majorOrIndie = prompt ("Engineer. Great choice! There are studios all over this town. I'm sure you can get a job working behind the glass. Do you want to work with (M)ajor artists or (I)ndy acts?")
                    if (majorOrIndie === 'M') {
                        alert("Bad news. Major Country artist don't actually require an engineer at their sessions. They all use a ProTools session template that was set up by Rascall Flatts in 1998. Maybe you should go back to school for business like your parents wanted you to.")
                        playAgainPrompt()
                    } else if (majorOrIndie === 'I') {
                        alert ("I know a guy who has a great indie studio in his mom's basement. Some very talented acts record there. Unfortunately they can only afford to pay you in cases of Schlitz... What's that? Your landlord requires real money for rent?  Darn, maybe you should cash in some of those empties and buy a ticket back to Saskatchewan.")
                        playAgainPrompt()
                    } else {
                        return
                    }
                    break;
                case 'M':
                    let skiOrMouse = prompt ("Hey, you know what - if Daft Punk can make it big without showing their faces, so can you! The only question is what kind of mask you'll wear? A (S)ki Mask, or a (M)ickey mouse mask?")
                    if (skiOrMouse === 'S') {
                        alert("You buy a ski mask and start performing your EDM set at local dance clubs. Things are going well until one morning when you're walking to grab a coffee in your signature black ski mask and you're mistaken for a suspect in a recent bank robery. A classic cops & robbers shootout ensues in broad daylight in the middle of the street. You, an unarmed Canadian, are no match for the fire power of the militarized American police force and sadly, you are killed.")
                        playAgainPrompt()
                    } else if (skiOrMouse === 'M') {
                        alert ("You find a cheap micky mouse mask at a local costume shop and begin performing your EDM set at local raves, clubs, and house parties. But just as your career starts picking up steam, Disney sues the ever-loving shit out of you for trademark infringement and you lose everything. Broke and broken, you hitchhike back to Canada.")
                        playAgainPrompt()
                    } else {
                        return
                    }
                    break;
                default:
                    alert("Something went wrong!") 
            }
        } else if (age < 40) {
            let tweetCount = 10;
            let socialFollowing = alert("Great. As long as you're under 40, you have a shot at making it. In order to get discovered by a record label, you'll first need to build a following on social media. Click OK to post a moody selfie on Instagram.")
            for (let i = 0; i < 10; i++) {
                    alert("Click OK 10 times, as fast you can, to post 10 more pictures of yourself. You're building your brand. Your fan base is growing!")
            }
            let contractOffer = prompt ("Congrats! You've reached 1 Million Followers. The record label has called and offered you a deal! (A)ccept the contract, or (D)ecline it.")
                if (contractOffer === 'A') {
                    alert("You signed the deal. Unfortunately, the contract was heavily weighted in the label's favor. They now own all your publishing rights, as well as the rights to all your master recordings and the naming rights to your first three children.")
                    playAgainPrompt()
                } else if (contractOffer === 'D') {
                    alert("Good for you. Fight the power.")
                    playAgainPrompt()
                } else {
                    return
                }
        } else {
            alert("This should not happen.")
        }
    } else {
        alert("That's probably a wise choice.")
        playAgainPrompt()
    }
}

playGame()