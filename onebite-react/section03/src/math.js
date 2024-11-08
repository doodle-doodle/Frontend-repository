// math 모듈
function add(a, b) {
    return a+b;
}

function sub(a,b){
    return a-b;
}

// CJS 모듈 시스템
// module.exports = {
//     add: add,
//     sub,
// };

// export {add, sub};

export default function multiply(a, b) {
    return a * b ;
}
