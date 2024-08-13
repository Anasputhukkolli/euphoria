function toggleMenu() {
    const menu = document.querySelector('.taskbar-menu');
    menu.classList.toggle('active');
}

function closeMenu() {
    const menu = document.querySelector('.taskbar-menu');
    menu.classList.remove('active');
}

// coresel one
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const dotsContainer = document.querySelector('.dots-container');

    let currentIndex = 0;
    const intervalTime = 3000; // Time between slides in milliseconds
    let autoPlayInterval;

    // Create dots
    slides.forEach((slide, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
            resetAutoPlay();
        });
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    const updateCarousel = () => {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    };

    const showNextSlide = () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    };

    const showPrevSlide = () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    };

    const startAutoPlay = () => {
        autoPlayInterval = setInterval(showNextSlide, intervalTime);
    };

    const resetAutoPlay = () => {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    };

    nextButton.addEventListener('click', () => {
        showNextSlide();
        resetAutoPlay();
    });

    prevButton.addEventListener('click', () => {
        showPrevSlide();
        resetAutoPlay();
    });

    // Initialize the carousel
    updateCarousel();
    startAutoPlay();
});


// couresel two
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carouseltwo');
    const slides = document.querySelectorAll('.slidetwo');
    const prevButton = document.querySelector('.prevtwo');
    const nextButton = document.querySelector('.nexttwo');

    let currentIndex = 0;
    const intervalTime = 3000; // Time between slides in milliseconds
    let autoPlayInterval;

    // Create dots


    const dots = document.querySelectorAll('.dot');

    const updateCarousel = () => {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    };

    const showNextSlide = () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    };

    const showPrevSlide = () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    };

    const startAutoPlay = () => {
        autoPlayInterval = setInterval(showNextSlide, intervalTime);
    };

    const resetAutoPlay = () => {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    };

    nextButton.addEventListener('click', () => {
        showNextSlide();
        resetAutoPlay();
    });

    prevButton.addEventListener('click', () => {
        showPrevSlide();
        resetAutoPlay();
    });

    // Initialize the carousel
    updateCarousel();
    startAutoPlay();
});
// couresel threee

document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carouselthree');
    const slides = document.querySelectorAll('.slidethree');
    const prevButton = document.querySelector('.prevthree');
    const nextButton = document.querySelector('.nextthree');
    const dotsContainer = document.querySelector('.dots-containerthree');

    let currentIndex = 0;
    const intervalTime = 3000; // Time between slides in milliseconds
    let autoPlayInterval;

    // Create dots
    slides.forEach((slide, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dots');
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
            resetAutoPlay();
        });
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dots');

    const updateCarousel = () => {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    };

    const showNextSlide = () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    };

    const showPrevSlide = () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    };

    const startAutoPlay = () => {
        autoPlayInterval = setInterval(showNextSlide, intervalTime);
    };

    const resetAutoPlay = () => {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    };

    nextButton.addEventListener('click', () => {
        showNextSlide();
        resetAutoPlay();
    });

    prevButton.addEventListener('click', () => {
        showPrevSlide();
        resetAutoPlay();
    });

    // Initialize the carousel
    updateCarousel();
    startAutoPlay();
});


