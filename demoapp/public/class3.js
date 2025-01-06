// Spread and rest operator(...) in js
//spread=-> unpack
//rest ==> pack

// 1. Rest operator(...)

// function sum(a,b,...other){
//      const result= a+b;
//     // let result= 0;

//     // for(const i of other){
//     //     result+=i;
//     // }
//     console.log(other);
//     console.log(result);
// }
// sum(1,2,3,4,5,6)

// //for objects
// const sampleObject ={
//     id:1,
//     city:'Kathmandu',
//     customerName: 'Hari'
// }
// const{id,...otherObj}= sampleObject
// console.log(id);
// console.log(otherObj);

// // -------------Spread Operator(...)----------

// const old= [1,2,3,4,5,6]
// const old3= [7,8]
// const newArray =[...old,4,5,6,...old3]
// console.log(newArray);

// const str= "hello"
// const unpack= [...str]
// console.log(unpack)

// console.log(Math.max(...old));

// const oldObject = {
//     id:1,
//     name:"smriti"
// }
// const newObj = {
//     ...oldObject,
//     grade:'A'
// }
// console.log(newObj);

//Task: calculate average from number input
// Eg: input: 10,"hello", 34, -1, 34
//output: 19.25



const average = (...input) =>{
    // const numberOnly = inputs.filter(num => typeofnum==='number')
    let sum=0;
    let count=0;// we can use.length function instead of count
    for(let item of input){
    if (typeof item === "number"){
        sum+=item;
        count++;
        
    }
}
let result= sum/count;

console.log("the average of number input is", result);

}
average(10, "hello", 34, -1, 34)


