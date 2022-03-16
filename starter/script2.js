// Your code below...

// Wrap your whole game in a function, then call your function at the end...
const playGame = () => {
console.log("function is working")
let name = prompt("Good morning, ______. What is your name?")
alert('Today is your coronation – your father Glimmerdrain is stepping down from the throne and leaving you in charge of the Goblin Kingdom and all Goblinkind. It will be you first order of business to decide how to make your name famous and feared among your subjects. You stir in your bed, and hear banging and shouting at your door… ')
alert(`Hello, ${name}. You're in bed listening to the commotion outside your room outside your door.`)
let start = confirm("Do you want to be the heir to the goblin throne?")
let answer = 0
console.log("User's answers: ", answer)

let response = null
let died = null

if (start == true) {
        alert(`${name}, the banging at the door continues.`)
         response = 0
         died = false
        for (let i = 0; i <= 3; i++){
            let answer = parseInt(prompt("Do you  (1) answer the door? (2) Turn over and go back to sleep (3) Pull the lever next to your bed"))
        
            if(answer === 1) {
                response = 1 
                alert("You stumble over to the door, wondering what could be the commotion. You take two steps from your bed and your bed bursts into flames. Human mages are at it again trying to destabilize the Kingdom of Goblins by attempting to fry YOU, the HEIR! What do you do?")
                break;
            } else if (answer === 2) {
                alert("You pull the blanket over your head. Whatever it is can wait.")
                if (i === 3) {
                    alert("Once more you decide to pull those blankets over your head, and you hear shouting at the door get louder. The door falls down, chopped to pieces by your enemies outside. You start to cry as your goblin enemies rush in your room and slaughter you. You should have woken up. You really botched it.")
                    playGame()

            }
            } else if (answer === 3) {
                response = 3 
                alert("You pull the lever, summoning your faithful Shieldbrothers to answer the door")
                break; 
            } else {
                alert("That wasn't an option")
            }             
        }

} else {
    alert("You wake up in your bed in your apartment, shaking off the dream where you were a goblin. You take a sip from the cup of water next to your bed and start getting ready for work.")
}



}


playGame()