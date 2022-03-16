// Your code below...

// Wrap your whole game in a function, then call your function at the end...

const playGame = () => {
    let name = prompt("You're going to live a day in the life of the superhero Batman. First, what is your name?")
    alert(`Welcome ${name}, Let's get your day as Batman started`);
    let answer = confirm("Do you want to play this game?")
    if (answer === true) {
        alert("Since you only have one day as Batman you can only take down one villain.")
        let villain = parseInt(prompt("Which villain will you go after? (Enter the number of the villain that you would like to take down for the day) (1) Riddler (2) Joker (3) Bane"))
        if (villain === 1) {
            alert("Here's a riddle for you...")
            const riddle = prompt("It can be cruel, poetic, or blind. But when it's denied, it's violence you may find. What am I? Type `Justice` or `Punishment`.")
            switch (riddle) {
                case `Justice`:
                    alert(`Correct! You and I know more than anyone that Gotham lacks Justice and we can't rely on Gotham PD to uphold it.`)
                    break;
                case `Punishment`:
                    alert(`Wrong! You're supposed to be smarter than this Batman!`)
                    break;
                default:
                    alert(`You're the one that chose to be Batman for a day. You knew this was going to come with hard choices!`)
                    break;
            }
            const riddle2 = prompt("If you are justice, please do not lie. What is the price for your blind eye? Type `Bribe` or `A million dollars`.")
            switch (riddle2) {
                case `Bribe`:
                    alert(`Correct! Both of us know that Gotham PD has been paid off and is just as corrupt as the villains you fight so hard to bring down.`)
                    break;
                case `A million dollars`:
                    alert(`Wrong! Although a million dollars would be nice....`)
                    break;
                default:
                    alert(`You're the one that chose to be Batman for a day. You knew this was going to come with hard choices!`)
                    break;
            }
            const riddle3 = prompt("Batman, you stand for Justice and Morality but what if I told you that you must pay for the sins of your name...your real name? Type `???`, `My father` or `you're wrong`.")
            switch (riddle3) {
                case `???`:
                    alert(`Oh you don't know? Just know that your family isn't all great and everyone has skeletons in their closet...including your father. That truth will be revealed to you soon enough!`)
                    confirm("The riddler alludes to you not knowing the full past about your father. Do you believe him?")
                    break;
                case `you're wrong`:
                    alert(`Am I?!!?! The day won't be today but soon you'll find out that you must pay for the sins of your father and must answer to the city of Gotham for his crimes. Bahahahaha`)
                    const finalFight = prompt("The riddle challenges you to a fight saying that you're no match for him. What do you do? Type `Fight` or `Walk away`.")
                    switch (finalFight) {
                        case `Fight`:
                            alert(`YOU REALLY THOUGHT I WOULD RISK IT ALL IN A FIST FIGHT WITH YOU? Not today buddy bahahahaha`)
                            break;
                        case `Walk away`:
                            alert(`Wise choice Batman, soon enough we'll cross paths again.`)
                        break;
                    }
                case `My father`:
                    alert(`You'll learn about your father soon enough. For now, I must go and continue to carry out my master plan.`)
                    break;
                default:
                    alert(`Batman wouldn't run from the fight! You're not worthy to be Batman...even for a day!`)
                    break;
            }
            let playAgain = confirm("Do you want to play again?")
            if (playAgain === true) {
                playGame()
            } else {
                alert("Only start your adventure as Batman when you are ready")
            }
    
        } else if (villain === 2) {
            alert("Brave choice for only one day of being Batman")
            const choice = prompt("The Joker has devised a plan to get you to make a hard choice. Between Harvey Dent and Rachel, who do you decide to save? Enter `Save Rachel` or `Save Harvey`")
            switch (choice) {
                case `Save Rachel`:
                    alert(`Harvey Dent passes and Gothom is temporarily overrun by the Joker`)
                    break;
                case `Save Harvey`:
                    alert(`Rachel passes and you are heartbroken`)
                    break;
                default:
                    alert(`You're the one that chose to be Batman for a day. You knew this was going to come with hard choices!`)
                    break;
            }
            const fight = prompt("You decide that the Joker has to be stopped immediately and his crimes are more severe than any villain has ever committed against Gotham. But you recognize that fighting for Gotham in a fist fight with the Joker won't bring about any Justice. true or false?")
            switch(fight) {
                case `true`:
                    const finalChoice = prompt("You strategize a plan to confront the joker as well as make sure that Gotham is protected from any plans that he might have after your fight. Type `Plan with Jim Gordon`, `search the city` or `scheme`")
                    switch(finalChoice) {
                        case `Plan with Jim Gordon`:
                            alert(`You come up with a plan with Jim Gordon to fight with the Joker but also allow Jim to search the city for bombs or any traps that the Joker has set. Jim finds the bomb to the bridge and you are able to fight the Joker to stop him at least temporarily. With the Joker you never know...maybe he wanted to get caught.`)
                            break;
                        case `search the city`:
                            alert(`you search the city for any bombs that the joker has laid around and you find one on the city bridge! After working on this for 2 hours you finally defuse the bomb.`)
                            break;
                        case `scheme`:
                            alert(`Instead of going after the joker you devise a plan to bait him and keep him hostage so that any plans he has for Gotham can't be carried out.`)
                            break;
                    }
                    break;
                case `false`:
                    alert(`You rush in to fight the joker and while the joker is fighting you and you're distracted, a bridge that the Joker attached a bomb to blows up and no citizens of Gotham can escape!`)
                    break;
                default:
                    alert(`The Joker has to pay! You have to make a choice on how to go about fighting him.`)
                    break;

            }
            
            let playAgain = confirm("Do you want to play again?")
            if (playAgain === true) {
                playGame()
            } else {
                alert("Only start your adventure as Batman when you are ready")
        }
        } else if (villain ===3) {
            alert("You think darkness is your ally. You've merely adapted the dark. I was born in it")
            const choice = prompt("Bane has devised a plan where you must either fight him for Gotham or defuse a bomb. Which do you choose? Type `Fight Bane` or `Defuse the bomb`.")
            switch (choice) {
                case `Fight Bane`:
                    alert(`You choose to fight Bane for Gotham and the bomb blows up a football field. It not only exposes another bomb that Bane has setup that will destroy the entire City of Gotham but you lose the fight with Bane and have your back broken in the process.`)
                    break;
                case `Defuse the bomb`:
                    alert(`You defuse the bomb that is located in the football field but now Bane has taken over City Hall and politically controls Gotham.`)
                    let choice2 = parseInt(prompt("After taking time to regroup and prepare for a final fight with Bane, you go to City Hall and engage in the fight. After beating Bane he exposes that there is one more bomb you must defuse. Enter a number 1 through 4 to defuse the bomb."))
                    while (choice2 !== 3) {
                        choice2 = parseInt(prompt("Incorrect! You must enter the correct number 1-4 again in order to save Gotham. Hurry!"))
                    }
                    if (choice2 == 3) {
                        alert("You have guessed correctly!")
                    }
                    break;
                default:
                    alert(`You're the one that chose to be Batman for a day. You knew this was going to come with hard choices!`)
                    break;
            }
            let choice3 = prompt("After a fight with Bane and defusing the bomb that threatened to destroy all of Gotham, you fly back to the Bat Cave. You are left with a difficult decision. You realize that your prescence in Gotham will always spawn villains that aim to destory to city. Type `Leave Gotham`, `Stay and fight` or `the unthinkable`.")
            switch (choice3) {
                case `Leave Gotham`:
                    alert(`You load up a plane with your most treasured belongings and blow the batcave up to leave no trace behind. You never put on the bat suit again and never return to Gotham. Peace is found in the city.`)
                    break;
                case `Stay and fight`:
                    alert(`You are the Batman. You never run and will continue to fight injustice as long as it exists.`)
                    break;
                case `the unthinkable`:
                    alert(`You come to conclusion that the city of Gotham is cursed and will never be redeemed. You evacuate the entire city and destroy Gotham yourself. Maybe Batman was the true villain all along.`)
                    break;
                default:
                    alert(`You're the one that chose to be Batman for a day. You knew this was going to come with hard choices!`)
                    break;
            }
            let playAgain = confirm("Do you want to play again?")
            if (playAgain === true) {
                playGame()
            } else {
                alert("Only start your adventure as Batman when you are ready")
        }
        } else {
            alert("You're identify as Batman has been revealed, guess we'll have to try another day.")
        }
    } else {
        alert("Only go down the path when you are ready.")
        let playAgain = confirm("Do you want to play again?")
        if (playAgain === true) {
            playGame()
        } else {
            alert("Only start your adventure as Batman when you are ready")
        }
    }
}

playGame()