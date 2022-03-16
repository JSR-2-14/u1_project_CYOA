// Your code below...

// Wrap your whole game in a function, then call your function at the end...

const replayGame = () => {
    let playAgain = confirm("Do you want to play again?")
    if (playAgain === true) {
        playGame()
    } else {
    alert("Bye!")
    }
}

const playGame = () => {
    let name = prompt("What is your name?")
    let answer = confirm(`Hello, ${name}. Do you want to play this game?`)
    console.log("User's answer: ", answer)
    if (answer === true) {
        let destination = parseInt(prompt("You wake up see news that a zombie apocalypse is headed to your city. Where do you go first? (1)Grocery store (2)Gun store"))
        if (destination === 1) {
            let item = parseInt(prompt("What do you get at the grocery store? (1)Cleaning products (2)Protein bars"))
            if (item === 1) {
                let afterGrocery1 = prompt("Good choice. Where do you go after the grocery store? (A)Home (B)Park (C)A military base")
                if (afterGrocery1 === "a") {
                    alert("You go home clean the house. Zombies see though the clear window and break it and kill you. You die.")
                    replayGame()
                } else if (afterGrocery1 === "b") {
                    alert("You get bitten by a zombie dog at the park. You try to spray it with the cleaning product but it is not effective. You die.")
                    replayGame()
                } else if (afterGrocery1 === "c") {
                    alert("They confiscate the cleaning products but let you in to stay safe. You survived!")
                    replayGame()
                } else {
                    alert("While you are being undecisive, zombies find you and kill you. You die.")
                    replayGame()
                }
            } else if (item === 2) {
                let afterGrocery2 = parseInt(prompt("Cool. Where do you go after the grocery store? (A)Home (B)Park (C)A military base"))
                if (afterGrocery2 === "a") {
                    alert("You make it safely. You are able to survive off of the protein bars. You survived!")
                    replayGame()
                } else if (afterGrocery2 === "b") {
                    alert("A zombie dog approaches you but you feed it the protein bar and it leaves after eating it. You survived!")
                    replayGame()
                } else if (afterGrocery2 === "c") {
                    alert("They let you in. You share the protein bars with other survivors. You survived!")
                    replayGame()
                } else {
                    alert("While you are being undecisive, zombies find you and kill you. You die.")
                    replayGame()
                }
            } else {
                alert("While you are contemplating, a zombie approches and bite you. You die.")
                replayGame()
            }
        } else if (destination === 2) {
            let select = prompt("What do you get at the gun store? (A)A pistol (B)An assault rifle (C)Bullet proof vest")
            switch (select) {
                case 'a':
                    let pistolBullet = prompt("Do you also want to buy bullets? (Yes or No)")
                    while (pistolBullet != "yes") {
                        pistolBullet = prompt("That must be a mistake. Lets try again. Do you want to buy bullets? (Yes or No)")
                    }
                    alert("As you leave the store, dozens of zombies approach to you but you kill them with your gun. You survived.")
                    replayGame()
                    break
                case 'b':
                    let rifleBullet = prompt("Do you also want to buy bullets? (Yes or No)")
                    for (let i = 0; i < 2; i++) {
                        if (rifleBullet === "yes") {
                            break
                        }
                        rifleBullet = prompt("That must be a mistake. Lets try again. Do you want to buy bullets? (Yes or No)")
                    }
                    if (rifleBullet === "yes") {
                        alert("As you leave the store, dozens of zombies approach to you but you kill them with your gun. You survived.")
                        replayGame()
                    } else {
                        alert("OK. As you leave the store, dozens of zombies approach to you but you couldn't use your gun. You die.")
                        replayGame()
                    }
                    break
                case 'c':   
                    let gunDestination = prompt("Where do you go after the gun store? (A)Home (B)Park (C)A military base")
                    if (gunDestination === "a") {
                        alert("You make it home safely and survive.")
                        replayGame()
                    } else if (gunDestination === "b") {
                        alert("A zombie dog approaches you. It tries to bite you in the back but cannot bite through the vest. You survived.")
                        replayGame()
                    } else if (gunDestination === "c") {
                        alert("They let you but take your bullet proof vest. You survive in the base.")
                        replayGame()
                    }
                    break
            }
        } else {
            alert("You decided to stay home and ran out of food a week later. You died.")
            replayGame()
        }
    } else {
        alert("Fine, see you later.")
        replayGame()
    }
}

playGame()

