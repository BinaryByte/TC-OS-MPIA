//Contains stuff for the start menu
function difficultySet() {
    //Prompts you for the difficulty
    var difficulty = prompt("Easy, Medium, or Hard?");
    switch (difficulty) {
        //Sets the difficulty based on your response
        case 'Easy':
            gold = 20;
            attack = 14;
            defense = 14;
            health = 20;
            maxHealth = 20;
            window.alert("Difficulty set to easy.");
            break;
        case 'Medium':
            window.alert("Difficulty set to medium.");
            break;
        case 'Hard':
            window.alert("Difficulty set to Hard.");
            gold = 7;
            attack = 7;
            defense = 7;
            health = 7;
            maxHealth = 7;
            break;
        default:
        //If not recognized, it tells you that it couldn't recognize your string.
            window.alert("I'm sorry, I couldn't recognize that. Please type it exactly as spelled, and it's case sensitive, so type it with the exact capital letters.");
            break;
    }
}

function options() {
    //Opens the options menu, and detects if you've clicked more than ten times.
    clicks = clicks + 1;
    if (clicks >= 10) {
        window.alert("Wow. You really want an options menu. Well TOO BAD! This is a text adventure, not some panzie FPS. This, is for hardcore gamers, who don't need \"Configurations\" or \"Gaming PCS\". This is FOR REAL MEN... or women. Gender Equality. YOU WILL BE DRILLED TO YOUR CORE, HEADING INTO THE DARK UNKOWN, WITH ONLY YOUR WITS AND AN INVENTORY TO GUIDE YOU. YOU WILL SURVIVE. YOU WILL... Well, you've been eaten by a grue. Goodbye. (achievement get: Failure)");
    } else {
        var fov = prompt("Set your FOV. Pick a number between -1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 and 10000000000000000000000000000000000000000000000000000000000000000000000000000000");
        window.alert("This is a text adventure game, so I will disable the FOV. I do admire your courage, for picking " + fov + ".");
    }
}

function evil() {
    //This is called in TC-OSMPIA.html, where when you click on the text with Comic Sans MS, it displays this.
    window.alert("Yes, I am evil.");
};
