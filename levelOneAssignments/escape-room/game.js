const readline = require("readline-sync");



//While the user is alive run the game 

//the game - condtional - 3 options - 1 option is retireve key - 2 option is if no key die - third option die no matter what
//array for items gathered - if selecting option 1 they retreive a key
//
//if playerOneAliec false- game over




let playerOne = readline.question("What is your name? ");
console.log(`HOLY GEE WHOLLIGERRS! ${playerOne} YOU HAVE FALLEN INTO A TRAP WHILE SEARCHING RUINIS IN THE JUNGLE... YOU ONLY HAVE A FEW OPTIONS TO GET OUT SOOOO CHOOSE WISELY!`)

let playerOneItems = []

let playerHasKey = false

let playerOneAlive = true
let gameInProgress = true
let allowEscape = false

while (gameInProgress && playerOneAlive) {

    var options = ["Search the dark hallway", "Look under the gold chest!", "Try the door"];
    var index = readline.keyInSelect(options, "What do you choose?");
    switch (index) {
        case 0:
            if (playerHasKey == false) {
                playerHasKey = true
                console.log(`Whoa! You found a key! What should you try now?`)
            } else {
                console.log(`You have already checked this place out. Take a look around more`)
            }

            break;
        case 1:

            let hasOpendDoorWithLever = false
            let count = 4

            if (allowEscape == false) {
                console.log(" Oh no! You fell through a trap door in front of the gold chest! You have found yourself in a maze. You only have 2 chances to get the right answer")

                while (!allowEscape) {
                    const choices = ["Pull Lever One", "Pull Lever Two", "Pull Lever Three"]
                    var choice = readline.keyInSelect(choices, "What do you choose?")
                    switch (choice) {
                        case 0:
                            if (!hasOpendDoorWithLever && count >= 1) {
                                count--
                                console.log(`You have pulled the lever but nothing has happened.. CAFEFULL YOU ONLY HAVE ${count} tries left`)

                            } else if (count >= 1) {
                                console.log(`You have managed to escape the maze and made it back to the original chamber - which path will you take now?`)
                                allowEscape = true
                            } else if (count == 0) {
                                console.log("You have died after falling through a trapped door from trying to many times")
                                playerOneAlive = false
                                allowEscape = true
                            }
                            break;

                        case 1:
                            if (count >= 1) {
                                count--
                                console.log(`You have pulled the lever and another door has opened.. CAFEFULL YOU ONLY HAVE ${count} tries left..Now what?`)
                                hasOpendDoorWithLever = true


                            } else if (count == 0) {
                                console.log("You have died after falling through a trapped door from trying to many times")
                                playerOneAlive = false
                                allowEscape = true
                            }
                            break;

                        case 2:
                            count--
                            console.log(`You have pulled the lever but nothing has happened CAFEFULL YOU ONLY HAVE ${count} tries left`)

                            break;
                    }
                }
            } else {
                console.log("You hav already made it through the maze")
            }

            break;
        case 2:
            if (playerHasKey) {
                console.log("NICE!! You have found the trap door out of the dungeon!")
                gameInProgress = false
            } else if (!playerHasKey) {
                console.log("You have died after falling through a trapped door")
                playerOneAlive = false
            }

            break;
        case 3:
            playerOneAlive = false

        default:
            console.log("You cannot choose that option")
            break;
    }


    if (!gameInProgress) { console.log("Congratulations! " + playerOne + " You have beat the game!") } else if (playerOneAlive == false) {
        console.log("YOU LOST!")
    }


}