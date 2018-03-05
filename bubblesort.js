function swap(array, i) {
  // 1.1 Swap: if array[i] > array[i+1]
  if (array[i] > array[i + 1]) {
    // this is a swap
    let temporary = array[i];
    array[i] = array[i + 1];
    array[i + 1] = temporary;
  }
  return array;
}

function bubbleSort(array) {
  let length = array.length;

  while (length) {
    for (let i = 0; i < length; i++) {
      swap(array, i);
    }
    length--;
  }
  return array;
}
