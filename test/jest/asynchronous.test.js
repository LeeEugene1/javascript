const fn = require('./fn')

//async await
test('2초후 에러',async()=>{
    // const age = await fn.getAge()
    // expect(age).toBe(31)
    // await expect(fn.getAge()).resolves.toBe(30);
})

//promise: return으로 시작해야함
test('2초 후에 받아온 나이는 30',()=>{
    // return fn.getAge()
    // .then(age => {
    //     expect(age).toBe(31)
    // })
    return expect(fn.getAge()).resolves.toBe(30)
    // return expect(fn.getAge()).rejects.toMatch('promise err');
})

//callback : done을 넘겨주고 호출해야함
test('3초 후에 받아온 이름은 Mike',(done)=>{
    function callback(name){
        // expect(name).toBe("Mike33")
        // done()
        try {
            expect(name).toBe("Mike");
            done()
        } catch (error) {
            done(error)
        }

    }
    fn.getName(callback);
})