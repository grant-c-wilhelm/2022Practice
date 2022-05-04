const readlineSync = require("readline-sync");


let playerOne = readlineSync.question('HELLO! And welcome to the game! Please, What is your name? ');


let playerAlive = true
let gameInProgress = true
let playerHp = 100
let numEnemeiesBeat = 0
let enemyNamesDefeated = []
let playerItems = []
let findableItems = ['Crystal Ball', 'Merlins Sword', "The Alchemists' Potion", "The Golden 'Gato'", ]

while (gameInProgress == true) {
    console.log(`-----------------------------------------------------`)
    console.log(`-----------------------------------------------------`)
    console.log(`-----------------------------------------------------`)
    console.log(`Alright ${playerOne} lets get going here.. There are some bad guys terrorizing the city! Lets get on the move to find them`)
    console.log(`-----------------------------------------------------`)
    console.log(`-----------------------------------------------------`)
    console.log(`-----------------------------------------------------`)
    let playerMovement = readlineSync.keyIn('Walk(w)? Player Items(p) (Quit press q)', { limit: 'wpq' });


    if (playerMovement == 'w') {
        console.log(`You are walking along the rooftops of the city looking for crime!`)
        console.log(`-----------------------------------------------------`)
        console.log(`-----------------------------------------------------`)
        console.log(`-----------------------------------------------------`)
            //random enemy generator to gen an enemy
        let enemy = enemyGenerator()


        //hitting w should randmonizewhether a emeny is encountered or a health crystal is found
        let randomChanceNumber = generateRandomPower()
        if (randomChanceNumber % 2 == 0) {
            let hpIncrease = generateRandomPower()
            playerHp = playerHp + hpIncrease

            console.log(`You have discovered a Health Point Gem ~ Your gem has increased your HP to ${playerHp}, an increase of ${hpIncrease}`)

        } else {
            let battleOngoing = true

            while (battleOngoing == true) {
                let isInFight = true

                let playerMovement = readlineSync.keyIn(`You have encountered the ${enemy.enemyName.toUpperCase()}. What will you do? Run(r), Attack(a) `, { limit: 'raq' });
                console.log(`-----------------------------------------------------`)
                console.log(`-----------------------------------------------------`)
                console.log(`-----------------------------------------------------`)

                if (playerMovement == "a" && isInFight == true) {

                    console.log(`You have attacked the ${enemy.enemyName.toUpperCase()}`)
                    console.log(`-----------------------------------------------------`)
                    console.log(`-----------------------------------------------------`)
                    console.log(`-----------------------------------------------------`)

                    let playerAttackPower = generateRandomPower()
                    let enemyAttackPower = generateRandomPower()
                        //***Add in 'playerAttackPower' and set = to geneertaterandompower -- add logic for subtracting health from player */

                    //implement random attack opwer generator
                    // use the random atack power generator to determine power attack
                    // should keep calling random attack power - subtact that random power from enemy HP then from user HP
                    enemy.hp = enemy.hp - playerAttackPower
                    playerHp = playerHp - enemyAttackPower
                    if (enemy.hp > 0 && playerHp > 0) {

                        console.log(`The ${enemy.enemyName.toUpperCase()} has dealt ${enemyAttackPower} damage points to you. It wasnt catastrophic... you still have ${playerHp} health points left before you will die. If you are afraid of losing all your HP you can always choose to "RUN" `)
                        console.log(`-----------------------------------------------------`)
                        console.log(`-----------------------------------------------------`)
                        console.log(`-----------------------------------------------------`)

                        console.log(`The ${enemy.enemyName.toUpperCase()} has withstood your blows. Your attack dealt ${playerAttackPower} damage points. ${enemy.enemyName.toUpperCase()} now has ${enemy.hp} health points remaining`)
                        console.log(`-----------------------------------------------------`)
                        console.log(`-----------------------------------------------------`)
                        console.log(`-----------------------------------------------------`)



                    } else if (enemy.hp < 0 && playerHp > 0) {
                        numEnemeiesBeat++
                        console.log(` After your heavy handed attacks, ${enemy.enemyName.toUpperCase()} no longer has any HP. CONGRATULATIONS you have won the battle. You have defeated ${numEnemeiesBeat} enemies. Your remaining HP is ${playerHp}`)
                        console.log(`-----------------------------------------------------`)
                        console.log(`-----------------------------------------------------`)
                        console.log(`-----------------------------------------------------`)
                        let randomNum = generateRandomNumToThreeIndexes()
                        console.log(randomNum)
                        enemyNamesDefeated.push(enemy.enemyName)
                        playerItems.push(findableItems[randomNum])
                        console.log(`so far in this game you have beaten ${enemyNamesDefeated}`)
                        console.log(`-----------------------------------------------------`)
                        console.log(`-----------------------------------------------------`)
                        console.log(`You have found an item that ${enemy.enemyName.toUpperCase()} dropped. It appears to be a ${findableItems[randomNum]}`)
                        isInFight = false
                        battleOngoing = false

                    } else if (playerHp < 0) {

                        console.log(`You have suffered a devastating blow of ${enemyAttackPower} hit points from ${enemy.enemyName.toUpperCase()}. Crime will win this day.. But we will return for JUSTICE!`)
                        console.log(`-----------------------------------------------------`)
                        console.log(`-----------------------------------------------------`)
                        console.log(`-----------------------------------------------------`)
                        console.log(`-----> GAME OVER <-----`)
                        isInFight = false
                        gameInProgress = false
                        battleOngoing = false
                    }




                } else if (playerMovement == 'r') {
                    let runAwayChanceNum = generateRandomPower()
                    playerHp = playerHp - runAwayChanceNum
                    if (playerHp < 0) {

                        console.log(`You have suffered a devastating blow while on the run. Crime will win this day.. But we will return for JUSTICE!`)
                        console.log(`-----------------------------------------------------`)
                        console.log(`-----------------------------------------------------`)
                        console.log(`-----------------------------------------------------`)
                        console.log(`-----> GAME OVER <-----`)
                        isInFight = false
                        gameInProgress = false
                        battleOngoing = false
                    } else if (runAwayChanceNum % 2 == 0) {
                        console.log(`You have fled the battle but you barely escaped alive ${enemy.enemyName.toUpperCase()} got in one last blow. You HP is now ${playerHp}`)
                        console.log(`-----------------------------------------------------`)
                        console.log(`-----------------------------------------------------`)
                        console.log(`-----------------------------------------------------`)
                        battleOngoing = false
                    } else {
                        console.log(`While attempting to escape the battle ${enemy.enemyName.toUpperCase()} wrangled you back in.. You must continue the fight!`)
                        console.log(`-----------------------------------------------------`)
                        console.log(`-----------------------------------------------------`)
                        console.log(`-----------------------------------------------------`)
                    }


                }
            }
        }



        //battle sequence should include options to attack or run away



    } else if (playerMovement == "p") {
        console.log(playerItems, playerHp, numEnemeiesBeat, enemyNamesDefeated)
        console.log(`-----------------------------------------------------`)
    } else {
        gameInProgress = false
    }


    // gameInProgress = false
}





function EnemyCharacteristics(enemyName, hp) {
    this.enemyName = enemyName
    this.hp = hp

}

function enemyGenerator() {
    let enemies = ["Riddler", "ScareCrow", "Bane", "Joker", "Rasaulgul", "SuperMan"]
    let randomNum = Math.floor(Math.random() * enemies.length)
    let hp = randomNum * 25

    let newEnemy = new EnemyCharacteristics(enemies[randomNum], hp)
        //console.log(newEnemy)

    return newEnemy
}

function generateRandomPower() {
    let attackPower = Math.floor(Math.random() * 85)
    return attackPower
}

function generateRandomNumToThreeIndexes() {
    let randomNum = Math.floor(Math.random() * 3)
    return randomNum

}