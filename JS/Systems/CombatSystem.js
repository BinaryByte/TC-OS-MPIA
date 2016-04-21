
function combatSystem() {
    //You are attacked.
    window.alert("You are attacked by a " + enemy + "!");
    //Sets a while loop that while attacked is true, it will execute the code inside.
    while (attacked === true) {
        if (enemyHealth <= 0) {
            //Detects if enemy health is less than or equal to zero, and if true, it will end the while loop.
            attacked = false;
            window.alert('You win!);
            if (health > maxHealth) {
                health = maxHealth;
            }
            findEndCombat();
        } else if (health <= 0) {
            //Detects if your health is less than or equal to zero, and if true, it will end the while loop.
            health = 10;
            gold = 10;
            attack = 10;
            defense = 10;
            wizardMagic = false;
            attacked = false;
            window.alert("You are dead.");
            death();
        } else {
            //If neither your health or the enemy health is equal to or less then zero, it will execute this code.
            //Rolls a critical chance, which adds to your attack.
            criticalChance = Math.floor(Math.random() * 5);
            //Add your attack plus critical chance minus the enemy defense.
            playerAttack = attack + criticalChance - enemyDefense;
            enemyHealth = enemyHealth - playerAttack;
            window.alert("You did " + playerAttack + " damage!");
            window.alert("The enemy health is now " + enemyHealth + "!");
            if (enemyHealth <= 0) {
                //If the enemy health is less than or equal to zero, it ends the while loop.
                attacked = false;
                window.alert('You win!');
                if (health > maxHealth) {
                    health = maxHealth;
                }
                findEndCombat();
            } else if(enemyHealth > enemyMaxHealth){
                enemyHealth = enemyMaxHealth
            } else {
                //Else, it does the same thing that the player did, except for the enemy.
                criticalChance = Math.floor(Math.random() * 5);
                enemyAttack2 = (enemyAttack + criticalChance) - defense;
                if (enemyAttack2 < 0) {
                    //If the enemy attack is less than zero, it will not add to your health.
                    window.alert("The enemy attack did nothing...");
                } else {
                    health = health - enemyAttack2;
                    window.alert("The enemy did " + enemyAttack2 + "!");
                    window.alert("You are now at " + health + " hit points!");
                }
                if (health > maxHealth) {
                    //If you go over your max health, it resets your health.
                    health = maxHealth;
                    alert("You went over " + maxHealth + "! Resetting health...");
                    //Repeat the loop.
                }
            }
        }
    }
};
function findEndCombat(){
  switch (combatEnd){
    case 'TravelNok':
        treasureChance();
      break;
    case 'WizardDuel':
        window.alert("You beat the wizard, and he grants you some of his magic. Plus 2 to attack!");
        attack = attack + 2;
        travelNok();
    break;
    case 'RockCombat':
        window.alert("You have defeated the mob of " + faction + "!");
        factionEnemy = factionEnemy + 1;
        break;
    default:
    window.alert("ERROR! Couldn't find end of combat location. Please report. Teleporting you to your last known location...");
    travelNok();
    break;
  }
}
//
