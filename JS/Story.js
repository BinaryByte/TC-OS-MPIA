function storylineStart() {
    //Detects if during travel you picked up the note (The storyline began variable). If so, then it begins takes you to travelNok.
    if (storyLineBegan === true) {
        travelNok();
    } else {
        //If during travel you did not pick up the note, it runs the event.
        clear();
        document.body.innerHTML = "You find an old man running towards Nok with a letter in his hand. He collapses. You feel compelled to open the note. <p><button onClick = \"pickNote()\">Pick Up Note</button> or <button onClick = \"butt()\")\">Don't Pick Up Note</button></p>";
    }
};
function butt() {
    //Forces you to pick up the note.
    document.body.innerHTML = document.body.innerHTML + "<p>A butthurt developer wants you to go pick up the note.</p>";
};

function pickNote() {
    //Says that the storyline begins.
    clear();
    distance = distance - travelingSpeed;
    storyLineBegan = true;
    document.body.innerHTML = "You pick up the note. It says \'Impending Attack Coming from evil bad guys to Nok.\' The old man is dead. <p><button onClick = \"travelNok()\"> Continue </button></p>";
};

function storylineDemon() {
    //You are attacked by a demon.
    nokBurned = true;
    window.alert("You are attacked by a demon!");
    //If you have wizard magic, it gives you a bonus.
    if (wizardMagic === true) {
        //Sets a variable called originalAttack, which is called when combat is over.
        originalAttack = attack;
        window.alert("You are magic! + 30% attack against demons!");
        attack = attack + (attack * 0.3);
    }
    //Declaring enemy variables.
    enemyHealth = 16;
    enemyDefense = 9;
    enemyAttack = 13;
    var attacked = true;
    //Sets a while loop that while attacked is true, it will execute the code inside.
    while (attacked === true) {
        if (enemyHealth <= 0) {
            //Detects if enemy health is less than or equal to zero, and if true, it will end the while loop.
            attacked = false;
            window.alert('You win! + 10 gold!');
            gold = gold + 10;
            if (health > maxHealth) {
                health = maxHealth;
            }
            continueStory();
        } else if (health <= 0) {
            //Detects if your health is less than or equal to zero, and if true, it will end the while loop.
            health = 10;
            gold = 10;
            attack = 10;
            defense = 10;
            wizardMagic = false;
            attacked = false;
            window.alert("You are dead.");
            death();
        } else {
            //If neither your health or the enemy health is equal to or less then zero, it will execute this code.
            //Rolls a critical chance, which adds to your attack.
            criticalChance = Math.floor(Math.random() * 5);
            //Add your attack plus critical chance minus the enemy defense.
            playerAttack = attack + criticalChance - enemyDefense;
            enemyHealth = enemyHealth - playerAttack;
            window.alert("You did " + playerAttack + " damage!");
            window.alert("The enemy health is now " + enemyHealth + "!");
            if (enemyHealth <= 0) {
                //If the enemy health is less than or equal to zero, it ends the while loop.
                attacked = false;
                window.alert('You win!');
                if (health > maxHealth) {
                    health = maxHealth;
                }
                if (wizardMagic === true) {
                    attack = originalAttack;
                }
                continueStory();
            } else {
                //Else, it does the same thing that the player did, except for the enemy.
                criticalChance = Math.floor(Math.random() * 5);
                enemyAttack2 = (enemyAttack + criticalChance) - defense;
                if (enemyAttack2 < 0) {
                    //If the enemy attack is less than zero, it will not add to your health.
                    window.alert("The enemy attack did nothing...");
                } else {
                    health = health - enemyAttack2;
                    window.alert("The enemy did " + enemyAttack2 + "!");
                    window.alert("You are now at " + health + " hit points!");
                }
                if (health > maxHealth) {
                    //If you go over your max health, it resets your health.
                    health = maxHealth;
                    alert("You went over " + maxHealth + "! Resetting health...");
                    //Repeat the loop.
                }
            }
        }
    }
};

function continueStory() {
    //Called once the while loop completes.
    clear();
    document.body.innerHTML = "You defeat the demon. For being so large, it was surprisingly easy. <p>Over the horizon, however, a larger demon flies towards you. It\'s nearly four times the size of the large demon. However, something pops up and flies it into the ground.</p>";
    document.body.innerHTML = document.body.innerHTML + "<p>The thing that brought down the demon comes up, and you see it is a magnificent dragon.</p> <p>The dragon approaches you, and lands directly near you.</p> <p>\"Greetings adventurer. You look worn down. Quickly, you must help me fight off the demon-spawn.\"</p>";
    //Presented a choice to either help or avoid the dragon
    document.body.innerHTML = document.body.innerHTML + "<button onClick = \"helpDragon()\">\" Let\'s go kick some generic bad guy batootie! \"</button><button onClick = \"noDragonRide()\">\" No! You\'re a dragon! \"</button>";
};

function helpDragon() {
    //Dragon heals you.
    clear();
    document.body.innerHTML = "The Dragon inhales...  <p><button onClick =\"helpDragonContinue()\"> Ohcrapohcrapocrapocrap </button><button onClick = \"helpDragonContinue()\"> Whatever... </button></p>";
};

function helpDragonContinue() {
    //Sets a distance of 100, and has you wander with the streetWander() function.
    distance = 100;
    document.body.innerHTML = document.body.innerHTML + "<p>And exhales a mighty healing breath. Your health is restored.</p>";
    health = maxHealth;
    document.body.innerHTML = document.body.innerHTML + "<p>\"Quickly, random traveler I just met whom I trust for some reason, go down the street and go save people.\"</p>";
    document.body.innerHTML = document.body.innerHTML + "<p><button onClick = \"streetWander()\"> Begin wandering </button></p>";
};

function streetWander() {
    //The saved variable is when you save a woman or not.
    saved = false;
    clear();
    document.body.innerHTML = "You are wandering down the street, looking for demons and people to save.";
    document.body.innerHTML = document.body.innerHTML + "Mandatory encounter in... " + distance / travelingSpeed + "  clicks.";
    document.body.innerHTML = document.body.innerHTML + "<p><button onClick = \"streetWanderEvent()\"> Wander </button></p>";
    if (distance <= 0) {
        //Once the distance is zero, you save a woman from a burning building.
        document.body.innerHTML = "<p>You discover a burning building, and a woman screaming.</p>";
        document.body.innerHTML = document.body.innerHTML + "<p><button onClick = \"continueOnward()\"> She\'s dead anyway. </button><button onClick = \"saveWoman()\"> Incognito adventurer to the rescue! </button></p>";
    }
};

function streetWanderEvent() {
    //Randomly generates a number, and if that number is less than or equal to 50, it will have a demon attack you.
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
    //See storyLineDemon() on line 25 of Story.js for an explanation of combat.
    window.alert("You are attacked by a demon!");
    if (wizardMagic === true) {
        originalAttack = attack;
        window.alert("You are magic! + 30% attack against demons!");
        attack = attack + (attack * 0.3);
    }
    enemyHealth = 16;
    enemyDefense = 9;
    enemyAttack = 13;
    var attacked = true;
    while (attacked === true) {
        if (enemyHealth <= 0) {
            attacked = false;
            window.alert('You win! + 10 gold!');
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
                window.alert('You win!');
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

function saveWoman() {
    //sets saved to true, and you save the woman.
    clear();
    saved = true;
    document.body.innerHTML = "You save the woman. She runs away, like a coward. <p><button onClick = \"continueOnward()\"> Let\'s go save more people! </button></p>";
}

function continueOnward() {
    //You continue, and are offered the chance to ride on the dragon's back.
    clear();
    document.body.innerHTML = "You continue, and the dragon meets up with you. He hurriedly speaks. \"There are too many demons blah blah blah blah not just a regular blah blah blah blah hop on my back.\"";
    document.body.innerHTML = document.body.innerHTML + "<p><button onClick = \"dragonRide()\"> Be awesome and ride a CENSORED dragon! </button><button onClick = \"noDragonRide()\">\" I get uh... dragon... sick... \"</button></p>";
}

function noDragonRide() {
    //Sets the destination and exeutes travelNok() function, adding the woman and reducing your travel speed if you saved her.
    clear();
    destination = 'JudalStory'
    destinationName = 'Judal';
    distance = 20;
    document.body.innerHTML = "\"Whatever, adventurer. I was planning to eat you anyway.\" You begin walking to Judal.";
    document.body.innerHTML = document.body.innerHTML + "<p><button onClick =\"travelNok()\"> Walk </button></p>";
    if (saved === true) {
        travelingSpeedOriginal = travelingSpeed;
        travelingSpeed = travelingSpeed - 5;
        document.body.innerHTML = document.body.innerHTML + "<p>You have saved the woman, so you get a deduction to your traveling speed. - 5 traveling speed. Your total traveling speed is now " + travelingSpeed + " miles per day.</p>";
    }
   
};

function dragonRide() {
    //You ride the dragon and fly to Judal. If you saved the woman, she hops on with you.
    clear();
    document.body.innerHTML = "You hop onto the dragon.";
    if (saved === true) {
        document.body.innerHTML = document.body.innerHTML + "<p>The woman you saved hops onto the dragon as well.</p>";
    }
    document.body.innerHTML = document.body.innerHTML + "<p><button onClick = \"dragonFly()\"> Fly </button></p>";
    distance = 20;
};

function dragonFly() {
    //You fly on the dragon, and it executes code in flyEvent.
    clear();
    dragonFlyS = true;
    document.body.innerHTML = "Distance to Judal, " + distance + " miles. Dragon speed is 5 miles per minute.";
    document.body.innerHTML = document.body.innerHTML + "<p><button onClick = \"flyEvent()\"> Continue Flying </button></p>";
    if (distance <= 0) {
        arriveJudalStory();
    }
};

function flyEvent() {
    //If flyChance is less than or equal to 500, it calls demonAttackFly()
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
    //You don't need to understand this code, we won't be using it later. Yet.
    clear();
    document.body.innerHTML = "<p>A flying demon attacks you!</p> <p><button onClick = \"dragonLand()\"> Combat </button>";
}

function dragonLand() {
    clear();
    if (dragonHealth <= 0) {
        window.alert("You are dead.");
        attacked = false;
        death();
    } else {
        document.body.innerHTML = "<p><button onClick = \"fireBreath()\"> Fire Breath </button><button onClick = \"chomp()\"> Chomp </button></p>";
    }
};

function fireBreath() {
    criticalChance = Math.floor(Math.random() * 10);
    dragonAttack = attack + 10;
    dragonAttack2 = (dragonAttack + criticalChance) - enemyDefense;
    enemyHealth = enemyHealth - dragonAttack2;
    window.alert("You used a fire breath! You did " + dragonAttack2 + " points of damage!");
    window.alert("The enemy health is now " + enemyHealth + "!");
    if (enemyHealth <= 0) {
        window.alert("You win!");
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
    window.alert("You chomped the enemy! You did " + dragonAttack2 + " points of damage!");
    window.alert("The enemy health is now " + enemyHealth + " hit points!");
    if (enemyHealth <= 0) {
        window.alert("You win!");
        attacked = false;
        dragonFly();
    } else {
        dragonDemonAttack();
    }
};

function dragonDemonAttack() {
    window.alert("The enemy attacks!");
    enemyAttack2 = (enemyAttack + criticalChance) - dragonDefense;
    if (enemyAttack2 < 0) {
        window.alert("The attack did nothing...");
        dragonLand();
    } else {
        dragonHealth = dragonHealth - enemyAttack2;
        window.alert("The enemy did " + enemyAttack2 + " damage!");
        window.alert("The dragon is now at " + dragonHealth + " hit points!");
        window.alert("Luckily, the dragon regenerates outside of combat...");
        if (dragonHealth <= 0) {
            window.alert("You are dead.");
            death();
        } else {
            dragonLand();
        }
    }
}

function noDragon() {
    //Having you walk towards the city of Judal, and executes travelNok in Travel.js
    destination = 'JudalStory';
    destinationName = 'Judal';
    distance = 20;
    clear();
    window.alert("The dragon flies off. You walk towards the city of Judal.");
    travelNok();
};


function arriveJudalStory() {
    //Executes the code for arriving at judal, and restores your health.
    clear();
        document.body.innerHTML = "You arrive at Judal.";
    document.body.innerHTML = "<p>The mayor of Judal greets you and offers you gold for killing demons. + 50 gold.</p>";
    gold = gold + 50;
    if (saved = true) {
        document.body.innerHTML = document.body.innerHTML + "<p>The mayor also gives you gold for saving the woman. +15 gold.</p>";
        gold = gold + 15;
    }
    document.body.innerHTML = document.body.innerHTML + "<p>The mayor then invites you to eat at a banquet.</p>";
    health = maxHealth;
    document.body.innerHTML = document.body.innerHTML + "<p><button onClick = \"judalStoryBanquet()\"> Eat </button></p>";
};

function judalStoryBanquet() {
    //Detects which class you are, and gives you a gift depending on that class.
    clear();
    document.body.innerHTML = "You eat, and your health is restored. You are now at " + health + " hit points. <p>The mayor then presents you with a gift, to help discover the cause of these demon incursions.</p>";
    if (backstory === 'Wizard') {
        document.body.innerHTML = document.body.innerHTML + "<p>The mayor presents you with a magic staff. You now have increased magic damage +40% damage to magical creatures.</p>";
        magicDamage = attack + 0.40;
    } else if (backstory === 'Guard') {
        document.body.innerHTML = document.body.innerHTML + "<p>The mayor presents you with a sword. +3 attack.</p>";
        attack = attack + 3;
    } else if (backstory === 'Merchant') {
        document.body.innerHTML = document.body.innerHTML + "<p>The mayor presents you with a magic coin. +10% chance to get more gold.</p>";
        goldChance = goldChance + 0.10
    }
    document.body.innerHTML = document.body.innerHTML + "<p>The mayor then tells you to head to the town of Ruillind to find the source of all this, when you're ready.</p> <p><button onClick = \"arriveJudal()\"> Town Square </button></p>";
};
