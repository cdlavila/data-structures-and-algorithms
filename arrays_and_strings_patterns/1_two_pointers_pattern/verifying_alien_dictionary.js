/*
In an alien language, surprisingly, also use the Spanish letters,
but possibly in a different order, a permutation of our alphabet.

Given a sequence of words written in the foreign language, and the order of the alphabet,
return true if and only if the given words are ordered lexicographically in this foreign language.
*/


// T = O(N), where N is the length of the largest word
const compareWords = (word1, word2, dictMap) => {
    const minLength = Math.min(word1.length, word2.length);
    for (let i = 0; i < minLength; i++) {
        if (dictMap.get(word1[i]) < dictMap.get(word2[i])) return true;
        if (dictMap.get(word1[i]) > dictMap.get(word2[i])) return false;
    }
    return word1.length <= word2.length;
}

// T = O(N) and S = O(M), where N is the number of words and M is the length of the order string
const isAlientSorted = (words, order) => {
    const dictMap = new Map();
    for (let i = 0; i < order.length; i++) {
        dictMap.set(order[i], i);
    }

    for (let j = 1; j < words.length; j++) {
        if (!compareWords(words[j - 1], words[j], dictMap)) return false;
    }
    return true;
}

console.log(isAlientSorted(["habito","hacer","lectura","sonreir"], "hlabcdfgijkmnopqrstuvwxyz")); // true
