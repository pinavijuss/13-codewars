
//You got this!
function removeChar(str) {

    var splitString = str.split("");

    var firstLetter = splitString.shift();
    var lastLetter = splitString.pop();
    var joinArray = splitString.join("");

    return joinArray;

}






console.log(removeChar('eloquent'), 'loquen');
console.log(removeChar('country'), 'ountr');
console.log(removeChar('person'), 'erso');
console.log(removeChar('place'), 'lac');
