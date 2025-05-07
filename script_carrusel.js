document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".carousel-container");
    const items = document.querySelectorAll(".carousel-item");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    
    let index = 0;

    function updateCarousel() {
        const offset = -index * 100;
        container.style.transform = `translateX(${offset}%)`;
    }

    nextButton.addEventListener("click", () => {
        index = (index + 1) % items.length;
        updateCarousel();
    });

    prevButton.addEventListener("click", () => {
        index = (index - 1 + items.length) % items.length;
        updateCarousel();
    });
});
