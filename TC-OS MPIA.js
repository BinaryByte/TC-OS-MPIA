var version = 0.1;
var storyLineBegan = false;
var enemyDefense;
var enemyAttack;
gold = 10;
attack = 10;
defense = 10;
var wizardMagic;
var backstory;
var enemyHealth;
health = 10;
var playerAttack;
var enemyAttack2;
maxHealth = 10;
var distance;
var travelingSpeed = 10;
var distanceToNok = 50;
var distanceToArgo = 50;
var destination;
var swordPurchase = false;
var armorPurchase = false;
var travelingSpeedOriginal;
var magicDamage;
var goldChance = 0.20;
var nokBurned = false;
clicks = 0;
var travel = {
    place: 'Nok'
};
var criticalChance = Math.floor(Math.random() * 5);
var ambushArgoT = false;

var document(){
    write: function(text){
        document.innerHTML = document.innerHTML + text;
    };
}

function options() {
    clicks = clicks + 1;
    if (clicks >= 10) {
        window.alert("Wow. You really want an options menu. Well TOO BAD! This is a text adventure, not some panzie FPS. This, is for hardcore gamers, who don't need \"Configurations\" or \"Gaming PCS\". This is FOR REAL MEN... or women. Gender Equality. YOU WILL BE DRILLED TO YOUR CORE, HEADING INTO THE DARK UNKOWN, WITH ONLY YOUR WITS AND AN INVENTORY TO GUIDE YOU. YOU WILL SURVIVE. YOU WILL... Well, you've been eaten by a grue. Goodbye.");
    } else {
        var fov = prompt("Set your FOV. Pick a number between -1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 and 10000000000000000000000000000000000000000000000000000000000000000000000000000000");
        window.alert("This is a text adventure game, so I will disable the FOV. I do admire your courage, for picking " + fov + ".");
    }
}

function difficultySet() {
    var difficulty = prompt("Easy, Medium, Hard, or Insane?");
    switch (difficulty) {
        case 'Easy':
            gold = 20;
            attack = 14;
            defense = 14;
            health = 20;
            maxHealth = 20;
            window.alert("Difficulty set to easy.");
            break;
        case 'Medium':
            window.alert("Difficulty set to medium.");
            break;
        case 'Hard':
            window.alert("Difficulty set to Hard.");
            gold = 7;
            attack = 7;
            defense = 7;
            health = 7;
            maxHealth = 7;
            break;
        case 'Insane':
            window.alert("Difficulty set to Insane.");
            gold = 5;
            attack = 5;
            defense = 5;
            health = 5;
            maxHealth = 5;
            break;
        default:
            window.alert("I'm sorry, I couldn't recognize that. Please type it exactly as spelled, and it's case sensitive, so type it with the exact capital letters.");
            break;
    }
}

function begin() {
    clear();
    //The start. It presents you with a choice of person.
    document.write("You are a...");
    document.write("<p><button onClick = \"merchant()\">Merchant</button><button onClick = \"guard()\">Guard</button><button onClick = \"wizard()\">Wizard</button></p>");
}

function merchant() {
    backstory = "Merchant";
    //You get plus gold, then goes to Argo.
    clear();
    document.write("You are a merchant. +25 gold.");
    gold = gold + 25;
    again();

}

function guard() {
    //Get plus 2 attack and defense, then go to argo.
    clear();
    backstory = "Guard";
    document.write("You are a guard. +2 to attack and defense.");
    attack = attack + 2;
    defense = defense + 2;
    again();
};

function wizard() {
    //Gain magic, which will be used later.
    backstory = "Wizard";
    clear();
    document.write("You are a wizard. You now have a magic attack.");
    wizardMagic = true;
    again();
};

function clear() {
    //clears the page when called.
    document.body.innerHTML = '';
};

function again() {
    //Presents you choices to do stuff in argo.
    document.write("<p>You are in the town of Argo.</p>");
    document.write("<button onClick = \"exploreArgo()\">Explore</button><button onClick = \"shopArgo()\">Shop</button><button onClick = \"leaveArgo()\">Travel to Nok</button>");
};

function exploreArgo() {
    //If you decide to explore, you are given the choice to go to an alley.
    generateExplore();
}

function generateExplore(){
    random = Math.floor(Math.random()* 10);
    switch(random){
        case 1:
            if (ambushArgoT === true) {
        //If you've already been ambushed, it tells you there's nothing there.
        document.write("<p>Nothing...</p>");
    } else if (ambushArgoT === false) {
        clear();
        //If you haven't been ambushed or left the alley but decide to come back, then it loads the same choice as above.
        document.write("You find a small alley.");
        document.write("<p><button onClick = \"ambushArgo()\">Explore Alley</button><button onClick = \"again()\">Leave the alley</button></p>");
    }
            break;
        case 2:
            clear();
            document.write("You find a pair of gamblers. They invite you to play a game of cards with them.");
            document.write("<p><button onClick = \"gamble()\">Accept</button><button onClick = \"again()\">Reject</button></p>");
            break;
        case 3:
            document.write("A bunch of gamblers ask you to play cards with them. Do you play? The game is Texas hold 'em.");
            document.write("<p><button onClick = \"playCards()\">Yes</button><button onClick = \"cardGame()\">No</button></p>");
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
        case 10:
            break;
    }
}

function gamble(){
    clear();
    document.write("You are gambling. Here's how the game works: You put in 5 gold. A ball rolls. If it lands closest to your side, you gain 10 gold. If it doesn't, then you lose 5 gold. <p><button onClick = \"gambleGo()\">Continue Gambling</button><button onClick = \"again()\">Stop gambling</button></p>");
};

function gambleGo(){
    if(gold <= 0){
        alert("You can't gamble anymore! You've run out of gold!");
        again();
    } else if(gold >= 100){
        alert("Enraged at your wealth, the gamblers kick you out!");
        again();
    } else {
        chances = Math.floor(Math.random() * 200);
        if(chances > 120){
            gold = gold + 10;
            alert("You won 10 gold!");
        } else if(chances <= 120){
            gold = gold - 5;
            alert("You lost 5 gold!");
        }
    }
};

function shopArgo() {
    //A shop with materials, that have buttons that allow you to upgrade your sword.
    clear();
    document.write("You have " + gold + " gold. What would you like to purchase?")
    document.write("<p><button onClick = \"armorArgo()\">Armor $20</button><button onClick = \"swordArgo()\">Sword $20</button><button onClick = \"healthArgo()\">Restore Health $10</button><button onClick = \"again()\">Leave</button></p>");
};

function swordArgo() {
    //Sword purchasing.
    if (swordPurchase === false) {
        if (gold < 20) {
            document.write("You don't have enough.");
            again();
        } else {
            alert("You purchased a sword! + 3 attack!");
            attack = attack + 3;
            gold = gold - 20;
            again();
            swordPurchase = true;
        }
    } else if (!swordPurchase) {
        if (gold < 20) {
            document.write("<p>You don't have enough.</p>");
            again();
        } else {
            alert("You purchased a sword! + 3 attack!");
            attack = attack + 3;
            gold = gold - 20;
            again();
            swordPurchase = true;
        }
    } else {
        document.write("You already purchased a sword.");
        again();
    }
};

function armorArgo() {
    //armor purchasing
    if (armorPurchase === false) {
        if (gold < 20) {
            document.write("You can't afford that!");
            again();
        } else {
            gold = gold - 20;
            alert("You purchased some armor! + 4 defense!");
            defense = defense + 4;
            again();
            armorPurchase = true;
        }
    } else if (!armorPurchase) {
        if (gold < 20) {
            document.write("You can't afford that!");
            again();
        } else {
            gold = gold - 20;
            alert("You purchased some armor! + 4 defense!");
            defense = defense + 4;
            again();
            armorPurchase = true;
        }
    } else {
        document.write("<p>You've already purchased armor!</p>");
        again();
    }
};

function healthArgo() {
    //restores health
    if (maxHealth === health) {
        document.write("You're at full health!");
        again();
    } else {
        if (gold < 10) {
            document.write("You can't afford that!");
            again();
        } else {
            gold = gold - 10;
            health = maxHealth;
            document.write("Health restored!");
            again();
        }
    }
};

function leaveArgo() {
    //Presents you with the leave choice.
    document.write("You leave Argo.");
    if (nokBurned === true) {
        document.write("<p><button onClick = \"travelJudalSet()\">Judal</button><button onClick = \"travelNokSet()\">Nok</button><button onClick = \"again()\">Stay</button></p>");
    } else {
        distance = distanceToNok;
        destination = 'Nok';
        clear();
        document.write("<p>The only nearby town is the town of Nok. Do you wish to travel there?</p>");
        document.write("<p><button onClick = \"travelNok()\">Yes</button><button onClick = \"again()\">No</button></p>");
    }
};

function ambushArgo() {
    //Attacked.
    clear();
    document.write("You are attacked by thugs!");
    var attacked = true;
    enemyHealth = 5;
    enemyDefense = 5;
    enemyAttack = 5;
    while (attacked === true) {
        if (enemyHealth <= 0) {
            attacked = false;
            alert('You win! + 10 gold!');
            gold = gold + 10;
            ambushArgo = true;
            if (health > maxHealth) {
                health = maxHealth;
            }
            again();
        } else if (health <= 0) {
            health = 10;
            gold = 10;
            attack = 10;
            defense = 10;
            wizardMagic = false;
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
                ambushArgoT = true;
                if (health > maxHealth) {
                    health = maxHealth;
                }
                again();
            } else {
                criticalChance = Math.floor(Math.random() * 5);
                enemyAttack2 = enemyAttack + criticalChance - defense;
                if (enemyAttack2 < 0) {
                    alert("The enemy attack did nothing...");
                } else {
                    health = health - enemyAttack2;
                    alert("The enemy did " + enemyAttack2 + "!");
                    alert("You are now at " + health + " hit points!");
                }
            }
        }
    }
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

function wizardTower(){
    clear();
    document.write("You are walking along the road, when suddenly, a miniscule tower blocks");
};

function arriveNok() {
    if (storyLineBegan === true) {
        clear();
        document.write("There\'s lots of fire everywhere. A guard lets you into the gates.");
        document.write("<p>The city of Nok is in flames. A burning building rumbles and shakes, with screams coming from inside. A demon emerges, flattening the building, and it swings a mighty claw...</p>");
        storylineDemon();
    } else if (storyLineBegan === false) {
        clear();
        document.write("You are in the town of Nok. The gates are barred. You must have missed a plot device.");
        document.write("<p><button onClick = \"travelArgo()\">Go to Argo</button></p>");
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

function storylineStart() {
    if (storyLineBegan === true) {
        travelNok();
    } else {
        clear();
        document.write("You find an old man running towards Nok with a letter in his hand. He collapses. You feel compelled to open the note. <p><button onClick = \"pickNote()\">Pick Up Note</button><button onClick = \"butt()\")\">Don't Pick Up Note</button></p>");
    }
};

function butt() {
    document.write("<p>A butthurt developer wants you to go pick up the note.</p>");
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

function pickNote() {
    clear();
    distance = distance - travelingSpeed;
    storyLineBegan = true;
    document.write("You pick up the note. It says \'Impending Attack Coming from evil bad guys to Nok.\' The old man is dead. <p><button onClick = \"travelNok()\">Continue</button></p>");
};

function storylineDemon() {
    nokBurned = true;
    alert("You are attacked by a demon!");
    if (wizardMagic === true) {
        originalAttack = attack;
        alert("You are magic! + 30% attack against demons!");
        attack = attack + (attack * 0.3);
    }
    enemyHealth = 16;
    enemyDefense = 9;
    enemyAttack = 13;
    var attacked = true;
    while (attacked === true) {
        if (enemyHealth <= 0) {
            attacked = false;
            alert('You win! + 10 gold!');
            gold = gold + 10;
            if (health > maxHealth) {
                health = maxHealth;
            }
            continueStory();
        } else if (health <= 0) {
            health = 10;
            gold = 10;
            attack = 10;
            defense = 10;
            wizardMagic = false;
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
                alert('You win!');
                if (health > maxHealth) {
                    health = maxHealth;
                }
                if (wizardMagic === true) {
                    attack = originalAttack;
                }
                continueStory();
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

function continueStory() {
    clear();
    document.write("You defeat the demon. For being so large, it was surprisingly easy.");
    document.write("<p>Over the horizon, however, a larger demon flies towards you. It\'s nearly four times the size of the large demon. However, something pops up and flies it into the ground.</p>");
    document.write("<p>The thing that brought down the demon comes up, and you see it is a magnificent dragon.</p>");
    document.write("<p>The dragon approaches you, and lands directly near you.</p>");
    document.write("<p>\"Greetings adventurer. You look worn down. Quickly, you must help me fight off the demon-spawn.\"</p>");
    document.write("<button onClick = \"helpDragon()\">\"Let\'s go kick some generic bad guy batootie.\"</button><button onClick = \"noDragon()\">\"No! You\'re a dragon!\"</button>");
};

function helpDragon() {
    clear();
    document.write("The Dragon inhales...");
    document.write("<p><button onClick =\"helpDragonContinue()\">Ohcrapohcrapocrapocrap</button><button onClick = \"helpDragonContinue()\">Whatever...</button></p>");
};

function helpDragonContinue() {
    distance = 100;
    document.write("<p>And exhales a mighty healing breath. Your health is restored.</p>");
    health = maxHealth;
    document.write("<p>\"Quickly, random traveler I just met whom I trust for some reason, go down the street and go save people.\"</p>");
    document.write("<p><button onClick = \"streetWander()\">Begin wandering</button></p>");
};

function streetWander() {
    saved = false;
    clear();
    document.write("You are wandering down the street, looking for demons and people to save.");
    document.write("Mandatory encounter in... " + distance / travelingSpeed + "  clicks.");
    document.write("<p><button onClick = \"streetWanderEvent()\">Wander</button></p>");
    if (distance <= 0) {
        document.write("<p>You discover a burning building, and a woman screaming.</p>");
        document.write("<p><button onClick = \"continueOnward()\">She\'s dead anyway.</button><button onClick = \"saveWoman()\">Incognito adventurer to the rescue!</button></p>");
    }
};

function streetWanderEvent() {
    streetEvent = Math.floor(Math.random() * 100)
    if (streetEvent > 50) {
        distance = distance - travelingSpeed;
        streetWander();
    } else {
        distance = distance - travelingSpeed;
        demonAttack();
    }
};

function demonAttack() {
    alert("You are attacked by a demon!");
    if (wizardMagic === true) {
        originalAttack = attack;
        alert("You are magic! + 30% attack against demons!");
        attack = attack + (attack * 0.3);
    }
    enemyHealth = 16;
    enemyDefense = 9;
    enemyAttack = 13;
    var attacked = true;
    while (attacked === true) {
        if (enemyHealth <= 0) {
            attacked = false;
            alert('You win! + 10 gold!');
            gold = gold + 10;
            if (health > maxHealth) {
                health = maxHealth;
            }
            streetWander();
        } else if (health <= 0) {
            health = 10;
            gold = 10;
            attack = 10;
            defense = 10;
            wizardMagic = false;
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
                alert('You win!');
                if (health > maxHealth) {
                    health = maxHealth;
                }
                if (wizardMagic === true) {
                    attack = originalAttack;
                }
                streetWander();
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

function saveWoman() {
    clear();
    saved = true;
    document.write("You save the woman. She runs away, like a coward.");
    document.write("<p><button onClick = \"continueOnward()\">Let\'s go save more people!</button></p>");
}

function continueOnward() {
    clear();
    document.write("You continue, and the dragon meets up with you. He hurriedly speaks. \"There are too many demons blah blah blah blah not just a regular blah blah blah blah hop on my back.\"");
    document.write("<p><button onClick = \"dragonRide()\">Be awesome and ride a CENSORED dragon!</button><button onClick = \"noDragonRide()\">\"I get uh... dragon... sick...\"</button></p>");
}

function noDragonRide() {
    clear();
    destination = 'JudalStory'
    document.write("\"Whatever, adventurer. I was planning to eat you anyway.\" You begin walking to Judal.");
    document.write("<p><button onClick =\"judalNoDragon()\">Walk</button></p>");
    if (saved === true) {
        travelingSpeedOriginal = travelingSpeed;
        travelingSpeed = travelingSpeed - 5;
        document.write("<p>You have saved the woman, so you get a deduction to your traveling speed. - 5 traveling speed. Your total traveling speed is now " + travelingSpeed + " miles per day.</p>");
    }
    judalNoDragon();

};

function dragonRide() {
    distance = 20;
    clear();
    document.write("You hop onto the dragon.");
    if (saved === true) {
        document.write("<p>The woman you saved hops onto the dragon as well.</p>");
        document.write("<p><button onClick = \"dragonFly()\">Fly</button></p>");
    }
};

function dragonFly() {
    clear();
    dragonFlyS = true;
    document.write("Distance to Judal, " + distance + " miles. Dragon speed is 5 miles per minute.");
    document.write("<p><button onClick = \"flyEvent()\">Continue Flying</button></p>");
    if (distance <= 0) {
        arriveJudalStory();
    }
};

function flyEvent() {
    flyChance = Math.floor(Math.random() * 1000);
    if (flyChance > 500) {
        distance = distance - 5;
        dragonFly();
    } else {
        distance = distance - 5;
        demonAttackFly();
        enemyHealth = 16;
        enemyDefense = 9;
        enemyAttack = 18;
        dragonHealth = 50;
        dragonDefense = 20;
    }
};

function demonAttackFly() {
    clear();
    document.write("<p>A flying demon attacks you!</p>");
    document.write("<p><button onClick = \"dragonLand()\">Combat</button>");
}

function dragonLand() {
    clear();
    if (dragonHealth <= 0) {
        alert("You are dead.");
        attacked = false;
        death();
    } else {
        document.write("<p><button onClick = \"fireBreath()\">Fire Breath</button><button onClick = \"chomp()\">Chomp</button></p>");
    }
};

function fireBreath() {
    criticalChance = Math.floor(Math.random() * 10);
    dragonAttack = attack + 10;
    dragonAttack2 = (dragonAttack + criticalChance) - enemyDefense;
    enemyHealth = enemyHealth - dragonAttack2;
    alert("You used a fire breath! You did " + dragonAttack2 + " points of damage!");
    alert("The enemy health is now " + enemyHealth + "!");
    if (enemyHealth <= 0) {
        alert("You win!");
        dragonFly();
    } else {
        dragonDemonAttack();
    }
};

function chomp() {
    criticalChance = Math.floor(Math.random() * 20);
    dragonAttack = attack + 3;
    dragonAttack2 = (dragonAttack + criticalChance) - enemyDefense;
    enemyHealth = enemyHealth - dragonAttack2;
    alert("You chomped the enemy! You did " + dragonAttack2 + " points of damage!");
    alert("The enemy health is now " + enemyHealth + " hit points!");
    if (enemyHealth <= 0) {
        alert("You win!");
        attacked = false;
        dragonFly();
    } else {
        dragonDemonAttack();
    }
};

function dragonDemonAttack() {
    alert("The enemy attacks!");
    enemyAttack2 = (enemyAttack + criticalChance) - dragonDefense;
    if (enemyAttack2 < 0) {
        alert("The attack did nothing...");
        dragonLand();
    } else {
        dragonHealth = dragonHealth - enemyAttack2;
        alert("The enemy did " + enemyAttack2 + " damage!");
        alert("The dragon is now at " + dragonHealth + " hit points!");
        alert("Luckily, the dragon regenerates outside of combat...");
        if (dragonHealth <= 0) {
            alert("You are dead.");
            death();
        } else {
            dragonLand();
        }
    }
}

function noDragon() {
    destination = 'JudalStory';
    distance = 20;
    clear();
    document.write("The dragon flies off. You walk towards the city of Judal.");
    travelNok();
    if (saved === true) {
        travelingSpeedOriginal = travelingSpeed;
        travelingSpeed = travelingSpeed - 5;
        document.write("<p>You have saved the woman, so you get a deduction to your traveling speed. - 5 traveling speed. Your total traveling speed is now " + travelingSpeed + " miles per day.</p>");
    }
    judalNoDragon();
};

function judalNoDragon() {
    clear();
    document.write("The distance to Judal is " + distance + " miles. Your traveling speed is " + travelingSpeed + " miles per day.");
    travelEventNok();
    if (distance <= 0) {
        if (saved === true) {
            travelingSpeed = travelingSpeedOriginal;
        }
        document.write("<p>You have arrived at Judal!</p>");
        document.write("<p><button onClick = \"arrivePlace()\">Enter</button></p>");
    }
}

function arriveJudalStory() {
    clear();
    if (dragonFlyS === true) {
        document.write("You arrive at Judal on the back of a dragon.");
        document.write("<p>The dragon bids you farewell, and flies off.</p>");
    } else {
        document.write("You arrive at Judal.");
    }
    document.write("<p>The mayor of Judal greets you and offers you gold for killing demons. + 50 gold.</p>");
    gold = gold + 50;
    if (saved = true) {
        document.write("<p>The mayor also gives you gold for saving the woman. +15 gold.</p>");
        gold = gold + 15;
    }
    document.write("<p>The mayor then invites you to eat at a banquet.</p>");
    health = maxHealth;
    document.write("<p><button onClick = \"judalStoryBanquet()\">Eat</button></p>");
};

function judalStoryBanquet() {
    clear();
    document.write("You eat, and your health is restored. You are now at " + health + " hit points.");
    document.write("<p>The mayor then presents you with a gift, to help discover the cause of these demon incursions.</p>");
    if (backstory === 'Wizard') {
        document.write("<p>The mayor presents you with a magic staff. You now have increased magic damage +40% damage to magical creatures.</p>");
        magicDamage = attack + 0.40;
    } else if (backstory === 'Guard') {
        document.write("<p>The mayor presents you with a sword. +3 attack.</p>");
        attack = attack + 3;
    } else if (backstory === 'Merchant') {
        document.write("<p>The mayor presents you with a magic coin. +10% chance to get more gold.</p>");
        goldChance = goldChance + 0.10
    }
    document.write("<p>The mayor then tells you to head to the town of Ruillind to find the source of all this, when you're ready.</p>");
    document.write("<p><button onClick = \"arriveJudal()\">Town Square</button></p>");
};

function arriveJudal() {
    clear();
    document.write("You are now in the city of Judal.");
    document.write("<p><button onClick = \"leaveJudal()\">Leave</button></p>");
};

function leaveJudal() {
    clear();
    document.write("Head to:");
    document.write("<p><button onClick = \"travelNokSet()\">Nok</button><button onClick = \"travelArgoSet()\">Argo</button><button onClick = \"arriveJudal()\">Stay</button><button onClick = \"travelRuillindSet()\">Ruillind</button></p>");
};

function travelRuillindSet() {
    alert("In development... Try again later...");
};

function travelNokSet() {
    if (destination === 'Judal' || destination === 'JudalStory') {
        destination = 'NokBurned';
        distance = 20;
        travelNok();
    } else if (destination === 'Argo') {
        destination = 'NokBurned';
        distance = 50;
        travelNok();
    } else {
        alert("Um... a... hm... I think there was a bug. Please contact the developer at tyly04@gmail.com");
    }
};

function travelArgoSet() {
    if (destination === 'NokBurned') {
        destination = 'Argo';
        distance = 50;
        travelNok();
    } else {
        destination = 'Argo';
        distance = 70;
        travelNok();
    }
};

function arriveNokBurned() {
    clear();
    document.write("You arrive at the burned city of Nok.");
    document.write("<p><button onClick =\"nokLeave()\">Leave</button></p>");
};

function nokLeave() {
    clear();
    document.write("<button onClick = \"travelJudalSet()\">Judal</button><button onClick = \"travelArgoSet()\">Argo</button><button onClick = \"arriveNokBurned()\">Stay</button>");
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

function evil() {
    alert("Yes, I am evil.");
};

function death() {
    alert("If this reload doesn't work, reload the page manually.");
    window.location.reload();
};
