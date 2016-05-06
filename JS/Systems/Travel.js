rockFactionP = null;
factionEnemy = 0;
var faction = null;
var moneyWon = 0;
var moneyLost = 0;
var specialEncounter = 'none';
var gnome;
goal = 5;
var travel = {
    place: 'Nok'
};

function travelNokSet(){
    if(destination === 'Judal'){
        distance = 20;
    } else if (destination === 'Argo'){
        distance = 50;
    }
    destination = 'NokBurned';
    destinationName = 'Nok';
    travelNok();
}

function travelNok() {
    //Traveling to a place
    clear();
    //Says the destination, and says the distance, and executes travelEventNok every time you press the button.
    document.body.innerHTML = "You are now traveling to " + destinationName + ". There are " + distance + " miles left. Your traveling speed is " + travelingSpeed + " miles per day.";
    document.body.innerHTML = document.body.innerHTML + "<p><button onClick = \"travelEventNok()\">Time Passes</button></p>";
    if (distance <= 0) {
        //If your distance is equal to 0, it runs a function arrivePlace()
        clear();
        document.body.innerHTML = "You have arrived at " + destinationName + "!";
        document.body.innerHTML = document.body.innerHTML + "<p><button onClick = \"arrivePlace()\">Enter</button></p>";
    } else if (distance = 2){
        executeEncounter();
    }
};

function executeEncounter(){
    switch(specialEncounter){
        case 'none':
            travelNok();
            break;
        case 'frogAttackR':
            bossFightRuillind();
            break;
        default:
            window.alert("Error! Something went wrong. Please notify the developer.");
            travelNok();
            break;
    }
}

function travelEventNok() {
    //Creates random events for stuff to happen.
    var travelEvent = Math.floor(Math.random() * 100);
    if (travelEvent >= 50) {
        distance = distance - travelingSpeed;
        travelNok();
    } else {
        var travelEventBad = Math.floor(Math.random() * 7);
        distance = distance - travelingSpeed;
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
                    rockConcert();
                } else {
                    storylineStart();
                }
                break;
            case 4:
                if (storyLineBegan === true) {
                    cheeseThrowing();
                } else {
                    storylineStart();
                }
                break;
            case 5:
                rockConcert();
                break;
            case 6:
                banditWrestling();
                break;
            case 7:
                cheeseThrowing();
                break;
            default:
                travelNok();
                break;
        }
    }
};

function travelArgo() {
    //This is run when traveling from Nok.
    distance = 50;
    destination = 'Argo';
    travel.place = 'Argo';
    travelNok();
};


function attackBandits() {
    //For a rundown of combat code, see line 25 of Story.js
    clear();
    //Bandit attack
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
    document.body.innerHTML = "You have found a cave!";
    document.body.innerHTML = document.body.innerHTML + "<p>Do you wish to go inside?</p>";
    document.body.innerHTML = document.body.innerHTML + "<p><button onClick = \"goCave()\">Yes</button><button onClick = \"travelNok()\">No</button></p>";
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
    document.body.innerHTML = "You enter the cave.";
    caveRandom();
};

function caveRandom() {
    //Is the table which pulls up the events.
    var caveEvent = Math.floor(Math.random() * 4)
    switch (caveEvent) {
        case 0:
            document.body.innerHTML = document.body.innerHTML + "Nothing... <p><button onClick = \"travelNok()\">Leave</button></p>";
            break;
        case 1:
            gold = gold + 10;
            document.body.innerHTML = document.body.innerHTML + "You find treasure! + 10 gold! <p><button onClick = \"travelNok()\">Leave</button></p>";
            break;
        case 2:
            document.body.innerHTML = document.body.innerHTML + "Bandit lair! Watch out!";
            attackBanditsCave();
            break;
        case 3:
            magicCaveEvent();
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
        case 'ruillind':
            arriveRuillind();
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
        destinationName = 'Judal';
        distance = 20;
        travelNok();
    } else if (destination === 'Argo') {
        destination = 'Judal';
        destinationName = 'Judal';
        distance = 70;
        travelNok();
    }
};

function magicCave(){
    //Function called magic cave which has magical items.
    document.body.innerHTML = "You have found a cave! <p>Do you wish to go inside?</p><p><button onClick = \"magicCaveEvent()\">Yes</button><button onClick = \"travelNok()\">No</button></p>";
}
function magicCaveEvent(){
    window.alert("You head inside the cave. A magical presence can be felt.");
    var chances = Math.floor(Math.random() * 10);
    switch(chances){
        case 0:
            document.body.innerHTML = "You find shoes of running! +5 to traveling speed! <p><button onClick = \"travelNok()\">Leave</button></p>";
            travelingSpeed = travelingSpeed + 5;
            break;
        case 1:
            document.body.innerHTML = "You find a lucky coin! + 1% chance to get gold! <p><button onClick = \"travelNok()\">Leave</button></p>";
            goldChance = goldChance + 0.01;
            break;
        case 2:
            document.body.innerHTML = "You find some treasure! <p><button onClick = \"treasureChance()\">Open</button></p>";
            break;
        case 3:
            attack = attack + 1;
            document.body.innerHTML = "You find a potion of the attacker! + 1 to attack! <button onClick = \"travelNok()\">Leave</button>";
            break;
        case 4:
            defense = defense + 1;
            document.body.innerHTML = "You find a potion of the defender! +1 to defense! <button onClick = \"travelNok()\">Leave</button>";
            break;
        case 5:
            window.alert("You find a slime inhabiting the cave. It attacks you.");
            combatEnd = 'TravelNok';
            enemy = 'Slime';
            enemyAttack = 5;
            enemyDefense = 20;
            enemyMaxHealth = 10;
            enemyHealth = 10;
            combatSystem();
            break;
        case 6:
            window.alert("You find nothing in this magical cave.");
            travelNok();
            break;
        case 7:
            document.body.innerHTML = "You find a magical toadstool. Do you eat it? <p><button onClick = \"toadstoolChance()\">Yes</button><button onClick - \"travelNok()\">No</button></p>";
            break;
        case 8:
            document.body.innerHTML = "A mighty wizard comes and challenges you to a duel! Do you fight him? <button onClick = \"wizardDuel()\">Yes</button><button onClick = \"travelNok()\">No</button>";
            break;
        case 9:
            window.alert("You find nothing in this magical cave.");
            travelNok();
            break;
    }
}

function treasureChance(){
    var chance = Math.floor(Math.random() * (level * 7)) * goldChance;
    window.alert("You\'ve found " + chance + " gold!");
    gold = gold + chance;
    travelNok();
}

function toadstoolChance(){
    var chance = Math.floor(Math.random() * 100)
    if(chance > 50){
        window.alert("The toadstool gave you a magical bonus! +1 health!");
        maxHealth = maxHealth + 1;
        health = maxHealth;
        window.alert("Your health is now:" + health);
        travelNok();
    } else {
        window.alert("The toadstool hexes you! -1 health!");
        maxHealth = maxHealth - 1;
        health = maxHealth;
        window.alert("Your health is " + health);
        travelNok();
    }
}

function wizardDuel(){
    if(wizardMagic === true){
        window.alert("As you are a fellow wizard, you know the rules of such a duel. You prepare your magic...");
        combatEnd = 'WizardDuel';
        enemy = 'Wizard';
        enemyAttack = 13;
        enemyDefense = 7;
        enemyMaxHealth = 10;
        enemyHealth = 10;
        combatSystem();
    } else {
        window.alert("The wizard rejects, seeing you as someone without magic. \"Come back when you are magical. Then we\'ll talk.\"");
        travelNok();
    }
}

function rockConcert(){
    var factionChoose = Math.floor(Math.random() * 5);
    switch(factionChoose){
        case 0:
            faction = "Zombies";
            break;
        case 1:
            faction = "Ghouls";
            break;
        case 2:
            faction = "Dwarves";
            break;
        case 3:
            faction = "Humans";
            break;
        case 4:
            faction = "Scarecrows";
            break;
    }
    document.body.innerHTML = "You discover a group of " + faction + " partying at a rock concert. One of them notices you, ";
    if(rockFactionP === null){
        document.body.innerHTML = document.body.innerHTML + " and asks you if you want to join them in partying across the land. <p><button onClick = \"rockFactionJoin()\">Yes</button><button onClick = \"attackRock()\">No</button></p>";
    } else if (rockFactionP === faction){
        if(factionEnemy > goal){
            document.body.innerHTML = document.body.innerHTML + " and congratulates you on destroying " + goal + " rock concerts. They give you some gold. <button onClick = \"treasureChance()\">Leave</button>";
            goal = goal + 5;
            factionEnemy = 0;
        } else {
            document.body.innerHTML = document.body.innerHTML + " and you party with them for a little while, then leave. <button onClick = \"travelNok()\">Leave</button>";
        }
    } else {
        attackRock();
    }
    
}

function rockFactionJoin(){
    rockFactionP = faction;
    window.alert("You join the " + faction + "! You can now attend their concerts in the future. The " + faction + " ask you to kill 5 enemy rock concerts.");
    travelNok();
}

function attackRock(){
    combatEnd = 'RockCombat';
        enemy = 'A mob of ' + faction;
        enemyAttack = 7;
        enemyDefense = 10;
        enemyMaxHealth = 40;
        enemyHealth = 40;
        combatSystem();
}

function banditWrestling(){
    document.body.innerHTML = "You come upon a group of bandits who are wrestling. They ask you if you want to join them. Do you accept? <p><button onClick = \"wrestle()\">Yes</button><button onClick = \"travelNok()\">No</button></p>";
}

function wrestle(){
    window.alert("You start to wrestle the bandits...");
    var chances = Math.floor(Math.random()* attack) + attack;
    if(chances > attack/2){
        window.alert("You win! Congratulations! You gain some gold.");
        treasureChance();
    } else {
        window.alert("You lose! - 10 gold!");
        gold = gold - 10;
    }
}

function cheeseThrowing(){
    moneyWon = 0;
    moneyLost = 0;
    document.body.innerHTML = "You happen upon a group of gnomes, who are throwing cheese at a target. One of the gnomes asks you if you want to bet. <button onClick = \"bettingCheese()\">Yes</button><button onClick = \"travelNok()\">No</button>";
}
function bettingCheese(){
    document.body.innerHTML = "Money Won: " + moneyWon + " Money Lost: " + moneyLost + " <p>Who will you bet on: </p><p><button onClick = \"Gouda()\">Gouda the Strong</button><button onClick = \"Brie()\">Brie the fast</button><button onClick = \"Provolone()\">Provolone the swift</button><button onClick = \"Cheddar()\">Cheddar the Lucky</button><button onClick = \"getMoney()\">Leave</button></p>";
}
function Gouda(){
    gnome = 'gouda';
    goBetCheese();
}

function Brie(){
    gnome = 'brie';
    goBetCheese();
}

function Provolone(){
    gnome = 'provolone';
    goBetCheese();
}

function Cheddar(){
    gnome = 'cheddar'
    goBetCheese();
    
}
function goBetCheese(){
    var chances = Math.floor(Math.random()*400)
    if(chances <= 100){
        window.alert("Cheddar wins!");
        if(gnome === 'cheddar'){
            moneyWon = moneyWon + 20;
        } else {
            moneyLost = moneyLost + 10;
        }
        bettingCheese();
    } else if (chances <= 200){
        window.alert("Provolone wins!");
        if(gnome === 'provolone'){
            moneyWon = moneyWon + 20;
        } else {
            moneyLost = moneyLost + 10;
        }
        bettingCheese();
    } else if (chances <= 300){
        window.alert("Brie wins!");
        if(gnome === 'brie'){
            moneyWon = moneyWon + 20;
        } else {
            moneyLost = moneyLost + 10;
        }
        bettingCheese();
    } else {
        window.alert("Gouda wins!");
        if(gnome === 'gouda'){
            moneyWon = moneyWon + 20;
        } else {
            moneyLost = moneyLost + 10;
        }
        bettingCheese();
    }
}
function getMoney(){
    gold = gold + (moneyWon - moneyLost);
    window.alert("You now have " + gold + " gold.");
    travelNok();
}
