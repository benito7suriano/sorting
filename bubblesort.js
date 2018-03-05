
function swap (array, i) {
  if (array[i] > array[i + 1]) {
    // this is a swap
    let temporary = array[i];
    array[i] = array[i + 1];
    array[i + 1] = temporary;
  }
  return array;
}

function bubbleSort(array) {
  // 2. swap / move header, transitioning the biggest value towards the end
  // 3. repeat 1-2 on a sub-array, cutting off the last element of the main array
  let result = array;
  console.log(array.length)
  let endOfArray = result.length;
  for (let i = 0; i < endOfArray; i++) {
    
    // 1.1 Swap: if array[i] > array[i+1]
    if (endOfArray === 1) {
      return result
    }
    result = swap(array, i)
    // 1.2 Move header: next iteration of loop
    if (i === endOfArray - 1) {
      i = 0;
      endOfArray -= 1;
    }

  }
  return result;
}
