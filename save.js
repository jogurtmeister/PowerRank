function wipeSave() {
    localStorage.clear();
    location.reload();
    //showPopup("Fortschritt zurückgesetzt");
}

function saveXP() {
    localStorage.setItem('powerRankXP', totalXP);
}

function loadXP() {
    const storedXP = localStorage.getItem('powerRankXP');
    savedXP = storedXP ? parseInt(storedXP) : 0;
    if (savedXP > 0) {
        gainXP(savedXP, true);
        showPopup(`Willkommen zurück!`);
    }
    console.log(`Loaded XP: ${savedXP}`);
    updateDisplayXP();
}

function saveCards() {
    const cardsData = JSON.stringify(cards);
    localStorage.setItem('powerRankCards', cardsData);
}