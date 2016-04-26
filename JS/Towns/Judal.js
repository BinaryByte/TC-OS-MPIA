var cabbageDone = false;
function arriveJudal() {
    //Presents you with the choice to leave.
    clear();
    document.body.innerHTML = "You are now in the city of Judal.";
    document.body.innerHTML = document.body.innerHTML + "<p><button onClick = \"exploreJudal()\"> Explore </button><button onClick = \"judalStore()\"> Shop </button><button onClick = \"leaveJudal()\"> Leave </button></p>";
};
//<input value=\"\" type=\"button\" onClick=\"\"></input> button template

//everything below this needs to be added to an explore function

function leaveJudal(){
    document.body.innerHTML = " Where would you like to go? <p><button onClick = \"argoJudal()\"> Argo </button><button onClick = \"nokJudal()\"> Nok </button><button onClick = \"arriveJudal()\"> Stay </button></p>";
}

function exploreJudal(){
    var chances = Math.floor(Math.random() * 5);
    switch(chances){
        case 0:
            kingQuest();
            break;
        case 1:
            exploreCabbage();
            break;
        default:
            window.alert("Nothing...");
            break;
    }
}

function nokJudal(){
    destination = 'NokBurned';
    destinationName = 'Nok';
    distance = 20;
    travelNok();
}

function argoJudal(){
    destination = 'Argo';
    destinationName = 'Argo';
    distance = 70;
    travelNok();
}

function judalStore() {
    clear();
    edit("Welcome to [Judal Olympic Goods Store], here you can buy things that people in the olympics use! <input value=\" Training \" type=\"button\" onClick=\"judalStoreTraining()\"></input>, <input value=\" Equipment \" type=\"button\" onClick=\"judalStoreEquipment()\"></input> <input value=\" Shifty Alley \" type=\"button\" onClick=\"judalStoreSecret()\"></input> <input value=\" leave \" type=\"button\" onClick=\"arriveJudal()\"></input>");
}
function judalStoreTraining(){
    clear();
    edit("You can train in, <input value=\" defense-50 gold \" type=\"button\" onClick=\"trainDefense()\"></input>, <input value=\" attack-50 gold \" type=\"button\" onClick=\"trainAttack()\"></input>, or <input value=\" stamina/health-40 gold \" type=\"button\" onClick=\"trainStamina()\"></input>. <input value=\" Store \" type=\"button\" onClick=\"judalStore()\"></input>");
}
function judalStoreEquipment(){
    clear();
    edit("you can buy a <input value=\" javelin-75 gold \" type=\"button\" onClick=\"buyJavelin()\"></input>, <input value=\" padding-75 gold \" type=\"button\" onClick=\"buyPadding()\"></input>, or <input value=\" shoes-40 gold \" type=\"button\" onClick=\"buyShoes()\"></input>. <input value=\" Store \" type=\"button\" onClick=\"judalStore()\"></input>");
}
function judalStoreSecret(){
    clear();
    edit("a shifty looking man comes around the corner, 'Hey kid, want to buy some steroids?' <input onClick=\"steroids()\" type=\"button\" value = \"yes\"></input> <input value=\" Store \" type=\"button\" onClick=\"judalStore()\"></input> ");
}
function trainDefense(){
    clear();
    if (gold>=50){
         gold=gold-50;
         defense=defense+2;
         edit("You train long and hard, defense+2. <input value=\"Store\" type=\"button\" onClick=\"judalStore()\"></input>")
    }
    else {
        edit("You can't afford that. <input value=\"Store\" type=\"button\" onClick=\"judalStore()\"></input> ");
    }
}
function trainAttack(){
    clear();
    if (gold>=50){
    gold=gold-50;
    attack=attack+2;
    edit("You train long and hard, attack+2. <input value=\"Store\" type=\"button\" onClick=\"judalStore()\"></input>")
    }
    else{
         edit("You can't afford that. <input value=\"Store\" type=\"button\" onClick=\"judalStore()\"></input> ");
    }
}
function trainStamina(){
    clear();
    if (gold>=40){
    gold=gold-40;
    health= maxHealth + 2;
    maxHealth = health;
    edit("You train long and hard, health+2. <input value=\"Store\" type=\"button\" onClick=\"judalStore()\"></input>")
    }
    else{
         edit("You can't afford that. <input value=\"Store\" type=\"button\" onClick=\"judalStore()\"></input> ");
    }
}
function buyJavelin(){
    clear();
    if (gold>=75){
    gold=gold-75;
    attack=attack+4;
    edit("You buy a javelin, attack+4 <input value=\"Store\" type=\"button\" onClick=\"judalStore()\"></input>");
    }
    else{
         edit("You can't afford that. <input value=\"Store\" type=\"button\" onClick=\"judalStore()\"></input> ");
    }
}
function buyPadding(){
    clear();
    if (gold>=75){
    gold=gold-75;
    defense=defense+4;
    edit("You buy padding, defense+4 <input value=\"Store\" type=\"button\" onClick=\"judalStore()\"></input>");
    }
    else{
         edit("You can't afford that. <input value=\"Store\" type=\"button\" onClick=\"judalStore()\"></input> ");
    }
}
function buyShoes(){
    clear();
    if (gold>=40){
    gold=gold-40;
    travelingSpeed=travelingSpeed+2;
    edit("You buy some shoes, move speed+2 <input value=\"Store\" type=\"button\" onClick=\"judalStore()\"></input>");
    }
    else{
         edit("You can't afford that. <input value=\"Store\" type=\"button\" onClick=\"judalStore()\"></input> ");
    }
}
function steroids(){
    clear();
    edit("Do you want <input value=\" Strength Steroids-150 gold \" type=\"button\" onClick=\"steroidStrength()\"></input>, <input value=\" Defense Steroids-150 gold \" type=\"button\" onClick=\"steroidDefense()\"></input>, or <input value=\" Mystery-Free \" type=\"button\" onClick=\"steroidMystery()\"></input> <input value=\" store \" type=\"button\" onClick=\"judalStore()\"></input>");
}
function steroidStrength(){
    clear();
    if (gold>=150){
    gold=gold-150;
    attack=attack+10;
    edit("You feel pumped, +10 strength, <input value=\" store \" type=\"button\" onClick=\"judalStore()\"></input>");
    }
    else{
         edit("You can't afford that. <input value=\" Store \" type=\"button\" onClick=\"judalStore()\"></input> ");
    }
}
function steroidDefense(){
    clear();
    if (gold>=150){
    gold=gold-150;
    defense=defense+10;
    edit("You feel pumped, +10 defense, <input value=\" store \" type=\"button\" onClick=\"judalStore()\"></input>");
    }
    else{
         edit("You can't afford that. <input value=\" Store \" type=\"button\" onClick=\"judalStore()\"></input> ");
    }
}
function steroidMystery(){
    clear();
    health=health-5;
    defense=defense+3;
    edit("You feel strange, <input value=\" store \" type=\"button\" onClick=\"judalStore()\"></input>");
}

function kingQuest(){
    clear();
    edit("After wandering around for a while you happen upon a messenger for the king of Judal (the mayor promoted himself), who says he's been looking all over for you. <p>The formal declaration states: </p> <p>Any and all adventurers (guards, wizards, and merchants) must report to my situation room immediately for a mission!</p> <p><input value=\" Help the king \" type=\"button\" onClick=\"kingRoom()\"></input> <input value=\" Leave \" type=\"button\" onClick=\"arriveJudal()\"></input></p>");
}
function kingRoom(){
    clear();
    edit("As you arrive at the mayor's castle, an attendant guides you to a lavish living room. You sit down on a plush couch, and shortly the mayor comes to talk to you. 'You must procure a turkey for my dinner tonight.' <input value=\" Go find a turkey \" type=\"button\" onClick=\"turkeyHunt()\"></input> ");
}
function turkeyHunt(){
    /* I want you to click a button and have a 1/5 chance of encountering a turkey, which has one health, and no stats. If you kill it go to kingVictory()
    */
    clear();
    edit("<input value = \"Hunt Turkeys\" onClick = \"findTurkey()\" type = \"button\"></input>");
}

function findTurkey(){
    var chances = Math.floor(Math.random() * 5);
    if(chances === 0){
        window.alert("A wild turkey appears!");
        enemyHealth = 1;
        enemyAttack = 0;
        enemyDefense = 0;
        enemyMaxHealth = 0;
        enemy = "Wild Turkey";
        combatEnd = "turkeyHunt";
        combatSystem();
    }
}

function kingVictory(){
    clear();
    maxHealth=maxHealth+2
    health=maxHealth;
    gold=gold+15
    edit("The mayor takes the turkey, and using his chef's magic, instantly turns it into a lavish feast. He invites you to eat with him, and gives you 15 gold. Your health is now " + health + " health. Your gold is now " + gold + " gold. <input value=\"leave\" onClick=\"arriveJudal()\" type=\"button\"></input>");
}
function exploreCabbage(){
    clear();
    if (cabbageDone===false){
    edit("As you explore, you are drawn to the outskirts of town by the delicious smell of boiled cabbage soup. As you approach you see a long line to a restaurant called Cabbage Deluxe. <input value=\" Wait in Line \" type=\"button\" onClick=\"judalRestaurant()\"></input><input value=\" leave \" type=\"button\" onClick=\"arriveJudal()\"></input>");
    } 
    else{
        clear();
        edit("The cabbage store is closed <input type=\"button\" onClick=\"arriveJudal()\"> leave </input>");
    }
}
function judalRestaurant(){
    clear();
    cabbageDone=true;
    edit("It's your turn to order, and the man in the window gives you three options, <input value=\" Cabbage Soup \" type=\"button\" onClick=\"cabbageSoup()\"></input>, <input value=\" cabbage casserole \" type=\"button\" onClick=\"cabbageCasserole()\"></input>, <input value=\" cabbage sandwich \" type=\"button\" onClick=\"cabbageSandwich()\"></input>. All of which are free because it's free cabbage Tuesday, sponsored by the mayor.");
}
function cabbageSoup(){
    clear();
    goldChance=goldChance + 0.02;
    edit("The cabbage soup makes you fundamentally happy inside. <input value=\" leave \" type=\"button\" onClick=\"arriveJudal()\"></input>");
}
function cabbageCasserole(){
    clear();
    maxHealth=maxHealth+2;
    health=maxHealth;
    edit("The cabbage casserole fills you up! <input value=\" leave \" type=\"button\" onClick=\"arriveJudal()\"></input>");
}
function cabbageSandwich(){
    clear();
    defense=defense + 2;
    edit("The cabbage sandwich is delicious! <input value=\" leave \" type=\"button\" onClick=\"arriveJudal()\"></input>");
}
