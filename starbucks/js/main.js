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