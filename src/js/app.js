document.addEventListener("DOMContentLoaded", (event) => {
    const items = document.querySelectorAll(".advantages__item");

    items.forEach((item) => {
        const image = item.querySelector(".advantages__image");

        item.addEventListener("mouseover", () => {
            image.classList.add("hovered");
        });

        item.addEventListener("mouseout", () => {
            image.classList.remove("hovered");
        });
    });
    
});