document.addEventListener('DOMContentLoaded', () => {
    // 1. Selección de elementos del carrusel
    const carouselContainer = document.getElementById('carouselAutoplaying');
    
    if (!carouselContainer) return; // Si no existe el carrusel en la página, detiene el script

    const items = carouselContainer.querySelectorAll('.carousel-item');
    const prevBtn = carouselContainer.querySelector('.carousel-control-prev');
    const nextBtn = carouselContainer.querySelector('.carousel-control-next');
    
    let currentIndex = 0;
    const intervalTime = 4000; // Tiempo en milisegundos entre diapositivas (4 segundos)
    let autoSlideInterval;

    // 2. Función para mostrar una diapositiva según su índice
    function showSlide(index) {
        items.forEach((item, i) => {
            if (i === index) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    // 3. Función para ir a la siguiente imagen
    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        showSlide(currentIndex);
    }

    // 4. Función para ir a la imagen anterior
    function prevSlide() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showSlide(currentIndex);
    }

    // 5. Iniciar la reproducción automática
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, intervalTime);
    }

    // 6. Detener la reproducción automática al interactuar
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    // 7. Event listeners para los botones de navegación (Flechas)
    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            nextSlide();
            resetAutoSlide();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            prevSlide();
            resetAutoSlide();
        });
    }

    // 8. Iniciar el carrusel
    startAutoSlide();
});