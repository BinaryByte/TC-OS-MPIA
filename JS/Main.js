//Declares all of the variables to be used for later.
var version = 0.1;
var storyLineBegan = false;
var enemyDefense;
var destinationName;
var enemyAttack;
var enemy;
var combatEnd;
gold = 10;
attack = 10;
defense = 10;
var wizardMagic;
var backstory;
var enemyHealth;
var enemyMaxHealth;
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
//The clicks variable is used for detecting how many times you clicked the options menu
var edit = function(text){
        document.body.innerHTML = document.body.innerHTML + text;
}
//Declaring the variable for a critical chance for combat
var criticalChance = Math.floor(Math.random() * 5);
//This variable is used in Argo.js to detect if you were ambushed.
var ambushArgoT = false;
function begin() {
    clear();
    //The start. It presents you with a choice of person.
    document.body.innerHTML = "You are a... <p><button onClick = \"merchant()\">Merchant, </button><button onClick = \"guard()\">Guard, </button>or a <button onClick = \"wizard()\">Wizard </button></p>";
}

function merchant() {
    backstory = "Merchant";
    //You get plus gold, then goes to Argo.
    clear();
    document.body.innerHTML = "You are a merchant. +25 gold.";
    gold = gold + 25;
    again();

}

function guard() {
    //Get plus 2 attack and defense, then go to argo.
    clear();
    backstory = "Guard";
    document.body.innerHTML = "You are a guard. +2 to attack and defense.";
    attack = attack + 2;
    defense = defense + 2;
    again();
};

function wizard() {
    //Gain magic, which will be used later.
    backstory = "Wizard";
    clear();
    document.body.innerHTML = "You are a wizard. You now have a magic attack.";
    wizardMagic = true;
    again();
};

function clear() {
    //clears the page when called.
        document.body.innerHTML = "";
};

var document = {
    innerHTML: function(text){
        document.body.innerHTML = document.body.innerHTML + text;
    }
}

function death() {
        //Reloads the page when you die.
    window.alert("If this reload doesn't work, reload the page manually.");
    window.location.reload();
};
