function arriveNok() {
    if (storyLineBegan === true) {
        //If the storyline started, executes storylineDemon() in Story.js
        clear();
        document.body.innerHTML = "There\'s lots of fire everywhere. A guard lets you into the gates.";
        document.body.innerHTML = document.body.innerHTML + "<p>The city of Nok is in flames. A burning building rumbles and shakes, with screams coming from inside. A demon emerges, flattening the building, and it swings a mighty claw...</p>";
        storylineDemon();
    } else if (storyLineBegan === false) {
        clear();
        document.body.innerHTML = "You are in the town of Nok. The gates are barred. You must have missed a plot device.";
        document.body.innerHTML = document.body.innerHTML + "<p><button onClick = \"travelArgo()\">Go to Argo</button></p>";
    }
};

function arriveNokBurned() {
    //Arrive at burned down nok
    clear();
    document.body.innerHTML = "You arrive at the burned city of Nok, there is a guard at the gate, he says that a magical construction team from the future arrived a few days ago, and is busy turning it into a 'target' whatever that is. They say they'll be done in about 4 years. You can still enter the story though.";
    document.body.innerHTML = document.body.innerHTML + "<p><button onClick =\"nokLeave()\">Leave</button><button onClick = \"nokEnter()\">Enter the City</button></p>";
};

function nokEnter(){
    document.body.innerHTML = "You enter the city. <button onClick = \"arriveNokBurned()\">Leave the city</button>";
}

function nokLeave() {
    //Executes travel code in Travel.js
    clear();
    document.body.innerHTML = document.body.innerHTML + "<button onClick = \"travelJudalSet()\">Judal</button><button onClick = \"travelArgo()\">Argo</button><button onClick = \"arriveNokBurned()\">Stay</button>";
};
