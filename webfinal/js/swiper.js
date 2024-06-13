document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.swiper-container', {
        loop: true, // 루프 설정
        slidesPerView: 1, // 한 번에 보여질 슬라이드 개수
        spaceBetween: 0, // 슬라이드 간 간격 (픽셀)
        centeredSlides: true, // 현재 슬라이드를 가운데로 정렬
        autoplay: {
            delay: 5000, // 자동 재생 딜레이 시간 (밀리초)
            disableOnInteraction: false, // 사용자 인터랙션 후 자동 재생 계속 여부
        },
        navigation: {
            nextEl: '.swiper-button-next', // 다음 버튼 클래스
            prevEl: '.swiper-button-prev', // 이전 버튼 클래스
        },
    });
});