document.addEventListener('DOMContentLoaded', function () {
    const points = document.querySelectorAll('.point');
    const cards = document.querySelectorAll('.card');

    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;

        points.forEach((point, index) => {
            const pointPosition = point.offsetTop;

            if (scrollPosition > pointPosition) {
                const isEven = index % 2 === 0;
                cards[index].style.opacity = '1';
                cards[index].style.transform = isEven ? 'translateY(0)' : 'translateY(50px)';
            }
        });
    });
});