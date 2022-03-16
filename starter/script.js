const drinkChoice = function() {
    drink = prompt("Roadtrip! Do we want to get coffee? or maybe some tea? oooo or maybe we want a redbull? ")
    alert(`${drink} great choice!`)
    switch (drink) {
        case 'coffee':
            alert('I like coffee, lets head to the Coffee Shop.')
            coffeeShop()
            break
        case 'tea':
            alert('I like tea, lets head to the store for some tea bags.')
            teaShop()
            break
        case 'redbull':
            alert('mmm... Redbull. Lets head to the gas station')
            redbullShop()
            break
        default:
            alert('idk what that is, can you please follow directions before I overheat?')
            drinkChoice()
    }
}

const coffeeShop = function (){
    coffeeCups = prompt('How many cups of coffee would you like (1-5)?')
    while (coffeeCups >= 2 && coffeeCups <= 5){
        alert("you dont need that many")
        coffeeShop()
    }if (coffeeCups == 1){
        alert("One sounds good!")
    }else{
        alert("I said 1-5 fool")
        coffeeShop()
    }
    paymentType()
}

const teaShop = function (){
    teaCups = prompt('How many tea bags should we put in your cup (1-5)?')
    while (teaCups >= 2 && teaCups <= 5){
        alert("you dont need that many")
        teaShop()
    }if (teaCups == 1){
        alert("tea")
    }else{
        alert("I said 1-5 fool")
        teaShop()
    }
    paymentType()
}

const redbullShop = function (){
    redbulls = prompt('How many cases of redbull would you like (1-5)?')
    while (redbulls >= 4 && redbulls <= 5){
        alert("you dont need that many")
        redbullShop()
    }if (redbulls == 1 || redbulls ==2 || redbulls == 3){
        alert(`${redbulls} cases of Redbull should be enough I guess.`)
    }else{
        alert("Can you just give a real answer? *fans run faster* ")
        redbullShop()
    }
    paymentType()
}

const chug = function() {
    alert(`Well ${name}, seems like youre all set to get to work. Enjoy your ${drink}!`)
    more = confirm("...You're still here... did you want something else to drink? (ok) to reboot or (cancel) leave me alone")
    if (more === true){
        playGame()
    }else{
        alert("good, cool, great. Bye.")
    }
}

const paymentType = function() {
    paymentMethod = prompt("Do you want to pay with (c) cash, (cc) card or (5) 5 finger discount?")
    switch (paymentMethod) {
        case 'c':
            alert('Who even carries cash?')
            break
        case 'cc':
            alert('DECLINED: try again.')
            paymentType()
            break
        case '5':
            alert('OKAY RUNNNN')
            alert('Phew, you made it!')
            break
        default:
            alert('Are you going to make me pick for you?!')  
            paymentType()
    }
    chug()
}


const playGame = function () {
    
     name = prompt("Uh hiya friend, what is your name? ")

    let ready = confirm(`Hello ${name}, Welcome to ComputerLand. What?... You're feeling tired... 
Okay well, I don't have feelings so I can't relate... 
but I guess I can help you out. Lets get you caffeinated so we can get some work done. Are you ready?`)
    
    if (ready === true) {
        
        const drive = prompt(`Okay ${name}, but are you too tired to drive? (y or n)`)
        if (drive == 'y') {
            alert("TOOO BADDD. I'm not a Tesla, so you have to drive")
            drinkChoice()
        } else if (drive == 'n') {
            alert("Great, then you probably don't even need caffeine *eye roll*, lets go human.")
            drinkChoice()
            alert("hii")
        } else {
            alert("You no follow instructions, lets try again")
            playGame()
        }
    }
    storeChoice()
}

playGame()
