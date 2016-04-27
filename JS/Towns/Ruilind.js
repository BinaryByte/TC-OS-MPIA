//button template: <input value=\"###\" type=\"button\" onClick=\"###\"></input>
captainTalk=false;
arriveRuillind(){
  clear();
  edit("You are now in the port city of Ruillind! <input value=\" Explore \" type=\"button\" onClick=\"exploreRuillind()\"></input> <input value=\" Leave \" type=\"button\" onClick=\"\"></input>");
}
exploreRuillind(){
  
}

ruillindPort(){
  clear();
  edit("You arrive at the Ruillind Port, you can <input value=\"Talk to a captain\" type=\"button\" onClick=\"ruillindCaptain()\"></input> <input value=\" Leave \" type=\"button\" onClick=\"arriveRuillind()\"></input>");
}

ruillindCaptain(){
  clear();
  if (captainTalk===false) {
    captainTalk=true;
    edit("You find a captain, when you talk to him he says, \"I haven't seen you around here before! You must be new. I am The Captain, and I am your one and only option for anything boat related.\" <input value=\" Leave \" type=\"button\" onClick=\"arriveRuillind()\"></input>");
  }
  else{
    edit("The captain says, \"Hello there, traveler, what can I do for you?\" <input vallue=\" Go for a Joy Ride \" type=\"button\" onClick=\"joyRide()\"></input> <input value=\" Arrange Passage \" type=\"button\" onClick=\"arrangePassage()\"></input> <input value=\" Leave \" type=\"button\" onClick=\"arriveRuillind()\"></input>"
  }
}
joyRide(){
  clear();
  edit("You ask the captain if you can borrow one of his boats for a while. He says you can for five gold. <input value=\" Go for a Joyride \" type=\"button\" onClick=\"boatRent()\"></input> <input value=\" Leave \" type=\"button\" onClick=\"arriveRuillind()\"></input>");
}
arrangePassage(){
  
}
