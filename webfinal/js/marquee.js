$('.marquee').marquee({
    duration: 2e4, // 속도
    gap: 10, // 간격
    delayBeforeStart: 500, // 시작 delay값
    direction: 'left', // 방향
    duplicated: true, // 선택 영역 복제
    pauseOnHover: true, // hover시 일시중지 여부
    startVisible: true,
});
$('.marquee2').marquee({
    duration: 2e4, // 속도
    gap: 10, // 간격
    delayBeforeStart: 500, // 시작 delay값
    direction: 'left', // 방향
    duplicated: true, // 선택 영역 복제
    pauseOnHover: true, // hover시 일시중지 여부
    startVisible: true,
});

document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-in");
                } else {
                    entry.target.classList.remove("fade-in");
                }
            });
        },
        { threshold: 0.1 }
    );

    const targetElements = document.querySelectorAll(".fade-wrap");
    targetElements.forEach((element) => {
        observer.observe(element);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-in");
                } else {
                    entry.target.classList.remove("fade-in");
                }
            });
        },
        { threshold: 0.1 }
    );

    const targetElements = document.querySelectorAll(".fade-wrap2");
    targetElements.forEach((element) => {
        observer.observe(element);
    });
});