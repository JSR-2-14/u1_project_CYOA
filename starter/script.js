const playGame = () => {
    console.log("Function is working!")
    let name = prompt("What is your name?")
    alert(`Hello ${name}, you've been promoted to a Senior Account Executive at Sterling Cooper Advertising Agency. Time to get to work...`)
    let answerDayOne = confirm("Are you ready for your first day of work?")
    console.log("User's Answer:", answerDayOne)
    if (answerDayOne === true) {
        let pitch = parseInt(prompt("Which account would you like to pitch for? (1)Heineken Beer (2)Lucky Strike Cigarettes (3)Chevrolet Cars (4)Kodak Cameras", "1, 2, 3, 4"))
        alert("Now you've done it....Good Luck!")
        if (pitch === 1) {
            // Heineken
            let pitchHeineken = parseInt(prompt("Great choice, a very large account but they time is of the essence with everything they do. Before you know it an RFP comes in for a March Madness themed campaign wanting a meeting first thing in the morning. Do you (1)take the 9AM meeting or (2)ask for an extension?", "1, 2"))
                if (pitchHeineken === 1) {
                    let pitchHeinekenMorning = parseInt(prompt("You have committed to the 9AM meeting so its time to prep the plan and deck. Do you (1)burn the midnight oil over pizza and beer to finish or (2)get up at the crack of dawn to a venti vanilla latte with an extra shot of espresso to get the plan configured?", "1, 2"))
                        if (pitchHeinekenMorning === 1) {
                            alert(`${name}, well done! You finished by midnight with enough time to head home for a good nights rest before your 9AM pitch where you win the business.`)
                            let playAgain = confirm("Do you want to pitch again?")
                            if (playAgain === true) {
                                playGame()
                            }
                            else {
                                alert("Sterling Cooper does not want you anyway!")
                            }
                        }
                    else if (pitchHeinekenMorning === 2) {
                        alert(`${name}, bad choice. You over slept missing your alarm and are not ready for the pitch losing the business and consing the company a million dollars.`)
                        playAgain();          
                     }
                }
                else if (pitchHeineken === 2) {
                    let pitchHeinekenChoice = prompt("Interesting choice, while deadlines can be challenging to win the business we try our best to give the client what they want in their time frame. Do you think you picked the right choice? Yes or No", "Yes, No")
                    if (pitchHeinekenChoice === "Yes") {
                        alert("I'm glad this is an environment where you feel free to fail. -Don")
                        playAgain()
                    }
                    else if (pitchHeinekenChoice === "No"){
                        alert("I don't believe in fate. You make your own opportunities. -Don")
                        playAgain()
                    }
                }
        }      
        else if (pitch === 2) {
            // Lucky Strike
            alert("Congrats, you pitch successfully winning the 500K account!")
            function luckyMoney () {
                let number = 10000
                let numTurns = 0
                let hasWon = false
                let userNumber = prompt("You are ready for your 2% commission, how much will be in your next check if you wone Lucky Strike for 500K?")

                while (userNumber != number) {
                    numTurns++
                    if (userNumber == 10000) {
                        alert("Yep you are correct, don't spend it all at once!")
                        hasWon = true
                        let playAgain = confirm("Do you want to pitch again?")
                        if (playAgain === true) {
                            playGame()
                        }
                        else {
                            alert("Sterling Cooper does not want you anyway!")
                        }

                    }
                    else if (userNumber < number) {
                        alert("Try your math again you don't deserve it.")
                        luckyMoney()
                    }
                    else if (userNumber > number) {
                        alert("The sale wasn't that big now go pitch more to make more!")
                        luckyMoney()
                    }
                    else {
                        alert("That's not a number...")
                        luckyMoney()
                    }
                }
            }
            luckyMoney()
        }
        else if (pitch === 3) {
            // Chevy
            let pitchChevy = prompt("Being put on hold in 2021 due to the chip shortage you are anxious to get a buy in 2022. Your Chevy contact emails with no details just asking which line of cars you would like to pitch for in 2022? (A) Hybrids (B) Diesel (C) Performance", "A, B, C");
            switch (pitchChevy) {   
                case "A":
                        alert("A great choice hybrid is the way of the future they email back saying you are welcome to pitch for 2 million of their budget.");
                        let playAgain = confirm("Do you want to pitch again?")
                        if (playAgain === true) {
                            playGame()
                        }
                        else {
                            alert("Sterling Cooper does not want you anyway!")
                        }
                        break;
                case "B":
                        alert("They email back letting you know that they do not sell diesel vehicles and you should do more research");
                        playAgain();
                        break;
                case "C":
                        alert("While it's not the wave of the future there are a few bucks for our performance line we will put you on the calendar next month.");
                        playAgain();
                        break;
            }
        } 
        else if (pitch === 4) {
            // Kodak
            let pitchKodak = prompt("Kodak cameras calls asking you to pitch their new slide projector, what's your best idea? (A) The Tire (B) The Carousel (C) The Wheel")
            if (pitchKodak === "A") {
                alert("Really the tire, try again. You'll tell them the next thing will be better because it always is. -Don Try again...")
                pitchKodak()
            }
            else if (pitchKodak === "B") {
                alert("Its not called The Wheel. Its called The Carousel. You give the pitch of your career and the client loves it, time to deliver. What's the strategy: (A) Upper Funnel or (B) Lower Funnel", "A, B, C")
                let pitchKodakWheel = prompt ("What's the strategy: Upper Funnel or Lower Funnel?")
                if (pitchKodakWheel === "Upper Funnel") {
                    alert("Correct we need to get them aware and interested before they become loyal.")
                    let playAgain = confirm("Do you want to pitch again?")
                    if (playAgain === true) {
                        playGame()
                    }
                    else {
                        alert("Sterling Cooper does not want you anyway!")
                    }                  }
                else if (pitchKodakWheel === "Lower Funnel") {
                    alert("Nope how can they be loyal when they aren't aware.")
                    playAgain()             }
            }
            else if (pitchKodak === "C") {
                alert("You're going to use the name we gave you, that's not why we want to hire you. Try again...")
                pitchKodak()
             }
        }
    } 
}
playGame()
