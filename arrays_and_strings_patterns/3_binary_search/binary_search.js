/*
Binary Search: It is a searching algorithm that finds the position of a target value within a SORTED array.
T = O(log n), S = O(1)
*/

function binarySearch(elements, target) {
    let left = 0;
    let right = elements.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (elements[middle] === target) return middle;
        else if (elements[middle] < target) left = middle + 1;
        else right = middle - 1;
    }
    return -1; // Represents not found
}

console.log(binarySearch([1, 2, 3, 4, 5], 4)); // 3