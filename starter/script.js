// Your code below...

// Wrap your whole game in a function, then call your function at the end...

// Age Question
const ageQuestion = (nameUser) => {
    let age = Number(prompt(`How old are you ${nameUser}?`))
        if (age <= 20) {
            tooYoung(age)
        } else if (age >= 21 && age < 30) {
            twenties(age)
        } else if (age >= 31 &&  age < 40) {
            thirties(age)
        } else if (age >= 41) {
            forties(age)
        } 
    }

//Under 21
const tooYoung = (tooYoungAge) => {
    let directions = prompt(`This is Old Peeps Skate Shop, you're ${tooYoungAge} years old, that's too young to be shopping here. I recommend you go to the mall or wherever you kids go to nowadays. You could also go to Lil Kids Skate Shop, would you like directions? (Y/N)\n(Y)es\n(N)o`)
      if (directions === "Y") {
        alert("Go out through the back of the shop, make a left on the light post, walk pass the Panda that's at the end of the second block. Turn 90 degrees right and then take 43 steps backwards. Turn 180 degrees and you'll see it right there.")
        const title = document.querySelector('button')
        title.innerText = "Play Again"
      } else if (directions === "N") {
        alert("Then get the hell out of my shop!")
        const title = document.querySelector('button')
        title.innerText = "Play Again"
      } else {
        alert("That's not an option, try again.")
        tooYoung()
      }
  }

//Ages 21 - 30
const twenties = (twentiesAge) => {
    let story20 = prompt(`You're on the younger side but we'll take anyone over 21, just like the army (jk). Seeing as you're just ${twentiesAge} and should still have some spring on you, we're going to set you up with a 8” board with some 139mm trucks and some 50mm wheels. Next thing is get you set up with a pro skater that's close to your age to get a few personal lessons. Who would you like to learn with? (A/C)\n(A)ndy Anderson\n(C)urren Caples`)
        if (story20 === "A") {
            const andyFunction = () => { let andyStory = prompt("Andy Anderson is a Canadian skateboarder sponsored by Powell Peralta. He is best known for his unique style, which blends classic tricks of the early decades of skateboarding with more modern techniques. He wears a helmet and rides a unique shape board, he's suggesting you get a helmet and change your board. Would you like to? (O/H)\n(O)f course, he's the teacher, probably knows best\n(H)ell no, I like to live wild and free and my new board is too sweet to exchange")
                if (andyStory === "O") {
                    alert("Andy is so excited you're taking his advice. The two of you go to Venice and skate all day long. Not only does he teach you how to ride, you also got to learn a trick or two. Best day ever!")
                    const title = document.querySelector('button')
                    title.innerText = "Play Again"
                } else if (andyStory === "H") {
                    let answer = confirm("Are you sure? Andy is the nicest person and best teacher ever. You don't want to be on his bad side\nOk, I'm sure\nCancel, I'll try his way")
                    if (answer === true) {
                        alert("Then go be wild and free, figure out how to skateboard on your own and be sure to stay away from Andy, he'll snake you at the skatepark.")
                        const title = document.querySelector('button')
                        title.innerText = "Play Again"
                    } else if (answer === false) {
                        alert("Andy is so excited you're taking his advice. The two of you go to Venice and skate all day long. Not only does he teach you how to ride, you also got to learn a trick or two. Best day ever!")
                        const title = document.querySelector('button')
                         title.innerText = "Play Again"
                    } else {
                        andyFunction()
                    }  
                } else {
                    alert("That's not an option. Try again")
                    andyFunction()
            } 
            }
            andyFunction()
        } else if (story20 === "C") {
            const currenFunction = () => { let currenStory = prompt("Curren Caples is an American skateboarder sponsored by Vans. Although originally from Ohio, Curren has lived most of his life in Southern California and apart from being a pro a skateboarder, he's an amazing surfer as well. Curren suggests you both go to a skatepark to start your lessons, where would you like to go? (H/O)\n(H)untington Beach Vans Skatepark\n(O)range County Vans Skatepark")
                if (currenStory === "H") {
                    alert("Curren takes you to the Vans skatepark in Huntington Beach. He teaches you the basics and the two of you have an awesome session at the park, you follow him, he follows you. You keep learning as you go and get more comfortable on the board with time.")
                    const title = document.querySelector('button')
                    title.innerText = "Play Again"
                } else if (currenStory === "O") {
                    alert("The Vans skatepark in Orange County is closed. What a bummer, here's an announcement from the park: 'The skatepark will remain closed through the end of the month while we monitor state public health directives. We will share updates as we look to reopen the skatepark. In the meantime, thank you for your patience as we navigate this situation.' Maybe try a different skatepark.")
                    currenFunction()
                } else {
                    alert("That's not an option. Try again")
                    currenFunction()
                } 
            }
            currenFunction()
        } else {
            alert("That's not an option, try again.")
            twenties()
}
}
//Ages 31 - 40
const thirties = (thirtiesAge) => {
    let story30 = prompt(`You're at the sweet spot of oldness, at ${thirtiesAge} your knees are starting to pop and your back is killing you but the spirit is high and you're ready to learn. Seeing as you're ${thirtiesAge}, we're going to set you up with a 8.25" board, with 149mm trucks and 52mm wheels. Next thing is get you set up with a pro skater that's close to your age to get a few personal lessons. Who would you like to learn with? (S/P)\n(S)hane O'Neill\n(P)aul Rodriguez`)
        if (story30 === "S") {
            alert("Shane O'Neill is an Australian skateboarder from Melbourne, Victoria. He's the owner of April Skateboards and is sponsored by Nike. He's actually in Australia at the moment, you should try learning with someone else.")
            thirties()
      } else if (story30 === "P") {
        const paulFunction = () => { let paulStory = prompt("Paul Rodriguez, also known by his nickname P-Rod, is an American skateboarder, actor, rapper, and recording artist. P-Rod has won a total of eight medals at the X Games. He's the owner of Primitive Skateboards and is sponsored by Nike. P-Rod wants to skate a legendary spot in LA today, but you have to meet him there. Where do you think he is? (W/B/J)\n(W)est LA Courthouse\n(B)elmont Middle School\n(J)kwon Plaza")
            if (paulStory === "W") {
                alert("You arrive to the West LA Courthouse and start rolling up to the spot when you see Guy Mariano and Eric Koston skating the ledges. You ask them about P-Rod and they tell you he just left the spot. He was there skating with them, got a few clips and left to the next spot. You should try another spot.")
                paulFunction(thirtiesAge)
            } else if (paulStory === "B") {
                alert(`You climb over the fence to get into Belmont Middle School and boy was that a struggle, the biggest fence you've ever seen in your life and seeing as you're ${thirtiesAge} years old it was no easy job. You see some skaters by the benches and you run into Spanish Mike (Primitive's filmer) and he tells you P-Rod never made it to Belmont, he was suppose to meet him there but instead sent his teammate Carlos Ribeiro, you should try another spot.`)
                paulFunction()
            } else if (paulStory === "J") {
                const stanceFunction = () => { let stance = prompt("It must be Sunday because that's the only time you can skate at Jkwon, you get there early and see only one skater working on the ledges, is P-Rod! He decided to start his Sunday early and made it to the spot before the crowd arrives. He's ready to teach you some moves, but first he wants to know your stance, which foot do you place forward? (L/R)\n(L)eft\n(R)ight")
                    if (stance === "L") {
                        alert("That means your stance is “regular”, while P-Rod rides with his other foot forward, it doesn't matter because he's so good riding both ways. He's going to ride switch just so that it's easier for you to follow along. He's such a good teacher that you learn several tricks, and throw down at Jkwon, he even films a couple of clips with you and you appear on his IG.")
                        const title = document.querySelector('button')
                        title.innerText = "Play Again"
                    } else if (stance === "R") {
                        alert("That means your stance is “goofy”, just like P-Rod. He's such a good teacher that you learn several tricks, and throw down at Jkwon, he even films a couple of clips with you and because you both ride the same way he's taking you under his wing.")
                        const title = document.querySelector('button')
                        title.innerText = "Play Again"
                    } else {
                        alert("Not an option try again")
                        stanceFunction()
                    }     
            }
            stanceFunction()
            } else {
                alert("Not an option try again")
                paulFunction()
            }
     } 
     paulFunction()
  } else {
    alert("Not an option try again")
    thirties()
  }
}

//Over 41
const forties = (fortiesAge) => {
    let story40 = prompt(`You might be pushing it a bit at ${fortiesAge} years old but hey you know what they say, you're only as young as you feel. Seeing as you're ${fortiesAge}, we're going to set you up with a 8.4" board, with 159mm trucks and 55mm wheels. Next thing is get you set up with a pro skater that's close to your age to get a few personal lessons. Who would you like to learn with? (E/A)\n(E)ric Koston\n(A)ndrew Reynolds`)
        if (story40 === "E") {
            const kostonFunction = (fortiesAge) => { let kostonStory = prompt('Eric Koston is an American professional skateboarder sponsored by Nike. Koston co-owns both Fourstar Clothing (with Guy Mariano) and the skatepark/website "The Berrics" (with Steve Berra). Koston is going to be skating at two spots today but can only meet you at one because he has to work and film some tricks at the other, where would you like to go? (T/W)\n(T)he Berrics\n(W)est LA Courthouse')
                if (kostonStory === "T") {
                    alert(`Koston invites you over to the most famous skatepark in the world, The Berrics. Since you're ${fortiesAge} and he's 45 first thing to do is stretch, after few stretch moves and warmup you're ready to get started with your lesson. Koston teaches all the moves and a few of the secrets ones too, you end up learning pressure flips and have the most amazing session with Koston. Later in the day Steve Berra arrives and joins the two of you for night session. Day couldn't get any better.`)
                    const title = document.querySelector('button')
                    title.innerText = "Play Again"
                } else if (kostonStory === "W") {
                    alert("You arrive to the West LA Courthouse and start rolling up to the spot when you see Eric Koston and Guy Mariano skating the ledges. Unfortunately Koston is not available to teach you how to skate because he's working on a Nike commercial for the launch of his new shoe. Try another spot.")
                    kostonFunction()
                } else {
                    alert("That's not an option. Try again")
                    kostonFunction()
                } 
            }
            kostonFunction()
        } else if (story40 === "A") {
            alert("Andrew Reynolds is an American professional skateboarder known for co-founding Baker Skateboards in 2000 with artist Jay Strickland. He is now Baker Skateboard's sole owner. Reynolds established Bakerboys Distribution with Erik Ellington and Jim Greco and is currently receiving a shipment and can't help you out today. Try learning with someone else.")
            forties()
        } else {
            alert("That's not an option, try again.")
            forties()
        }
}

//Game start here
const playGame = () => {
    let userName = prompt("What is your name?")
    let answer = confirm(`Welcome to Old Peeps Skate Shop ${userName}, the best shop in town and all around. I see you want to learn how to skateboard. You're going to need a skateboard (duh), so let's get you set up, ready to get started ${userName}?`)
    if (answer === true) {
        ageQuestion(userName)
    } else {
          alert("Then get the hell out of my shop!")
          playGame()
        
  }
}