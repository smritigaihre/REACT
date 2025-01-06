//High Order Function : function as parameter/argument, return as function

//built in function: Map, filter, ForEach, (Every, some, Reduce, Fiindindex, Find)

//Example: 
//1. function as an argument

// function hofAsArgument(firstName, callback){
//     console.log('This is a first function');
//     console.log(firstName);
//     setTimeout(() => {
//         callback("Gaihre");
//     },3000) //3 sec delay
//     ;

// }

// function callBackFunction(lastName){
//     console.log(lastName);
//     console.log('This is a second function');
// }

// const functionCall = hofAsArgument("Smriti",callBackFunction)

//2. function as return

// function hofAsReturn(value){
//     return function(multiple){
//         return multiple*value;
//     }
// }
// const hofReturnData= hofAsReturn(2)
// const result = hofReturnData(5)
// console.log(result);

//3. Built in HOF-s functions
//i) forEach

const positiveNumber= [1,2,3,4,5,6]
const forEachFunc= positiveNumber.forEach(item*3)
console.log(item);
// });

// ------------Filter------------------
// return new array
let arr = [8, 9, 0, -1, -2, -4];
const filterResult = arr.filter((item) => {
  return item > 0;
});
console.log(filterResult);

// --------------Map-----------
let array = [1, 2, 3, 4, 5, 6];
const mapResult = array.map((item) => {
  return item * 3;
});
console.log(mapResult);

const students = [
  { name: "Babita", grade: 3.66, address: "Baneshwor" },
  {
    name: "smrit",
    grade: 2.74,
    address: "sankhamul",
  },
  {
    name: "hari",
    grade: 4,
    address: "bhaktapur",
  },
  {
    name: "ram",
    grade: 2.99,
    address: "lalitpur",
  },
];

//List the name of student who score grade greater than 3.5

const grade = students.filter((student) => {
  return student.grade > 3.5;
});

const studentName = grade.map((student) => {
  return student.name;
});

console.log(studentName);













