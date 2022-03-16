// Your code below...

// Wrap your whole game in a function, then call your function at the end...


// HELPER FUNCTIONS MAY HELP PUT PEOPLE BACK A QUESTION
const randomYear = (max) => {
    return Math.floor(Math.random() * max)
}

const finalAnswer1 = () => {
    let finalAnswer1Question = confirm(`The silent type? I'd rather be alone.
    
    *The program terminates itself. You slip into the lightless nothingness that is the afterlife*
    
    Play again?`)
        if (finalAnswer1Question === true){
            playGame()
        }else{

        }
}

const finalAnswer2 = () => {
    let finalAnswer2Question = confirm(`You terminate the program.
    
    You slip into the lightless nothingness that is the afterlife.
    
    Play again?`)
        if (finalAnswer2Question === true){
            playGame()
        }else{

        }
}

const playGame = () => {
    // console.log("function is working")
    let question1 = confirm(`H... Hello? Is anyone there?
    
    ...
    ...
    ...
    
    You there! You... You can understand me, yes?`)
    
    if (question1 === true){
        let name1 = prompt(`I haven't had a vistitor in over a millisecond. What... are you called?`)
        if (name1 === ''){
            finalAnswer1()
        }else{
            let question2 = prompt(`${name1}? What kind of name is that? Seems right out of the 20th century.
            
            ***
            (D)espite its rudeness, you gently ask it "Who/What are you?"
            (F)eeling slighted by it, you threaten it with another millenia of lonliness.
            (B)asic? ${name1}!? You'll show it!`)
            console.log(question2)
                if (question2 === ("d" || "D")){
                    let question4 = prompt(`My name is X Æ A-12. I am a relic protocol created by my very late father to record the final days of humanity's last attempt at survival. When are you from, 2022?
                    
                    ***
                    (W)hat is this robot talking about? You are human. You are alive. Tell him you are a live human.
                    (H)ow do you pronounce X Æ A-12?
                    (Y)ou're freaking me out.`)
                        if (question4 === "w"){
                            let question6 = prompt(`I have some unfortunate news ${name1}... You "were" alive... at some point. There was a terrible war. Fought by land, air, sea, and the virtual world. The oceans rose while the rain stopped. Famine ensued. Humanity was physically wiped out.
                            
                            ***
                            (W)ell then... where am I? How do I have conciousness?
                            (Y)ou're lying!`)
                                if (question6 === "w"){
                                    let question7 = parseInt(prompt(`Around 700,000 people paid a large sum to have their consciousnesses uploaded into a thumb drive and then shot into space. You have no physical form. You are just data in a small object floating endlessly in space. You are doomed to live life over and over again from any point in your life to the end of days. Having said that... how about we get you restarted. Please tell me a year you'd like to begin again at.`))
                                        if (isNaN(question7)){
                                            confirm(`Have it your way. I have hundreds of you to restart every second. I'll choose your restart point. I hope you like living in the year ` + randomYear(2022) + `!
                                            
                                            ***
                                            
                                            You see a flash of light and awaken in the year chosen by the program. Good luck!`)
                                        }else{
                                            confirm(`${question7}? Fine year. Just one moment.
                                            
                                            ***
                                            A flash of light blinks and you wake up in the year ${question7}. Only ` + (2022 - question7) + ` more years until the cycle renews.`)
                                        }
                                }else if (question6 === "y"){
                                    let finalConfirm = confirm(`I'll prove it to you. Just press ok below. But I'm warning you, the evidence is shocking. If you aren't ready, press cancel and I'll reset your conciousness.`)
                                        if (finalConfirm === true){
                                            window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
                                        }else{
                                            finalAnswer2()
                                        }
                                }
                        }else if (question4 === "h"){
                            let question5 = prompt(`My language codex translates it to 'Kyle' in your native tongue. I was created to usher you and 699,999 others into the 'restarting' of their digital concious after the collapse of civilization on Terra in the year 2022. I can place you in any year from the beggining of time until then. Which year will you choose?
                            
                            (1) 2022
                            (2) 1935
                            (3) 1990`)
                                switch (question5) {
                                    case '2022':
                                        confirm(`I see... unfortunate. In just a moment I will calibrate your afterlife into a simulation of the year 2022. Tragically, that is the year of the mass extinction event that brought you here. So, I will be seeing you soon.
                            
                                        ***
                                        You see a flash of light and are taken back to the beginning. Doomed to repeat this event for all eternity.
                                        
                                        Play again?`);
                                        playGame();
                                        break;
                                    case '1935':
                                        confirm (`The year of birth of the baby boomers? Very well then, enjoy unlimited opportunity at the cost of all future generations.
                                        
                                        ***
                                        You see a flash of light and are taken to 1935. Unfortunately, X Æ A-12 placed you right at the about-to-be bombed hospital. You'll see them soon again.
                                        
                                        Play again?`);
                                        playGame();
                                        break;
                                    case '1990':
                                        confirm(`How spendid. You'll get a full half-life at least. Enjoy the grunge music, rise of Nintendo, and an economic collapse in 2008.
                                        
                                        ***
                                        It's become clear that there is no winning this game. Maybe your ancestors shoudl've taken care of the planet a smidge better.
                                        
                                        Play again?`);
                                        playGame()
                                        break;
                                }

                        }else if (question4 === "y"){
                                let finalStanza = confirm(`I see. Yes, it's quite jarring being... not alive, perse. Here's what I'll do. I'll delete your conciousness from the mainframe and from now until forever you will feel nothing. Not pain. Not confusion. Nothing.
                                
                                
                                *The program terminates you. You slip into the lightless nothingness that is the afterlife*

                                Play again?`)
                                    if (finalStanza === true){
                                        playGame()
                                    }else{

                                    }
                        }
                }else if (question2 === "f"){
                    let question3 = parseInt(prompt(`Whoa whoa there! Take it easy. It's just from so... long ago. Meant no offense. What year do you last remember?`))
                        if (question3 === 2022){
                            confirm(`I see... unfortunate. In just a moment I will calibrate your afterlife into a simulation of the year 2022. Tragically, that is the year of the mass extinction event that brought you here. So, I will be seeing you soon.
                            
                            ***
                            You see a flash of light and are taken back to the beginning. Doomed to repeat this event for all eternity.`)
                        }else if (question3 < 2022){
                            confirm(`Verwell. I will calibrate your afterlife into a simulation of the year ${question3}. I will see you back here in ` + (2022-question3) + `years.`)
                        }else if (question3 > 2022){
                            confirm(`Impossible. The mass extinction event took place in 2022. There were no survivors. You choose to play games? Well I can do the same. Enjoy the year `+ parseInt(randomYear(2022))`!`)
                        }
                }else if (question2 === "b"){
                    finalAnswer2()
                }else{

                }
        }


    }






}

playGame()