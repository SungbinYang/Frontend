const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
    // 포커스 강제 적용
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function() {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});