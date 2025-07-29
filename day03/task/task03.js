//1. 문자열을 인수로 받아 역순으로 뒤집을 결과를 반환하는 함수
// 콜백을 사용하여 문자열을 역순으로 출력

// 함수명 printStr()  매개변수 1개
// 함수명 reverseStr() 콜백사용
// 참고 : split(), reverse(), join()

// function printStr(callback) {
//   console.log(callback);
// }
// function reverseStr(str) {
//   let ar = split(str);
//   let ar2 = ar.reverse();
//   let ar3 = ar2.join();
//   return ar3;
// }
// printStr(reverseStr("안녕하세요"));


//2.  성과 이름을 전달받아서 풀네임을 만든 뒤 000님 환영합니다 출력하기

//함수명 welcomeUser

const person1 = {
  lastName : '백',
  firstName : '정이',
  age : 20
}
function welcomeUser(last, first){
  console.log(`${last + first}님 환영합니다`);
}
welcomeUser(person1.lastName, person1.firstName);

//3. 사용자 나이를 입력후 성인이면 true반환, 아니면 false 반환

//함수명 isAdult

function isAdult(age) {
  return age >= 20 ? true : false
}
if(isAdult(person1.age)){
  console.log('성인입니다');
}else{
  console.log('성인이 아닙니다');
}

//4. 객체를 사용해 성적관리 프로그램 만들기
//프로그램이 등록되지 않은 학생은 3명이다
//이름 : 둘리, 나이 : 5, 점수 : 80
//이름 : 도우너, 나이 : 6, 점수 : 50
//이름 : 또치, 나이 : 5, 점수 : 90
// 학생마다의 점수 출력하기(이름 점수 같이 출력할 것)
// 3명을 모두 프로그램에 등록시킨다
// 3명의 학생 정보를 학교 객체로 선언 후에 학교 객체에 등록시킨다

const students = [
  {name : '둘리', age : 5, score : 80},
  {name : '도우너', age : 6, score : 50},
  {name : '또치', age : 5, score : 90},
];

let school = {};
let program = []; 
// function Student(name, age, score){
//   this.name = name;
//   this.age = age, 
//   this.score = score; 
// }
// const student1 = new Student('둘리', 5, 80);
// const student2 = new Student('도우너', 6, 50);
// const student3 = new Student('또치', 5, 90);

let i = 0; 
for(student of students) {
  ++i;
  console.log(student.score);
  program[i] = student;
}
school.student1 = program[1];
school.student2 = program[2];
school.student3 = program[3];

console.log(program);
console.log(school);


//5. 포인트를 각각 객체에 추가하고 순서대로 point는 80, 50, 90이다
//포인트를 모두 더한 값을 출력하라
school.student1.point = 80;
school.student2.point = 50;
school.student3.point = 90;
let sum = 0;
for(let stu in school){
  sum = sum + stu.point;
}
console.log(sum);