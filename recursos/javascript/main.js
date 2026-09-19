document.addEventListener('DOMContentLoaded', () => {
    // 1. Selecciona TODOS los carruseles presentes en el documento
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach((carouselContainer) => {
        const items = carouselContainer.querySelectorAll('.carousel-item');
        const prevBtn = carouselContainer.querySelector('.carousel-control-prev');
        const nextBtn = carouselContainer.querySelector('.carousel-control-next');
        
        if (items.length === 0) return; // Si el carrusel no tiene elementos, ignora este contenedor

        let currentIndex = 0;
        const intervalTime = 4000; // Tiempo entre diapositivas (4 segundos)
        let autoSlideInterval;

        // 2. Muestra la diapositiva correspondiente al índice
        function showSlide(index) {
            items.forEach((item, i) => {
                if (i === index) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        }

        // 3. Avanzar a la siguiente imagen
        function nextSlide() {
            currentIndex = (currentIndex + 1) % items.length;
            showSlide(currentIndex);
        }

        // 4. Retroceder a la imagen anterior
        function prevSlide() {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            showSlide(currentIndex);
        }

        // 5. Iniciar la reproducción automática
        function startAutoSlide() {
            autoSlideInterval = setInterval(nextSlide, intervalTime);
        }

        // 6. Reiniciar el temporizador tras la interacción del usuario
        function resetAutoSlide() {
            clearInterval(autoSlideInterval);
            startAutoSlide();
        }

        // 7. Escuchadores de eventos para los botones de navegación
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

        // 8. Iniciar el ciclo del carrusel actual
        startAutoSlide();
    });
});