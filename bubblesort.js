function bubbleSort(array) {
  // 2. swap / move header, transitioning the biggest value towards the end
  // 3. repeat 1-2 on a sub-array, cutting off the last element of the main array

  let result = array;

  // 1. loop through each item of the array
  for(let i = 0; i < result.length; i++) {
    // 1.1 Swap: if array[i] > array[i+1]
    if(array[i] > array[i+1]) {
      // this is a swap
      let temporary = array[i];
      array[i] = array[i+1];
      array[i+1] = temporary;
    }
    // 1.2 Move header: next iteration of loop
  }
  return result;

  // used recursively here:
  // bubbleSort(array.slice(0, array.length - 1));

}
