function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++) {
		let j = i - 1;
        let current = arr[i];
        
		while (arr[j] > current && j >= 0) {
			arr[j + 1] = arr[j];
            j -= 1;
        }

        arr[j + 1] = current;
    }

    return arr;
}

console.log(insertionSort([10,7,3,6,5,18]));
