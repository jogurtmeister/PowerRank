const repeatContainer = document.getElementById("repeat-challenges");

function createRepeatCard(key, challenge) {
    if (!challenge) return;

    const card = document.createElement("div");
    const setAmount = 3;
    card.className = "card color-repeat";
    card.id = `repeat-${key}`;

    card.innerHTML = `
        <h3>${challenge.title} Sets</h3>
        <p>${setAmount} x ${challenge.desc}</p>
        <p>+${challenge.xp} XP</p>
    `;

    card.addEventListener("click", () => {
        gainXP(challenge.xp);
        burnKCAL(challenge.kcal * setAmount);
        soundComplete.play();
    });

    repeatContainer.appendChild(card);

    document.getElementById("title-repeat").style.display = "block";
    document.getElementById("wipe-save").style.display = "block";
}

function updateRepeatCard(key, challenge) {
    const card = document.getElementById(`repeat-${key}`);
    if (!card) return;

    card.innerHTML = `
        <h3>${challenge.title} Sets</h3>
        <p>3 x ${challenge.desc}</p>
        <p>+${challenge.xp} XP</p>
    `;

    card.addEventListener("click", () => {
        gainXP(challenge.xp);
        burnKCAL(challenge.kcal * 3);
        soundComplete.play();
    });
}

function initChallenges() {
    for (const key in allChallenges) {
        const challengeData = allChallenges[key];
        const el = document.getElementById(challengeData.elementId);
        if (!el) continue;

        const first = challengeData.challenges[0];
        el.innerHTML = `
            <h3>${first.title}</h3>
            <p>${first.desc}</p>
            <p>+${first.xp} XP</p>
            <p>Unlocks: ${first.unlock}</p>
        `;

        el.addEventListener("click", () => {
            const challenges = challengeData.challenges;
            const current = challenges[challengeData.currentIndex];

            gainXP(current.xp);
            burnKCAL(current.kcal);
            soundComplete.play();

            if (challengeData.currentIndex === 0) {
                createRepeatCard(key, current);
            } else {
                updateRepeatCard(key, current);
            }

            challengeData.currentIndex++;

            if (challengeData.currentIndex >= challenges.length) {
                el.innerHTML = `
                    <div style="display: flex; gap: 10px;">
                        <img src="svg/trophy.svg" class="trophy">
                        <h3>Alles abgeschlossen</h3>
                    </div>
                `;
                el.style.opacity = "0.6";
                el.style.pointerEvents = "none";
                saveCards();
                return;
            }

            const next = challenges[challengeData.currentIndex];
            el.innerHTML = `
                <h3>${next.title}</h3>
                <p>${next.desc}</p>
                <p>+${next.xp} XP</p>
                <p>Unlocks: ${next.unlock}</p>
            `;

            saveCards();
        });
    }
}

let allChallenges = {};

fetch("challenges.json")
.then((response) => response.json())
.then((data) => {
    allChallenges = data;
    initChallenges();
    loadCards();
});