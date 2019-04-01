function swap(arr, i) {
  [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]

  return arr
}

function bubbleSort(array, func, n = array.length) {

  // Base Case: If array size is 1, return.
  if (n === 0 || n === 1) {
    return array
  } else {
    if (!func) {
      // Do One Pass of normal Bubble Sort. This pass fixes last element of current subarray.
      for (let i = 0; i < n - 1; i++) {
        if (array[i] > array[i + 1]) {
          array = swap(array, i)
        }
      }
    } else {
      for (let i = 0; i < n - 1; i++) {
        if (func(array[i], array[i + 1]) === -1 || func(array[i], array[i + 1]) === 0) {
          continue
        } else if (func(array[i], array[i + 1]) === 1) {
          array = swap(array, i)
        }
      }
    }
    n--
    // Recur for all elements except last of current subarray.
    return bubbleSort(array, func, n)
  }
}
