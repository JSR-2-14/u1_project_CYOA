const playGame = () => {
  let name = prompt("Hello! What is your name?");
  alert(`${name}, are you ready for a unique adventure?`);
  alert(
    "In this adventure game, you will answer a series of personal questions for the chance to win a personalized vacation!"
  );
  let answer = confirm(`Are you sure you want to play this game, ${name}?`);
  console.log("user's answer:", answer);
  if (answer === true){ 
    let answerEscape = prompt(
      "When you want to escape from everyone, where do you go? (a) the ocean (b) the forest?"
    );
    switch (answerEscape){
      case "a":
        prompt(
          "If it is raining outside, what activity do you most want to do? (a) singing & dancing (b) reading"
        );
        let answerSurvive = prompt(
          "How long do you think you could survive on your own? (a) 0-6 months (b) 6 months - 2 years or (c) 2 years or more"
        );
        switch (answerSurvive){
          case "a":
          case "b":
            let answerBucket = prompt(
              "Do you have a bucket list? (1) yes (2) no"
            );
            if (answerBucket == "1") {
              alert("Congratulations! You have won a trip to Florida!");
              let playAgain = confirm("Do you want to play again?");
              if (playAgain === true) {
                playGame();
              }
            } else if (answerBucket == "2") {
              alert("Congratulations! You have won a trip to Maine!");
              let playAgain = confirm("Do you want to play again?");
              if (playAgain === true) {
                playGame();
              }
            }
            break;
        case "c":
        let answerSpeak = prompt(
          "True or false: You have the tendency to speak before thinking."
        );
        if (answerSpeak = true) {
          alert("Congratulations! You have won a trip to New Mexico!");
          let playAgain = confirm("Do you want to play again?");
          if (playAgain === true) {
            playGame();
          }
        } else if (answerSpeak = false) {
          alert("Congratulations! You have won a trip to Virginia!");
          let playAgain = confirm("Do you want to play again?");
          if (playAgain === true) {
            playGame();
          }
        break};
        }
      case "b":
        prompt("Would you consider yourself (a) decisive or (b) indecisive?");
        let answerTime = prompt(
          "Is time currently passing (a) quickly or (b) slowly for you?"
        );
        if ((answerTime = "a")) {
          let answerHowMuch = prompt(
            "How much money would you need in the bank to feel comfortable to retire today?"
          );
                // if (answerHowMuch >= 500000) {
                let answerList = prompt(
              "Do you have a bucket list? (1) yes (2) no"
                );
                switch (answerList) {
                  case "1":
                    alert("Congratulations! You have won a trip to New York!");
                    let playAgain = confirm("Do you want to play again?");
                    if (playAgain === true) {
                      playGame();
                    }
                    break;
                  case "2":
                    alert("Congratulations! You have won a trip to Arizona!");
                  let playRepeat = confirm("Do you want to play again?");
                  if (playRepeat === true) {
                    playGame();} 
              //   else if (answerHowMuch < 500000) {
              // let answerTattoo = prompt(
              //   "What is your opinion on tattoos? (a) yes (b) no"
              // )}};
              // switch (answerTattoo) {
              //   case "a":
              //     alert("Congratulations! You have won a trip to Oregon!");
              //     let playAgain = confirm("Do you want to play again?");
              //     if (playAgain === true) {
              //       playGame();
              //     }
              //     break;
              //   case "b":
              //     alert("Congratulations! You have won a trip to Massachusetts");
              //     break
              //   }
            // switch (answerList) {
            //   case "1":
            //     alert("Congratulations! You have won a trip to New York!");
            //     let playAgain = confirm("Do you want to play again?");
            //     if (playAgain === true) {
            //       playGame();
            //     }
            //     break;
            //   case "2":
            //     alert("Congratulations! You have won a trip to Arizona!");
            //   let playRepeat = confirm("Do you want to play again?");
            //   if (playRepeat === true) {
            //     playGame();} 
              }
            break}
            else if ((answerTime = "b")) {
              let answerBeforeThink = prompt(
              "True or false: You have the tendency to speak before thinking."
            )};
            if ((answerBeforeThink = "true")){
              alert("Congratulations! You have won a trip to Minnesota!")};
          let playOver = confirm("Do you want to play again?");
          if (playOver === true) {
            playGame();
          }
        }
    }
        }
      // }

  playGame()


// } else if (answerBucket == "2") {
//   let luckyNumber = prompt("Guess your lucky number (1-10)");
//   do {
//       let luckyNumber = prompt("Guess again! Enter another number.");
//         i ++;
//       } while (luckyNumber != 10)
