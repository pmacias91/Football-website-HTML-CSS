const cardContainer = document.querySelectorAll('.card');

cardContainer.forEach((card) => {

    const image = card.querySelector('img');
    const overlay = card.querySelector('.overlay');

    card.addEventListener('mouseenter', () => {
        overlay.style.opacity = "1";
        image.style.transform = "scale(1)";
    });

    card.addEventListener('mouseleave', () => {
        overlay.style.opacity = '0';
        image.style.transform = "scale(1.1)";
      });
});