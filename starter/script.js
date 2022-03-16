

const chooseYourOwnAdventure = () => {

    let move
    let allowedMoves = 10
    let oneDrink = false
    let washingInProgress = false
    let alarmTripped = false
    let locationsVisited = []

    const cr = String.fromCharCode(13)

    const EXIT_METHOD_FRONTDOOR = "FRONTDOOR"
    const EXIT_METHOD_CARPORT = "CARPORT"

    const remainingMoves = () => {
        return (allowedMoves - move)
    }

    const changeLocation = (nextLocation, noCharge) => {
        if (!noCharge) move++
        if (move === 1) {
            welcomeInside()
        }
        else if (move === 2) {
            tripAlarm()
        }
        else if (move > allowedMoves) {
            nextLocation = policeStation() // override the next location
        }
        else {
            if (!noCharge && (remainingMoves() < 10)) warning()
        }
        console.log(move + ". " + " Heading to: " + nextLocation.locationName())
        locationsVisited.push(nextLocation.locationName())
        nextLocation.go()
    }

    const warning = ()  => {
        alert(`You have ${remainingMoves()} minutes/moves remaining.`)
    }

    const frontDoor = () => {
        console.log("Front Door")
        let resp = confirm(cr + `You are standing at the door to an apartment. `
            + cr + cr + `Do you wish to enter?`)
        if (resp === true) {
            changeLocation(foyer())
        }
        else {
            walkAway()
        }
    };

    const walkAway = () => {
        console.log("Walking away")
        alert("Thanks for not playing");
        gameOver();
    };

    const welcomeInside = () => {
        console.log("Welcome script")
        alert(`Welcome inside my apartment.`
            + cr + cr + `Congratulations! Seeing I didn't actually invite you in, you may have just broken the law. Lets see whether you get away with this indiscretion.`)
        alert(`Now that you are here you can take a look around...`)
    }

    const tripAlarm = () => {
        if (alarmTripped) {
            return
        } else  {
            alarmTripped = true;
        }
        let responseTime = 10 + Math.floor(Math.random() * 10)
        console.log("Alarm tripped")
        alert(`I forgot to mention, my apartment has a Back-To-Station security alarm.`)
        alert(`The police have been alerted to your presence.`)
        let correctGuess = false;
        for (attemptsRemaining = 3; attemptsRemaining > 0; attemptsRemaining--) {
            let answer = parseInt(prompt('Can you guess how long it will take for them to get here?' 
                + cr + `You have ${attemptsRemaining} guesses remaining.`
                + cr + cr + 'Pick a number between 10 - 20'))
            if (answer && answer >- 10 && answer <= 20) {
                if (answer === responseTime) {
                    correctGuess = true;
                    break;
                } 
                if (attemptsRemaining > 1) {
                    if (answer < responseTime) {
                        alert("Higher")
                    }
                    else {
                        alert("Lower")
                    }
                }
            } 
            else {
                alert(`That answer wasn't recognised.`)
            }
        }
        if (correctGuess) {
            alert(`That's correct! They'll be here in ${responseTime} minutes/moves. `
                + cr + cr + `Seeing you guessed correctly you can have another 5 minutes to look around.`)
            responseTime += 5;
        } else {
            alert(`No luck. The answer is ${responseTime}`
            + cr + cr + `You have ${responseTime} minutes/moves before they arrive.` )
        }
        allowedMoves = responseTime + 2 // we add 2 moves for the initial 2 location changges inside the apartment.
    }

    const foyer = () => {
        this.locationName = function () {
            return "Foyer"
        }
        this.go = function () {
            let answer = parseInt(prompt(`You're in the entry area. It's a small, open, non-descript space, except for the band artwork on the wall. Wait is that fabric ... `
                + cr + cr + `The living room is in front of you, a hallway to your right. In between a there a door leading to who know's where. Behind you is the front door through which you arrived.`
                + cr + cr + 'Where would you like to go next?' 
                + cr + '   1. Move to the living room'
                + cr + '   2. Move into the hallway'
                + cr + '   3. Open mystery door No.1'
                + cr + '   4. Leave!' 
            ))
            switch (answer) {
            case 1:
                changeLocation(livingRoom())
                break
            case 2:
                changeLocation(hallway())
                break
            case 3:
                changeLocation(laundry())
                break
            case 4:
                leave(EXIT_METHOD_FRONTDOOR)
                break
            default:
                alert(`That's not a recognised answer. Please type the the number matching your selection (1 - 4) and then click Ok.`)
                go()
            }
        }
        return this
    }

    const leave = (exit) => {
        console.log(`Leaving by: ${exit}`)
        if (move === 1) {
            alert("Thanks for poking your head in.")
        } 
        else if (exit === EXIT_METHOD_FRONTDOOR) {
            alert(`Thanks for finally leaving my apartment! And just in time before the police arrive!`)
            alert(`As you might have noticed, this is a very quiet adventure, not your fault you couldn't hear the alarm going off. `
                + cr + cr + `But my neighbour Bruce could.`
                + cr + cr + `He's here to keep you company for a few minutes until ...`)
        }
        else if (exit === EXIT_METHOD_CARPORT) {
            alert(`You've made it out to the street ... just as the police pull up. `)
            alert(`Lucky you, they walk straight past and into the apartment complex.`
                + cr + `You're free to enjoy the rest of your day, or ...`)
        } 
        else {
            alert(`You've made it out... Not quite sure how that happened`)
        } 
        gameOver()
    }

    const livingRoom = () => {
        this.locationName = function () {
            return "Living Room"
        }
        this.go = function () {
            alert(`You are now standing in the living room. The lights are off at the moment, so you can't see the way ahead. Best go back the way you came... ` );
            changeLocation(foyer(), true)
        }
        return this
    }

    const hallway = () => {
        this.locationName = function () {
            return "Hallway"
        }
        this.go = function () {
            let bpFrames = oneDrink ? 36 : 18
            let courseName = oneDrink ? "Development Web Front-End" : "Front-End Web Development"
            let answer = parseInt(prompt(`You are now standing at the beginning of my hallway. It's a short hallway. Lots of doors. Along one wall is a display of ${bpFrames} black picture frames. Ah, the famous Black Picture Frames. Didn't these feature in a ${courseName} course?`
                + cr + cr + `To your left is an open door leading to what looks like a study. To your right is another mystery door. You can see more rooms and doors at the other end of the hallway.`
                + cr + cr + 'Where would you like to go next?' 
                + cr + '   1. Turn left into the study'
                + cr + '   2. Open mystery door No.2'
                + cr + '   3. Move down the hallway'
                + cr + '   4. Return to the entry area' 
            ))
            switch (answer) {
                case 1:
                    changeLocation(study())
                    break
                case 2:
                    changeLocation(pantry(), true)
                    break
                case 3:
                    changeLocation(hallway2(), true)
                    break
                case 4:
                    changeLocation(foyer())
                    break
                default:
                    alert(`That's not a recognised answer. `
                    + cr + `Please enter the number (1 - 4) matching your selection and then click Ok.`)
                    go()
            }
        }
        return this
    }

    const laundry = () => {
        this.locationName = function () {
            return "Laundry"
        }
        this.go = function () {
            if (washingInProgress) {
                alert(`A quick glance into the laundry, the washing machine is still doing it's thing.`)
            }
            else {
                alert(`You are now standing in my laundry. And, if you look down, you'll find you're standing my laundry ... my dirty laundry.`
                    + cr + cr  + `Care to put on a load of washing for me?` )
                alert(`Thanks. You're a champ!`)
                alert('The detergent is in the cupboard.')
                alert(`Don't worry about the fabric softener, I've ran out.`)
                alert('Just set the machine to gentle wash')
                alert(`Dial down to 40 degrees`)
                alert('Extra rinse');
                alert('And you should be set to press Start')
                alert(`Great. Thanks again! `
                    + cr + cr + `Had I realised that would take you 5 minutes I wouldn't have asked`)
                move += 4
                washingInProgress = true
            }
            changeLocation(foyer())
        }
        return this
    }


    const study = () => {
        this.locationName = function () {
            return "Study"
        }
        this.go = function () {
            let answer = parseInt(prompt(`You are now standing in the study. Wait a minute, this ain't no study, this is a place where projects come to die. `
                +  cr + cr + `There's a desk in one corner, underneath the desk there are moving boxes, and top the desk are piles of fabric swatches and kitchen brochures. `
                + `Looks like someone is renovating. You look around the room. Boxes and tools everywhere.`
                + cr + cr + `You see a built-in wardrobe to your left and on the far side of the room, you can see a sliding door`
                + 'And on top of the tallest stack of boxes, a birdcage'
                + cr + cr + 'You decide to...' 
                + cr + `   1. Have a sticky beak in tne wardrobe`
                + cr + `   2. Head to the sliding door`
                + cr + `   3. Say hello to the bird`
                + cr + `   4. Get outta here, this place is a minefield` 
            ))
            switch (answer) {
                case 1:
                    changeLocation(builtInWardrobe(), true)
                    break
                case 2:
                    changeLocation(slidingDoor1())
                    break
                case 3:
                    changeLocation(talkToBird(), true)
                    break
                case 4:
                    changeLocation(hallway())
                    break
                default:
                    alert(`That's not a recognised answer. `
                        + cr + `Please enter the number (1 - 4) matching your selection and then click Ok.`)
                    go()
            }
        }    
        return this
    }

    const builtInWardrobe = () => {
        this.locationName = function () {
            return "Built-in Wardrobe"
        }
        this.go = function () {
            alert(`Boxes tumble ... the bird cage tips ... your path to the built-in is blocked.`
            +cr + cr + `You take a step back. Somehow the room seems unchanged.`)
            alert('Did you say sorry to the bird?')
            changeLocation(study())
        }
        return this
    }

    const talkToBird = () => {
        this.locationName = function () {
            return "Birdcage"
        }
        this.go = function () {
            alert(`Ah, an empty cage.`)
            changeLocation(study())
        }
        return this
    }

    const slidingDoor1 = () => {
        this.locationName = function () {
            return "Sliding Door"
        }
        this.go = function () {
            alert(`Like all visitors, you struggle with doorlocks but still managed to open the sliding doors...`)
            changeLocation(courtyard())
        }
        return this
    }

    const courtyard = () => {
        this.locationName = function () {
            return "Courtyard"
        }
        this.go = function () {
        let answer = parseInt(prompt(`You are now standing the courtyard, one step away from freedom.`
                + cr + `Technically it doesn't fit the definition of a courtyard, courtyards are suspose to have 4 walls, this space only has 3`
                + cr + cr + `The space leads into a carport, and there's a climpse of the street beyond.`
                + cr + cr + 'Where would you like to go next?' 
                + cr + '   1. Slip away into the carport'
                + cr + '   2. Step back inside'
            ))
            switch (answer) {
                case 1:
                    leave(EXIT_METHOD_CARPORT)
                    break
                case 2:
                    changeLocation(study())
                    break
                default:
                    alert(`That's not a recognised answer. `
                    + cr + `Please enter the number (1 - 2) matching your selection and then click Ok.`)
                    go()
            }
        }
        return this
    }

    const pantry = () => {
        this.locationName = function () {
            return "Pantry"
        }
        this.go = function () {
            alert(`Ah, the pantry.`
                + cr + cr 
                + `Dried pasta, plain flour, self raising flour, pasta flour, almond meal, hazenut meal, polenta, panko breadcrumbs ... `)

            if (oneDrink == true) {
                    alert(`Hang on. One drinks is enough for this visit`)
            } 
            else {

                alert(`Granulated sugar` + cr + `caster sugar` + cr + `icing sugar` + cr + `confectionary sugar` + cr + `jam setting sugar` 
                    + cr + `vanilla sugar` + cr + `lump sugar` + cr + 'pink sugar' + cr + `light brown sugar` + cr + `dark brown sugar` + cr + `raw sugar` + cr + `demerara`
                    + cr + `light muscovado` + cr + `dark muscovado' cr + 'granulated coffee sugar?`)
                alert(`glucose` + cr + `golden syrup` + cr + `light corn syrup` + cr + `coconut syrup`
                    + cr + `maple syrup` + cr + `date syrup` + cr + `malt` + cr + `barley malt` + cr + `treacle` + cr + `... and stevia.`
                    + cr + cr + `Hmmm, doesn't have molasses you say to yourself.` )
                alert(`BINGO`)
                alert(`Alcohol`)
                alert(`12yo scotch, spiced rum ... `
                    + cr + 'gin, vodka ...'
                    + cr + `bailey irish cream, butterscotch schnapps ... CSC anyone?`
                    + cr + `aged merlots, dusty cab savs, muscats and ports ...`)
        
                let answer = prompt(`There's a lot on offer here.`
                    + cr + cr + `Do you help yourself to a cheeky glass or keep moving on?`
                    + cr + `   Y. One glass won't hurt`
                    + cr + `   N. No thanks, I need to drive home after this`
                )
                switch (answer.toUpperCase()) {
                    case 'Y':
                    case 'YES':
                        oneDrink = true;
                        break;
                    case 'N':
                    case 'NO':
                        oneDrink = false;
                        break;
                    default:
                        alert(`Sorry, I didn't catch that answer. I'll take that as a Yes`)
                        oneDrink = true;
                }
                if (oneDrink == true) {
                    alert("You help yourself to a glass of Honey Bourbon")
                    alert("Noice")
                    alert("Then another")
                    alert("You lick the glass dry, return it to the shelf and close the door to the pantry ...")
                    alert("6 minutes well spent.")
                    move += 5;
                }
            }
            changeLocation(hallway())
        }
        return this
    }

    const hallway2 = () => {
        this.locationName = function () {
            return "The other end of the hallway"
        }
        this.go = function () {
            alert(`You are now standing at the far end of the hallway. The lights are off at the moment, so you can't see the way ahead. Turn back. Turn back.`);
            changeLocation(hallway())
        }
        return this
    }

    const policeStation = () => {
        this.locationName = function () {
            return "Police Station"
        }
        this.go = function() {
            alert(`Awe, you've just been transported to the local police station.`
            + cr + cr + `They say you spent ${move} minutes/moves in the apartment. Footage from the security cameras in the apartment reveal your wanderings ...`
            + cr + cr + `${placesYouWent()}`)
            let topLocations = mostVisited();
            if (topLocations.length > 0) {
                alert(`Seems you liked hanging out in my ${topLocations}`)
            }
        if (washingInProgress) {
                alert('They particularly want to know what you were doing inside the laundry for a whole 5 minutes.')
        }
            alert(`No more "Choose your own adventure" for you.`)
            gameOver()
        }
        return this
    }

    const gameOver = () => {
        let resp = confirm(`Game Over.`
                    + cr + cr
                    + `Would you like to play again?`
                    + cr + `(Press Ok to play)`)
        if (resp) {
            run()
        } else {
            alert(`Goodbye`)
        }
    }

    const placesYouWent = () => {
        console.log("Total locations Visited: " + locationsVisited.length)
        let locationStory = ""
        locationsVisited.forEach(location => {
            if (locationStory.length == 0) {
                locationStory = location
            } 
            else { 
            locationStory += " --> " + location
            }
        })
        return locationStory;
    }

    const mostVisited = () => {
        const uniquePlaces = [];
        const countOfVisits = [];
        let uniquePlaceIndex;
        console.log("Most visited")
        locationsVisited.forEach(location => {
            uniquePlaceIndex = uniquePlaces.indexOf(location)
            if (uniquePlaceIndex > -1) {
                countOfVisits[uniquePlaceIndex]++
            } else {
                uniquePlaces.push(location)
                countOfVisits.push(0)
            }
        })
        let mostVisits = 0
        let mostVisited = ""
        for (let i = 0; i < countOfVisits.length; i++) {
            let visits = countOfVisits[i]
            if (visits > mostVisits) {
                mostVisits = visits
                mostVisited = uniquePlaces[i]
            }
            else if (visits === mostVisits) {
                mostVisited = mostVisited + " and " + uniquePlaces[i]
            }
        }
        return mostVisited
    }


    move = 0
    oneDrink = false
    alarmTripped = false
    washingInProgress = false
    locationsVisited.length = 0
    
    frontDoor()
} 

chooseYourOwnAdventure()

