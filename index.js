function insertionSort(arr) {
    const n = arr.length;
    // Start from the second element
    for (let i = 1; i < n; i++) {
        // Pick the current element arr[i] to be inserted into the array that has been sorted
        let current = arr[i];
        let j = i - 1;

        // Move elements of arr[0..i-1], that are greater than current, one position ahead of their current position
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

// Example:
let arr = [5, 2, 4, 6, 1, 3, 6, 9, 7, 10, 8];
console.log("Original array:", arr);
console.log("Sorted array:", insertionSort(arr.slice())); // Using slice() method to create a copy of the array
