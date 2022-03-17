// Your code below...

// Wrap your whole game in a function, then call your function at the end...

function playGame() {
  let pokeBowl = confirm("Hello! Would you like to order Poke Bowl?");
  console.log(pokeBowl);
  if (pokeBowl === true) {
    console.log("hello");
    const dinnerChoice = () => {
      let pokeChoice = prompt(
        "What kind of poke bowl would you like to order: 1)Spicy Ahi Bowl, 2)Hwaiian Bowl, 3)Evergreen Bowl?"
      );
      if (pokeChoice === "1") {
        alert("Spicy Ahi Bowl is not avaiable. The End.");
      } else if (pokeChoice === "2") {
        alert("Hwaiian Bowl will come soon. The End.");
      } else if (pokeChoice === "3") {
        alert("Evergreen Bowl is our most popular dish");

        let veggieChoice = prompt(
          "What veggies would you like to add to your bowl? (cucumber, edamame)?"
        );
        if (veggieChoice == "cucumber") {
          alert("Cucumber is a good choice");
        } else if (veggieChoice == "edamame") {
          alert("Edamame is yummy");
        } else {
          alert("sorry that wasn't even an option");
          dinnerChoice();
        }
      }

      let playAgain = confirm("Do you want to play again?");
      if (playAgain === true) {
        playGame();
      }
    };
    dinnerChoice();
  }
}
playGame();