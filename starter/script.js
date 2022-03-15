// Your code below...

// Wrap your whole game in a function, then call your function at the end...

/*
const chooseDoor = function() {
    let door = parseInt(prompt("What door do you want to enter? (1)(2)(3)"))
    if (door === 1) {
        alert(`door 1`)
    } else if (door === 2) {
        alert(`door 2`)
    } else if (door === 3) {
        alert(`door 3`)
    } else {
        alert("that wasnt an option dumb dumb, you die now.")
    }
}



const playGame = function () {

    let name = prompt("But what is your NAMMMEEEEEE? ")
    let friendName = ["","",]

    alert(`Hello ${name}. This is an ALERT`)
    alert("ANOTHER ALERRRRTTTT")

    let answer = confirm("Do you want to play this game?")
    console.log("User's answer: ", answer)

    if (answer===true) {
        alert(`okay lets play then ${friendName}`)
        chooseDoor()

        } else{
        alert(`UHH BYEEEEEEEEE then ${notFriendName}`)
        let playAgain = confirm("Play again? ")

        if (playAgain === true){
            playAgain
        }else{
            alert("Great, Game Over Suckkerrrr")
        }

    }



}

playGame()
*/


const drinkChoice = function() {
    //Four
    const food = prompt("Great, for a ride we go. Do we want to Coffee? or maybe some Tea? oooo or maybe we want a Redbull? ")
    switch (food) {
        case 'pear':
            console.log('I like pears')
            break
        case 'apple':
            console.log('I like apples')
            break
        case 'orange':
            console.log('mmm... citrus')
            break
        default:
            console.log('idk what that is, can you please follow directions before I overheat?')
    }
}



const playGame = function () {
    //One
    let name = prompt("Uh hiya, what is your nammeooo? ")
    //Two
    let ready = confirm(`Hello ${name}, Welcome to ComputerLand. What?... You're feeling tired... Okay well, I don't have feelings so I can't relate... but I guess I can help you out. Are you ready?`)

    if (ready === true) {
        //Three
        const drive = prompt(`Okay ${name}, but are you too tired to drive? (y or n)`)
        if (drive == 'y') {
            alert("TOOO BADDD. I'm not a Tesla, so you have to drive")
            drinkChoice()

        } else if (drive == 'n') {
            alert("Great, then you probably don't even need caffeine *eye roll*, lets go human.")
            drinkChoice()

        } else {
            alert("You no follow instructions, lets try again")
            playGame()

        }


    }
}

playGame()
