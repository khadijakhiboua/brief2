let currentIndex = 0;

function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    const itemsToShow = 3; // عدد العناصر التي تظهر في نفس الوقت

    currentIndex += direction * itemsToShow;

    if (currentIndex < 0) {
        currentIndex = totalItems - itemsToShow; // Revenir à la fin
    } else if (currentIndex >= totalItems) {
        currentIndex = 0; // Revenir au début
    }

    const offset = -currentIndex * (100 / itemsToShow); // حساب الإزاحة
    carousel.style.transform = `translateX(${offset}%)`;
}
