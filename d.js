
// // const a = [10,20,30,40]
// // console.log(a) // [10,20,30,40]


// const [a,b,...c] = [10,20,30,40]
// console.log(a,b,c)




// function f(...b){
//     console.log(b)
// }
// f(1)
// f(1,2)
// f(1,2,3)


// const o = {name:"GAURAT",firstName:"fred",age:49,job:"dev"}


// const {name,firstName,...leReste} = o

// console.log(name)
// console.log(leReste)

// o.name="MARTIN"
// console.log(o)
// // o = "toto"
// // console.log(o)

// // const o2 = {name:o.name,firstName:o.firstName}
// const o2 = {...o,age:22}
// console.log(o2)


let a = [10,20,30]
let clone_a = [...a]
let b = [...a,40,50,60]
console.log(a)
console.log(b)
b.push(70)
console.log(a)
console.log(b)
