// Your code below...

// Wrap your whole game in a function, then call your function at the end...
function start() {
let intro = prompt('Welcome to the survivor game. You are the sole survivor of a plane crash. The wreckage is on a beach surrounded by a cliff side. Select the letter in parentheses to (c)ontinue.')

    switch (intro) {
        case 'c' :
            game()
            break
        default :
            prompt('That was a invalid input. Please try again. Press "c" to continue.')
            start()
            break


    }
}

function game() {
    
    let start = prompt('You wake on the beach. Surrounded by a steep cliffside. Here are your options. Climb the (m)ountian, (w)alk the beach or or (s)wim out to sea.')
    switch (start) {
        case 'm': 
            let climb = prompt('You try to climb the mountian but you have no equipment. Your first option is to (l)ook through the wreckage to find anything useful to help you climb the cliff. Your second option is to brave the steep cliffside and (f)ree climb the cliff. Your third option is to (c)amp out for the night.')

            switch (climb) {
                case 'l':
                    let gal = prompt("Looking through the wreckage you find some important supplies. You find 5 gallons of water, 5 Meals Ready to Eat (MRE) and a 50-foot chord from a parachhute. With these supplies, you can now climb the mountian safely so you decide to give it a try. However, you can only bring so many gallons of water and MRE's. You can bring up to 3 gallons of water. How many gallons would you like to bring? (1)(2)(3)")

                    let mre = prompt('Next, how many MRE packets would you like to bring? You can bring all of your packets if you wish. How many packets would you like to bring? (1)(2)(3)(4)(5)')

                        if(gal == 3){
                            alert('You try climbing the mountian but the weight of the water is too much. You slip and because the water is too heavy, the rope snaps and you fall and die.') //Ending 1
                            gameOver()
                            break

                        } else if(gal >= 2 && mre > 3){
                            alert('You try climbing the mountian but you are carrying too much. You slip and fall. The rope snaps on the way down and you die.') //Ending 2
                            gameOver()
                            break

                        } else {
                            alert('You try climbing the mountian and you make it! You venture through the forest for many days. Running on your last MRE and no water you stumble upon a small village of people who welcome you in and help you get rescued. Congratulations!') //Ending 3
                            win()
                            break
                        }

                case 'f':
                    alert('Sadly after getting quite high on the cliff, you grab a rock but it becomes loose and you fall to your death.')
                    gameOver()
                    break

                case 'c':
                    prompt('You decide to campout for the night. You search the plane for equipment and supplies to help you build a shelter. Looking through the wreckage you find some important supplies. You find 5 gallons of water, 5 Meals Ready to Eat (MRE) and a 50 foot chord from a parachute. You can now climb the mountian. As it is getting late in the day you decide to build a fire and go to sleep.')
                    let eat = prompt("You wake up early in the morning and are quite hungry. Would you like to eat one of your MRE's. (y/n) ")

                    switch(eat) {
                        case 'y': 
                            alert("You eat one of your MREs and now only have four left. You decide to add more wood to your fire and look for more supplies. While adding wood to your fire you are seen by a passing Coast Guard boat and are saved. Congratulations! ") //Ending 4
                            win()
                            break
                        default :
                            alert("You are still very hungry. You decide to add more wood to your fire and look for more supplies. While adding wood to your fire you are seen by a passing Coast Guard boat and are saved. Congratulations!") //Same as Ending 4
                            win()
                            break
                    }
                break
                default :
                    prompt('That was a invalid input. Please try again.')
                    break
            }

        break
        case 'w': 
        let walk = prompt('You decide to walk along the beach. Examining the beachside, you see that there is a large forest to your left and a steep rocky hillside to the right. Do you go (r)ight or (l)eft?')
            switch(walk) {
                case 'r':
                    let right = prompt('You walk along the beach side for sometime until you reach the rocky hillside. You start to explore the rocks and find a small cave suitable for a makeshift shelter. Would you like to make the cave your (h)home or (l)ook elsewhere? ')
                        switch(right){
                            case 'h':
                                alert('You decide to make the cave your home. After months sculpting the cave to your every need you can finally become comfortable in your new home. After countless months have passed, you hear a helicoptor in the distance. You throw anything you can find on your fire to try and signal the helicoptor. After thinking you have failed the helicoptor sees your smoke signals and successfully rescues you. Congratulations!') //Ending 5
                                win()
                                break
                            case 'l':
                                alert('While looking for another place to shelter, you slip on a mossy rock high on the hill side and fall to your death.') //Ending 6
                                gameOver()
                                break
                        }
                break        
                case 'l':
                    let left = prompt('You walk along the beach until you arrive at the start of the forest. The forest is dark and uninviting. Do you want to (e)nter the forest or (r)eturn to the crash?')
                        switch(left){
                            case 'e':
                                let fight = prompt('You enter the forest and continue walking until you find a small grass opening. In the middle of the opening is a large brown bear. Do you stay and (f)ight the bear or do you turn and (r)un from the bear?')
                                    switch(fight){
                                        case 'f':
                                            alert('You approach the bear making your self as big as possible. The bear sizes up to you then returns to its feet turning walking away from you. You follow the bear. The bear leads you on a seemingly never ending journey. However, after hours of hiking through the thick forest you stumble upon a large cave. The bear enters, as do you. You spend months living with this bear and learn how to survive on your own. After spending about 6 months on the island you are seen by a passing boat and saved') //Ending 7
                                            win()
                                            break
                                        case 'r':
                                            alert('You start running from the bear, but before you can leave the bears eye sight it sees you and starts to chase after you. Just before you make it to the beach the bear catches up with you and eats you.') //Ending 8
                                            gameOver()
                                            break
                                    }
                            break
                            case 'r':
                                alert('As you are returning to the crash, helicoptors and boats appear from nowhere. They all land on the beach and approach you. They explain that before the crash the pilot got off a mayday call which led the Coast Guard team to your location') //Ending 9
                                win()
                                break
                        }
            }
        break
        case 's':
        let swim = prompt('You decide to venture out to sea. You have two options. The (f)irst option is to build a raft. The (s)econd option is to grab life jackets and a survival suit and start your swim into the deep blue ocean.')
            switch(swim){
                case 'f':
                    let raft = prompt('You decide to build a raft. Do you want to build it out of (d)riftwood and bamboo found on the beach? Or do you want to build it from (s)craps found around the plane or (l)ook for other materials to build the raft?')
                    switch(raft){
                        case 'd':
                            alert('You decide to build a raft out of the driftwood. You succesfully acquire all of the materials and set off on your adventure. Suddenly a strong wind picks up. The driftwood is not strong enough to hold against the currents and the raft is ripped apart and you drown.') //Ending 10
                            gameOver()
                            break

                        case 's':
                            alert('You decide to build a raft out of the scraps you find on the beach. You successfully aquire all of the materials to build your raft and set off on your adventure with your new craft. After days on the ocean, you run into a fishing boat that saves you. Congratulation!') //Ending 11
                            win()
                            break
                        case 'l':
                            alert('Looking for other materials you find a flare gun and decide to use it since it is near dusk. You fire the flare in the air and nothing happens. Hours pass and the night comes. Suddenly from the distance you hear a helicoptor.You throw wood on the fire and the helicoptor sees you and successfully rescues you. Congratulations!') //Ending 12
                            win()
                            break
                    }
                break
                case 's':
                    alert('You decide to freeswim into the ocean. You grab a survival suit and lifejackets to aid you on your journey. After multiple hours out on the sea you begin to become extremely tired and cold. You fall asleep and wake in the moring to a bright and hot day. After swiming for a couple of hours multiple sharks start to swarm you. You get bitten and die.') //Ending 13
                    gameOver() 
                    break

            }

        break
    }

}

function gameOver() {
    let redo = confirm(`GAME OVER!!!! \n\nWould you like to play again? \n\nPress Ok to play again.\nPress Cancel to end the game.`)

    if (redo === true) {
        start()
    }else if(redo === false){
        alert('Thank you for playing')
    }else {

     prompt('You entered an invalid input. Please enter a valid input.')
     gameOver()
    }
}

function win() {
    let redo = confirm('CONGRAGULATIONS YOU HAVE BEEN SAVED \n\n Would you like to play again? \n\nPress Ok to play again.\nPress Cancel to end the game.')

    if (redo === true) {
        start()
    }else if(redo === false){
        alert('Thank you for playing')
        
    }else {

     prompt('You entered an invalid input. Please enter a valid input.')
     win()
    }
}

start()