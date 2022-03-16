// Your code below...

// Wrap your whole game in a function, then call your function at the end...

function playGame() {
  let pokeBowl = confirm("Hello! Would you like to order Poke Bowl?");

  if (pokeBowl === true) {
    
    // Tried to use the following while loop and for loop, but seems it is not working. Will need some feedback
    // Method 1:
    // let n = 1
    // while (n < 4) {
    //     let pokeChoice = prompt(
    //         "What kind of poke bowl would you like to order: 1)Spicy Ahi Bowl, 2)Hwaiian Bowl, 3)Evergreen Bowl?"
    //       );
    // }
    // Method 2:
    // for (let i = 1; 1 < 4; 1++) {
    //     let pokeChoice = prompt(
    //         "What kind of poke bowl would you like to order: 1)Spicy Ahi Bowl, 2)Hwaiian Bowl, 3)Evergreen Bowl?"
    //     );
    // }
    
    let pokeChoice = prompt(
      "What kind of poke bowl would you like to order: 1)Spicy Ahi Bowl, 2)Hwaiian Bowl, 3)Evergreen Bowl?"
    );

    if (pokeChoice == 1) {
      alert("Spicy Ahi Bowl is not avaiable. The End.");
    } else if (pokeChoice == 2) {
      alert("Hwaiian Bowl will come soon. The End.");
    } else {
      alert("Evergreen Bowl is our most popular dish");

      let veggieChoice = prompt(
        "What veggies would you like to add to your bowl? (cucumber, edamame)?"
      );
      if (veggieChoice == "cucumber") {
        alert("Cucumber is a good choice");
      } else if (veggieChoice == "edamame") {
        alert("Edamame is yummy");
      }
    }

  } else {
    alert("Im sorry that you are not interested in the Poke Bowl menu. Bye!");
  }

  let playAgain = confirm("Do you want to play again?");
  if (playAgain === true) {
    playGame();
  }
}

playGame();