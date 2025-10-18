const slideContainer = document.getElementById("carouselSlide");
const slides = document.querySelectorAll('.carouselSlide img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let counter = 0;

function updateCarousel() {
    const slideWidth = slides[0].clientWidth;
    slideContainer.style.transform = `translateX(${-slideWidth * counter}px)`;
}

// Наступний слайд
nextBtn.addEventListener('click', () => {
    counter++;
    if (counter >= slides.length) counter = 0;
    updateCarousel();
});

// Попередній слайд
prevBtn.addEventListener('click', () => {
    counter--;
    if (counter < 0) counter = slides.length - 1;
    updateCarousel();
});

// Знаходимо поле вводу та кнопку пошуку
const searchInput = document.querySelector('.searchBox input');
const searchButton = document.querySelector('.searchBox button');

// Всі елементи напрямків
const activities = document.querySelectorAll('.activity');

// Функція пошуку та прокрутки
function searchActivities() {
    const query = searchInput.value.toLowerCase(); // Текст пошуку
    let found = false;

    activities.forEach(activity => {
        const title = activity.querySelector('h3').textContent.toLowerCase(); // Заголовок напрямку
        if (title.includes(query)) { // Якщо заголовок містить текст пошуку
            activity.scrollIntoView({ behavior: "smooth", block: "start" }); // Застосовуємо прокрутку
            found = true;
        }
    });

    // Показуємо повідомлення, якщо нічого не знайдено
    if (!found) {
        alert("Напрямок не знайдено.");
    }
}

// Обробка кліку по кнопці
searchButton.addEventListener('click', searchActivities);

// Додатково пошук при натисканні Enter
searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        searchActivities();
    }
});


