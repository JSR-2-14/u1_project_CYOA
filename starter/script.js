
const playBTF = () =>{

    let name = prompt("What is your name")
    let year = parseInt(prompt(`Nice to meet you, ${name}. What year would you like to go to? (YYYY) `))

    if(year>=2015){
        let fan = prompt("I see you're a fan of Back to the Future 2. Would you rather deal with Biff, or Griff? (B/G)")
        if(fan==="B" || fan==="b"){
            let biff = prompt("Hmm, interesting. Biff is angry and has a cane. Do you stand and fight, or run away like a coward? (S/R)")
            if(biff==="S"){
                alert("Good choice. Biff is old and feeble at this point. You push him over and he falls in a pile of manure.")
            }else if(biff==="R"){
               alert("You get away, but your future son Marty Jr. is heckled for the rest of his days for his dad's cowardice.")
            }
        }else if(fan==="G" || fan==="g"){
            let griff=prompt("Griff is asking you if you are in, or out. What do you say? (I/O)")
            if(griff==="I" || griff==="i"){
                alert("Bad call. Griff and his cronies rob the Hill Valley bank and frame you for it. No more time travel for you.")
            }else if(griff==="O" || griff==="o"){
                alert("Good call. You deck Griff in the jaw and run away. He gives chase on his hoverboard and ends up in a pile of manure.")
            }

        }else{
            alert("Wrong choice!")
        }
    }
    else if(year>=1985 && year<=2014){
        let newName=prompt("Doc has already destroyed the Time Machine at this point. I guess you'll have to wait around until 2015. What name would you like to go by until then?")
        alert(`Welcome to the future, ${newName}.`)

    }
    else if(year>=1955 && year<1985){
        let mom = prompt("I see you're a fan of Back to the Future. Your future Mom has just asked you to the Enchantment Under the Sea dance. What do you do? (Y/N/S)")
        if(mom==="Y" || mom==="y"){
            alert("Creepy. I hope you have some backup plan in place to get out of this. Until then, you're stuck in 1955.")
            
        }else if(mom==="N" || mom==="n"){
            alert("Honorable. But this also means that your future Dad will never meet your Mom, and therefore you cannot exist.")

        }else if(mom==="S" || mom==="s"){
            alert("Interesting. You set up an elaborate plan for your future Dad to surprise your Mom by beating you up. Despite going horribly awry, the plan ultimately works. You may go back to your own time.")

        }else{
            alert("Wrong choice!")
        }
    }
    else if(year<1955){
        let timeMachine = prompt("I see you're a fan of Back to the Future 3. You've run out of gas and can't get back to your own time! How do you power the Time Machine? (H/M/T)")
        if(timeMachine==="H" || timeMachine==="h"){
            alert("Good idea, but no. The time machine needs to get to 88mph. 12 horsepower ain't gonna cut it.")

        }else if(timeMachine==="M" || timeMachine==="m"){
            alert("You'd be better off drinking the moonshine. Do not pass Go, do not collect $200. Stuck in 1855.")

        }else if(timeMachine==="T" || timeMachine==="t"){
            let clara = prompt("Good call! This plan seems to be working. But wait! Clara wants to go Back to the Future with you at the last moment. What do you do? (T/L)")
            if(clara==="T" || clara==="t"){
                alert("Interesting choice. Unfortunately the Doc can't grab Clara and get back to the car in time. He ends up staying in 1855 with her.")

            }else if(clara==="L" || clara==="l"){
                alert("Smart choice. Unfortunately the Doc was deeply in love with Clara, and when he gets back to 1985 he becomes very depressed.")

            }else{
                alert("Wrong choice!")
            }
        }else{
            alert("Wrong choice!")
        }

    }else{
        alert("Wrong choice!")
    }


}

playBTF()