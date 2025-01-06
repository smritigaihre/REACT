// //---------Convert Time to 12-hour Format------------

// function convertTo12HoursFormat(time24){
//     let [hours, minutes] = time24.split(":");
//     let period = hours>= 12? "PM": "AM";
//     hours = hours % 12 ||12;

//     return(`${hours}:${minutes} ${period}`);

// }
// console.log(convertTo12HoursFormat("13:20"));


// //-----------Filter out negative numbers------------

// let arr=[1,2,3,-7,8,-9,10];

// const nonNegativeNumbers = arr.filter(
//     arr=> arr>=0

// );
// console.log(nonNegativeNumbers);


// -------------- Count Vowels and Consonants in a String------------------

// let string = "smriti";
// let countVowels= 0;
// let countConstant = 0;


// const countVandC=(string) => {
//     for (let char of string) { // Loop through each character in the string
//         if (
//             char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u"
//         ) {
//             countVowels++; 
//         }
//     else{
//         countConstant++;
//     }

// }
// }
// countVandC(string);
// console.log(`Number of vowels is ${countVowels} and 
// no of constants is ${countConstant} of ${string}`);

// // -------------Find All Palindromes in an Array-------------

// let array = ["smriti", "Babita", "ababa", "bbaabb"];

// const findPalindrome = (array) =>
// {
//     // const Palindromes=[];

//    for(let word of array){
//     let reversed = word.split('').reverse().join('');
//     if (word.toLowerCase() === reversed.toLowerCase()){
//         Palindromes.push(word);
//     }
// }
// return Palindromes;
// };
// let result = findPalindrome(array);
// console.log("Palindromes in the array:", result);

// // ---------- another method------------

// let array = ["smriti", "Babita", "ababa", "bbaabb"];

// const isPalindrome= (string) =>
// {
//     return string=== string.split('').reverse().join('');
// }
// const palindroms = array.filter(isPalindrome);

// console.log(palindroms);


// // -----------Check if a Word is a Subsequence of Another------------


// const isSubsequence= (word, string)=>{

//     let index = 0;

//     for(let char of string){

//         if(char === word[index]){
//             index++;
//         }

//         if(index === word.length){
//             return true
//         }

//     }
//     return false;

// }

// console.log(isSubsequence('abc', 'aebdc'));
// console.log(isSubsequence('axe','aebdc'));




// //--------Autocomplete suggesstions---------

// const autocompleteSuggesstions=(dictionary, target)=>{

// return dictionary.filter(word=>word.startsWith(target));
// }

// const words = ["apple", "application", "apology", "banana"];
// const target = "app";

// const result = autocompleteSuggesstions(words, target);
// console.log(result);


// // ---------Remove Duplicates from an Array of Objects--------

// const removeDuplicates = (list) => {
//     return list.filter((value, index, self) => 
//         index === self.findIndex((item) => item.id === value.id)
//     );
// };

// const students = [

//     { id:1, 
//        name: "Babita", 
//        grade: 3.66, 
//        address: "Baneshwor" },
//     {
//       id:2,
//       name: "smrit",
//       grade: 2.74,
//       address: "sankhamul",
//     },
//     {
//       id:1,
//       name: "hari",
//       grade: 4,
//       address: "bhaktapur",
//     },
//     {
//       id:3,
//       name: "ram",
//       grade: 2.99,
//       address: "lalitpur",
//     },
//   ];
//   const uniqueStudents = removeDuplicates(students);
//   console.log(uniqueStudents);

// // -----------find the intersection of two arrays--------

// const findIntersection = (array1, array2) => {
//     return array1.filter(value => array2.includes(value));
// };


// const array1 = [1, 2, 3, 4];
// const array2 = [3, 4, 5, 6];


// const intersection = findIntersection(array1, array2);
// console.log(intersection);


// // ----------find the missing number in the range------

// const findMissingNumber = (range) => {
//     for (let i = range[0]; i <= range[range.length - 1]; i++) {
//         if (!range.includes(i)) 
//             return i;
//     }
// };

// const range = [1, 2, 3, 5];
// console.log(findMissingNumber(range)); 

// // -----------Count the Occurrences of a Specific Element----------

// const countElements = (array) => {
//     const count = array.map(num => array.filter(item => item === num).length);
//     return array.filter((num, index) => count[index] > 1 && array.indexOf(num) === index);
// };

// let arr = [1, 2, 2, 3, 2, 4];
// console.log(`The repeated items are: ${countElements(arr).join(', ')}`);



//------------Rotate the input string-----------

const rotateString =(input) =>
{
    return [...input].map((_, i) => input.slice(i) + input.slice(0, i));
};

const output = rotateString("Hello");

console.log(output);



// -------Rock paper scissors Game--------
const getUserInput = (input) => {
    return input
}
const getComputerResult = () => {
    const choices = ['rock','paper','scissors'] 
    const randomChoice = Math.floor(Math.random() * choices.length) // 0.9544 * 3 = 0.3 => 0
    return choices[randomChoice]
}
const getWinner = (user, computer) => {
    if(user === computer) {
        return 'draw'
    }
    if(user === 'rock' && computer === 'scissors' || 
        user === 'scissors' && computer === 'paper' ||
        user === 'paper' && computer === 'rock'
    ) {
        return 'user wins the game'
    } else {
        return 'computer wins the game'
    }
}
const playGame = (round = 5) => { // if round is not provided, default value is 5
    for(let i = 0; i < round; i++) {
        const userChoice = getUserInput('rock')
        const computerChoice = getComputerResult()
        const winner = getWinner(userChoice, computerChoice)
        console.log(`User: ${userChoice} Computer: ${computerChoice} Winner: ${winner}`);
    }
}
playGame(10)










