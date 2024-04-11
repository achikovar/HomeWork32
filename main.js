// 1. Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

// const romanNumeral = 'III';

// function romanToInt(s) {
//     const romanNumerals = {
//         I : 1,
//         V : 5,
//         X : 10,
//         L : 50,
//         C : 100,
//         D : 500,
//         M : 1000
//     }
//     let result = 0;
//     for (let i = 0; i < romanNumeral.length; i++) {
//       const currentSymbol = romanNumerals[s[i]];
//       const nextSymbol = romanNumerals[s[i + 1]];
//       if (nextSymbol && currentSymbol < nextSymbol) {
//         result -= currentSymbol;
//       } else {
//         result += currentSymbol;
//       }
//     }
//     return result;
//   }

//   console.log('ციფრი:', romanToInt(romanNumeral));




// 2. Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// function isAnagram(s, t) {// write code here}

// const s = "anaGram";
// const t = "nagaram";


// function isAnagram(s, t) {
//     let word = s.toLowerCase().split('').sort().join('')
//     let anag = t.toLowerCase().split('').sort().join('')
//     return (word === anag)
// }


// console.log(isAnagram(s, t))




// 3.Write a program that outputs the string representation of numbers from 1 to n. 
// But for multiples of three it should output "Fizz" 
// instead of the number and for the multiples of five output "Buzz". For numbers which 
// are multiples of both three and five output "FizzBuzz"
    
    // function fizzBuzz(n){
    // const arr = []
    // for(let i = 1; i <= n; i++){
    // if (i % 3 === 0 && i % 5 === 0){
    //     arr.push('fizzbazz')
    // }
    
    // else if(i % 3 === 0){
    //     arr.push('fizz')
    // }
    
    
    // else if(i % 5 === 0){
    //     arr.push('buzz')
    // }
    
    // else {
    //     arr.push(i)
    // }
    
    // }
    // return arr
    // }
    
    // console.log(fizzBuzz(15))