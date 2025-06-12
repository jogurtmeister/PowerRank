document.addEventListener("click", () => {
    if (currentLVL === 2) {
        document.getElementById("challenge-jog").style.display = "block";
    }
    if (currentLVL === 5) {
        document.getElementById("challenge-pullup").style.display = "block";
        document.getElementById("challenge-special-1").style.display = "block";
    }


    if (allChallenges.pushup.currentIndex === 2) {
        document.getElementById("challenge-planck").style.display = "block";
    }
    if (allChallenges.pushup.currentIndex === 5) {
        document.getElementById("challenge-pushup-diamond").style.display = "block";
    }
    if (allChallenges.pullup.currentIndex === 5) {
        document.getElementById("challenge-muscleup").style.display = "block";
    }
});