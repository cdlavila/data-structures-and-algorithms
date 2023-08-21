/*
Write a function that inverts a string. The input string is given as an array of characters.

Challenge: do this by modifying the input list with O(1) of extra memory.
*/

// O(n/2) time | O(1) space
const reverseStringArray = (stringArray) => {
    let pointer1 = 0;
    let pointer2 = stringArray.length - 1;

    while (pointer1 < pointer2) {
        [stringArray[pointer1], stringArray[pointer2]] = [stringArray[pointer2], stringArray[pointer1]];
        pointer1++;
        pointer2--;
    }
    return stringArray;
}

console.log(reverseStringArray(["h","e","l","l","o"])); // ["o","l","l","e","h"]
console.log(reverseStringArray(["h","o","l","a"])); // ["a","l","o","h"]
