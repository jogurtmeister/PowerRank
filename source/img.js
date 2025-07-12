document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card[data-img]");
    let hoverTimeout;
    let preview = document.createElement("img");
    preview.className = "hover-img-preview";
    document.body.appendChild(preview);
    preview.style.position = "absolute";
    preview.style.display = "none";

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
        hoverTimeout = setTimeout(() => {
            const imgSrc = card.getAttribute("data-img");
            if (imgSrc) {
            preview.onload = () => {
                const rect = card.getBoundingClientRect();
                const top = window.scrollY + rect.top - preview.height - 10;
                const left = window.scrollX + rect.left + rect.width / 2 - preview.width / 2;
                preview.style.top = `${top}px`;
                preview.style.left = `${left}px`;
                preview.style.display = "block";
            };
            preview.src = imgSrc;
            }
        }, 2500);
        });

        card.addEventListener("mouseleave", () => {
        clearTimeout(hoverTimeout);
        preview.style.display = "none";
        preview.src = "";
        });
    });
});