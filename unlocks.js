function doUnlock(element) {
    const el = document.getElementById(`${element}`);
    el.style.display = "block";
    setTimeout(() => {
        el.classList.remove("hidden");
    }, 100);
}

function checkUnlocks() {
    if (currentLVL >= 2) {
        doUnlock("challenge-jumpingjack");
    }
    if (currentLVL >= 3) {
        doUnlock("challenge-mountainclimber");
    }
    if (currentLVL >= 6) {
        doUnlock("challenge-pullup");
        doUnlock("challenge-dips");
    }


    if (allChallenges.pushup.currentIndex >= 2) {
        doUnlock("challenge-plank");
    }
    if (allChallenges.pushup.currentIndex >= 5) {
        doUnlock("challenge-pushup-diamond");
    }
    if (allChallenges.pullup.currentIndex >= 5) {
        doUnlock("challenge-muscleup");
    }

    if (allChallenges.pushup.currentIndex >= 2 && allChallenges.squats.currentIndex >= 2 && allChallenges.jumpingjack.currentIndex >= 2) {
        doUnlock("challenge-burpees");
    }
}

window.addEventListener("load", () => {
    doUnlock("challenge-pushup");
    doUnlock("challenge-squats");
    doUnlock("challenge-situps");

    const interval = setInterval(() => {
        if (allChallenges && allChallenges.pushup) {
            checkUnlocks();
            clearInterval(interval);
        }
    }, 100);
});
console.log("Unlocks checked");
document.addEventListener("click", checkUnlocks);