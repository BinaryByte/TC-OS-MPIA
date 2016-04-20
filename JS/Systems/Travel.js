
var travel = {
    place: 'Nok'
};


function travelNok() {
    //Traveling to Nok.
    clear();
    document.write("You are now traveling to " + destination + ". There are " + distance + " miles left. Your traveling speed is " + travelingSpeed + " miles per day.");
    document.write("<p><button onClick = \"travelEventNok()\">Time Passes</button></p>");
    if (distance <= 0) {
        clear();
        document.write("You have arrived at " + destination + "!");
        document.write("<p><button onClick = \"arrivePlace()\">Enter</button></p>")
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
                cave();
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
    distance = distanceToArgo;
    destination = 'Argo';
    travel.place = 'Argo';
    travelNok();
};


function attackBandits() {
    clear();
    //Bandit attack
    distance = distance - 10;
    alert("You are attacked by bandits!");
    attacked = true;
    enemyHealth = 10;
    enemyDefense = 8;
    enemyAttack = 12;
    while (attacked === true) {
        if (enemyHealth <= 0) {
            attacked = false;
            alert('You win! + 10 gold!');
            gold = gold + 10;
            if (health > maxHealth) {
                health = maxHealth;
            }
            travelNok();
        } else if (health <= 0) {
            attacked = false;
            alert("You are dead.");
            death();
        } else {
            criticalChance = Math.floor(Math.random() * 5);
            playerAttack = attack + criticalChance - enemyDefense;
            enemyHealth = enemyHealth - playerAttack;
            alert("You did " + playerAttack + " damage!");
            alert("The enemy health is now " + enemyHealth + "!");
            if (enemyHealth <= 0) {
                attacked = false;
                alert('You win! + 10 gold!');
                gold = gold + 10;
                if (health > maxHealth) {
                    health = maxHealth;
                }
                travelNok();
            } else {
                criticalChance = Math.floor(Math.random() * 5);
                enemyAttack2 = (enemyAttack + criticalChance) - defense;
                if (enemyAttack2 < 0) {
                    alert("The enemy attack did nothing...");
                } else {
                    health = health - enemyAttack2;
                    alert("The enemy did " + enemyAttack2 + "!");
                    alert("You are now at " + health + " hit points!");
                }
                if (health > maxHealth) {
                    health = maxHealth;
                    alert("You went over " + maxHealth + "! Resetting health...");
                }
            }
        }
    }
};

function cave() {
    //Presents you a choice to go inside a cave or not.
    clear();
    distance = distance - travelingSpeed;
    document.write("You have found a cave!");
    document.write("<p>Do you wish to go inside?</p>");
    document.write("<p><button onClick = \"goCave()\">Yes</button><button onClick = \"travelNok()\">No</button></p>");
};

function attackBanditsCave() {
    alert("Bandit Lair! Watch out!");
    clear();
    //Bandit attack
    attacked = true;
    enemyHealth = 10;
    enemyDefense = 8;
    enemyAttack = 12;
    while (attacked === true) {
        if (enemyHealth <= 0) {
            attacked = false;
            alert('You win! + 10 gold!');
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
            alert("You are dead.");
            death();
        } else {
            criticalChance = Math.floor(Math.random() * 5);
            playerAttack = attack + criticalChance - enemyDefense;
            enemyHealth = enemyHealth - playerAttack;
            alert("You did " + playerAttack + " damage!");
            alert("The enemy health is now " + enemyHealth + "!");
            if (enemyHealth <= 0) {
                attacked = false;
                alert('You win! + 10 gold!');
                gold = gold + 10;

                if (health > maxHealth) {
                    health = maxHealth;
                }
                travelNok();
            } else {
                criticalChance = Math.floor(Math.random() * 5);
                enemyAttack2 = (enemyAttack + criticalChance) - defense;
                if (enemyAttack2 < 0) {
                    alert("The enemy attack did nothing...");
                } else {
                    health = health - enemyAttack2;
                    alert("The enemy did " + enemyAttack2 + "!");
                    alert("You are now at " + health + " hit points!");
                }
                if (health > maxHealth) {
                    health = maxHealth;
                    alert("You went over " + maxHealth + "! Resetting health...");
                }
            }
        }
    }
};

function goCave() {
    //Creates a cave, which pulls up a table of random events.
    //You go inside the cave. 
    clear();
    document.write("You enter the cave.");
    caveRandom();
};

function caveRandom() {
    //Is the table which pulls up the events.
    var caveEvent = Math.floor(Math.random() * 5)
    switch (caveEvent) {
        case 0:
            document.write("Nothing... <p><button onClick = \"travelNok()\">Leave</button></p>");
            break;
        case 1:
            gold = gold + 10;
            document.write("You find treasure! + 10 gold! <p><button onClick = \"travelNok()\">Leave</button></p>");
            break;
        case 2:
            document.write("Bandit lair! Watch out!");
            attackBanditsCave();
            break;
        case 3:
            document.write("Bandit lair! Watch out!");
            attackBanditsCave();
            break;
        case 4:
            document.write("You find shoes of running! +5 to traveling speed! <p><button onClick = \"travelNok()\">Leave</button></p>");
            travelingSpeed = travelingSpeed + 5;
            break;
        default:
            alert("Nothing...");
            travelNok();
            break;

    }
};


function arrivePlace() {
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
            alert("You... um... well... there was a problem during transport. Let's teleport you to Judal, shall we? Sorry for the bug. Have some gold. +25 gold.");
            arriveJudal();
            gold = gold + 25;
    }
};

function travelJudalSet() {
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

