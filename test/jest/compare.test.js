const fn = require('./fn')

//toBeGreaterThan 크다
//toBeGreaterThanOrEqual 크거나 같다
//toBeLessThan 작다
//toBeLessThanOrEqual 작거나 같다

test('ID는 10자 이내여야 합니다.',()=>{
    const id = 'THE_BLACK'
    expect(id.length).toBeLessThanOrEqual(10)
})

test('PW는 4자',()=>{
    const pw = '1234'
    expect(pw.length).toEqual(4)
})

test('0.1더하기 0.2는 0.3',()=>{
    expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3)
})
