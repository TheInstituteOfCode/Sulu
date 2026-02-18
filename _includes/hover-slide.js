const hoverContainers = document.querySelectorAll('.hover-slideshow-container');

hoverContainers.forEach(container => {
    const initialImage = container.querySelector('.hover-slideshow-image-initial');
    const secondaryImage = container.querySelector('.hover-slideshow-image-secondary');
    const dataDiv = container.querySelector('.data-div');
    const hoverImages = dataDiv.querySelectorAll('img');
    let currentSlide = 0;
    const totalSlides = hoverImages.length;

    container.addEventListener('mouseenter', () => {
        container.classList.add('hovered');
                setTimeout(() => showNextImage(), {{page.images-hover-speed}});
    });

    container.addEventListener('mouseleave', () => {
        container.classList.remove('hovered');
    });

    function showNextImage() {
        console.log('showNextImage called');
        if (!container.classList.contains('hovered')) return;

        currentSlide = (currentSlide + 1) % totalSlides;
        const nextImageSrc = hoverImages[currentSlide].src;

        secondaryImage.src = nextImageSrc;


        setTimeout(() => {
            showNextImage()
        }, {{page.images-hover-speed}});
    }



});