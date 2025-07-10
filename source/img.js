document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    let hoverTimeout;
    const preview = document.createElement("img");
    preview.className = "hover-img-preview";
    document.body.appendChild(preview);

    cards.forEach(card => {
        card.addEventListener("mouseenter", (e) => {
        hoverTimeout = setTimeout(() => {
            const imgSrc = card.getAttribute("data-img");
            if (imgSrc) {
            preview.src = imgSrc;
            const rect = card.getBoundingClientRect();
            preview.style.top = (window.scrollY + rect.top - preview.offsetHeight - 10) + "px";
            preview.style.left = (window.scrollX + rect.left + rect.width / 2 - 75) + "px";
            preview.style.display = "block";
            }
        }, 1500);
        });

        card.addEventListener("mouseleave", () => {
        clearTimeout(hoverTimeout);
        preview.style.display = "none";
        });
    });
});