// Your code below...
// Wrap your whole game in a function, then call your function at the end...
function chooseGame() {
    let gameType = parseInt(prompt('Which game would you like to play? Your options are: 1) Rap Trivia 2) Synthesis Trivia 3) House Music Trivia. Please enter the number of your choice'));
    switch(gameType){
        case 1:
            output = rapTrivia();
            break;
        case 2:
            output = synthTrivia();
            break;
        case 3:
            output = houseTrivia();
            break;
        default:
            output =  alert('That was not a choice. Next time, please enter 1, 2, or 3.');
            playGame();
    }
}

const playGame = () => {
    let confirm1 = confirm('Hello! Would you like to play a game?');
    if(confirm1 === true){
        alert("Great! Let's get started!");
        let x = chooseGame();
    } else{
        alert("Hmm... ok then. Until next time!");
    }
}

function exitGame() {
    let exitStatus = confirm('You have exited the game. If you would like to start Choose Your Adventure from the beginning, please hit Ok.');
    if(exitStatus === true){
        playGame();
    } else{
        alert('Ok, well thanks for playing. See you next time!');
    }
}


function rapTrivia(){
    let rapScore = 0;
    let rapQuestions = 0;

    let decade = parseInt(prompt(`Ok, Rap Trivia it is. Which decade would you like to be quizzed on? Enter 90 for the 90's, 00 for the 2000's, and 10 for the 2010's`));

    if(decade === 90){
        alert(`Ok, let's test your knowledge of 90's Rap!`)
        //90's Rap Question 1
        rapQuestions++;
        let snoopName = parseInt(prompt(`What is Snoop Dogg's real name? Enter: 1 for Calvin Broadus, 2 for Russell Wade, 3 for Malcolm Forbito, 4 for Curtis Greene`));
        if(snoopName === null){
            exitGame();
        } else{
            if(snoopName === 1) {
                rapScore++;
                confirm('Correct! Your score is now: ' + rapScore + ' / ' + rapQuestions + '. Next question...')
            } else{
                confirm("Oooh, unfortunately that is not correct. The correct answer was 1) Calvin Broadus. Your score is now " + rapScore + ' / ' + rapQuestions + ". Let's move on to the next question.")
            }
        }
        //90's Rap Question 2
        rapQuestions++;
        let poeticJustice = parseInt(prompt(`Which rapper starred in the 1993 film Poetic Justic alongside Janet Jackson? Enter: 1 for Biggie, 2 for Ice T, 3 for Tupac Shakur, 4 for Ice Cube.`))
        if(poeticJustice === null){
            exitGame();
        } else{
            if(poeticJustice === 3){
                rapScore++;
                confirm('Correct! Your score is now' + rapScore + ' / ' + rapQuestions + '. Next question...');
            } else{
                confirm("Oooh, unfortunately that is not correct. The correct answer was 3) Tupac Shakur. Your score is now " + rapScore + ' / ' + rapQuestions + ". Let's move on to the next question.")
            }
        }
        //90's Rap Question 3
        rapQuestions++;
        let outkastMembers = prompt(`Who are the two members of OutKast? Enter: 1 for Deandre & Big Boi, 2 for Andre 3000 & Pfife Dawg, 3 for Prodigy & Havoc, 4 for Andre 3000 & Big Boi`);
        if(outkastMembers === null){
            exitGame();
        } else{
            if(outkastMembers === '4'){
                rapScore++;
                confirm("Correct! Your score is now: " +  rapScore + " / " + rapQuestions + ". Next question...")
            } else {
                confirm("Oooh, unfortunately that is not correct. The correct answer was 4) Andre 3000 & Big Boi. Your score is now " + rapScore + ' / ' + rapQuestions + ". Let's move on to the next question.");
            }
        }
        //90's Rap Question 4
        rapQuestions++;
        let sugeKnight = prompt(`True or False: Suge Knight was the infamous head of Death Row Records. Enter the word true for True or the word false for False.`);
        if(sugeKnight === null){
            exitGame();
        } else{
            if(sugeKnight === 'true'){
                rapScore++;
                confirm('Correct! Your score is now' + rapScore + ' / ' + rapQuestions + '. Thanks for playing!');
                exitGame();
            } else{
                confirm("Oooh, unfortunately that is not correct. The correct answer was True. Your score is now " + rapScore + ' / ' + rapQuestions + ". Thanks for playing!.");
                exitGame();
            }
        }
    } else if(decade === 00){
        alert(`Ok, let's test your knowledge of 2000's Rap!`);
        //2000's Rap Question 1
        rapQuestions++;
        let camronCity = prompt(`Cam'ron was from what part of New York? Enter: 1 for Queens, 2 for Buffalo, 3 for Harlem, and 4 for Brooklyn.`);
        rapQuestions++;
        if(camronCity === null){
            exitGame();
        } else{
            if(camronCity === '3'){
                rapScore++;
                confirm("Correct! Your score is now: " +  rapScore + " / " + rapQuestions + ". Next question...")
            } else {
                confirm("Oooh, unfortunately that is not correct. The correct answer was 3) Harlem. Your score is now " + rapScore + ' / ' + rapQuestions + ". Let's move on to the next question.");
            }
        }
        //2000's Rap Question 2
        rapQuestions++;
        let centName = prompt(`What is 50 Cent's real name? Enter: 1 for Curtis Jackson, 2 for Sean Carter, 3 for Dwayne Carter, 4 for Curtis Marton.`)
        if(centName === null){
            exitGame();
        } else{
            if(centName === '1'){
                rapScore++;
                confirm("Correct! Your score is now: " +  rapScore + " / " + rapQuestions + ". Next question...")
            } else {
                confirm("Oooh, unfortunately that is not correct. The correct answer was 1) Curtis Jackson. Your score is now " + rapScore + ' / ' + rapQuestions + ". Let's move on to the next question.");
            }
        }
        //2000's Rap Question 3
        rapQuestions++;
        let mmg = prompt(`Rick Ross's label, MMG, stands for what? Enter: 1 for More Music Group, 2 for Major Money on God, 3 for Music Masters Group, 4 for Maybach Music Group`);
        if(mmg === null){
            exitGame();
        } else{
            if(mmg === '4'){
                rapScore++;
                confirm("Correct! Your score is now: " +  rapScore + " / " + rapQuestions + ". Next question...")
            } else{
                confirm("Oooh, unfortunately that is not correct. The correct answer was 4) Maybach Music Group. Your score is now " + rapScore + ' / ' + rapQuestions + ". Let's move on to the next question.");
            }
        }
        //2000's Rap Question 4
        rapQuestions++;
        let rootsLateNight = prompt(`The Roots are the rap band supporting which late night television host? Enter: 1 for Jimmy Kimmel, 2 for Conan O'Brien, 3 for Jimmy Fallon, 4 for Stephen Colbert`);
        if(rootsLateNight){
            exitGame();
        } else{
            if(rootsLateNight === '3'){
                rapScore++;
                confirm("Correct! Your score is now: " +  rapScore + " / " + rapQuestions + ". Thanks for playing!");
                exitGame();
            } else{
                confirm("Oooh, unfortunately that is not correct. The correct answer was 3) Jimmy Fallon. Your score is now " + rapScore + ' / ' + rapQuestions + ". Thanks for playing!");
                exitGame();
            }
        }  
    } else if(decade == 10){
        //2010's Rap Question 1
        alert(`Ok, let's test your knowledge of 2010's Rap!`);
        rapQuestions++;
        let migosNames = prompt(`Who are the 3 members of rap group Migos? Enter 1 for Takeout & Quave & OffThat, 2 for Kwaivo & Dipset & Takeover, 3 for Quavo & Onset & Shakout, 4 for Quavo & Offset & Takeoff.`)
        if(migosNames === null){
            exitGame();
        } else{
            if(migosNames === '4'){
                rapScore++;
                confirm("Correct! Your score is now: " +  rapScore + " / " + rapQuestions + ". Next question...")
            }
            else{
                confirm("Oooh, unfortunately that is not correct. The correct answer was 4) Quavo & Offset & Takeoff. Your score is now " + rapScore + ' / ' + rapQuestions + ". Let's move on to the next question.");
            }
        }
        //2010's Rap Question 2
        rapQuestions++;
        let slimeSeason = prompt('The Slime Season mixtapes were released by which rapper? Enter 1 or Gunna, 2 for Lil Baby, 3 for Young Thug, 4 for 21 Savage');
        if(slimeSeason === null){
            exitGame();
        } else{
            if(slimeSeason === '3'){
                rapScore++;
                confirm("Correct! Your score is now: " +  rapScore + " / " + rapQuestions + ". Next question...")
            } else{
                confirm("Oooh, unfortunately that is not correct. The correct answer was 3) Young Thug. Your score is now " + rapScore + ' / ' + rapQuestions + ". Let's move on to the next question.");
            }
        }
        //2010's Rap Question 3
        rapQuestions++;
        let nickiMinaj = prompt('Nicki Minaj was born in what country? Enter 1 for Trinidad & Tobago, 2 for Brazil, 3 for Egypt, 4 for Turks & Caicos.')
        if(nickiMinaj === null){
            exitGame();
        } else{
            if(nickiMinaj === '1'){
                rapScore++;
                confirm("Correct! Your score is now: " +  rapScore + " / " + rapQuestions + ". Thanks for playing!");
                exitGame();
            }
            else{
                confirm("Oooh, unfortunately that is not correct. The correct answer was 1) Trinidad & Tobago. Your score is now " + rapScore + ' / ' + rapQuestions + ". Thanks for playing!");
                exitGame();
            }
        }
    } else{
        alert(`That was not an option: next time, please enter 90, 00, or 10.`)
        playGame();
    }
}
function synthesisTrivia(){
    let synthRoute = prompt(`Ok, Synthesis Trivia it is! Would you like to play trivia about synthesis or synthesizer instruments? Enter 1 for synthesis or 2 for synthesizer history.`);
    if(synthRoute == null){
        exitGame();
    } else{
        if(synthRoute === '1'){
            playSynthesis();
        } else if(synthRoute === '2'){
            playSynthesizer();
        } else{
            alert('That was not an option. Next time around, please enter 1 or 2.')
            exitGame();
        }
    }
    function playSynthesis() {
        let synthesisScore = 0;
        let synthesisQuestions = 0;
        //Synthesis Question 1
        synthesisQuestions++;
        let sineHarmonics = prompt(`True or False: A sine wave has no harmonics. Enter t for True or F for false`);
        if(sineHarmonics === null){
            exitGame();
        } else{
            if(sineHarmonics === 't'){
                synthesisScore++;
                confirm("Correct! Your score is now: " +  synthesisScore + " / " + synthesisQuestions + ". Next question...")
            } else{
                confirm("Oooh, unfortunately that is not correct. The correct answer was True. Your score is now " + synthesisScore + ' / ' + synthesisQuestions + ". Let's move on to the next question.");
            }
        }
        //Synthesis Question 2
        synthesisQuestions++;
        let lfoMeaning = prompt(`In synthesis, what does the term LFO stand for? Enter: 1 for Lowest Frequency Onset, 2 for Low Frequency Oscillator, 3 for Low Friction Oscillator, 4 for Low Frequency Oscilliscope.`)
        if(lfoMeaning === null){
            exitGame();
        } else{
            if(lfoMeaning === '2'){
                synthesisScore++;
                confirm("Correct! Your score is now: " +  synthesisScore + " / " + synthesisQuestions + ". Next question...")
            } else{
                confirm("Oooh, unfortunately that is not correct. The correct answer was 2) Low Frequency Oscillator. Your score is now " + synthesisScore + ' / ' + synthesisQuestions + ". Let's move on to the next question.");
            }
        }
        //Synthesis Question 3
        synthesisQuestions++;
        let adsr = prompt(`In synthesis, what does the acronym ADSR stand for? Enter: 1 for Amplitude Delay Speed Reverb, 2 for Anomalies in Display / Set Restart, 3 for Attack Decay Sustain Release, 4 for All Details in Synthesis are Relevant`)
        if(adsr === null){
            exitGame();
        } else{
            if(adsr === '3') {
                synthesisScore++;
                confirm("Correct! Your score is now: " +  synthesisScore + " / " + synthesisQuestions + ". Next question...")
            } else{
                confirm("Oooh, unfortunately that is not correct. The correct answer was 3) Attack Decay Sustain Release. Your score is now " + synthesisScore + ' / ' + synthesisQuestions + ". Let's move on to the next question.");
            }
        }
        //Synthesis Question 4
        synthesisQuestions++;
        let midiDecade = prompt(`In what decade was the MIDI standard established? Enter 1 for 1970's, 2 for 1980's, 3 for 1990's, 4 for 2000's.`);
        if(midiDecade === null){
            exitGame();
        } else{
            if(midiDecade === '2'){
                synthesisScore++;
                confirm("Correct! Your score is now: " +  synthesisScore + " / " + synthesisQuestions + ". Next question...")
            } else{
                confirm("Oooh, unfortunately that is not correct. The correct answer was 2) 1980's. Your score is now " + synthesisScore + ' / ' + synthesisQuestions + ". Let's move on to the next question.");
            }
        }
        //Synthesis Question 5
        synthesisQuestions++;
        let mostHarmonics = prompt(`Which waveform has the most harmonic content? Enter 1 for sine, 2 for triangle, 3 for square, 4 for sawtooth)`);
        if(mostHarmonics === null){
            exitGame();
        } else{
            if(mostHarmonics === '4'){
                synthesisScore++;
                confirm("Correct! Your score is now: " +  synthesisScore + " / " + synthesisQuestions + ". Thanks for playing!");
                exitGame();
            } else{
                confirm("Oooh, unfortunately that is not correct. The correct answer was 4) sawtooth. Your score is now " + synthesisScore + ' / ' + synthesisQuestions + ". Thanks for playing!");
                exitGame();
            }
        }
    }
    function playSynthesizer(){
        let synthesizerScore = 0;
        let synthesizerQuestions = 0;
        //Synthesizer Question 1
        synthesizerQuestions++;
        let roland = prompt('The popular brand Roland was created in what country? Enter 1 for USA, 2 for Germany, 3 for Japan, 4 for the UK.')
        if(roland === null){
            exitGame();
        } else{
            if(roland === '3'){
                synthesizerScore++;
                confirm("Correct! Your score is now: " +  synthesizerScore + " / " + synthesizerQuestions + ". Next question...")
            }
            else{
                confirm("Oooh, unfortunately that is not correct. The correct answer was 3) Japan. Your score is now " + synthesizerScore + ' / ' + synthesizerQuestions + ". Let's move on to the next question.");
            }
        }
        //Synthesizer Question 2
        synthesizerQuestions++;
        let moog = prompt('True or False: The Moog line of synthesizers was created by Dr. Robert Moog. Enter t for True or f for False.')
        if(moog === null){
            exitGame();
        } else{
            if(moog === 't'){
                synthesizerScore++;
                confirm("Correct! Your score is now: " +  synthesizerScore + " / " + synthesizerQuestions + ". Next question...")
            } else{
                confirm("Oooh, unfortunately that is not correct. The correct answer was True. Your score is now " + synthesizerScore + ' / ' + synthesizerQuestions + ". Let's move on to the next question.");
            }
        }
        //Synthesizer Question 3
        synthesizerQuestions++;
        let tb303 = prompt(`The Roland TB-303 produced Acid House's most ubiquitous sound, but was actually a failed attempt at simulating what instrument? Enter 1 for guitar, 2 for piano, 3 for saxophone, 4 for bass`);
        if(tb303 === null){
            exitGame();
        } else{
            if(tb303 === '4'){
                synthesizerScore++;
                confirm("Correct! Your score is now: " +  synthesizerScore + " / " + synthesizerQuestions + ". Next question...")
            } else{
                confirm("Oooh, unfortunately that is not correct. The correct answer was 4) bass. Your score is now " + synthesizerScore + ' / ' + synthesizerQuestions + ". Let's move on to the next question.");
            }
        }
        //Synthesizer Question 4
        synthesizerQuestions++;
        let daveSmith = prompt(`Who created Sequential Instruments, maker of the popular polyphonic keyboard the Prophet of the 70's? Enter 1 for Dave Smith, 2 for Jim Johnson, 3 for Bob Leeks, 4 for Ned Buckbinder`);
        if(daveSmith === null){
            exitGame();
        } else{
            if(daveSmith === '1'){
                synthesizerScore++;
                confirm("Correct! Your score is now: " +  synthesizerScore + " / " + synthesizerQuestions + ". Next question...")
            } else{
                confirm("Oooh, unfortunately that is not correct. The correct answer was 1) Dave Smith. Your score is now " + synthesizerScore + ' / ' + synthesizerQuestions + ". Let's move on to the next question.");
            }
        }
        //Synthesizer Question 5
        synthesizerQuestions++;
        let ssl = prompt(`True or False: SSL, the brand behind some of the most sought-after consoles, stands for Solid Sound Logic. Enter t for true or f for false.`)
        if(ssl === null){
            exitGame();
        } else{
            if(ssl === 'f'){
                synthesizerScore++;
                confirm("Correct! Your score is now: " +  synthesizerScore + " / " + synthesizerQuestions + ". Thanks for playing!");
                exitGame();
            } else{
                confirm("Oooh, unfortunately that is not correct. The correct answer was False. Your score is now " + synthesizerScore + ' / ' + synthesizerQuestions + ". Thanks for playing!");
                exitGame();
            }
        }
    }
}

function houseTrivia(){
    let houseScore = 0;
    let houseQuestions = 0;

    alert(`Ok, House Music Trivia it is! Let's get started.`)
    houseQuestions++;
    let acidHouse = prompt('True or False: Acid House is a subgenre of House. Enter the letter t or f');
    if(acidHouse === null){
        exitGame();
    } else{
        if(acidHouse === 't'){
            houseScore++;
            confirm("Correct! Your score is now: " +  houseScore + " / " + houseQuestions + ". Next question...")
        }
        else{
            confirm("Oooh, unfortunately that is not correct. The correct answer was True. Your score is now " + houseScore + ' / ' + houseQuestions + ". Let's move on to the next question.");
        }
    }
    houseQuestions++;
    let shmPeople = prompt('Swedish House Mafia consisted of how many people? Enter the number: ');
    if(shmPeople === null){
        exitGame();
    } else{
        if(parseInt(shmPeople) === 3){
            houseScore++;
            confirm("Correct! Your score is now: " +  houseScore + " / " + houseQuestions + ". Next question...")

        } else{
            confirm("Oooh, unfortunately that is not correct. The correct answer was 3. Your score is now " + houseScore + ' / ' + houseQuestions + ". Let's move on to the next question.");
        }
    }
    houseQuestions++;
    let tiestoCountry = prompt(`What country is Tiesto from? Enter: 1 for The Netherlands, 2 for France, 3 for Croatia, 4 for Germany`);
    if(tiestoCountry === null){
        exitGame();
    } else{
        if(parseInt(tiestoCountry) === 1) {
            houseScore++;
            confirm("Correct! Your score is now: " +  houseScore + " / " + houseQuestions + ". Thanks for playing!");
            exitGame();
        } else{
            confirm("Oooh, unfortunately that is not correct. The correct answer was 1) The Netherlands. Your score is now " + houseScore + ' / ' + houseQuestions + ". Thanks for playing!");
            exitGame();
        }
    }
}

//Runs the entire game
playGame();