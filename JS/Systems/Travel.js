
var travel = {
    place: 'Nok'
};


function travelNok() {
    //Traveling to Nok.
    clear();
    //Says the destination, and says the distance, and executes travelEventNok every time you press the button.
    document.innerHTML = "You are now traveling to " + destination + ". There are " + distance + " miles left. Your traveling speed is " + travelingSpeed + " miles per day.";
    document.innerHTML = document.innerHTML + "<p><button onClick = \"travelEventNok()\">Time Passes</button></p>";
    if (distance <= 0) {
        //If your distance is equal to 0, it runs a function arrivePlace()
        clear();
        document.innerHTML = "You have arrived at " + destination + "!";
        document.innerHTML = document.innerHTML + "<p><button onClick = \"arrivePlace()\">Enter</button></p>";
    }
};

function travelEventNok() {
    //Creates random events for stuff to happen.
    var travelEvent = Math.floor(Math.random() * 100)
    if (travelEvent >= 50) {
        distance = distance - travelingSpeed;
        storylineStart();
        travelNok();
    } else {
        var travelEventBad = Math.floor(Math.random() * 5)
        switch (travelEventBad) {
            case 0:
                attackBandits();
                break;
            case 1:
                cave();
                break;
            case 2:
                magicCave();
                break;
            case 3:
                if (storyLineBegan === true) {
                    cave();
                } else {
                    storylineStart();
                }
                break;
            case 4:
                if (storyLineBegan === true) {
                    attackBandits();
                } else {
                    storylineStart();
                }
                break;
            default:
                travelNok();
                break;
        }
    }
};

function travelArgo() {
    //This is run when traveling from Nok.
    distance = distanceToArgo;
    destination = 'Argo';
    travel.place = 'Argo';
    travelNok();
};


function attackBandits() {
    //For a rundown of combat code, see line 25 of Story.js
    clear();
    //Bandit attack
    distance = distance - 10;
    window.alert("You are attacked by bandits!");
    attacked = true;
    enemyHealth = 10;
    enemyDefense = 8;
    enemyAttack = 12;
    while (attacked === true) {
        if (enemyHealth <= 0) {
            attacked = false;
            window.alert('You win! + 10 gold!');
            gold = gold + 10;
            if (health > maxHealth) {
                health = maxHealth;
            }
            travelNok();
        } else if (health <= 0) {
            attacked = false;
            window.alert("You are dead.");
            death();
        } else {
            criticalChance = Math.floor(Math.random() * 5);
            playerAttack = attack + criticalChance - enemyDefense;
            enemyHealth = enemyHealth - playerAttack;
            window.alert("You did " + playerAttack + " damage!");
            window.alert("The enemy health is now " + enemyHealth + "!");
            if (enemyHealth <= 0) {
                attacked = false;
                window.alert('You win! + 10 gold!');
                gold = gold + 10;
                if (health > maxHealth) {
                    health = maxHealth;
                }
                travelNok();
            } else {
                criticalChance = Math.floor(Math.random() * 5);
                enemyAttack2 = (enemyAttack + criticalChance) - defense;
                if (enemyAttack2 < 0) {
                    window.alert("The enemy attack did nothing...");
                } else {
                    health = health - enemyAttack2;
                    window.alert("The enemy did " + enemyAttack2 + "!");
                    window.alert("You are now at " + health + " hit points!");
                }
                if (health > maxHealth) {
                    health = maxHealth;
                    window.alert("You went over " + maxHealth + "! Resetting health...");
                }
            }
        }
    }
};

function cave() {
    //Presents you a choice to go inside a cave or not. If so, it executes a function, goCave()
    clear();
    distance = distance - travelingSpeed;
    document.innerHTML = "You have found a cave!";
    document.innerHTML = document.innerHTML + "<p>Do you wish to go inside?</p>";
    document.innerHTML = document.innerHTML + "<p><button onClick = \"goCave()\">Yes</button><button onClick = \"travelNok()\">No</button></p>";
};

function attackBanditsCave() {
    //For a full rundown of combat code, see line 25 of Story.js
    window.alert("Bandit Lair! Watch out!");
    clear();
    //Bandit attack
    attacked = true;
    enemyHealth = 10;
    enemyDefense = 8;
    enemyAttack = 12;
    while (attacked === true) {
        if (enemyHealth <= 0) {
            attacked = false;
            window.alert('You win! + 10 gold!');
            gold = gold + 10;
            if (health > maxHealth) {
                health = maxHealth;
            }
            travelNok();
        } else if (health <= 0) {
            attacked = false;
            health = 10;
            gold = 10;
            attack = 10;
            defense = 10;
            wizardMagic = false;
            window.alert("You are dead.");
            death();
        } else {
            criticalChance = Math.floor(Math.random() * 5);
            playerAttack = attack + criticalChance - enemyDefense;
            enemyHealth = enemyHealth - playerAttack;
            window.alert("You did " + playerAttack + " damage!");
            window.alert("The enemy health is now " + enemyHealth + "!");
            if (enemyHealth <= 0) {
                attacked = false;
                window.alert('You win! + 10 gold!');
                gold = gold + 10;

                if (health > maxHealth) {
                    health = maxHealth;
                }
                travelNok();
            } else {
                criticalChance = Math.floor(Math.random() * 5);
                enemyAttack2 = (enemyAttack + criticalChance) - defense;
                if (enemyAttack2 < 0) {
                    window.alert("The enemy attack did nothing...");
                } else {
                    health = health - enemyAttack2;
                    window.alert("The enemy did " + enemyAttack2 + "!");
                    window.alert("You are now at " + health + " hit points!");
                }
                if (health > maxHealth) {
                    health = maxHealth;
                    window.alert("You went over " + maxHealth + "! Resetting health...");
                }
            }
        }
    }
};

function goCave() {
    //Creates a cave, which pulls up a table of random events.
    //You go inside the cave. 
    clear();
    document.innerHTML = "You enter the cave.";
    caveRandom();
};

function caveRandom() {
    //Is the table which pulls up the events.
    var caveEvent = Math.floor(Math.random() * 4)
    switch (caveEvent) {
        case 0:
            document.innerHTML = document.innerHTML + "Nothing... <p><button onClick = \"travelNok()\">Leave</button></p>";
            break;
        case 1:
            gold = gold + 10;
            document.innerHTML = document.innerHTML + "You find treasure! + 10 gold! <p><button onClick = \"travelNok()\">Leave</button></p>";
            break;
        case 2:
            document.innerHTML = document.innerHTML + "Bandit lair! Watch out!";
            attackBanditsCave();
            break;
        case 3:
            window.alert("Nothing...");
            travelNok();
            break;
        default:
            window.alert("Nothing...");
            travelNok();
            break;

    }
};


function arrivePlace() {
    //Checks the destination, and executes code based on your destination.
    switch (destination) {
        case 'Nok':
            arriveNok();
            break;
        case 'Argo':
            again();
            break;
        case 'JudalStory':
            arriveJudalStory();
            break;
        case 'Judal':
            arriveJudal();
            break;
        case 'NokBurned':
            arriveNokBurned();
            break;
        default:
            window.alert("You... um... well... there was a problem during transport. Let's teleport you to Judal, shall we? Sorry for the bug. Have some gold. +25 gold.");
            arriveJudal();
            gold = gold + 25;
    }
};

function travelJudalSet() {
    //Sets your destination based on where you are from Argo, or Nok.
    if (destination === 'NokBurned') {
        destination = 'Judal';
        distance = 20;
        travelNok();
    } else if (destination === 'Argo') {
        destination = 'Judal';
        distance = 70;
        travelNok();
    }
};

function magicCave(){
    //Function called magic cave which has magical items.
    document.innerHTML = "You have found a cave! <p>Do you wish to go inside?</p><p><button onClick = \"magicCaveEvent()\">Yes</button><button onClick = \"travelNok()\">No</button></p>";
}
function magicCaveEvent(){
    window.alert("You head inside the cave. A magical presence can be felt.");
    var chances = Math.floor(Math.random() * 10);
    switch(chances){
        case 0:
            document.innerHTML = "You find shoes of running! +5 to traveling speed! <p><button onClick = \"travelNok()\">Leave</button></p>";
            travelingSpeed = travelingSpeed + 5;
            break;
        case 1:
            document.innerHTML = "You find a lucky coin! + 1% chance to get gold! <p><button onClick = \"travelNok()\">Leave</button></p>";
            goldChance = goldChance + 0.01;
            break;
        case 2:
            document.innerHTML = "You find some treasure! <p><button onClick = \"treasureChance()\">Open</button></p>";
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            break;
        case 7:
            break;
        case 8:
            break;
        case 9:
            break;
    }
}

function treasureChance(){
    var chance = Math.floor(Math.random() * 100) * goldChance;
    window.alert("You\'ve found " + chance + " gold!");
    gold = gold + chance;
    travelNok();
}
