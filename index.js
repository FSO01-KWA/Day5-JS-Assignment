// 1. a) ${}
// 2. a) Hello, Gyejin!
// 3. 벡터 안에서 줄 바꿈
// 4. 
const [first, second] = [10, 20];

console.log(first); // 출력: 10
console.log(second); // 출력: 20
// 5. 
const person = { name: 'Gyejin', age: 28 };

const { name, age } = person;

console.log(name); // 출력: 'Gyejin'
console.log(age); // 출력: 28
// 6. Y
// 7. 
const arr1 = [1, 2];
const arr2 = [3, 4];

const combinedArr = [...arr1, ...arr2]; 

console.log(combinedArr); // 출력: [1, 2, 3, 4]
// 8. F
// 9. a) [1,2,3,4]
// 10. 
function sum(...numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
  }
// 11. a) 1 rhk [2,3,4]
// 12. T
// 13. 
// main.js
import add from './math.js';

console.log(add(2, 3)); // 출력: 5
// 14. 
// 파일 이름: math.js:
export function add(a, b) {
    return a + b;
  }
  
  export function subtract(a, b) {
    return a - b;
  }
  
  export function multiply(a, b) {
    return a * b;
  }
  
  export function divide(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      throw new Error('Division by zero');
    }
  }
// 15.
// main.js:
import { subtract as minus } from './math.js';

console.log(minus(5, 3)); // 출력: 2
// 16. b) 파일을 비동기적으로 불러오기 위함

// 6. ES6 기능 관련 Recap(복습)
// 1. b) 클래스 인스턴스를 생성할 때
// 2. 
class Person {
    constructor(name) {
      this.name = name;
    }
  
    greet() {
      console.log(`Hello, ${this.name}`);
    }
  }
  
  const gyejin = new Person('홍길동');
  gyejin.greet();  // 출력: Hello, 홍길동

// 3. a) extends
// 4. b) 1초 후 'Success' 출력
// 5. pending, fulfilled, rejected
// 6. b) 여러 Promise를 병렬로 처리하고 모두 완료되면 하나의 결과를 얻을 때
// 7. b) next
// 8. a) function*
// 9. b) 1,2,undefined
// 10. a) 중복된 값을 허용하지 않는다.
// 11. a) {1.2.3}
// 12. c) 키-값 쌍을 저장하는 자료 구조
// 13. get

