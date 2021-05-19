let myName = "Sungbin!!!";
let email = 'ysb05222@naver.com';
let hello = `Hello ${myName} ?!`; // 보간법 사용

let user = {
    name: 'Sungbin',
    age: 85
};

let fruits = ['Apple', 'Banana', 'Cherry'];

const a = 12; // 값을 재 할당 불가

// 변수나 함수 이름으로 예약어 사용 금지

//함수 선언
function helloFunc() {
    console.log(1234);
}

function returnFunc() {
    return 123;
}

function sum(a, b) { // a와 b는 parameter
    return a + b;
}

// 재사용
let a1 = sum(1, 2); // 1과 2는 arguments
let b1 = sum(7, 12);
let c1 = sum(2, 4);

let x = returnFunc();

// 기명 함수
// 함수 선언! 
function hi() {
    console.log('Hello');
}

// 익명 함수
// 힘수 표현
let world = function() {
    console.log('World!');
}

//객체 데이터
const sungbin = {
    name: 'Sungbin',
    age: 26,
    // 메소드
    getName: function() {
        return this.name;
    }
};

const hisName = sungbin.getName();

let isShow = true;
let checked = false;

if (isShow) {
    console.log('Show!');
} else {
    console.log('Hide?');
}

console.log('Sungbin!');
console.log(myName);
console.log(email);
console.log(hello);
console.log(user);
console.log(user.age);
console.log(user.name);
console.log(fruits);
console.log(fruits[0]);
console.log(a);
helloFunc();
console.log(x);
console.log(a1, b1, c1);
hi();
world();
console.log(hisName);

// DOM API
// HTML 요소(Element) 1개 검색/찾기
let boxEl = document.querySelector('.box');
console.log(boxEl);

// HTML 요소에 적용할 수 있는 메소드
// 인수(Argument)를 추가 가능
// 1 - 이벤트(Event, 상황)
// 2 - 핸들러(Handler, 실행할 함수)
// 요소의 클래스 정보 객체 활용
boxEl.addEventListener('click', function() {
    console.log('Click~');
    boxEl.classList.add('active');
    console.log(boxEl.classList.contains('active'));
    boxEl.classList.remove('active');
    console.log(boxEl.classList.contains('active'));
});

// HTML 요소(Element) 모두 검색 및 찾기
const boxEls = document.querySelectorAll('.box');
console.log(boxEls);

// 칮은 요소들 반복해서 함수 실행!
// 익명 함수를 인수로 추가
boxEls.forEach(function() {});

// 첫번째 매개변수 : 반복 중인 요소
// 두번째 매개변수 : 반복 중인 번호
boxEls.forEach(function(boxEl, index) {});

// 출력
boxEls.forEach(function(boxEl, index) {
    boxEl.classList.add(`order-${index + 1}`);
    console.log(index, boxEl);
});

// Getter, 값을 얻는 용도
console.log(boxEl.textContent);

// Setter, 값을 지정하는 용도
boxEl.textContent = 'Sungbin';
console.log(boxEl.textContent);

const q = 'Hello~';
// split : 문자를 기준으로 쪼개서 배열로 변환
// reverse : 배열을 뒤집기
// join : 배열을 인수 기준으로 문자로 병합해 반환
const w = q.split('').reverse().join(''); // 메소드 체이닝

console.log(q);
console.log(w);