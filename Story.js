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
    if (saved === true) {
        travelingSpeedOriginal = travelingSpeed;
        travelingSpeed = travelingSpeed - 5;
        document.write("<p>You have saved the woman, so you get a deduction to your traveling speed. - 5 traveling speed. Your total traveling speed is now " + travelingSpeed + " miles per day.</p>");
    }
    travelNok();
};


function arriveJudalStory() {
    clear();
        document.write("You arrive at Judal.");
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
