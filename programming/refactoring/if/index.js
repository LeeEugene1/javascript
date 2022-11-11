const naverLogin = (id) => {
    //...
    return 'naver'
}
const googleLogin = (id) => {
    //...
    return 'google'
}

// [1] if~else
// const socialLogin = (where, id) => {
//     let domain
//     if( where === 'naver'){
//         domain = naverLogin(id)
//     } else if( where === 'google'){
//         domain = googleLogin(id)
//     }
//     return `${domain} ${id}`
// }

// [2] switch
// const socialLogin = (where, id) => {
//     let domain
//     switch (where) {
//         case 'naver':
//             domain = naverLogin(id)
//             break;
//         case 'google':
//             domain = googleLogin(id)
//             break;
//     }
//     return `${domain} ${id}`
// }

// [3] switch+return
// const socialLogin = (where, id) => {
//     const domain = executeDomain(where, id)
//     return `${domain} ${id}`
// }

// const executeDomain = (where, id) => {//false를 안하면 맨 밑으로 내려오기때문에 return
//     switch (where) {
//         case 'naver':
//             return naverLogin(id)
//         case 'google':
//             return googleLogin(id)
//     }
// }

// [4] [3] => 객체로 매핑: 데이터와 동작 분리
const SocialLoginMap = {
    naver: naverLogin,
    google: googleLogin
}
const socialLogin = (where, id) => {
    // const domain = executeDomain(where, id)
    const domain = SocialLoginMap[where](id)//naverLogin(id)
    return `${domain} ${id}`
}
console.log(socialLogin('naver','user'))
