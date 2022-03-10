// Your code below...

// Wrap your whole game in a function, then call your function at the end...
/*const playGame = () => {
   console.log("playGame() is working");
   alert("Hello Michael");
   let answer = confirm("Do you want to play a game?");
   console.log("playGame().answer: the answer is : " + answer);
}

playGame();

*/

let move = 0;
let allowedMoves = 10;

const remainingMoves = () => {
    return allowedMoves - move;
}

const changeLocation = (nextLocation) => {
    move++
    console.log(`Move: ${move} of ${allowedMoves}`)
    if (move === 1) {
        welcomeInside()
    }
    else if (move === 2) {
        alarmTripped()
    }
    else if (move > allowedMoves) {
        nextLocation = policyStation();
    }
    else {
    };
    nextLocation.go();
}

const frontDoor = () => {
    console.log("Front Door");
    let answer = confirm(`You are standing at the front door to an apartment. Do you wish to enter?`)
    if (answer === true) {
        changeLocation(foyer());
    }
    else {
        walkAway();
    }
};

const walkAway = () => {
    console.log("Walking away")
    alert("Thanks for not playing");
};

const welcomeInside = () => {
    alert(`Welcome inside my aparment.`
        + String.fromCharCode(10) + 
        + String.fromCharCode(10) + `Congratulations! Seeing I didn't actually invite you in, you have just broken the law.` 
        + String.fromCharCode(10) + 
        + String.fromCharCode(10) + `Whether you get caught for this indiscretion is another matter.`)
    alert(`Now that you are here you can take a look around, but please don't break anything.`)
    alert(`And don't take anything either!`) 
}

const alarmTripped = () => {
    console.log("Alarm tripped")
    alert(`I forgot to mention, my apartment has a security alarm.`)
    alert('The police have been alerted to your presence.'
    + String.fromCharCode(10) + `They'll be with you in ${remainingMoves()} moves`)
}

const foyer = () => {
    console.log("Foyer")
    this.go = function () {
        let answer = parseInt(prompt(`You're in the foyer. The living room is in front of you, a hallway to your right. In between a there a door leading to who know's where. Behind you is the front door through which you arrived.`
        + String.fromCharCode(10) + 
        + String.fromCharCode(10) + 'Where would you like to go next?' 
                        + String.fromCharCode(10) + '1. Move to the living room'
                        + String.fromCharCode(10) + '2. Move into the hallway'
                        + String.fromCharCode(10) + '3. Open mystery door No.1'
                        + String.fromCharCode(10) + '4. Leave!' 

        ))
        if (answer === 1) {
            changeLocation(livingRoom());
        }
        else if (answer === 2) {
            changeLocation(hallway());
        }
        else if (answer === 3) {
            changeLocation(laundry());
        }
        else if (answer === 4) {
            leave("Front-door");
        }
        else {
        }
    }
    return this;
};

const leave = (exit) => {
    console.log(`Leaving by: ${exit}`)
    if (move === 1) {
        alert("Thanks for poking your head in.");
    } 
    else if (exit = "Front-door") {
        alert(`Thanks for finally leaving my apartment! And just in time before the police arrive!`)
        alert(`As you might have noticed, this is a very quiet game, my bad, you couldn't hear the alarm going off. `
        + String.fromCharCode(10) + `But my neighbours could.`
        + String.fromCharCode(10) + `They're here to keep you company for a few minutes :)`)
        alert(`Thanks for playing`)
    }
    else {
        // leaving by the back-door
    }
}

const livingRoom = () => {
    console.log("Living Room");
    this.go = function () {
        alert("You are now standing in the living room. The lights are off at the moment, so you can see the way ahead. Best go back the way you came... " );
        changeLocation(foyer());
    }
    return this;
};

const hallway = () => {
    console.log("Hallway");
    this.go = function () {
        alert("You are now standing in the being of my hallway. The lights are off at the moment, so you can see the way ahead. Best go back the way you came... " );
        changeLocation(foyer());
    }
    return this;
};

const laundry = () => {
    console.log("Laundry");
    this.go = function () {
        alert("You are now standing in my laundry. And in you look down, you'll find you're standing my dirty laundry. Care to load the washing machine for me?" );
        changeLocation(foyer());
    }
    return this;
};

const policeStation = () => {
    console.log("Police Station");
    alter("Game Over");
}

const run = () => {
    frontDoor();
}

run()