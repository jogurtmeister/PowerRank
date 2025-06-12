const allChallenges = {
    pushup: {
        elementId: "challenge-pushup",
        challenges: [
            { title: "Pushup I", desc: "1 Liegestütz", xp: 100, unlock: "Pushup II" },
            { title: "Pushup II", desc: "5 Liegestütze", xp: 200, unlock: "Pushup III, Plank I" },
            { title: "Pushup III", desc: "10 Liegestütze", xp: 300, unlock: "Pushup IV" },
            { title: "Pushup IV", desc: "15 Liegestütze", xp: 300, unlock: "Pushup V" },
            { title: "Pushup V", desc: "20 Liegestütze", xp: 500, unlock: "Pushup VI, Diamond Pushup I" },
        ],
        currentIndex: 0
    },
    pushupDiamond: {
        elementId: "challenge-pushup-diamond",
        challenges: [
            { title: "Diamond Pushup I", desc: "1 Diamant Liegestütz", xp: 300, unlock: "Pushup II" },
            { title: "Diamond Pushup II", desc: "3 Diamant Liegestütze", xp: 400, unlock: "Pushup III" },
            { title: "Diamond Pushup III", desc: "6 Diamant Liegestütze", xp: 500, unlock: "Pushup IV" },
            { title: "Diamond Pushup IV", desc: "10 Diamant Liegestütze", xp: 700, unlock: "Pushup V" }
        ],
        currentIndex: 0
    },
    squats: {
        elementId: "challenge-squats",
        challenges: [
            { title: "Squats I", desc: "10 Kniebeugen", xp: 100, unlock: "Squats II" },
            { title: "Squats II", desc: "20 Kniebeugen", xp: 200, unlock: "Squats III" },
            { title: "Squats III", desc: "30 Kniebeugen", xp: 200, unlock: "Squats IV" },
            { title: "Squats IV", desc: "50 Kniebeugen", xp: 300, unlock: "Squats V" },
            { title: "Squats V", desc: "100 Kniebeugen", xp: 500, unlock: "Squats VI" },
        ],
        currentIndex: 0
    },
    situps: {
        elementId: "challenge-situps",
        challenges: [
            { title: "Situps I", desc: "5 Rumpfbeugen", xp: 100, unlock: "Situps II" },
            { title: "Situps II", desc: "10 Rumpfbeugen", xp: 100, unlock: "Situps III" },
            { title: "Situps III", desc: "20 Rumpfbeugen", xp: 200, unlock: "Situps IV" },
            { title: "Situps IV", desc: "30 Rumpfbeugen", xp: 300, unlock: "Situps V" },
            { title: "Situps V", desc: "50 Rumpfbeugen", xp: 500, unlock: "Situps VI" },
        ],
        currentIndex: 0
    },
    plank: {
        elementId: "challenge-plank",
        challenges: [
            { title: "Plank I", desc: "30 Sekunden halten", xp: 200, unlock: "Plank II" },
            { title: "Plank II", desc: "60 Sekunden halten", xp: 300, unlock: "Plank III" },
            { title: "Plank III", desc: "2 Minuten halten", xp: 300, unlock: "Plank IV" },
            { title: "Plank IV", desc: "3 Minuten halten", xp: 500, unlock: "Plank V" },
            { title: "Plank V", desc: "5 Minuten halten", xp: 500, unlock: "Plank V" },
        ],
        currentIndex: 0
    },
    pullup: {
        elementId: "challenge-pullup",
        challenges: [
            { title: "Pullup I", desc: "1 Klimmzug", xp: 1000, unlock: "Pullup II" },
            { title: "Pullup II", desc: "3 Klimmzüge", xp: 500, unlock: "Pullup III" },
            { title: "Pullup III", desc: "6 Klimmzüge", xp: 500, unlock: "Pullup IV" },
            { title: "Pullup IV", desc: "10 Klimmzüge", xp: 1000, unlock: "Pullup V" },
            { title: "Pullup IV", desc: "20 Klimmzüge", xp: 1000, unlock: "Pullup VI, Muscle Up I" }
        ],
        currentIndex: 0
    },
    muscleup: {
        elementId: "challenge-muscleup",
        challenges: [
            { title: "Muscle Up I", desc: "1 Muscle Ups", xp: 1000, unlock: "Muscle Up II" },
            { title: "Muscle Up II", desc: "3  Muscle Ups", xp: 500, unlock: "Muscle Up III" },
            { title: "Muscle Up III", desc: "6  Muscle Ups", xp: 500, unlock: "Muscle Up IV" },
            { title: "Muscle Up IV", desc: "10  Muscle Ups", xp: 1000, unlock: "Muscle Up V" },
            { title: "Muscle Up IV", desc: "20  Muscle Ups", xp: 1000, unlock: "Muscle Up VI" }
        ],
        currentIndex: 0
    },
    dips: {
        elementId: "challenge-dips",
        challenges: [
            { title: "Dips I", desc: "1 Barrenstütz", xp: 1000, unlock: "Dips II" },
            { title: "Dips II", desc: "3 Barrenstütze", xp: 500, unlock: "Dips III" },
            { title: "Dips III", desc: "6 Barrenstütze", xp: 500, unlock: "Dips IV" },
            { title: "Dips IV", desc: "10 Barrenstütze", xp: 1000, unlock: "Dips V" },
            { title: "Dips IV", desc: "20 Barrenstütze", xp: 1000, unlock: "Dips VI" }
        ],
        currentIndex: 0
    },
    jog: {
        elementId: "challenge-jog",
        challenges: [
            { title: "Jog I", desc: "2 Minuten joggen", xp: 200, unlock: "Jog II" },
            { title: "Jog II", desc: "4 Minuten joggen", xp: 200, unlock: "Jog III" },
            { title: "Jog III", desc: "6 Minuten joggen", xp: 300, unlock: "Jog IV" },
            { title: "Jog IV", desc: "8 Minuten joggen", xp: 300, unlock: "Jog V" },
            { title: "Jog V", desc: "10 Minuten joggen", xp: 500, unlock: "Jog VI" },
        ],
        currentIndex: 0
    },

    special1: {
        elementId: "challenge-special-1",
        challenges: [
            { title: "Spezial", desc: "test", xp: 300, unlock: "None" }
        ],
        currentIndex: 0
    }
};

for (const key in allChallenges) {
    const challengeData = allChallenges[key];
    const el = document.getElementById(challengeData.elementId);
    if (!el) continue;

    const first = challengeData.challenges[0];
    el.innerHTML = `
        <h3>${first.title}</h3>
        <p class="challenge-desc">${first.desc}</p>
        <p>+${first.xp} XP</p>
        <p>Unlocks: ${first.unlock}</p>
    `;

    el.addEventListener("click", () => {
        const current = challengeData.currentIndex;
        const challenges = challengeData.challenges;

        gainXP(challenges[current].xp);

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
    });
}