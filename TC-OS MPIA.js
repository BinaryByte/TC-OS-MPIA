        //Put code in accessible place, then replace this with <script src = "LINK TO CODE"><\script> To make this easy, and not take up so much space.
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
var saved;
clicks = 0;

var document = {
        write: function(text){
                document.innerHTML = document.innerHTML + text;
        }
}

var criticalChance = Math.floor(Math.random() * 5);
var ambushArgoT = false;
function begin() {
    clear();
    //The start. It presents you with a choice of person.
    document.write("You are a...")
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
    if (ambushArgoT === true) {
        //If you've already been ambushed, it tells you there's nothing there.
        document.write("<p>You\'ve already explored the alley.</p>");
    } else if (ambushArgoT === false) {
        clear();
        //If you haven't been ambushed or left the alley but decide to come back, then it loads the same choice as above.
        document.write("You find a small alley.");
        document.write("<p><button onClick = \"ambushArgo()\">Explore Alley</button><button onClick = \"again()\">Leave the alley</button></p>");
    }
}

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





function death() {
    alert("If this reload doesn't work, reload the page manually.");
    window.location.reload();
};
