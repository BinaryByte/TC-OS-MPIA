function arriveJudal() {
    //Presents you with the choice to leave.
    clear();
    document.body.innerHTML = "You are now in the city of Judal.";
    document.body.innerHTML = document.body.innerHTML + "<p><button onClick = \"judalStore()\">Shop</button><button onClick = \"leaveJudal()\">Leave</button></p>";
};
//<input value=\"\" type=\"button\" onClick=\"\"></input> button template

//everything below this needs to be added to an explore function

function leaveJudal(){
    destination = 'Nok';
    travelNok();
}

function judalStore() {
    clear();
    edit("Welcome to [Judal Olympic Goods Store], here you can buy things that people in the olympics use! <input value=\"Training\" type=\"button\" onClick=\"judalStoreTraining()\"></input>, <input value=\"Equipment\" type=\"button\" onClick=\"judalStoreEquipment()\"></input> <input value=\"Shifty Alley\" type=\"button\" onClick=\"judalStoreSecret\"></input> <input value=\"leave\" type=\"button\" onClick=\"arriveJudal()\"></input>");
}
function judalStoreTraining(){
    clear();
    edit("You can train in, <input value=\"defense-30 gold\" type=\"button\" onClick=\"trainDefense()\"></input>, <input value=\"attack-30 gold\" type=\"button\" onClick=\"trainAttack()\"></input>, or <input value=\"stamina/health-20 gold\" type=\"button\" onClick=\"trainStamina\"></input>. <input value=\"Store\" type=\"button\" onClick=\"judalStore()\"></input>");
}
function judalStoreEquipment(){
    clear();
    edit("you can buy a <input value=\"javelin-50 gold\" type=\"button\" onClick=\"buyJavelin()\"></input>, <input value=\"padding-50 gold\" type=\"button\" onClick=\"buyPadding()\"></input>, or <input value=\"shoes-25 gold\" type=\"button\" onClick=\"buyShoes()\"></input>. <input value=\"Store\" type=\"button\" onClick=\"judalStore()\"></input>");
}
function judalStoreSecret(){
    clear();
    edit("a shifty looking man comes around the corner, 'Hey kid, want to buy some steroids?' [yes] <input value=\"Store\" type=\"button\" onClick=\"judalStore()\"></input> ");
}
function trainDefense(){
    clear();
    gold=gold-30;
    defense=defense+2;
    edit("You train long and hard, defense+2. <input value=\"Store\" type=\"button\" onClick=\"judalStore()\"></input>")
}
function trainAttack(){
    clear();
    gold=gold-30;
    attack=attack+2;
    edit("You train long and hard, attack+2. <input value=\"Store\" type=\"button\" onClick=\"judalStore()\"></input>")
}
function trainStamina(){
    clear();
    gold=gold-20;
    health=health+2;
    edit("You train long and hard, health+2. <input value=\"Store\" type=\"button\" onClick=\"judalStore()\"></input>")
}
function buyJavelin(){
    clear();
    gold=gold-50;
    attack=attack+4;
    edit("You buy a javelin, attack+4 <input value=\"Store\" type=\"button\" onClick=\"judalStore()\"></input>");
}
function buyPadding(){
    clear();
    gold=gold-50;
    defense=defense+4;
    edit("You buy padding, defense+4 <input value=\"Store\" type=\"button\" onClick=\"judalStore()\"></input>");
}
function buyShoes(){
    clear();
    gold=gold-25;
    travelingSpeed=travelingSpeed+2;
    edit("You buy some shoes, move speed+2 <input value=\"Store\" type=\"button\" onClick=\"judalStore()\"></input>");
}
function steroids(){
    clear();
    edit("Do you want <input value=\"Strength Steroids-100 gold\" type=\"button\" onClick=\"steroidStrength()\"></input>, <input value=\"Defense Steroids-100 gold\" type=\"button\" onClick=\"steroidDefense()\"></input>, or <input value=\"Mystery-Free\" type=\"button\" onClick=\"steroidMystery()\"></input> <input value=\"store\" type=\"button\" onClick=\"judalStore()\"></input>");
}
function steroidStrength(){
    clear();
    gold=gold-100;
    attack=attack+10;
    edit("You feel pumped, +10 strength, <input value=\"store\" type=\"button\" onClick=\"judalStore()\"></input>");
}
function steroidDefense(){
    clear();
    gold=gold-100;
    defense=defense+10;
    edit("You feel pumped, +10 defense, <input value=\"store\" type=\"button\" onClick=\"judalStore()\"></input>");
}
function steroidMystery(){
    clear();
    health=health-5;
    defense=defense+3;
    edit("You feel strange, <input value=\"store\" type=\"button\" onClick=\"judalStore()\"></input>");
}
