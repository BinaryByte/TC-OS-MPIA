var goldGiven;
var destroyed;
var ratDefeated;
function again() {
    clear();
    //Presents you choices to do stuff in argo.
    document.body.innerHTML = document.body.innerHTML + "<p>You are in the town of Argo.</p>";
    document.body.innerHTML = document.body.innerHTML + "<button onClick = \"exploreArgo()\"> Explore </button><button onClick = \"shopArgo()\"> Shop </button><button onClick = \"leaveArgo()\"> Travel to Nok </button>";
};


function leaveArgo() {
    //Presents you with the leave choice.
    document.body.innerHTML = "You leave Argo.";
    if (nokBurned === true) {
        document.body.innerHTML = document.body.innerHTML + "<p><button onClick = \"travelJudalSet()\"> Judal </button><button onClick = \"travelNokSet()\"> Nok </button><button onClick = \"again()\"> Stay </button></p>";
    } else {
        distance = distanceToNok;
        destination = 'Nok';
        destinationName = 'Nok';
        clear();
        document.body.innerHTML = "<p>The only nearby town is the town of Nok. Do you wish to travel there?</p>";
        document.body.innerHTML = document.body.innerHTML + "<p><button onClick = \"travelNok()\"> Yes </button><button onClick = \"again()\"> No </button></p>";
    }
};


function exploreArgo() {
    var chances = Math.floor(Math.random() * 6)
    switch(chances){
        case 0:
             if (ambushArgoT === true) {
        //If you've already been ambushed, it tells you there's nothing there.
        document.body.innerHTML = document.body.innerHTML + "<p>You find nothing...</p>";
    } else if (ambushArgoT === false) {
        clear();
        //If you haven't been ambushed or left the alley but decide to come back, then it loads the same choice as above.
        document.body.innerHTML = "You find a small alley.";
        document.body.innerHTML = document.body.innerHTML + "<p><button onClick = \"ambushArgo()\"> Explore Alley </button><button onClick = \"again()\"> Leave the alley </button></p>";
    }
            break;
        case 1:
            helpCat();
            break;
        case 2:
            ratQuest();
            break;
        case 3:
            religion();
            break;
        case 4:
            ratQuest();
            break;
        case 5:
            ambushArgo();
            break;
    }
    //If you decide to explore, you are given the choice to go to an alley.
}

function shopArgo() {
    //A shop with materials, that have buttons that allow you to upgrade your sword.
    clear();
    document.body.innerHTML = "You have " + gold + " gold. What would you like to purchase?";
    document.body.innerHTML = document.body.innerHTML + "<p><button onClick = \"armorArgo()\"> Armor $20 </button><button onClick = \"swordArgo()\"> Sword $20 </button><button onClick = \"healthArgo()\"> Restore Health $10 </button><button onClick = \"again()\"> Leave </button></p>";
};

function swordArgo() {
    //Sword purchasing.
    if (swordPurchase === false) {
        if (gold < 20) {
            window.alert("You don't have enough.");
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
            window.alert("You don't have enough.");
            again();
        } else {
            window.alert("You purchased a sword! + 3 attack!");
            attack = attack + 3;
            gold = gold - 20;
            again();
            swordPurchase = true;
        }
    } else {
        window.alert("You already purchased a sword.");
        again();
    }
};

function armorArgo() {
    //armor purchasing
    if (armorPurchase === false) {
        if (gold < 20) {
            window.alert("You can't afford that!");
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
            window.alert("You can't afford that!");
            again();
        } else {
            gold = gold - 20;
            window.alert("You purchased some armor! + 4 defense!");
            defense = defense + 4;
            again();
            armorPurchase = true;
        }
    } else {
        window.alert("You've already purchased armor!");
        again();
    }
};

function healthArgo() {
    //restores health
    if (maxHealth === health) {
        window.alert("You're already at full health!");
        again();
    } else {
        if (gold < 10) {
            window.alert("You can't afford that!");
            again();
        } else {
            gold = gold - 10;
            health = maxHealth;
            window.alert("Health restored!");
            again();
        }
    }
};


function ambushArgo() {
    //Attacked. For a full rundown of combat code, see Line 25 of Story.js
    clear();
    document.body.innerHTML = "You are attacked by thugs!";
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
function helpCat(){
     var luck=Math.floor((Math.random() * 10) + 1);
    if(luck <=7){
    clear();
    edit("There is an old woman screaming for help nearby, when you look, you see that her cat is stuck in a tree. <p><input type=\"button\" value=\" Help \" onClick=\"helpLady()\"> </input> <input type=\"button\" value=\" Leave \" onClick=\"again()\"> </input></p>");
    } else {
    edit("<p>You find an abandoned alley.</p>");
    }
}
function helpLady(){
    clear();
   var luck=Math.floor((Math.random() * 10) + 1);
  if (luck<=7){
   clear(); 
   gold=gold+5
   edit("You reach up and grab the cat, carrying it to the old lady. In gratitude she gives you 5 gold! <p><input type=\"button\" value=\" Leave \" onClick=\"again()\"></input></p>");
  }
  else{
    clear();
    edit("You reach up to help the cat, but it is out of reach. A man with a ladder comes and helps the lady. She thanks everyone, after giving the man five gold, and everyone leaves. <p><input type=\"button\" value=\" leave \" onClick=\"again()\"></input></p>");
  }
    
}
function religion(){
     clear();
     var luck=Math.floor((Math.random() * 10) + 1);
     if(luck <= 7){
         if(goldGiven === true){
    edit("You find the statue of ANT. It\'s radiance shines upon you. <input type = \"button\" value = \" leave \" onClick = \"again()\"></input");
        } else if (destroyed === true) {
    edit("You find the destroyed statue of ANT. You feel an ominous presence here.  <input type = \"button\" value = \" leave \" onClick = \"again()\"></input>");
        } else {
    clear();
    edit("You find a man standing at a statue to the all-powerful god ANT, and asks you to either <input onClick=\"pray()\" type=\"button\" value=\" Pray \"></input> to the statue, or <input onClick=\"wrath()\" type=\"button\" value=\" break it \"></input>.");
    }
    } else {
    window.alert("Nothing but the wind...");
    again();
     }
     }
function pray(){
    clear();
    maxHealth=maxHealth+1;
    defense=defense+1;
    health=maxHealth;
    edit("You feel blessed. Do you: <input type=\"button\" onClick=\"prayGold()\" value=\"give gold (50 gold)\"></input>, or <input type=\"button\" onClick=\"again()\" value=\"leave\"></input>.")
}
function prayGold(){
    if(gold >= 50){
    goldGiven = true;
    console.log("Working.");
    gold=gold - 50;
    maxHealth=maxHealth + 3;
    travelingSpeed = travelingSpeed + 3;
    defense=defense + 2;
    attack=attack + 3;
    health=maxHealth;
    edit("You feel divine providence shining upon you. <input type=\"button\" onClick=\"again()\" value=\"leave\"></input>");
    } else {
    clear();
    edit("You can't afford to give a gold offering. <input type = \"button\" onClick = \"again()\" value = \"leave\"</input>");
    }
}
function wrath(){
    clear();
    destroyed = true;
    gold=gold+50;
    maxHealth=maxHealth-3;
    defense=defense-3;
    health=maxHealth;
    edit("You have recieved 50 gold, you are now at " + gold + "gold and you have lost health, it is now at." + health + "<input type=\"button\" onClick=\"again()\" value=\"go back\"></input>");
}





function ratQuest(){
    if(ratDefeated === true){
        edit("<p>You stumble upon the same tavern in which you were asked to kill the great rat. Ahh. Memories.</p>");
    } else {
    clear();
    edit("You wander around, and after awhile end up in the tavern. There, you strike up a conversation with an old man who tells you a tale of the 'Grand Rat' a legendary rat living in the sewers of Argo. He says he'll reward you if you can kill it and bring him it's head.<p><po style=\"color:green\"><input type=\"button\" value=\" Accept the quest \" onClick=\"sewer()\"></input></po><po style=\"color:red\"><input type=\"button\" value=\" Deny the quest \" onClick=\"again()\"></input></po></p>");
}
        
    }
function sewer(){
    clear();
    edit("The old man lets you into the sewer through a rusted grate he opens with an equally rusted key. He locks the door behind you, it's too late to turn back now. <p><input value=\" Keep Going \" type=\"button\" onClick=\"enterSewer()\"></input></p>");
}
function enterSewer(){
    //I need tyler to help me here make an array that is 3x3. you start in the bottom right and can go up/down/left/right until you reach the boss in the top right, every time you move one square you have a chance to fight a rat or get 5 gold.
    clear();
    edit("North, south, east, or west? <button onClick = \"goNorth()\"> North </button><button onClick = \"goSouth()\"> South </button><button onClick = \"goEast()\"> East </button><button onClick = \"goWest()\"> West </button>");
}
var playerLocation = 0;
function goNorth(){
    if(playerLocation === 2){
        window.alert("You can't go north.");
        enterSewer();
    } else if (playerLocation === 5){ 
        window.alert("You can't go north.");
        enterSewer();
    } else if (playerLocation === 8){
        window.alert("You can\'t go north.");
        enterSewer();
    } else {
        playerLocation = playerLocation + 1;
    findLocation();
    }
}
function goSouth(){
    if(playerLocation === 0){
        window.alert("You can't go south.");
        enterSewer();
    } else if (playerLocation === 3){
        window.alert("You can't go south.");
        enterSewer();
    } else if (playerLocation === 6){
        window.alert("You can't go south.");
        enterSewer();
    } else {
        playerLocation = playerLocation - 1;
    findLocation();
    }
}
function goEast(){
    if(playerLocation === 6){
        window.alert("You can't go east.");
        enterSewer();
    } else if (playerLocation === 7){
        window.alert("You can't go east.");
        enterSewer();
    } else if (playerLocation === 8){
        window.alert("You can\'t go east.");
        enterSewer();
    } else {
        playerLocation = playerLocation + 3;
    findLocation();
    }
}
function goWest(){
     if(playerLocation === 0){
        window.alert("You can't go west.");
        enterSewer();
    } else if (playerLocation === 1){
        window.alert("You can't go west.");
        enterSewer();
    } else if (playerLocation === 2){
        window.alert("You can't go west.");
        enterSewer();
    } else {
        playerLocation = playerLocation - 3;
    findLocation();
    }
}

function findLocation(){
    if(playerLocation === 8){
        clear();
        edit("You\'ve found the boss! <button onClick =\"bossBattle()\"> Boss Battle </button>");
    }
    console.log(playerLocation);
    randomSewerEncounter();
}

function randomSewerEncounter(){
    var chances = Math.floor(Math.random() * 2)
    if(playerLocation === 8) {
       console.log("Boss found."); 
    } else if(chances > 0){
        window.alert("You\'ve found treasure! +5 gold!");
        gold = gold + 5;
        enterSewer();
    } else {
        enemyHealth = 5;
        enemyAttack = 4;
        enemyDefense = 4;
        enemyMaxHealth = 5;
        enemy = 'Rat';
        combatEnd = 'sewer';
        combatSystem()
        //Combat code here.
    }
}
function bossBattle(){
    //battle code here
    enemyHealth = 12;
    enemyAttack = 7;
    enemyDefense = 1;
    enemyMaxHealth = 12;
    enemy = 'Great Rat';
    combatEnd = 'sewerBoss';
    combatSystem();
   }
function bossBattleEnd(){
    clear();
    ratDefeated = true;
     gold=gold+35;
    defense=defense+2;
    edit("You find a rusted helm in the rat's nest, +2 defense! You leave the dungeon through a secret door you found behind the rat's nest, and head back up to the tavern with the rat's severed head. Inside, you find the old man, who pays you handsomely for the deed. +35 gold! <input value=\"leave\" onClick=\"again()\" type=\"button\"></input>");

}
