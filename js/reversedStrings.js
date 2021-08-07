function solution(str) {

    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;

}





console.log(solution('world'), 'dlrow');


console.log(solution('hello'), 'olleh');
console.log(solution('grybas'), '');
console.log(solution('h'), 'h');



