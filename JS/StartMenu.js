//Contains stuff for the start menu
function difficultySet() {
    var difficulty = prompt("Easy, Medium, Hard, or Insane?");
    switch (difficulty) {
        case 'Easy':
            gold = 20;
            attack = 14;
            defense = 14;
            health = 20;
            maxHealth = 20;
            alert("Difficulty set to easy.");
            break;
        case 'Medium':
            alert("Difficulty set to medium.");
            break;
        case 'Hard':
            alert("Difficulty set to Hard.");
            gold = 7;
            attack = 7;
            defense = 7;
            health = 7;
            maxHealth = 7;
            break;
        case 'Insane':
            alert("Difficulty set to Insane.");
            gold = 5;
            attack = 5;
            defense = 5;
            health = 5;
            maxHealth = 5;
            break;
        default:
            alert("I'm sorry, I couldn't recognize that. Please type it exactly as spelled, and it's case sensitive, so type it with the exact capital letters.");
            break;
    }
}

function options() {
    clicks = clicks + 1;
    if (clicks >= 10) {
        alert("Wow. You really want an options menu. Well TOO BAD! This is a text adventure, not some panzie FPS. This, is for hardcore gamers, who don't need \"Configurations\" or \"Gaming PCS\". This is FOR REAL MEN... or women. Gender Equality. YOU WILL BE DRILLED TO YOUR CORE, HEADING INTO THE DARK UNKOWN, WITH ONLY YOUR WITS AND AN INVENTORY TO GUIDE YOU. YOU WILL SURVIVE. YOU WILL... Well, you've been eaten by a grue. Goodbye.");
    } else {
        var fov = prompt("Set your FOV. Pick a number between -1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 and 10000000000000000000000000000000000000000000000000000000000000000000000000000000");
        alert("This is a text adventure game, so I will disable the FOV. I do admire your courage, for picking " + fov + ".");
    }
}

function evil() {
    alert("Yes, I am evil.");
};
