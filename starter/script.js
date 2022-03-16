// Your code below...

// Wrap your whole game in a function, then call your function at the end...

const chooseFriend = () => {
    let friend = prompt("Who would you like to hang out with? (R)ue, (N)ate, or (L)exi?")
      if (friend === 'R') {
        rue()
      } else if (friend === 'N') {
        nate()
      } else if (friend === 'L') {
        lexi()
      } else {
        let playFriendsAgain = confirm("That's not an option, try again?")
        if (playFriendsAgain === true) {
          chooseFriend()
        } else {
          alert("Ok no worries!")
        }
      }
}

const rue = () => {
    let rueFriend = prompt('This should be fun but Rue can make some pretty bad decisions. Jules and Elliot both just texted her to hang out. Who should we meet up with? (J)ules, (E)lliot, or (N)either?')
    if (rueFriend === 'J') {
        jules()
    } else if (rueFriend === 'E') {
        elliot()
    } else if (rueFriend === 'N') {
        neither()
    } else {
        let playRueAgain = confirm("That's not an option, try again?")
        if (playRueAgain === true) {
          rue()
        } else {
          alert("Ok no worries!")
        }
    }
    
}

const jules = () => {
    let partyFighter = prompt('Jules wants to go to a party, fun! Unfortunately, when you get there a fight breaks out. Choose your fighter: (F)ez or (N)ate?')
    if (partyFighter === 'F') {
        alert("Fez! Excellent choice. You and Jules both cheer him on. Fez breaks a bottle over Nate's head and he's bleeding all over the carpet. Unfortunately, you are the only one sober enough to drive so you now have to bring everyone to the hospital.")
    } else if (partyFighter === 'N') {
        alert("Have you seen the show? Nate gets his head bashed in by Fez. Unfortunately, it doesn't cause enough damage and Nate is still an asshole after.")
    } else {
        let playJulesAgain = confirm("That's not an option, try again?")
        if (playJulesAgain === true) {
          jules()
        } else {
          alert("Ok no worries!")
        }
    }

}

const elliot = () => {
    let partyFavor = confirm("We all know Elliot is a bad influence on Rue. He gives Rue a pill and offers you one, do you take it?")
    if (partyFavor === true) {
        alert("Down the rabbit hole we go... you spend the next 3 hours high and hallucinating while Elliot plays the same song over and over again for Rue. Not a fun night for you.")
    } else {
        alert("Sensible choice but now you have no ride and have to hang out with Elliot and Rue while they're high. Not super fun for you.")
    }

}

const neither = () => {
    let order = prompt("Good call. Let's go to Taco Bell instead. What are you ordering? (a) Crunchwrap Supreme (b) Cheesy Gordita Crunch (c) Chalupa")
    switch (order) {
        case 'a':
            alert("That'll be $3.99. You're buying :)")
            break
        case 'b':
            alert("That'll be $4.19. You're buying :)")
            break
        case 'c':
            alert("That'll be $3.69. You're buying :)")
            break
        default:
            alert("Stick to the menu!")
    }
}

const nate = () => {
    let takeARide = confirm("Ah ok, yikes. Nate wants to go for a ride and unfortunately he's 6 beers deep. You sure you're getting in?")
    if (takeARide === true) {
        natesGirls()
    } else {
        noToNate()
    }

}

const natesGirls = () => {
    let whichGirl = prompt("Wow, you better buckle up. Drinking and driving is stupid. Nate's drunk and speeding towards a girlfriend's house... which one is it? (C)assie or (M)addy?")
    if (whichGirl === 'C') {
        cassie()
    } else if (whichGirl === 'M') {
        maddy()
    } else {
        let playNateGirlsAgain = confirm("That's not an option, try again?")
        if (playNateGirlsAgain === true) {
          natesGirls()
        } else {
          alert("Ok no worries!")
        }
    }
}

const cassie = () => {
    let loveMe = prompt("Great, now you have to give up shotgun. Cassie gets in and Nate drives to the nearest gas station for more beer. While he's inside, Cassie asks you if you think Nate loves her, what should you say? (Y/N)")
    if (loveMe === 'Y') {
        alert("Cassie's face lights up when she hears this. She leans over to kiss Nate when he gets back in the car, but he speeds away and ends up driving everyone off a cliff. Great.")
    } else if (loveMe === 'N') {
        alert("Nice of you to be honest but a white lie would've been best. Cassie starts bawling and starts a screaming fight with Nate when he gets back in the car. You decide to make a run for it and hear sirens when you're a few blocks away. Hopefully Nate gets arrested.")
    } else {
        let playCassieAgain = confirm("That's not an option, try again?")
        if (playCassieAgain === true) {
          cassie()
        } else {
          alert("Ok no worries!")
        }
    }

}

const maddy = () => {
   let randomNumber = 0
   while (randomNumber !== "8") {
       randomNumber = prompt("Oof, Maddy is pissed at Nate and won't open the door. How many times (between 1-10) does Nate have to apologize before she opens the door?")
   }

   alert("If we're being real, Nate could never apologize enough to Maddy. End of story.")
}

const noToNate = () => {
    let getOut = confirm("Smart! Drinking and driving is stupid. Let's walk home. Are we ever going to hangout with Nate again?")
    if (getOut === true) {
        alert("Seriously!?")
    } else {
        alert("More like hell no.")
    }
}

const lexi = () => {
    let staySafe = prompt("Sensible choice. There's no way you'll get into trouble with Lexi. Should we: hang out with (F)ez or stay in and (W)rite?")
    if (staySafe === 'F') {
        fezStory()
    } else if (staySafe === 'W') {
        writePlay()
    } else {
        let playLexiAgain = confirm("That's not an option, try again?")
        if (playLexiAgain === true) {
          lexi()
        } else {
          alert("Ok no worries!")
        }
    }
         
}

const fezStory = () => {
    let whoAtDoor = prompt("You're at Fez's watching a movie (almost at the end of 'My Girl') when you hear a knock at the door. Who is it? (C)al, Nate's Dad, or the drug dealer, (M)ouse?")
    if (whoAtDoor === 'C') {
        alert("Cal is acting strange, demanding Fez hands over a video tape. No one knows what he's talking about so Ash beats him up and sends him packing. Back to the movie.")
    } else if (whoAtDoor === 'M') {
        alert("This feels sketchy. Mouse starts arguing with Fez and pulls out a gun. Ash fires from the corner where he has been hiding in the shadows and a gun fight breaks out. You jump under the table but a stray bullet hits your leg and Fez and Lexi rush you to the hospital. You survive but not the night you planned to have.")
    } else {
        let playFezStoryAgain = confirm("That's not an option, try again?")
        if (playFezStoryAgain === true) {
          fezStory()
        } else {
          alert("Ok no worries!")
        }
    }
}

const writePlay = () => {
    let whichStory = prompt("You're a great friend and decided to help Lexi write part 2 of her play. What storyline are you going with? The Tragedy of (F)ez or The Redemption of (R)ue?")
    if (whichStory === 'F') {
        alert("The Tragedy of Fez: Fez is wrongly convicted of murder and sentenced to life in prison. He spends his time studying and earns a PhD in mathematics. He writes to Lexi every day and they plan to reunite once he's up for parole.")
    } else if (whichStory === 'R') {
        alert("The Redemption of Rue: Rue gets clean. Her maroon hoodie goes viral in a video on TikTok and she makes millions off of sales. She buys her mom and sister a new house and everyone lives happily ever after.")
    } else {
        let playWriteAgain = confirm("That's not an option, try again?")
        if (playWriteAgain === true) {
          writePlay()
        } else {
          alert("Ok no worries!")
        }
    }
}

const playGame = () => {
    let name = prompt("Hey there, what is your name?")
    alert(`Nice to meet you, ${name}. Welcome to Euphoria High.`)
    chooseFriend()

    let playAgain = confirm("Do you want to start the game over?")
      if (playAgain === true) {
        playGame()
      } else {
        alert("Ok dropout, see ya!")
      }
}

playGame()

// Welcome to Euphoria High. What is your name?

// Nice to meet you NAME. Who would you like to hang out with? (R)ue, (N)ate, or (L)exi?
// if choose someone else = That's not an option. You're not that popular.

// Rue - This should be fun but Rue can make some pretty bad decisions. Jules and Elliot both just texted her to hang out. Who should we meet up with? (J)ules, (E)lliot, or (N)either? ** switch statement
    //Jules = Jules wants to go to a party, fun! Unfortunately, when you get there a fight breaks out. Choose your fighter: Fez or Nate?
        // Fez - Excellent choice. You and Jules both cheer him on. Fez breaks a bottle over Nate's head and he's bleeding all over the carpet. Unfortunately, you are the only one sober enough to drive so you now have to drive everyone to the hospital.
        // Nate - Have you seen the show? Nate gets his head bashed in by Fez. Unfortunately, it doesn't cause enough damage and Nate is still an asshole after. 
    //Elliot = We all know Elliot is a bad influence on Rue. He gives Rue a pill and offers you one, do you take it?
        // Yes = Down the rabbit hole we go... you spend the next 3 hours high and hallucinating while Elliot plays the same song over and over again for Rue. Not a fun night for you.
        // No = Sensible choice but now you have no ride and have to hang out with Elliot and Rue while they're high. Not super fun for you.
    //Neither = Good call. Let's stay out of trouble and order taco bell.

// Nate - Ah ok, yikes. Nate wants to go for a ride and unfortunately he's 6 beers deep. Getting in?
    //"Ok" - Wow, you better buckle up. Drinking and driving is stupid. Nate's drunk and speeding towards a girlfriend's house... which one is it? (C)assie or (M)addy?
        //Cassie = Great, now you have to give up shotgun. Cassie gets in and Nate drives to the nearest gas station for more beer. While he's inside, Cassie asks you if you think Nate loves her, what should you say?
            //Yes - Cassie's face lights up when she hears this. She leans over to kiss Nate when he gets back in the car, but he speeds away and ends up driving everyone off a cliff. Great.
            //No - Nice of you to be honest but a white lie would've been best. Cassie starts bawling and starts a screaming fight with Nate when he gets back in the car. You decide to make a run for it and hear sirens when you're a few blocks away. Hopefully Nate gets arrested.
        //Maddy = Oof, Maddy is pissed at Nate and won't open the door. How many times does Nate have to apologize before she opens the door? (**Loop here with numbers?**)

    //"Cancel" - Smart! Drinking and driving is stupid. Let's walk home. Are we ever going to hangout with Nate again?
        //Yes - "Seriously!?"
        //No - More like hell no.

// Lexi - Sensible choice. There's no way you'll get into trouble with Lexi. Should we hang out with Fez or stay in and write?
    //Hang out at Fez's and watch a movie = you're almost at the end of "My Girl" when you hear a knock at the door. Who is it? Cal (Nates Dad) or the drug dealer, Mouse?
        // Cal - Cal is acting strange, demanding Fez hands over a video tape. No one knows what he's talking about so Ash beats him up and sends him packing. Back to the movie. 
        // Mouse - This feels sketchy. Mouse starts arguing with Fez and pulls out a gun. Ash fires from the corner where he has been hiding in the shadows and a gun fight breaks out. You jump under the table but a stray bullet hits your leg and Fez and Lexi rush you to the hospital. You survive but not the night you planned to have.
    //Help her write part 2 of her play = What storyline are you going with?
        // The Tragedy of Fez - Fez is wrongly convicted of murder and sentenced to life in prison. He spends his time studying and earns a PhD in mathematics. He writes to Lexi every day and they plan to reunite once he's up for parole. 
        // The Redemption of Rue - Rue gets clean. 

//Play again?

//EXAMPLE CODE FROM CLASS

// const chooseDoor = () => {
//     let door = parseInt(prompt("What door do you want to go through? (1) (2) (3)"))
//       if (door === 1) {
//         alert("Welcome to door 1")
//       } else if (door === 2) {
//         alert("Welcome to door 2")
//       } else if (door === 3) {
//         alert("Welcome to door 3")
//       } else {
//         alert("That wasn't an option")
//       }
//   }
  
//   const playGame = () => {
//     let name = prompt("What is your name?")
//     alert(`Hello, ${name}. This is an alert!`)
//     alert("This is the second alert message.")
//     let answer = confirm("Do you want to play this game?")
//     if (answer === true) {
//       alert("Ok great, let's play.")
//       chooseDoor()
//     } else {
//       alert("Fine then, why are you here?")
//       let playAgain = confirm("Do you want to play again?")
//       if (playAgain === true) {
//         playGame()
//       } else {
//         alert("Ok bye")
//         chooseDoor()
//       }
//     }
//   }
  
//   playGame()