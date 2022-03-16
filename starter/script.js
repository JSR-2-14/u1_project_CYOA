// Your code below...

const chooseDoor = () => {
    let door = parseInt(prompt("What door do you want to go through? (1) (2) (3)"))
      if (door === 1) {
        alert("Welcome to door 1")
      } else if (door === 2) {
        alert("Welcome to door 2")
      } else if (door === 3) {
        alert("Welcome to door 3")
      } else {
        alert("That wasn't an option")
      }
  }
  
  const playGame = () => {
    let name = prompt("What is your name?")
    alert(`Hello, ${name}. This is an alert!`)
    alert("This is the second alert message.")
    let answer = confirm("Do you want to play this game?")
    if (answer === true) {
      alert("Ok great, let's play.")
      chooseDoor()
    } else {
      alert("Fine then, why are you here?")
      let playAgain = confirm("Do you want to play again?")
      if (playAgain === true) {
        playGame()
      } else {
        alert("Ok bye")
        chooseDoor()
      }
    }
  }
  
  playGame()

// Wrap your whole game in a function, then call your function at the end...



















// // Your code below...

// let loop = true;
// let 
// //let enter sometime

// const playGame = () => {

//     let answer = confirm("Do you want to play?")
//     if (answer === true) {
//         alert("let's start!")
//         let door = parseInt(prompt("choose a door (1) (2) (3)"))
//         if (door === 1) {
//             alert("Welcome to door 1")
//         }   else if (door === 2) {
//             alert("Welcome to door 2")
//         }   else if (door === 3) {
//             alert("Welcome to door 3")
//         }   else {
//             alert("Wrong option! Go back!")
//         }
//     } else {
//         alert("what do you want?")
//         let playAgain = confirm("let's give the game another try.")
//         if (playAgain === true) {
//             playGame()
//         } else {
//             alert("too bad.")
//             chooseDoor(open)
//         }
//     }



// }

// playGame()

// // Wrap your whole game in a function, then call your function at the end...

