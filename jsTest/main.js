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