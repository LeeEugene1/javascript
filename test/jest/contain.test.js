
test('Hello World에 a라는 글자가 존재',()=>{
    expect('Hello World').toMatch(/h/i)//i는 대소문자 구별하지않음
})

test('유저리스트에 Mike가 존재',()=>{
    const user = 'Mike'
    const userList = ['Tom', "Mike", "kai"]
    expect(userList).toContain(user)
})