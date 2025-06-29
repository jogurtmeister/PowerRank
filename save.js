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
    const progress = {};

    for (const key in allChallenges) {
        const challengeData = allChallenges[key];
        progress[key] = {
            currentIndex: challengeData.currentIndex || 0,
            currentRepeats: challengeData.currentRepeats || 0
        };
    }

    localStorage.setItem('powerRankCards', JSON.stringify(progress));

    console.log("Cards Saved");
}

function loadCards() {
    const saved = localStorage.getItem('powerRankCards');
    if (!saved) return;

    const progress = JSON.parse(saved);

    for (const key in progress) {
        const challenge = allChallenges[key];
        if (!challenge) continue;

        challenge.currentIndex = progress[key].currentIndex || 0;

        const el = document.getElementById(challenge.elementId);
        if (!el) continue;

        if (challenge.currentIndex > 0) {
            const previous = challenge.challenges[challenge.currentIndex - 1];

            if (document.getElementById(`repeat-${key}`)) {
                updateRepeatCard(key, previous);
            } else {
                createRepeatCard(key, previous);
            }
        }
    }

    console.log("Cards Loaded");
    console.log(JSON.parse(localStorage.getItem("powerRankCards")));
}