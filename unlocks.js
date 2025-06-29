function checkUnlocks() {
    if (currentLVL >= 2) {
        document.getElementById("challenge-jumpingjack").style.display = "block";
    }
    if (currentLVL >= 3) {
        document.getElementById("challenge-mountainclimber").style.display = "block";
    }
    if (currentLVL >= 6) {
        document.getElementById("challenge-pullup").style.display = "block";
        document.getElementById("challenge-dips").style.display = "block";
    }


    if (allChallenges.pushup.currentIndex >= 2) {
        document.getElementById("challenge-plank").style.display = "block";
    }
    if (allChallenges.pushup.currentIndex >= 5) {
        document.getElementById("challenge-pushup-diamond").style.display = "block";
    }
    if (allChallenges.pullup.currentIndex >= 5) {
        document.getElementById("challenge-muscleup").style.display = "block";
    }

    if (allChallenges.pushup.currentIndex >= 2 && allChallenges.squats.currentIndex >= 2 && allChallenges.jumpingjack.currentIndex >= 2) {
        document.getElementById("challenge-burpees").style.display = "block";
    }
}

window.addEventListener("load", checkUnlocks);
console.log("Unlocks checked");
document.addEventListener("click", checkUnlocks);