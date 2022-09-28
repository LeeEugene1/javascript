const fn = {
    add: (num1, num2) => num1 + num2,
    makeUser: (name, age) =>({ name, age, gender:undefined }),
    throwErr:()=>{
        throw new Error('x')
    },
    getName:callback=>{
        const name = "Mike"
        setTimeout(()=>{
            callback(name)
            // throw new Error('server err')
        },2000)
    },
    getAge:callback=>{
        const age = 30
        return new Promise((res, rej)=>{
            setTimeout(()=>{
                res(age)
                // rej('promise err')
            },2000)
        })
    }
}

module.exports = fn;