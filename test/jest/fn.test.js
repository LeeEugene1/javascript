const fn = require('./fn')

let num = 10

beforeEach(()=>{//테스트전에 초기화
    num = 0
})

test('이거 에러',()=>{
    expect(()=>fn.throwErr())
    // expect(()=>fn.throwErr()).toThrow('ddddd')//
    // expect(()=>fn.throwErr()).toThrow('x')//
})

test('0+1은 1',()=>{
    num = fn.add(num, 1)
    expect(num).toBe(100000)
})

test('2더하기 3은 5',()=>{
    expect(fn.add(2,3)).toBe(5)
})

// test('3더하기 3은 5?',()=>{
//     expect(fn.add(3,3)).toBe(5)
// })

test('2더하기 3은 5',()=>{
    expect(fn.add(2,3)).toEqual(5)
})

test('이름과 나이를 전달받아 객체를 반환',()=>{
    expect(fn.makeUser("Mike", 30)).toEqual({
        name:"Mike",
        age:30,
    })
})

// test('이름과 나이를 전달받아 객체를 반환',()=>{
//     expect(fn.makeUser("Mike", 30)).toStrictEqual({
//         name:"Mike",
//         age:30,
//     })
// })

