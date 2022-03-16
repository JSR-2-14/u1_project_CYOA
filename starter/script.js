// Your code below...

// Wrap your whole game in a function, then call your function at the end...
const playGame = () => {
console.log("function is working");
let name = prompt("What is your name?");
alert('Today is your coronation – your father Glimmerdrain is stepping down from the throne and leaving you in charge of the Goblin Kingdom and all Goblinkind. Now you get to decide how to make your name famous and feared among your subjects. It is morning, you stir in your bed, and hear banging and shouting at your door… ');
alert(`Hello, ${name}. You're in bed listening to the commotion outside your room outside your door.`);
let start = confirm("Do you want to be the heir to the goblin throne?");
let answer = 0;
console.log("User's answers: ", answer);

let response = null;
let died = null;
let coward = null;
function replayGame(){
    let replay = confirm("Do you want to play again?");
    if (replay === true) {
        playGame();
    } else {
        alert("Well you were a bad goblin anyway.");
    }   
}

const shieldBro = () => {
    alert("As you pull the rope, a bell rings. The shieldbrothers, your sworn allies, can be heard laughing outside the door to your room.");
    alert("It dawns on you, that your Shieldbrothers are actually the ones staging this coup. They must not like how you sentenced their families to exile last year for not laughing at your jokes. ");
    coward = confirm("Do you foresake your goblin heritage and ask to be their goblin underling? The situation is quite dire. Think carefully"); 
    switch (coward) {
        case true :
            alert("You slowly open your door, and kneel down. You yell to your ex-shieldbrothers that you forsake your royalty and wish to join them");
            alert("They laugh and walk in the room grabbing you by the arms, and toss you out of the window. Why did you think they'd let you live?");
            replayGame();
            break;
        case false :
            alert("You're confused! Angry! Hungry! but you have to see what's happening outside the door. Call it morbid goblin curiosity.");
            response = 1; 
        default:
            //alert("REMEMBER");
            //please do not forget to remember to come back to this michael
            //also you need to clean up the text 
            //remember
            //remember
            //remember
            //remember 
            break;
    }
    } 

if (start == true) {
        alert(`${name}, the banging at the door continues.`);
         response = 0;
         died = false;
        for (let i = 0; i <= 3; i++){
            let answer = parseInt(prompt("Do you (1) answer the door? (2) Turn over and go back to sleep (3) Pull the lever next to your bed"));
        
            if(answer === 1) {
                response = 1; 
                alert("You stumble over to the door, wondering what could be the commotion. You put your little goblin hand on the door handle and begin to open the door.");
                break;
            } else if (answer === 2) {
                alert("You pull the blanket over your head. Whatever it is can wait.");
                if (i === 3) {
                    alert("Once more you decide to pull those blankets over your head, and you hear shouting at the door get louder. The door falls down, chopped to pieces by your enemies outside. You start to cry as your goblin enemies rush in your room and slaughter you. You should have woken up. You really botched it.");
                    replayGame();

            }
            } else if (answer === 3) {
                response = 3; 
                alert("You pull the rope next you your bed, summoning your faithful Shieldbrothers to answer the door");
                shieldBro();
                break; 
            } else {
                alert("That wasn't an option");
            }             
        }
        if (response === 1){
            alert("You open the door, and you see a bloodbath. Your goblin guards are fighting to keep the enemy goblins away from you. They yell at you to get back in your room. Slamming the door shut, you look around the room");
            response = prompt("Where do you want to go? (T)he window? (M)aybe the Wall? (U)nder the bed? Choose a letter in the paranthesis. ");
            }
             
            switch (response) {
                case "t" :
                case "T" :
                    alert("You rush to the window, and fling it open. Without a second thought, you jump out and slowly realize you are on the 75th floor. As you plummet to your death, you wonder maybe you should have gone to the wall.");
                        replayGame();
                        break;
                case "m" :
                case "M" :
                    alert("You run to the wall, where you know that you were once told there was a button to a secret passage. You feel around frantically, and find the button. With a click, the door swings open and you rush inside.");
                    alert("You follow the path out toward the light and push open the door outside your castle. You will live, but you've lost everything. Time to plan revenge.")    
                        replayGame();
                        break;
                case "u" :
                case "U" :
                    alert("Momma Goblin didn't raise no fools, you know the safest place to hide is under that bed of yours. You run and slide under the bed and listen as the door comes crashing down.");
                    alert("It takes the enemy goblins seconds to realize that you're under the bed because your feet are sticking out from the bottom. They drag you out of your room and publically execute you in the Goblin Markets. I guess you weren't meant to be King.");
                        replayGame();
                        break;
                default:
                    alert("Your brain goes fuzzy, unable to decide between the only available options. The door comes crashing down on you, breaking your back and killing you. Everyone knows Goblin's have weak backs. ");
                        replayGame();
                        break;
            
            }

} else {
    alert("You wake up in your bed in your apartment, shaking off the dream where you were a goblin. You take a sip from the cup of water next to your bed and start getting ready for work.");
    replayGame()
}


}


playGame()

