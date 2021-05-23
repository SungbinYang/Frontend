const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

// 검색 아이콘을 클릭했을 때 이벤트 핸들러 함수
searchEl.addEventListener('click', function() {
    // 포커스 강제 적용
    searchInputEl.focus();
});

// 검색창 포커스되었을 때 이벤트 핸들러 함수
searchInputEl.addEventListener('focus', function() {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

// 검색창 포커스가 해제되었을 때 이벤트 핸들러 함수
searchInputEl.addEventListener('blur', function() {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');

// 스크롤시 뱃지 이미지 사라지는 이벤트
// 스크롤시 함수가 수십번 호출되는것을 0.3초 부하를 줘서 방지하는 용도 : lodash.js
// _.throttle(함수, 시간)
window.addEventListener('scroll', _.throttle(function() {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
        // 배지 숨기기
        // gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
    } else {
        // 배지 보이기
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
    }
}, 300));

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7, // 0.7, 1.4, 2.1, 2.8
        opacity: 1
    });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});

new Swiper('.promotion .swiper-container', {
    slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    loop: true,
    // autoplay: {
    //     delay: 5000
    // },
    pagination: {
        el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택
        clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});