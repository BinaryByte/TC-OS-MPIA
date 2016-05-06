//button template: <input value=\"###\" type=\"button\" onClick=\"###\"></input>
seasick=true;
captainTalk=false;
var nIsAmazing=false;
var frogAttacked = false;
function bossFightRuillind(){
  frogAttacked = true;
  systems.combat("Giant Frog", 50, 13, 5, "frogAttackR");
}
function arriveRuillind(){
  clear();
  edit("You are now in the port city of Ruillind! <input value=\" Explore \" type=\"button\" onClick=\"exploreRuillind()\"></input> <input value=\" Leave \" type=\"button\" onClick=\"leaveRuillind()\"></input>");
}

function leaveRuillind(){
  clear();
  edit("Where would you like to go to? <button onClick = \"judalRuillind()\">Judal</button>");
}

function judalRuillind(){
  specialEncounter = 'none';
  systems.travel("Judal","Judal",63);
}
function exploreRuillind(){
  var ruillindExploreChance=Math.floor(Math.random()*5)
  if (ruillindExploreChance===0){
    ruillindPort();
  }
  else if (ruillindExploreChance===1){
    clear();
    edit("You find nothing.");
  }
  else if (ruillindExploreChance===2) {
    //Add more things to do here!
  }
  else {
    //add more things to do here!
  }
}

function ruillindPort(){
  clear();
  edit("You arrive at the Ruillind Port, you can <input value=\"Talk to a captain\" type=\"button\" onClick=\"ruillindCaptain()\"></input> <input value=\" Leave \" type=\"button\" onClick=\"arriveRuillind()\"></input>");
}

function ruillindCaptain(){
  clear();
  if (captainTalk===false) {
    captainTalk=true;
    edit("You find a captain, when you talk to him he says, \"I haven't seen you around here before! You must be new. I am The Captain, and I am your one and only option for anything boat related.\" <input value=\" Leave \" type=\"button\" onClick=\"arriveRuillind()\"></input>");
  }
  else{
    edit("The captain says, \"Hello there, traveler, what can I do for you?\" <input vallue=\" Go for a Joy Ride \" type=\"button\" onClick=\"joyRide()\"></input> <input value=\" Arrange Passage \" type=\"button\" onClick=\"arrangePassage()\"></input> <input value=\" Leave \" type=\"button\" onClick=\"arriveRuillind()\"></input>");
  }
}
function joyRide(){
  clear();
  edit("You ask the captain if you can borrow one of his boats for a while. He says you can for five gold. <input value=\" Rent the boat \" type=\"button\" onClick=\"boatRent()\"></input> <input value=\" Leave \" type=\"button\" onClick=\"arriveRuillind()\"></input>");
}
function arrangePassage(){
  clear();
  edit("You ask to arrange passage, and the captain says,\"I just own the boat, I can't drive it, but you can rent it if you want!\" <input value=\" Rent the boat \" type=\"button\" onClick=\"boatRent()\"></input> <input value=\" Leave \" type=\"button\" onClick=\"arriveRuillind()\"></input>");
}
function boatRent(){
  clear();
  edit("Are you sure you want to rent the boat for five gold? <input value=\"Yes\" type=\"button\" onClick=\"ruillindBoat()\"></input> <input value=\" Leave \" type=\"button\" onClick=\"arriveRuillind()\"></input>");
}
function ruillindBoat(){
  clear();
  if (gold>=5) {
    gold=gold-5;
    edit("You rent the boat and go out on the water. <input value=\"Drive the boat!\" type=\"button\" onClick=\"boatDrive()\"></input>")
  }
  else {
    edit("You don't have enough gold for that!");
  }
}
function boatDrive(){
  clear(); 
  var boatChance=Math.floor(Math.random()*3);
  if (boatChance===1) {
    seasick=false
    edit("You enjoy a nice boat ride on the water. You develop an immunity to seasickness! <input value=\" leave \" type=\"button\" onClick=\"arriveRuillind()\"></input>");
  }  
  else if (boatchance===2) {
    boatTreasure();
  }
  else {
    boatBoss();
  }
}
function boatBoss(){
  clear();
  edit("You were enjoying a nice boat ride on the water when SUDDENLY you are attacked by a sea monster! <input value=\"Battle\" type=\"button\" onClick=\"seaMonster()\"></input>");
}
function boatTreasure(){
  clear();
  edit("You have found a map to buried treasure! <input value=\"Follow the map!\" type=\"button\" onClick=\"treasureMap()\"></input> <input value=\"Leave\" type=\"button\" onClick=\"arriveRUillind()\"></input>");
}
function treasureMap(){
  var treasureMapChance=Math.floor(Math.random()*10);
  if (treasureMapChance===4){
    clear();
    gold=gold+25;
    edit("You found buried treasure! +25 gold! You now have " + gold + " gold. <input value=\" leave \" type=\"button\" onClick=\"arriveRuillind()\"></input>" );
  }
  else if (treasureMapChance===6){
    clear();
    maxHealth=maxHealth-2;
    health=maxHealth;
    gold=gold-15;
    if (gold<0) {
      gold=0;
    }
    else {
      var nIsAmazing=true;
    }
    edit("You got in a shipwreck! You have to pay back the captain! Your gold is now " + gold + "gold. <input value=\" leave \" type=\"button\" onClick=\"arriveRuillind()\"></input>");
  }
  else {
    edit("You find nothing. Keep searching!");
  }
}
function seaMonster(){
  enemyHealth=50;
  enemyAttack=15;
  enemyDefense=4;
  enemyMaxHealth=50;
  enemy="Sea Monster";
  combatEnd="seaMonsterDefeat";
  combatSystem();
  
}
function seaMonsterWin(){
  clear();
  gold=gold+100;
  edit("You have successfully defeated the sea monster! <input value=\" leave \" type=\"button\" onClick=\"arriveRuillind()\"></input>");
}
