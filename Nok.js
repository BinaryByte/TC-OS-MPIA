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

function arriveNokBurned() {
    clear();
    document.write("You arrive at the burned city of Nok.");
    document.write("<p><button onClick =\"nokLeave()\">Leave</button></p>");
};

function nokLeave() {
    clear();
    document.write("<button onClick = \"travelJudalSet()\">Judal</button><button onClick = \"travelArgoSet()\">Argo</button><button onClick = \"arriveNokBurned()\">Stay</button>");
};
