//1. 나이가 19살 이상이면 입장가능, 19살 미만이면 입장 불가 출력
// 나이가 10살이면 당첨을 출력하고 아니면 다음기회에 출력
// 본인이름, 나이는 상수로 설정, 삼항연산자 사용할 것
const person1 = {
  age : 20,
  name : '정이',
  score : 80
};
const person2 = {
  age : 10, 
  name : '철수',
  score : 60
}
console.log(person1);
console.log(`${person1.name}님은 ${person1.age}살 입장가능여부는 : `+(person1.age > 19 ? '입장가능' : '입장불가'));
console.log('이벤트 당첨여부 : '+(person1.age === 10 ? '당첨' : '다음 기회에'));
console.log(person2);
console.log(`${person2.name}님은 ${person2.age}살 입장가능여부는 : `+(person2.age > 19 ? '입장가능' : '입장불가'));
console.log('이벤트 당첨여부 : '+(person2.age === 10 ? '당첨' : '다음 기회에'));

//출력결과
// 본인이름님은 00살 입장가능여부는 결과 
// 이벤트 당첨여부
//출력

//2. 점수가 60점 이상이면 합격, 60점 미만이면 불합격출력
// 점수가 100점이면 장학생, 아니면 일반학생 출력
// 학생이름, 점수는 상수로 설정

console.log(person1);
//합격 여부 출력하기
console.log(`${person1.name}님은 ` + (person1.score >= 60 ? '합격' : '불합격') + '입니다');
//장학생 여부 출력하기
console.log(`${person1.name}님은 ` + (person1.score === 100 ? '장학생입니다' : '장학생이 아닙니다'));


//3. 학생의 이름과 성적을 입력받아서 성적에 따른 학점 출력
// 90점 이상 : A, 80점 이상 : B,  70점이상 : C, 그외 : F

(function (name, score){
  let grade = ''
  if(score >= 90) {
    grade = 'A'
  }else if(score >= 80){
    grade = 'B'
  }else if(score >= 70){
    grade = 'C'
  }else {
    grade = 'F'
  }
  console.log(`${name}님의 학점은 ${grade}입니다`);
})(person1.name, person1.score);

// console.log(grade);

//4. 1부터 100까지의 숫자중 3, 6, 9의 배수 합계 출력
let sum = 0; 
for(let i = 1; i <= 100; i++) {
  sum = sum + ((i % 3 == 0 || i % 6 == 0 || i % 9 == 0) ? i : 0);
}
console.log(sum);
