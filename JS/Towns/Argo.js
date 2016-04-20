
function again() {
    //Presents you choices to do stuff in argo.
    document.innerHTML = document.innerHTML + "<p>You are in the town of Argo.</p>";
    document.innerHTML = document.innerHTML + "<button onClick = \"exploreArgo()\">Explore</button><button onClick = \"shopArgo()\">Shop</button><button onClick = \"leaveArgo()\">Travel to Nok</button>";
};


function leaveArgo() {
    //Presents you with the leave choice.
    document.innerHTML = "You leave Argo.";
    if (nokBurned === true) {
        document.innerHTML = document.innerHTML + "<p><button onClick = \"travelJudalSet()\">Judal</button><button onClick = \"travelNokSet()\">Nok</button><button onClick = \"again()\">Stay</button></p>";
    } else {
        distance = distanceToNok;
        destination = 'Nok';
        clear();
        document.innerHTML = "<p>The only nearby town is the town of Nok. Do you wish to travel there?</p>";
        document.innerHTML = document.innerHTML + "<p><button onClick = \"travelNok()\">Yes</button><button onClick = \"again()\">No</button></p>";
    }
};


function exploreArgo() {
    //If you decide to explore, you are given the choice to go to an alley.
    if (ambushArgoT === true) {
        //If you've already been ambushed, it tells you there's nothing there.
        document.innerHTML = document.innerHTML + "<p>You\'ve already explored the alley.</p>";
    } else if (ambushArgoT === false) {
        clear();
        //If you haven't been ambushed or left the alley but decide to come back, then it loads the same choice as above.
        document.innerHTML = "You find a small alley.";
        document.innerHTML = document.innerHTML + "<p><button onClick = \"ambushArgo()\">Explore Alley</button><button onClick = \"again()\">Leave the alley</button></p>";
    }
}

function shopArgo() {
    //A shop with materials, that have buttons that allow you to upgrade your sword.
    clear();
    document.innerHTML = "You have " + gold + " gold. What would you like to purchase?";
    document.innerHTML = document.innerHTML + "<p><button onClick = \"armorArgo()\">Armor $20</button><button onClick = \"swordArgo()\">Sword $20</button><button onClick = \"healthArgo()\">Restore Health $10</button><button onClick = \"again()\">Leave</button></p>";
};

function swordArgo() {
    //Sword purchasing.
    if (swordPurchase === false) {
        if (gold < 20) {
            document.innerHTML = document.innerHTML + "You don't have enough.";
            again();
        } else {
            window.alert("You purchased a sword! + 3 attack!");
            attack = attack + 3;
            gold = gold - 20;
            again();
            swordPurchase = true;
        }
    } else if (!swordPurchase) {
        if (gold < 20) {
            document.innerHTML = document.innerHTML + "<p>You don't have enough.</p>";
            again();
        } else {
            window.alert("You purchased a sword! + 3 attack!");
            attack = attack + 3;
            gold = gold - 20;
            again();
            swordPurchase = true;
        }
    } else {
        document.innerHTML = document.innerHTML + "You already purchased a sword.";
        again();
    }
};

function armorArgo() {
    //armor purchasing
    if (armorPurchase === false) {
        if (gold < 20) {
            document.innerHTML = document.innerHTML + "You can't afford that!";
            again();
        } else {
            gold = gold - 20;
            window.alert("You purchased some armor! + 4 defense!");
            defense = defense + 4;
            again();
            armorPurchase = true;
        }
    } else if (!armorPurchase) {
        if (gold < 20) {
            document.innerHTML = document.innerHTML  + "You can't afford that!";
            again();
        } else {
            gold = gold - 20;
            window.alert("You purchased some armor! + 4 defense!");
            defense = defense + 4;
            again();
            armorPurchase = true;
        }
    } else {
        document.innerHTML = document.innerHTML + "<p>You've already purchased armor!</p>";
        again();
    }
};

function healthArgo() {
    //restores health
    if (maxHealth === health) {
        document.innerHTML = document.innerHTML + "<p>You're already at full health!</p>";
        again();
    } else {
        if (gold < 10) {
            document.innerHTML = document.innerHTML + "<p>You can't afford that!</p>";
            again();
        } else {
            gold = gold - 10;
            health = maxHealth;
            document.innerHTML = document.innerHTML + "<p>Health restored!</p>";
            again();
        }
    }
};


function ambushArgo() {
    //Attacked. For a full rundown of combat code, see Line 25 of Story.js
    clear();
    document.innerHTML = "You are attacked by thugs!";
    var attacked = true;
    enemyHealth = 5;
    enemyDefense = 5;
    enemyAttack = 5;
    while (attacked === true) {
        if (enemyHealth <= 0) {
            attacked = false;
            window.alert('You win! + 10 gold!');
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
                ambushArgoT = true;
                if (health > maxHealth) {
                    health = maxHealth;
                }
                again();
            } else {
                criticalChance = Math.floor(Math.random() * 5);
                enemyAttack2 = enemyAttack + criticalChance - defense;
                if (enemyAttack2 < 0) {
                    window.alert("The enemy attack did nothing...");
                } else {
                    health = health - enemyAttack2;
                    window.alert("The enemy did " + enemyAttack2 + "!");
                    window.alert("You are now at " + health + " hit points!");
                }
            }
        }
    }
};
