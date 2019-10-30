function binarySearch(arr, x) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const guess = arr[mid];

        if (guess === x) {
            return mid;
        }

        if (guess < x) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return null;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8));   // 7
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));   // 1
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 100)); // null