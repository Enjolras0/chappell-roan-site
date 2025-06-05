document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.custom-track');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    let index = 0;

    function updateSlider() {
        track.style.transform = `translateX(-${index * 100}vw)`;
    }

    prevBtn.addEventListener('click', () => {
        index = Math.max(0, index - 1);
        updateSlider();
    });

    nextBtn.addEventListener('click', () => {
        index = Math.min(1, index + 1);
        updateSlider();
    });
});
