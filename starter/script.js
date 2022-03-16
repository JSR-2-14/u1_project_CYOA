// Your code below...

// Wrap your whole game in a function, then call your function at the end...

const playGame = () =>{

    let name = prompt('What is your name?');
    //console.log(`Name: ${name}`);
    //console.log('Name Length:' + name.length);

    if(name === "" ){
        alert('Please enter a name');
        playGame();
    }

    else if(name === null){
        alert('ok bye loser');
        return;
    }
    
    alert(`Hello ${name}. You ever watched a Disney movie and thought the villains shortcomings were easily avoidable? Well in this universe, you are going to help the villains succeed.`);

    alert ('We have two villains that need help: Scar and Ursula');
    
    //let villainAnswer= prompt("Which villain do you want to help?").toString().toLowerCase();
    

    let confirmVillain = false;
    let scarStory = false;
    let ursulaStory = false;

    while(confirmVillain == false){ //asks which villain they want to help
    let villainAnswer= prompt("Which villain do you want to help?").toString().toLowerCase();
    console.log(`${villainAnswer}`);

        if (villainAnswer === 'scar'){
            if(confirm ("You decided to help Scar. Is this correct?")){ 
                console.log("SCAR")
                scarStory = true;
                confirmVillain = true;
                break;
                //console.log ('Confirmed ${confirmVillain}');
            }
        }

        if(villainAnswer === 'ursula'){

            if(confirm ("You decided to help Ursula. Is this correct?")){
                console.log("URSULA")
                ursulaStory = true;
                confirmVillain = true;
                break;
            }
        }
            
        else{
            alert("That villain did not request help yet. Only Scar and Ursula are available.");
            continue;
        }
    }

    if(scarStory == true){ //Scar's Story
        //console.log("Scar's story starts");
        alert ('You\'re a new lion in the Pridelands. You\'re helping Scar scheme a plan. He asked for your suggestions.');

        let scarSuggestion = "";
        console.log (scarSuggestion);
        let scarSelectedSuggestion = '';
        let scarPathA = false;
        let scarPathB = false;
        let emptySuggestion = true;

        while(emptySuggestion === true){

        scarSuggestion = prompt('What do you do? (A): Offer your ideas, no questions asked. (B)Offer him advice in exchange for something else').toString().toLowerCase();
        
        switch (scarSuggestion){

            case 'a':
                scarSelectedSuggestion = 'You decided to be nice and trust him.';
                scarPathA = true;
                emptySuggestion =false;
                break;

            case 'b':
                scarSelectedSuggestion = 'Scar looks at you with a raised eyebrow. Interested in your answer.'
                scarPathB = true;
                emptySuggestion =false;
                break;

            default:
                alert("Scar: I'm surrounded by idiots apparently. Give me an idea or leave.");

        }
    }

        alert (scarSelectedSuggestion);


        if(scarPathA == true){

            scarPlanOptions(scarPathB);
        }

        else if(scarPathB == true){

            scarPlanBOptions(scarPathB);
           
        }
} // end of Scar's Story

    else if(ursulaStory == true){ //Ursula's Story
        //console.log("ursula's story starts");
        alert ('You\'ve been transported to Atlantis. You\'re Ursula\'s magic assistant. You help with her potions and spells. Ursula wants ideas for new potions.');
        let ursulaNewPotionIdea = "";
        //ursulaNewPotionIdea = prompt("What potion do you suggest she gives to Ariel? (A): Gives her legs but transports to another kingdom. (B): Gives her legs but changes her appearance").toString().toLowerCase();
        console.log(`${ursulaNewPotionIdea}`);    
        let potionName= '';
            let potionSelected= false;

        while(potionSelected === false){
            //console.log(`${potionSelected}`);
            ursulaNewPotionIdea = prompt("What potion do you suggest she gives to Ariel? (A): Gives her legs but transports to another kingdom. (B): Gives her legs but changes her appearance").toString().toLowerCase();

            switch(ursulaNewPotionIdea){
        
            case 'a':

                potionName = 'locatiousnewus';
                potionSelected = true;
                break;
        
            case 'b':

                potionName = 'visagenewus';
                potionSelected = true;
                break;
            
            default:
                alert("Ursula: I demand an idea! Think before I curse you");
                continue;
            }
        }
        

        alert(`Ursula: Great Idea! Make the ${potionName} \n She hands you the ingredients for the potions. She points at a small glowing green vial. \n Ursula: Only add 3 drops of this vial. Anymore or less can ruin everything.`);

        alert('You\'ve followed all of Ursula\'s steps except the special vial drops.');

        let vialDrops = parseInt(prompt('How many drops will you add?'));
        let playAgain = false;

        if(vialDrops > 3){

            alert('* BOOOOOOOOOMMMM* \n You exploded Ursula\'s lair. Both of you died. GAME OVER ');
            let playAgain = confirm('Play again?');
                    if(playAgain){
                        playGame();
                    }
                    else{
                        alert('Ok bye loser');
                    }
        }

        else if(vialDrops == 1 || vialDrops == 2){

            alert(`You give Ursula the completed potion. She lures Ariel to her lair. She gets Ariel to sign the contract and Ariel drinks the potion. \n Because you only added ${vialDrops} drops, you messed up the potion. Ariel can actually freely choose between being a mermaid or a human. \n Enraged Ursula curses you to a hideous sea urchin. GAME OVER`);
            let playAgain = confirm('Play again?');
                    if(playAgain){
                        playGame();
                    }
                    else{
                        alert('Ok bye loser');
                    }
        }

        else if(vialDrops == 3){

            switch(ursulaNewPotionIdea){

                case 'a':
                alert(`With ${potionName}, Ariel gets her legs, but she is transported to Antarctica and is frozen. King Triton finds out Ursula transported Ariel. He sacrifices his trident. Ursula now rules all of the seas.`);
                break;

                case 'b':
                alert(` With ${potionName}, Ariel gets her legs, but she now has the top body of a fish. She goes to Eric, but Eric cringes in disgust and runs away screaming. Ariel had to run before she got harpooned by fisherman.`);
                break;
            }

            playAgain = confirm('Play again?');
                    if(playAgain){
                        playGame();
                    }
                    else{
                        alert('Ok bye loser');
                    }

        }


    } // end of Ursula's Story
}

function scarPlanOptions (optionplanB){

    console.log('REACHED');

    
        let scarPathAOptions = prompt('What plan do you suggest to him? (A): Partner with venemous snakes to bite Simba and Mufasa. (B): Partner with a vulture to drop Simba from a cliff and poison Mufasa later to avoid suspicion.').toString().toLowerCase();
        
        if(optionplanB == false){
            switch (scarPathAOptions){
                case 'a':
                    alert ('This plan worked perfectly. It was quiet and sneaky. However scar thinks you\'re weak. He banished you to the Outlands and you eventually starve to death. GAME OVER');
                    let playAgain = confirm('Play again?');
                    if(playAgain){
                        playGame();
                    }
                    else{
                        alert('Ok bye loser');
                    }
                    break;
                case 'b':
                    alert('The dumb vulture failed and snitched on Scar. The pride banishes Scar. Before Scar is exiled, he manages to kill you. GAME OVER');
                    playAgain = confirm('Play again?');
                    if(playAgain){
                        playGame();
                    }
                    else{
                        alert('Ok bye loser');
                    }
                    break;

            }
        }

        else if(optionplanB == true){

            scarPlanBOptions(scarPlanBOptions);

        }
}

function scarPlanBOptions (scarPathAOptions){

    console.log('REACHED2');
    let zebraNumber= 0;
    let newTitle = "";
    let eatZebras= false;
    let becomeRuler = false;
   
    alert ('Scar: Fine, what do you want?');
    let scarPathBOptions = prompt('(A): Zebra Meat (B): Co-ruler of the Pridelands').toString().toLowerCase();

        switch (scarPathBOptions){

            case 'a':
                zebraNumber = prompt('How many zebras do you want?').toString();
                alert(`Scar: Ok I\'ll give you ${zebraNumber} zebras. Now, share your ideas`);
                eatZebras= true;
                break;
        
                
            case 'b':
                newTitle = prompt('Ok, what would you like your title to be?');                    
                alert(`Scar: Ok you\'re new title will be ${newTitle}. Now, share your ideas`);
                becomeRuler = true;
                break;
        
        }

    let planBselection = prompt('What plan do you suggest to him? (A): Partner with venemous snakes to bite Simba and Mufasa. (B): Partner with a vulture to drop Simba from a cliff and poison Mufasa later to avoid suspicion.').toString().toLowerCase();
    
    switch (planBselection){

        case 'a':
           
            if(eatZebras == true){
                alert(`This worked perfectly. Scar rules the pridelands and you get to feast like a royal. You have access to ${zebraNumber} zebras. However you ate so much you became a really fat lion. You can't move and the hyenas get you. GAME OVER`);
            }

            else if (becomeRuler == true){
                alert(`Scar sees how sneaky and cunning you are. He needs someone just as evil as him to rule. All hail King Scar and ${newTitle}`);
            }
        
            playAgain = confirm('Play again?');
                    if(playAgain){
                        playGame();
                    }
                    else{
                        alert('Ok bye loser');
                    }

            break;

        
        case 'b':

            if(eatZebras == true){
                alert(`You have control of the pridelands. However everyone eventually gets mad at you for hoarding all the zebra meat. They riot and kill you. The circle of life actually means something, huh?`);
            }

            else if (becomeRuler == true){
                alert(`You and Scar rule both land and sky. Long live the reign of King Scar and  ${newTitle}`);
            }
           
            
            playAgain = confirm('Play again?');
                    if(playAgain){
                        playGame();
                    }
                    else{
                        alert('Ok bye loser');
                    }
    }

    
}

playGame();