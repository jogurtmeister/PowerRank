const allChallenges = {
    pushup: {
        elementId: "challenge-pushup",
        challenges: [
            { title: "Pushup I", desc: "1 Liegestütz", xp: 100, unlock: "Pushup II", kcal: 0.4 },
            { title: "Pushup II", desc: "5 Liegestütze", xp: 200, unlock: "Pushup III, Plank I", kcal: 0.4 * 5 },
            { title: "Pushup III", desc: "10 Liegestütze", xp: 300, unlock: "Pushup IV", kcal: 0.4 * 10 },
            { title: "Pushup IV", desc: "15 Liegestütze", xp: 300, unlock: "Pushup V", kcal: 0.4 * 15 },
            { title: "Pushup V", desc: "20 Liegestütze", xp: 500, unlock: "Pushup VI, Diamond Pushup I", kcal: 0.4 * 20 }
        ],
        currentIndex: 0
    },
    pushupDiamond: {
        elementId: "challenge-pushup-diamond",
        challenges: [
            { title: "Diamond Pushup I", desc: "1 Diamant Liegestütz", xp: 300, unlock: "Pushup II", kcal: 0.5 },
            { title: "Diamond Pushup II", desc: "3 Diamant Liegestütze", xp: 400, unlock: "Pushup III", kcal: 0.5 * 3 },
            { title: "Diamond Pushup III", desc: "6 Diamant Liegestütze", xp: 500, unlock: "Pushup IV", kcal: 0.5 * 6 },
            { title: "Diamond Pushup IV", desc: "10 Diamant Liegestütze", xp: 700, unlock: "Pushup V", kcal: 0.5 * 10 }
        ],
        currentIndex: 0
    },
    burpees: {
        elementId: "challenge-burpees",
        challenges: [
            { title: "Burpees I", desc: "1 Burpees", xp: 100, unlock: "Burpees II", kcal: 0.6 },
            { title: "Burpees II", desc: "5 Burpees", xp: 200, unlock: "Burpees III", kcal: 0.6 * 5 },
            { title: "Burpees III", desc: "10 Burpees", xp: 300, unlock: "Burpees IV", kcal: 0.6 * 10 },
            { title: "Burpees IV", desc: "15 Burpees", xp: 400, unlock: "Burpees V", kcal: 0.6 * 15 },
            { title: "Burpees V", desc: "20 Burpees", xp: 500, unlock: "Burpees VI", kcal: 0.6 * 20 }
        ],
        currentIndex: 0
    },
    squats: {
        elementId: "challenge-squats",
        challenges: [
            { title: "Squats I", desc: "10 Kniebeugen", xp: 100, unlock: "Squats II", kcal: 0.3 * 10 },
            { title: "Squats II", desc: "20 Kniebeugen", xp: 200, unlock: "Squats III", kcal: 0.3 * 20 },
            { title: "Squats III", desc: "30 Kniebeugen", xp: 200, unlock: "Squats IV", kcal: 0.3 * 30 },
            { title: "Squats IV", desc: "50 Kniebeugen", xp: 300, unlock: "Squats V", kcal: 0.3 * 50 },
            { title: "Squats V", desc: "100 Kniebeugen", xp: 500, unlock: "Squats VI", kcal: 0.3 * 100 }
        ],
        currentIndex: 0
    },
    situps: {
        elementId: "challenge-situps",
        challenges: [
            { title: "Situps I", desc: "5 Rumpfbeugen", xp: 100, unlock: "Situps II", kcal: 0.3 * 5 },
            { title: "Situps II", desc: "10 Rumpfbeugen", xp: 100, unlock: "Situps III", kcal: 0.3 * 10 },
            { title: "Situps III", desc: "20 Rumpfbeugen", xp: 200, unlock: "Situps IV", kcal: 0.3 * 20 },
            { title: "Situps IV", desc: "30 Rumpfbeugen", xp: 300, unlock: "Situps V", kcal: 0.3 * 30 },
            { title: "Situps V", desc: "50 Rumpfbeugen", xp: 500, unlock: "Situps VI", kcal: 0.3 * 50 }
        ],
        currentIndex: 0
    },
    plank: {
        elementId: "challenge-plank",
        challenges: [
            { title: "Plank I", desc: "20 Sekunden halten", xp: 100, unlock: "Plank II", kcal: 1.0 },
            { title: "Plank II", desc: "40 Sekunden halten", xp: 200, unlock: "Plank III", kcal: 2.0 },
            { title: "Plank III", desc: "60 Sekunden halten", xp: 300, unlock: "Plank IV", kcal: 3.0 },
            { title: "Plank IV", desc: "2 Minuten halten", xp: 500, unlock: "Plank V", kcal: 6.0 },
            { title: "Plank V", desc: "3 Minuten halten", xp: 500, unlock: "Plank VI", kcal: 9.0 }
        ],
        currentIndex: 0
    },
    pullup: {
        elementId: "challenge-pullup",
        challenges: [
            { title: "Pullup I", desc: "1 Klimmzug", xp: 1000, unlock: "Pullup II", kcal: 1.0 },
            { title: "Pullup II", desc: "3 Klimmzüge", xp: 500, unlock: "Pullup III", kcal: 1.0 * 3 },
            { title: "Pullup III", desc: "6 Klimmzüge", xp: 500, unlock: "Pullup IV", kcal: 1.0 * 6 },
            { title: "Pullup IV", desc: "10 Klimmzüge", xp: 1000, unlock: "Pullup V", kcal: 1.0 * 10 },
            { title: "Pullup V", desc: "20 Klimmzüge", xp: 1000, unlock: "Pullup VI, Muscle Up I", kcal: 1.0 * 20 }
        ],
        currentIndex: 0
    },
    muscleup: {
        elementId: "challenge-muscleup",
        challenges: [
            { title: "Muscle Up I", desc: "1 Muscle Ups", xp: 1000, unlock: "Muscle Up II", kcal: 2.0 },
            { title: "Muscle Up II", desc: "3  Muscle Ups", xp: 1000, unlock: "Muscle Up III", kcal: 2.0 * 3 },
            { title: "Muscle Up III", desc: "6  Muscle Ups", xp: 1000, unlock: "Muscle Up IV", kcal: 2.0 * 6 },
            { title: "Muscle Up IV", desc: "10  Muscle Ups", xp: 2000, unlock: "Muscle Up V", kcal: 2.0 * 10 },
            { title: "Muscle Up V", desc: "20  Muscle Ups", xp: 2000, unlock: "Muscle Up VI", kcal: 2.0 * 20 }
        ],
        currentIndex: 0
    },
    dips: {
        elementId: "challenge-dips",
        challenges: [
            { title: "Dips I", desc: "1 Barrenstütz", xp: 300, unlock: "Dips II", kcal: 0.6 },
            { title: "Dips II", desc: "3 Barrenstütze", xp: 300, unlock: "Dips III", kcal: 0.6 * 3 },
            { title: "Dips III", desc: "6 Barrenstütze", xp: 500, unlock: "Dips IV", kcal: 0.6 * 6 },
            { title: "Dips IV", desc: "10 Barrenstütze", xp: 500, unlock: "Dips V", kcal: 0.6 * 10 },
            { title: "Dips V", desc: "20 Barrenstütze", xp: 1000, unlock: "Dips VI", kcal: 0.6 * 20 }
        ],
        currentIndex: 0
    },
    jumpingjack: {
        elementId: "challenge-jumpingjack",
        challenges: [
            { title: "Jumping Jack I", desc: "10 Hampelmänner", xp: 100, unlock: "Jumping Jack II", kcal: 0.2 * 10 },
            { title: "Jumping Jack II", desc: "20 Hampelmänner", xp: 100, unlock: "Jumping Jack III", kcal: 0.2 * 20 },
            { title: "Jumping Jack III", desc: "30 Hampelmänner", xp: 200, unlock: "Jumping Jack IV", kcal: 0.2 * 30 },
            { title: "Jumping Jack IV", desc: "50 Hampelmänner", xp: 200, unlock: "Jumping Jack V", kcal: 0.2 * 50 },
            { title: "Jumping Jack V", desc: "100 Hampelmänner", xp: 300, unlock: "Jumping Jack VI", kcal: 0.2 * 100 }
        ],
        currentIndex: 0
    }
};

const repeatContainer = document.getElementById("repeat-challenges");

function createRepeatCard(key, challenge) {
    const card = document.createElement("div");
    card.className = "card color-repeat";
    card.id = `repeat-${key}`;

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

    repeatContainer.appendChild(card);
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

        gainXP(challenges[challengeData.currentIndex].xp);
        burnKCAL(challenges[challengeData.currentIndex].kcal);

        challengeData.currentIndex++;
        soundComplete.play();

        if (challengeData.currentIndex >= challenges.length) {
            el.innerHTML = `<h3>Alle Herausforderungen abgeschlossen</h3>`;
            el.style.opacity = "0.6";
            el.style.pointerEvents = "none";
            return;
        }

        const next = challenges[challengeData.currentIndex];

        el.innerHTML = `
        <h3>${next.title}</h3>
        <p>${next.desc}</p>
        <p>+${next.xp} XP</p>
        <p>Unlocks: ${next.unlock}</p>
        `;

        const current = challenges[challengeData.currentIndex - 1];

        if (challengeData.currentIndex === 1) {
            createRepeatCard(key, current);
        } else if (challengeData.currentIndex > 1) {
            updateRepeatCard(key, current);
        }
    });
}