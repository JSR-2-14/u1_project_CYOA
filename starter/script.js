
function question3(answer1, answer2) {
    let answer3;
    if (answer1 ===1 && answer2 === 1) { // Colombian Tour
        let validAnswer = false; 
        do { 
            let question3 = prompt(`QUESTION #3: You waved at them and they are throwing spears. Do you?\n(A) Run back to the riverboat\n(B) Throw the spears back`)
            answer3 = question3;
            switch (answer3) {
                    case "A": validAnswer = true; alert("Running back to the riverboat! I want my money back!"); break;
                    case "B": validAnswer = true; alert("You threw the spears back and killed them all. The tour guide is not happy!"); break;
                    default: validAnswer = false; alert("Hmm, please enter the letter A or B.")
                    } 
        } while (validAnswer === false);
        return answer3;
    } 
    else if (answer1 ===1 && answer2 === 2) { // Colombian Tour
        let validAnswer = false; 
        do { 
            let question3 = prompt(`QUESTION #3: You yelled hello at them and they are shooting poison darts. Do you?\n(A) Run off into the jungle to save your skin\n(B) Become overwhelmed with fear and die (no refund)`)
            answer3 = question3;
            switch (answer3) {
                    case "A": validAnswer = true; alert("While running, a riverboat noticed you and rescued you. You are lucky!"); break;
                    case "B": validAnswer = true; alert("Things didn't go well for you. You made the tabloids."); break;
                    default: validAnswer = false; alert("Hmm, please enter the letter A or B.")
                    } 
        } while (validAnswer === false);
        return answer3;
    } 
    else if (answer1 ===1 && answer2 === 3) { // Colombian Tour
        let validAnswer = false; 
        do { 
            let question3 = prompt(`QUESTION #3: You are the main course. What vegetable would you like to be eaten with?\n(A) Peas\n(B) Carrots\n(C) Corn`)
            answer3 = question3;
            switch (answer3) {
                    case "A": validAnswer = true; alert("There are no Peas in the Amazon, they sent you back to the riverboat. Go home."); break;
                    case "B": validAnswer = true; alert("There are no Carrots in the Amazon, they sent you back to the riverboat. Go home."); break;
                    case "C": validAnswer = true; alert("There is no Corn in the Amazon, they sent you back to the riverboat. Go home."); break;
                    default: validAnswer = false; alert("Hmm, please enter the letters A, B or C.")
                    } 
        } while (validAnswer === false);
        return answer3;
    } 
    else if (answer1 === 2 && answer2 === 1) {  //Eqyptian Tour
        let validAnswer = false; 
        do { 
            let question3 = prompt(`QUESTION #3: You are in the middle of the desert. Do you?\n(1) Walk back to Cairo\n(2) Build a condo and retire`)
            answer3 = parseInt(question3);
            switch (answer3) {
                    case 1: validAnswer = true; alert("Thanks to Dr. Scholls you made it back!"); break;
                    case 2: validAnswer = true; alert("Good luck with running water. Enjoy retirement."); break;
                    default: validAnswer = false; alert("Hmm, please enter either 1 or 2.")
                    } 
        } while (validAnswer === false);
        return answer3;
    }      
    else if (answer1 === 2 && answer2 === 2) {  //Eqyptian Tour
        let validAnswer = false; 
        do { 
            let question3 = prompt(`QUESTION #3: How many pyramids do you see?\n1) One\n2) Ten\n3) One Hundred`)
            answer3 = parseInt(question3);
            switch (answer3) {
                    case 1: validAnswer = true; alert("One pyramid? You must have sand in your eyes. You didn't getting much out of the tour."); break;
                    case 2: validAnswer = true; alert("Ten it is, exactly! You know so much, you have become the tour guide."); break;
                    case 3: validAnswer = true; alert("One hundred is too many. You must be seeing a mirage! Return to the hotel and get some rest."); break;
                    default: validAnswer = false; alert("Hmm, please enter a number between 1 & 3.")
                    } 
        } while (validAnswer === false);
        return answer3;
    } 
    else if (answer1 === 3 && answer2 === 1) {  //Mars Tour
        let validAnswer = false; 
        do { 
            let question3 = prompt(`QUESTION #3: You arrive at the hotel but it's been raided by rebelling Martian mutants. What do you do?\n1) Join their cause\n2) Take the Johnny Cab back to the spaceport and go home\n3) Throw red rocks at them`)
            answer3 = parseInt(question3);
            switch (answer3) {
                    case 1: validAnswer = true; alert("They burn all of your identification and give you a new identity. Douglas Quaid. Enjoy the rebellion!"); break;
                    case 2: validAnswer = true; alert("The cab driver says,'Wow, hell of a day, isn't it?' You go home."); break;
                    case 3: validAnswer = true; alert("The mutants didn't like getting red rocks thrown at them. They vaporize you. They send you home in an urn as red dust. Bad vacation."); break;
                    default: validAnswer = false; alert("Hmm, please enter a number between 1 and 3.")
                    } 
        } while (validAnswer === false);
        return answer3;
    } 
    else {  //Mars Tour (answer1 === 3 && answer2 === 2)
        let validAnswer = false; 
        do { 
            let question3 = prompt(`QUESTION #3: You arrive at the Cantina. You order a Romulan Ale and a Klingon begins to approach you. What do you do?\n[A] Stand up and fight the Klingon\n[B] Run like hell\n[C] Throw your drink in his face and try to escape`)
            answer3 = question3;
            switch (answer3) {
                    case "A": validAnswer = true; alert("The Klingon respects your bravery and decides to let you enjoy the rest of your vacation."); break;
                    case "B": validAnswer = true; alert("The Klingon grabs you before you escape and beats you up bad. You will spend the rest of your vacation in the Mars Interstellar Hospital. Cheers."); break;
                    case "C": validAnswer = true; alert("That didn't go too well. He kills you with his bat'leth weapon. Your death makes all of the Martian tabloids."); break;
                    default: validAnswer = false; alert("Hmm, please enter the letters A, B or C.")
                    } 
        } while (validAnswer === false);
        return answer3;
    }   
}

function question2(answer1) {
    let answer2;
    if (answer1 === 1) { // Colombian Tour
        let validAnswer = false; 
        do { 
            let question2 = prompt(`QUESTION #2: You come to a village of natives.\nWhat is your first gesture to them? Please enter a number.\n1) Wave\n2) Yell hello\n3) Make fun of them`)
            answer2 = parseInt(question2);
            switch (answer2) {
                    case 1: validAnswer = true; alert("You decided to wave at them. Now they are throwing spears at you!"); break;
                    case 2: validAnswer = true; alert("You decided to yell hello. Now they are shooting poison darts at you!"); break;
                    case 3: validAnswer = true; alert("You decided to make fun of them. Now they decided to have you for dinner!"); break;
                    default: validAnswer = false; alert("Hmm, please enter a number between 1 and 3.")
                    } 
        } while (validAnswer === false);
        return answer2;
    } 
    else if (answer1 === 2) {  //Eqyptian Tour
        let validAnswer = false; 
        do { 
            let question2 = prompt(`QUESTION #2: You are on the Egyptian Tour. Would you like to:\n(1) Ride the camels\n (2) See the pyramids`)
            answer2 = parseInt(question2);
            switch (answer2) {
                    case 1: validAnswer = true; alert("You decided to ride the camels. A big sandstorm kicked up, you lost the camels and you ended up in the middle of the desert."); break;
                    case 2: validAnswer = true; alert("You decided to see the pyramids. They are magnificent!"); break;
                    default: validAnswer = false; alert("Hmm, please enter either 1 or 2.")
                    } 
        } while (validAnswer === false);
        return answer2;
    } 
    else {                //Mars Tour
        let validAnswer = false; 
        do { 
            let question2 = prompt(`QUESTION #2: Welcome to the Mars Colony. What would you like to do? \n(1) Take a Johnny Cab to the hotel\n(2) Go straight to the spaceport Cantina`)
            answer2 = parseInt(question2);
            switch (answer2) {
                    case 1: validAnswer = true; alert("You are in a Johnny Cab on the way to the hotel. Enjoying the beautiful red rock scenery."); break;
                    case 2: validAnswer = true; alert("You decide to relax in the spaceport Cantina."); break;
                    default: validAnswer = false; alert("Hmm, please enter either 1 or 2.")
                    } 
        } while (validAnswer === false);
        return answer2;
    } 
}

function question1() {
    let doneLoop = false;
    do {
        let question1 = prompt("QUESTION #1: Which of the following tours would you like to go on? (Enter the number)\n(1) Colombian Amazon\n(2) Egyptian Tour\n(3) Mars Tour");
        answer1 = parseInt(question1);
        switch (answer1) {
            case 1: alert("You chose the Colombian Amazon. Wonderful choice!"); doneLoop = true; return answer1;
            case 2: alert("You chose the Egyptian Tour. Great choice!"); doneLoop = true; return answer1;
            case 3: alert("You chose the Mars Tour. Awesome choice!"); doneLoop = true; return answer1;
            default: alert("Hmm, please enter a number between 1 and 3. Try again.");        
        }                    
    } while (doneLoop != true)
}

const playGame = () => {
    let playAgain = false;
    alert("Welcome to the game!");  
    do {  
        answer1 = question1();                      // ask the first question selecting the tour
        answer2 = question2(answer1);               // ask the second question
        answer3= question3(answer1, answer2);       // ask the third question
        playAgain = confirm("Is it ok if we play again?"); // boolean option
    } while(playAgain === true)
}


playGame();
alert("Thanks for playing. Bye!");


