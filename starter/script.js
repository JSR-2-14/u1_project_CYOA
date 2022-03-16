// Your code below...

// Wrap your whole game in a function, then call your function at the end...

let answer;
let case1Answer;
let case2Answer;
let case3Answer;
let case1bAnswer;
let case2bAnswer;
let case3bAnswer;
let case4Answer;

resetValues = () => {
 answer = undefined;
 case1Answer = undefined;
 case2Answer = undefined;
 case3Answer = undefined;
 case1bAnswer = undefined;
 case2bAnswer = undefined;
 case3bAnswer = undefined;
 case4Answer = undefined;
}

const playGame = () => {
    answer = prompt(`Today you woke up in the mornin' feelin' like P Diddy.
    \nWhat do you want to do next?
    \n(1) Grab my glasses, I'm out the door, I'm gonna hit this city
    \n(2) Brush my teeth with a bottle of Jack
    \n(3) I leave for the night, I ain't comin' back`)
    switch(parseInt(answer)) {
    case 1:
        case1Answer = prompt(`Now that you're out of the house, what's next?.
        \n(A) Get some pedicure on my toes, toes
        \n(B) Pullin' up to a partay`)
        break;
    case 2:
        case2Answer = prompt(`After brushing with some Tennessee whiskey, what's next?.
        \nFloss
        \nShower`)
        break;
    case 3:
        case3Answer = prompt(`You walk into your local ddive bar, whatcha drinkin?.
        \nTequilla
        \nGin
        \nBeer`)
        break;
    default:
        answer = confirm(`I didn't ask you that, are you drunk?
        \n(Ok) Oops sorry, let me play again.
        \n(Cancel) I ain't comin' back`)
        if (answer){
            resetValues();
            playGame();
            break;
        } else break;
    }

    if(case1Answer){
    switch(case1Answer) {
        case "a":
        case "A":
            case1bAnswer = prompt(`Nails are on fleek. What's next?
            \n(1) Don't stop, make it pop
            \n(2) Tonight, I'ma fight
            \n(3) Tick-tock on the clock`)
            break;
        case "b":
        case "B":
            case1bAnswer = prompt(`You're at some party, what's next?.
            \n(1) Get everybody gettin' crunk, crunk
            \n(2) Smack someone you looks drunk, drunk
            \n(3) Po-po shut us down`)
            break;
        default:
            case1bAnswer = confirm(`I didn't ask you that, are you drunk?
            \n(Ok) Oops sorry, let me play again.
            \n(Cancel) I ain't comin' back`)
            if (case1bAnswer){
                resetValues();
                playGame();
                break;
            } else break;
        }
    }

    if (case2Answer){
        switch(case2Answer) {
            case "floss":
            case "Floss":
                case2bAnswer = prompt(`Teeth on fleek. What's next?
                \nRead
                \nNetflix`)
                break;
            case "shower":
            case "Shower":
                case2bAnswer = prompt(`You're in the shower, what's next?.
                \nShampoo
                \nConditioner`)
                break;
            default:
                case2bAnswer = confirm(`I didn't ask you that, are you drunk?
                \n(Ok) Oops sorry, let me play again.
                \n(Cancel) I ain't comin' back`)
                if (case2bAnswer){
                    resetValues();
                    playGame();
                    break;
                } else break;
            }
        }

    if (case3Answer){
        switch(case3Answer) {
            case "Tequilla":
            case "Gin":
            case "Beer":
                case3bAnswer = prompt(`You need to enter your passcode tp pay with your iPhone?\.
                \nYou remember the first 3 digits, but not sure about the last 1.
                \n[4] [3] [2] [?]
                \nEnter the full 4 digit passcode:`)
                break;
            default:
                case3bAnswer = confirm(`I didn't ask you that, are you drunk?
                \n(Ok) Oops sorry, let me play again.
                \n(Cancel) I ain't comin' back`)
                if (case3bAnswer){
                    resetValues();
                    playGame();
                    break;
                } else break;
            }
        }

    if (case1bAnswer){
        case4Answer = confirm(`Popo shut down the party.
                \n(Ok) get bailed out, and goto sleep.
                \n(Cancel) End Game.`)
                if (case4Answer){
                    resetValues();
                    playGame();
                }
    }

    if (case2bAnswer){
        case4Answer = confirm(`You're all clean and ready for bed.
                \n(Ok) Good night, see you in the morning.
                \n(Cancel) End Game.`)
                if (case4Answer){
                    resetValues();
                    playGame();
                }
    }  
    
    if (case3bAnswer) {
        let attempt;
        for (attempt=3; attempt>0; attempt--){
            case3bAnswer = prompt(`Hmm, nope that wasn't right, try again.
                \nYou have ${attempt} attempt remaining before your phone locks!
                \n[4] [3] [2] [?]
                \nEnter the full 4 digit passcode:`)
                if (case3bAnswer === "4327") {
                    case4Answer = confirm(`Successfully Unlocked.
                    \n(Ok) Pay for your drink and call it a night.
                    \n(Cancel) End Game.`)
                    if (case4Answer){
                        resetValues();
                        playGame();
                        break;
                    } else {
                        resetValues()
                        break;
                    }
                }
        }
        if(attempt === 0) {
            alert("Phone locked foever. Game over")
            resetValues();
        }
    }
}
playGame()