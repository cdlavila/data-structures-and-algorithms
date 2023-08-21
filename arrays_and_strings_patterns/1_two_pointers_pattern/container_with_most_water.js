/*
Given a list of numbers representing a group of lines of different heights.

Find two lines that form a container such that it contains the most water.

Return the maximum amount of water that a container can hold.
*/

// Time: O(n) | Space: O(1)
function maxArea(heights) {
    let p1 = 0;
    let p2 = heights?.length - 1;
    let area = 0;

    while (p1 !== p2) {
        const minHeight = Math.min(heights[p1], heights[p2]);
        const base = p2 - p1;
        const newArea = minHeight * base;
        area = Math.max(area, newArea);

        const maxHeight = Math.max(heights[p1], heights[p2]);
        if (maxHeight === heights[p1]) p2--;
        else p1++;
    }

    return area;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49