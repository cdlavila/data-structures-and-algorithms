const reverseVowels = (string) => {
    const vowels = "aeiouAEIOU";
    const stringArray = string.split('');

    let pointer1 = 0;
    let pointer2 = stringArray.length - 1;

    while (pointer1 < pointer2) {
        if (vowels.includes(stringArray[pointer1])) {
            if (vowels.includes(stringArray[pointer2])) {
                [stringArray[pointer1], stringArray[pointer2]] = [stringArray[pointer2], stringArray[pointer1]];
                pointer1++;
            }
            pointer2--;
        } else {
            pointer1++;
            if (!vowels.includes(stringArray[pointer2])) pointer2--;
        }
    }
    return stringArray.join('');
}

console.log(reverseVowels("hola")); // "halo"
console.log(reverseVowels("hello")); // "holle"
console.log(reverseVowels("leetcode")); // "leotcede"