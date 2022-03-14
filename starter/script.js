
function colombiaQuestion2() {
    let answer2 = "";
    let finalAnswer = false;
    do { 
        do { 
        answer2 = prompt(`Question#2: Colombia produces 60% of the world's supply of which precious stone? Please enter the name.\n- Ruby\n- Diamond\n- Emerald\n- Topaz`)
        finalAnswer = confirm("Is that your final answer? (Enter Yes/No)");
        } while (finalAnswer === "false" || finalAnswer ==="No");

        switch (answer2) {
            case 'Ruby': 
                alert("You entered 'Ruby', that is INCORRECT. Please try again."); 
                break;
            case 'Diamond': 
                alert("You entered 'Diamond', that is INCORRECT. Please try again."); 
                break;
            case 'Emerald': 
                alert("You entered 'Emerald', that is CORRECT!!! Great job!"); 
                break;
            case 'Topaz': 
                alert("You entered 'Topaz', that is INCORRECT. Please try again."); 
                break;
            default: alert("Hmm, please check for typos and try again.")
        } 
    } while (answer2 != "Emerald");
}

function canadaQuestion2() {
    let answer2 = "";
    let finalAnswer = false;
    do { 
        do { 
        answer2 = prompt(`Question#2: What Canadian province is the city of Toronto in? Please enter the name.\n- Alberta\n- Nova Scotia\n- Quebec\n- Ontario`);
        finalAnswer = confirm("Is that your final answer? (Enter Yes/No)");        
        } while (finalAnswer === "false" || finalAnswer ==="No");

        switch (answer2) {
            case 'Alberta': 
                alert("You entered 'Alberta', that is INCORRECT. Please try again."); 
                break;
            case 'Nova Scotia': 
                alert("You entered 'Nova Scotia', that is INCORRECT. Please try again."); 
                break;
            case 'Quebec': 
                alert("You entered 'Quebec',  that is INCORRECT. Please try again."); 
                break;
            case 'Ontario': 
                alert("You entered 'Ontario', that is CORRECT!!! Great job!"); 
                break;
            default: alert("Hmm, please check for typos and try again.")
        } 
    } while (answer2 != "Ontario");

}

function spainQuestion2() {
    let answer2 = "";
    let finalAnswer = false;
    do { 
        do { 
            answer2 = prompt(`Question#2: What famous Opera takes place in the Spanish city of Seville?\nPlease enter the name inside the [ ]'s.\n- The [Barber] of Seville\n- The [Butcher] of Seville\n- The [Baker] of Seville\n- The [CandleStick Maker] of Seville`);
            finalAnswer = confirm("Is that your final answer? (Enter Yes/No)");        
        } while (finalAnswer === "false" || finalAnswer ==="No");

        switch (answer2) {
            case 'Barber': 
                alert("You entered 'Barber',  that is CORRECT!!! Great job!");
                break;
            case 'Butcher': 
                alert("You entered 'Butcher', that is INCORRECT. Please try again."); 
                break;
            case 'Baker': 
                alert("You entered 'Baker',  that is INCORRECT. Please try again."); 
                break;
            case 'Candlestick Maker': 
                alert("You entered 'Candlestick Maker', that is INCORRECT. Please try again."); 
                break;
            default: alert("Hmm, please check for typos and try again. (Enter the text between the [ ]'s.)")
        } 
    } while (answer2 != "Barber");

}

function question3(answer1, answer2) {
    alert("Answer1: " + answer1 + " Answer2: " + answer2);        
    alert("TypeOf Answer1: " + typeof(answer1) + " TypeOf Answer2: " + typeof(answer2));
    let answer3;
    if (answer1 ===1 && answer2 === 1) { // Colombian Tour
        let validAnswer = false; 
        do { 
            let question3 = prompt(`Question#3: Do you?\n (A) Run back to the riverboat\n (B) Throw the spears back`)
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
            let question3 = prompt(`Question#3: Do you?\n (A) Run off into the jungle to save your skin\n (B) Become overwhelmed with fear and die (no refund)`)
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
            let question3 = prompt(`Question#3: What vegetable would you like to be eaten with?\n (A) Yams\n (B) Carrots\n (C) Corn`)
            answer3 = question3;
            switch (answer3) {
                    case "A": validAnswer = true; alert("There are no Yams in the Amazon, they sent you back to the riverboat. Go home."); break;
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
            let question3 = prompt(`Question#3: Do you?\n(1) Walk back to Cairo\n (2) Build a condo and retire`)
            answer3 = parseInt(question3);
            switch (answer2) {
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
            let question3 = prompt(`Question#3: How many pyramids do you see?\n 1) Ten \n 2) One Hundred`)
            answer3 = parseInt(question3);
            switch (answer3) {
                    case 1: validAnswer = true; alert("Ten it is, exactly! You know so much, you have become the tour guide."); break;
                    case 2: validAnswer = true; alert("One hundred is too many. You must be seeing a mirage! Return to the hotel and get some rest."); break;
                    default: validAnswer = false; alert("Hmm, please enter either 1 or 2.")
                    } 
        } while (validAnswer === false);
        return answer3;
    } 
    else {        
        alert("error !");
    }   
}

function question2(answer1) {
    let answer2;
    if (answer1 === 1) { // Colombian Tour
        let validAnswer = false; 
        do { 
            let question2 = prompt(`Question#2: You come to a village of natives.\nWhat is your first gesture to them? Please enter a number.\n1) Wave\n2) Yell hello\n3) Make fun of them`)
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
            let question2 = prompt(`Question#2: You are on the Egyptian Tour. Would you like to:\n(1) Ride the camels\n (2) See the pyramids`)
            answer2 = parseInt(question2);
            switch (answer2) {
                    case 1: validAnswer = true; alert("You decided to ride the camels. A big sandstorm kicked up, you lost the camels and you ended up in the middle of the desert."); break;
                    case 2: validAnswer = true; alert("You decided to see the pyramids. They are magnificent!"); break;
                    default: validAnswer = false; alert("Hmm, please enter either 1 or 2.")
                    } 
        } while (validAnswer === false);
        return answer2;
    } else {        
        alert("error below egypt");
    } 
}

function question1() {
    let doneLoop = false;
    do {
        let question1 = prompt("Question #1: Which of the following tours would you like to go on? (Enter the number)\n(1) Colombian Amazon\n(2) Egyptian Tour\n (3) Coming soon.");
        answer1 = parseInt(question1);
        switch (answer1) {
            case 1: alert("You chose the Colombian Amazon. Wonderful choice!"); doneLoop = true; return answer1;
            case 2: alert("You chose the Egyptian Tour. Great choice!"); doneLoop = true; return answer1;
            case 3: alert("Coming soon."); doneLoop = true; return answer1;
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
        playAgain = confirm("Is it ok if we play again?");
    } while(playAgain === true)
}

playGame();
alert("Thanks for playing. Bye!");


