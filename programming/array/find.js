//배열의 요소에서 name속성의 값이 apple인 요소의 값을 반환해보자
const fruits = [
    {name:'apple', grade:'A'},
    {name:'banana', grade:'C'},
    {name:'pineapple', grade:'D'},
    {name:'pear', grade:'B'},
]

const result = fruits.find(data => data.name = 'apple')
console.log(result)//{name: 'apple', grade: 'A'}gi