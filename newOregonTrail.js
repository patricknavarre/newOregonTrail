const readline = require('readline'); 

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout, 
})

const stageZero = function(userInput) {
    if (userInput.toLowerCase() === 'nyc') {
    console.log(`Your train arrives at Penn Station in Manhattan. Should you walk or take a cab?
    \n  \nPlease input: "walk" or "cab" `);
    interface.question('Type your answer below:\n', nycStageOne)
    } else if(userInput.toLowerCase() === 'la') {
    console.log('You arrive at LAX. Should you take an electric "scooter" or catch a "cab"? \n ');
    interface.question('Type your answer below:\n', laStageOne)
        // interface.close();
    } else if (userInput === 'quit' || userInput === 'q') {
        console.log('Giving up already? SEEYA!!');
        interface.close();
    } else {
        console.log('Please input "nyc" or "la"')
        interface.question('Try again:\n', stageZero)
    }
    // interface.close()
}

const nycStageOne = function(secondStage) {
    if (secondStage === 'walk') {
    console.log(`It's a great day for a walk! \n `);
    console.log('You wanna go "uptown" or "downtown"?')
    interface.question('Type your answer below\n',nycStageTwoWalk)
    } else if (secondStage === 'cab') {
    console.log('Not the best way to enjoy the city, but up to you. \nYou wanna go "uptown" or "downtown"?');
    interface.question('Type your answer below:\n', nycStageTwoCab)
    }
    
}
    
const laStageOne = function(laSecondStage){
    if (laSecondStage === 'scooter') {
        console.log('I hope you have good insurance...and a helmet!');
        console.log('You wanna head to the "beach" or "downtown"?')
        interface.question('Type your answer below:\n', laStageTwoScooter)
    } else if (laSecondStage === 'cab') {
        console.log(`That's definitely the safer option \n You wanna go to the "beach" or "downtown"?`)
        interface.question('Type your answer below:\n', laStageTwoCab)
        }
}

const laStageTwoScooter = function(laStageThree) {
    if (laStageThree === 'beach') {
    console.log('You manage to arrive at Venice Beach unscathed. \nDo you want head "north" up to Santa Monica, or "south" towards Manhattan Beach?')
    interface.question('Type your answer below:\n', laStageThreeScooter)
    } else if(laStageThree === 'downtown') {
    console.log('You manage to arrive Downtown unscathed.  \n Do you want to head "north" or "south"?')
    interface.question('Type your answer below:\n', laStageThreeScooter)
    }
}


const laStageThreeScooter = function(eitherWay) {
    if (eitherWay === 'north') {
    console.log('You managed to get clipped by a guy driving a Tesla. \nYou DIED!')
    } else if(eitherWay === 'south') {
    console.log('You managed to get clipped by a guy driving a Tesla. \n You DIED!')
    }
    interface.close()
    }



const laStageTwoCab = function(laStageThreeCab) { 
    if (laStageThreeCab === 'beach') {
    console.log('The cab drops you off in Venice Beach. It is 2am.  Should you go to the "hotel" \nand call it a night. \nOr "walk" around a bit?')
    interface.question('Type your answer below:\n', laFinalStage)
    } else if(laStageThreeCab === 'downtown') {
    console.log('The cab drops you off in Downtown LA.  Should you go to the "hotel" \n or "walk" around a bit?')
    interface.question('Type your answer below:\n', laFinalStage)
    }

}
const laFinalStage = function(correctAnswer) {
    if (correctAnswer === 'hotel') {
    console.log('You have made a wise decision!  You get a great night sleep\n and hit the beach bright and early!  You WIN!!')
    interface.close()
    } else if (correctAnswer === 'walk') {
    console.log(`Walking around at night is not always the best decision.  You get stabbed in an alley and DIE!`)
    interface.close()
    }
}

const nycStageTwoWalk = function(direction) {
    if (direction === 'uptown') {
    console.log(`You walk uptown about 25 blocks and are now \nin what looks like an outdoor shopping mall. \nThis is Times Square baby!  Why is there an M&M store here?  \nAnyways..  You are getting hungry.  You see a giant shining neon that says “Bubba Gump Shrimp”.  \nDo you let the majestic shining lights lead you in? Or do you keep walking? \nYou wanna "walk" or get some "scrimp"?`)
    interface.question('Type your answer below:\n', nycStageThreeUptown)
    } else if (direction === 'downtown') {
    console.log('You walk downtown about 25 blocks and end up \nat Jazz Club names ‘Smalls’ do you go in and have a “drink”?  \nOr continue to “walk” to your destination?')
    interface.question('Type your answer below:\n', nycStageThreeDowntown)
    }
}

const nycStageTwoCab = function(direction) {
    if (direction === 'uptown') {
    console.log('The cab takes you to the south end of Central Park.  \n Do you continue to "walk" or take a "rickshaw" ride that a man has offered you for FREE!')
    } else if(direction === 'downtown') {
    console.log('In the cab you spot a jazz club named "Smalls". \n Do you go in and have a "drink"?\n Or do you stay in the "cab"?')
    interface.question('Type your answer below:\n',nycStageThreeCab)
    }
}

const nycStageThreeCab = function(smallsAnswer) {
    if(smallsAnswer === 'drink') {
    console.log('You have made a wise decision!  You listen to jazz until 4AM and manage to get a little lucky too!  Congrats you WIN!')
    interface.close()
    } else if(smallsAnswer === 'cab') {
    console.log('You have made a TERRIBLE decision!  Turns out the cab driver is an awful driver, \nand drives you into a pole and you DIE! ')
    interface.close()
    }
}
const nycStageThreeDowntown = function(smallsAnswer) {
    if (smallsAnswer === 'drink') {
        console.log('You have made a wise decision!  You listen to jazz until 4AM and manage to get a little lucky too!  Congrats you WIN!')
        interface.close()
    } else if (smallsAnswer === 'walk') {
        console.log('You have made a TERRIBLE decision! You get lost in the cold weather and manage to catch hypothermia and DIE!')
        interface.close()
    }
}

const nycStageThreeUptown = function(scrimpAnswer) {
    if (scrimpAnswer === 'scrimp') {
        console.log('You have made a terrible decision.  \n You got a rare stomach bug and have DIED!')
        interface.close()
    } else if (scrimpAnswer === 'walk') {
        console.log(`Smart move.\nYou walk another 20 or so blocks and end up \nat the south end of Central Park. You have made it to your final destination!`)
        interface.close()
    }

}

console.log('Which City would you like to start in? "nyc" or "la"?');
console.log('type "quit" or "q" to quit');

interface.question('Type your answer below:\n', stageZero)
