// Write your code below this line
/*
In this challenge, you’ll write a decoder.
Write a function that takes in a string and returns a string. A valid argument is a number followed by a sequence of letters. Ex. 2fcjjm
The number in the string represents how many characters each letter should shift. For example:
>>> "1a" // "b"
>>> "3ce" // "fh"
>>> "2fcjjm" // "hello"
*/

let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let decodeString = word => {
    let num = +word[0];
    //console.log(`num = ${num}`);
    let decodedWord = '';

    for(let i = 1; i < word.length; i++){
        let index = alphabets.indexOf(word[i]) + num;
        //console.log(`index = ${index}`);
        if(index < alphabets.length){
            decodedWord += alphabets[index]
        }      
    }
    return decodedWord
}

function decodeString2(word){
    let num = +word[0];
    var unicodeString = '';

    for(let i = 1; i < word.length; i++){
        var cahrToUni = word[i].charCodeAt(0);
        var newChar = String.fromCharCode(cahrToUni + num);
        unicodeString += newChar
    }
    return unicodeString
}

console.log(test("2fcjjm"));