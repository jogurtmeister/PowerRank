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

        if (challenge.currentIndex >= challenge.challenges.length) {
            el.innerHTML = `
                <div style="display: flex; gap: 10px;">
                    <img src="svg/trophy.svg" class="trophy">
                    <h3>Alles abgeschlossen</h3>
                </div>
            `;
            el.style.opacity = "0.6";
            el.style.pointerEvents = "none";
        } else {
            const next = challenge.challenges[challenge.currentIndex];
            el.innerHTML = `
                <h3>${next.title}</h3>
                <p>${next.desc}</p>
                <p>+${next.xp} XP</p>
                <p>Unlocks: ${next.unlock}</p>
            `;
        }

        if (challenge.currentIndex > 0) {
            const index = Math.min(challenge.currentIndex - 1, challenge.challenges.length - 1);
            const previous = challenge.challenges[index];

            if (!previous) continue;

            if (document.getElementById(`repeat-${key}`)) {
                updateRepeatCard(key, previous);
            } else {
                createRepeatCard(key, previous);
            }
        }
    }

    console.log("Cards Loaded");
    console.log(JSON.parse(saved));
}