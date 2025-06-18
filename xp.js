let currentXP = 0;
let maxXP = 500;
let currentLVL = 1;

const xpAmount = document.getElementById("xp-bar-amount");
const xpBar = document.getElementById("xp-bar");
const xpLevel = document.getElementById("xp-bar-level");

function updateDisplayXP() {
    xpAmount.textContent = `${currentXP} / ${maxXP} XP`;
    xpBar.value = currentXP;
    xpBar.max = maxXP;
    xpLevel.textContent = `LVL ${currentLVL}`;
}

function gainXP(amount) {
    currentXP += amount;

    while (currentXP >= maxXP) {
        currentXP -= maxXP;
        currentLVL++;
        maxXP = Math.ceil(maxXP * 1.2 / 100) * 100;
        soundLevelUp.play();
        showPopup(`LVL ${currentLVL}`, `Nächstes Level: ${currentXP} / ${maxXP} XP`);
    }

    updateDisplayXP();
}

updateDisplayXP();