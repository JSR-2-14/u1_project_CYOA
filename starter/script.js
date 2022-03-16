// Your code below...

// Wrap your whole game in a function, then call your function at the end...
// - Any path the user goes down must ask them at least **three** questions.
// - There must be a minimum of **seven** total destinations the user could arrive at based on their responses.

// SUBWAY
let metrocardBalance = 3
const refillMetrocard = function() {

  // - Find a way to implement a **loop** of some sort into your code. Maybe a user has to keep guessing until they guess the right option (give them choices)?
  // - Have the user have to **answer with each of the three main datatypes** (integer) somewhere in their adventure
  // - Your code must make use of **number user inputs**.
  let refillAmountValid = false
  let tries = 0
  while(!refillAmountValid) {
    let refillAmount = parseInt(prompt('How much money do you want to add to your card?'))

    tries += 1
    if (tries > 3) return false

    if (isNaN(refillAmount)) alert("Hmm...that doesn't work. You need to enter a number.")
    else if(refillAmount >= 10) alert(`$${refillAmount}!! That's too much money. You should save some for vacation.`)
    else if(refillAmount < 3) alert("That's not enough. A subway ride is already $3.")
    else {
      refillAmountValid = true
      metrocardBalance += refillAmount
      alert(`Awesome. Gotta save some for vacation. Now you have $${metrocardBalance} on your MetroCard. You walk over to the turnstyle.`)
      return true
    }
  }
}

const startSubway = () => {
  let successfulRefill = true
  alert('After making sure you have everything packed, you walk down the street enter the subway station with your backpack and luggage. You need to use your MetroCard for the subway and again for the AirTrain after you transfer.')

  const refill= prompt('Do you want to refill your card? There are about 15 people in line so it might take awhile... (Enter anything to refill your card, blank to not refill)')
  if (refill) {
    const helpTourists = prompt('The tourists ahead of you are taking forever to get their MetroCards. Should you help them? (Enter anything to help the tourists, blank to wait)')
    if (helpTourists) {
      alert('You step away from your luggage and walk forward to help the tourists. You end up helping each person with the machine, but it only takes 5 minutes.')
    } else {
      alert('30 minutes go by, but you finally make it to the machine. You should hurry up...')
    }
    successfulRefill = refillMetrocard();
    if (!successfulRefill) {
      alert('All of a sudden the MetroCard machine breaks!')
      alert("You end up going to another station, but that machine is broken. You go to another station and that machine is broken as well. And another...and another... There's a citywide MetroCard machine failure and it happens to be on the day you go on vacation! By the time you open Uber you realize your flight is in an hour, but it will take an hour to get to JFK. You end up missing your flight.")
      
      // ENDING 1
      alert('GAME OVER')
      return
    }
  } else {
    alert(`Time is of the essence! You proceed to the turnstyle and hope you have enough on your card. Phew you have enough!`)
  }
  metrocardBalance -= 3
  alert(`Looks like you have $${metrocardBalance} left on your MetroCard.`)
  if (metrocardBalance < 5) alert("The AirTrain is $5, so you'll need to refill at the AirTrain station.")
  else alert('Great, you have enough for the $5 AirTrain too.')

  alert("You take the E train and make it to the AirTrain station and there is an enormous crowd in front of the ticket machine! You ask someone what's going on and apparently there's a citywide MetroCard machine failure, but this station is the only one that has a machine that works for some reason.")
  
  if (metrocardBalance < 5) {
    alert("You have no choice but to wait in the huge line to refill your MetroCard.")
    alert("15 minutes later, a random person offers to sell you his AirTrain ticket for $5 cash. He seems sort of sketchy, but this seems like your only option if you want to possibly make this flight.")

    const accept = prompt('What are you going to do? (Enter anything to accept, blank to continue waiting in line)')
    if (accept) {
      alert('You give him $5 in cash and run to the turnstyle. It works!')
      alert("You board the AirTrain, check in your luggage, go through security and get to your gate just in time. You board the flight and start your long-awaited vacation...")
      // ENDING 2
      alert('HAPPILY EVER AFTER - THE END')
      return
    } else {
      alert("You politely decline.")
      alert("By the time you get your card, an hour passes by and you rush to the AirTrain. You check in your luggage and get through security as fast as you can, but you make it to the gate right as your plane is taking off. You miss your flight.")
      // ENDING 3
      alert('GAME OVER')
      return
    }
  }

  alert("Good thing you refilled your card at the station! You push your way through the huge crowd and walk through the AirTrain turnstyle, grateful you have enough on your MetroCard.")
  alert("You board the AirTrain, check in your luggage, go through security and get to your gate just in time. You board the flight and start your long-awaited vacation...")

  // ENDING 4
  alert('HAPPILY EVER AFTER - THE END')
}


// TAXI
let routeQuestion = `
You hate when taxi drivers do this, but you know he'll drive faster than any other Uber driver. Should you tell him to take the bridge or tunnel?

(B)ridge
(T)unnel
`
const startTaxi = () => {
  alert('After making sure you have everything packed, you walk to the street corner with your backpack and luggage. You raise your hand to hail a taxi and one comes right away. You enter the yellow cab, tell him you need to get to JFK and the driver takes off.')
  alert(`After driving for 10 minutes, the taxi driver looks at you via the rearview window. "Hey buddy, by GPS is broken. Do you think I should take the bridge or the tunnel to JFK?"`)

  route = prompt(routeQuestion)
  let bridge = true
  switch (route.toLowerCase()) {
    case 'b':
      alert(`The driver gives you a smile. "Smart. There's a lot of traffic around the tunnel this time of day. Bridge it is!"`)
      break
    case 't':
      alert(`The driver gives you a smile. "Tunnel it is!"`)
      bridge = false
      break
    case '':
      alert(`The driver gives you a look. "You're quiet...Ok, I'll take the bridge. There's a lot of traffic around the tunnel this time of day."`)
      break
    default:
      alert(`The driver gives you a look. "I don't know what you mean, but I'll take the bridge. There's a lot of traffic around the tunnel this time of day."`)
  }

  if (bridge) {
    alert(`The taxi driver makes his way to the bridge. As you're driving across, you see a group of distressed people on the side of the road about half a mile away. The driver makes eye-contact again. "That person really looks like they can use some help. Should we stop and see what's wrong?"`)
    const help = prompt('This driver sure likes to ask for your advice. Should you stop to help this person? (Y/N)')
    switch (help.toLowerCase()) {
      case 'y':
        alert(`The driver smiles. "You're a really nice person. You'll make your flight in time, don't worry." The driver makes his way to the right, narrowly missing a speeding car. The driver gasps. "Close one!"`)
        alert(`You pull up to the group of people. It turns out their car broke down and one of them needs to get to the airport ASAP. He joins you and your split the cab fare. Nice!`)
        alert('After getting to the airport, you check in your luggage, go through security and get to your gate just in time. Your body is sore from running through the tunnel, but you board the flight and start your long-awaited vacation...')
        // ENDING 5
        alert('HAPPILY EVER AFTER - THE END')
        return
      case 'n':
        alert(`The driver nods. "Right, you have a flight to catch!"`)
        break
      default:
        alert(`The driver nods. "Right, you have a flight to catch!"`)
    }

    alert(`Suddenly, a speeding taxi hits the taxi on the left side. You pull over. There isn't much damage, but the cab drivers start bickering. The argument gets heated and the taxi drivers won't let it go. You miss your flight.`)
    // ENDING 6
    alert('GAME OVER')
  } else {
    //Tunnel
    alert(`The taxi driver makes his way to the tunnel. 5 minutes later, the car comes to a screeching halt. Rush hour traffic! The driver turns around. "Looks like the tunnel is backed up, but I think we'll be through it in no time."`)
    alert('5 minutes pass by and the taxi has only gone down one block....')
    alert('Another 5 minutes, another block...')
    alert('....10 minutes goes by....')
    alert('....another 10 minutes....')
    alert("You finally make it to the entrance of the tunnel, but traffic isn't moving any faster.")
    alert(`After an hour, you've only made it halfway through the tunnel. The driver turns around again.
    
    "Listen, it looks like it will be another hour in this tunnel and your flight is in an hour and a half. There's an AirTrain station at the end of the tunnel, so I feel like the only way you'll make your flight is you sprint down this tunnel and catch the AirTrain."`)
    
    const run = prompt('He sounds like he has a point. What are you going to do? (Enter anything to get out and run, blank to wait)')
    if (run) {
      alert('You quickly pay the driver, grab your stuff and sprint down the tunnel. You get a lot of stares, but catch the AirTrain. After getting to the airport, you check in your luggage, go through security and get to your gate just in time. Your body is sore from running through the tunnel, but you board the flight and start your long-awaited vacation...')
      // ENDING 7
      alert('HAPPILY EVER AFTER - THE END')
    } else {
      alert('You wait in the taxi, but by the time you make it to the airport, you only have 30 minutes until your flight. Unfortunately, you make it to the gate right as your plane is taking off. You miss your flight.')
      // ENDING 8
      alert('GAME OVER')
    }
  }
}


// UBER
const startUber = () => {
  let late = false
  alert('You order an Uber. After making sure you have everything packed, you head downstairs. After waiting for about 10 minutes, the driver arrives. You get in and she takes off.')
  let ask = prompt(`After a few minutes, you realize your Uber driver is driving pretty slow. Your flight is in 2 hours and you know there's probably going to be some traffic. Should you say something to the Uber driver? (Enter anything to say something, blank to sit quietly)`)
  if (ask) {
    alert(`The Uber driver smiles and speeds up. You make it to the airport with plenty of time.`)
  } else {
    late = true
    alert(`You sit quietly, but you make it to the airport with only 30 minutes until your flight.`)
  }

  let validTip = false
  let tip = 0
  while (!validTip) {
    tip = parseInt(prompt('The rides comes to $50 total. How much do you want to tip?'))
    if (!isNaN(tip) && tip > 0) {
      validTip = true
      alert(`You tipped $${tip} for your $50 ride.`)
    } else {
      alert('Invalid. Please enter a number greater than 0.')
    }
  }

  if (!late && tip >= 10) {
    alert('After walking into to the airport, you check in your luggage, go through security and get to your gate just in time. Your body is sore from running through the tunnel, but you board the flight and start your long-awaited vacation...')
    // ENDING 9
    alert('HAPPILY EVER AFTER - THE END')
  } else if (!late && tip < 10) {
    alert('After walking into to the airport, you check in your luggage, go through security and get to your gate just in time. Your body is sore from running through the tunnel, but you board the flight and start your long-awaited vacation...')
    alert('Later in the day, you notice your Uber rating went down. Guess you should have tipped more...')
    // ENDING 10
    alert('HAPPILY EVER AFTER? - THE END')
  } else if (late && tip >= 10) {
    alert("After walking into to the airport, you check in your luggage and get through security as fast as you can, but you make it to the gate right as your plane is taking off. You miss your flight.")
    // ENDING 11
    alert('GAME OVER')
  } else {
    // Late and under tip
    alert("After walking into to the airport, you check in your luggage and get through security as fast as you can, but you make it to the gate right as your plane is taking off. You miss your flight.")
    alert('A few minutes later, you notice your Uber rating went down. Could this day get any worse?')
    // ENDING 12
    alert('GAME OVER')
  }
}


// INTRO
let initialPrompt = `
Location: Hell's Kitchen, New York City
Time: 3:30 PM

You have a flight that leaves from JFK at 6:00 PM. You have some time, so taking the subway could save a lot of money. But taking a car is so easy!
`
let transportationQuestion = `
How should you get to the airport?

(S)ubway
(T)axi
(U)ber
`
const runAdventure = () => {
  metrocardBalance = 3
  alert(initialPrompt)
  const transportation = prompt(transportationQuestion)

  // - Your code must contain **at least one switch statement**.
  // - For **at least one** of the questions asked, there must be **more than two** possible user responses.
  // - Your code must make use of **string user inputs**.
  // - Have the user have to **answer with each of the three main datatypes** (string) somewhere in their adventure
  switch (transportation.toLowerCase()) {
    case 's':
      startSubway()
      break
    case 't':
      startTaxi()
      break
    case 'u':
      startUber()
      break
    case '':
      alert(`Let's just take the subway.`)
      startSubway();
      break
    default:
      alert(`Hmm... ${transportation.toUpperCase()}ber is even more expensive than Uber now. Let's just take the subway.`)
      startSubway();
  }
}

const runGame = () => {
  // - Your adventure must offer the user an option to **replay** at the end.
  let keepPlaying = true
  while (keepPlaying) {
    runAdventure()
    // - Have the user have to **answer with each of the three main datatypes** (boolean) somewhere in their adventure
    keepPlaying = confirm('Do you want to play again? Choose Cancel to exit the game.')
  }
  alert('Goodbye!')
}

runGame()