function swap(arr, i) {
  if (arr[i] > arr[i + 1]) {
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
  }

  return arr
}

function bubbleSort(array, n = array.length) {

  let length = n

  // Base Case: If array size is 1, return.
  if (length === 0 || length === 1) {
    return array
  } else {
    // Do One Pass of normal Bubble Sort. This pass fixes last element of current subarray.
    for (let i = 0; i < length - 1; i++) {
      if (array[i] > array[i + 1]) {
        array = swap(array, i)
      }
    }
    length--
    // Recur for all elements except last of current subarray.
    return bubbleSort(array, length)
  }
}

