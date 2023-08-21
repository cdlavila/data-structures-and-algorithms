/*
Given a sorted array, but rotated at some point (k), find the index of a target element.
Rotation example: Starting array [0, 1, 2, 3, 4, 5, 6, 7] -> [4, 5, 6, 7, 0, 1, 2], k = 4
*/

// T = O(log n), S = O(1)
function binarySearchRotated(elements, target) {
    let left = 0;
    let right = elements.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (elements[middle] === target) return middle;
        if (elements[middle] >= elements[left]) { // left side is sorted
            if (target >= elements[left] && target < elements[middle]) // target is in left side
                right = middle - 1;
            else left = middle + 1;
        }
        else { // right side is sorted
            if (target <= elements[right] && target > elements[middle]) // target is in right side
                left = middle + 1;
            else right = middle - 1;
        }
    }
    return -1;
}

console.log(binarySearchRotated([4, 5, 6, 7, 0, 1, 2], 0)); // 4