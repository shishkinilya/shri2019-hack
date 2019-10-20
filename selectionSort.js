function selectionSort(arr) {
    const length = arr.length;

    for (let i = 0; i < length; i++) {
        let maxIndex = 0;
        let tmp;

        for (let j = 0; j < length - i; j++) {
            maxIndex = arr[j] > arr[maxIndex] ? j : maxIndex;
        }

        tmp = arr[maxIndex];
        arr[maxIndex] = arr[length - i - 1];
        arr[length - i - 1] = tmp;
    }

    return arr;
};

console.log(selectionSort([10,7,3,6,5,18]));