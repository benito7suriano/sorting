function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */
  let firstHalf, secondHalf;

  firstHalf = wholeArray.slice(0, Math.round(wholeArray.length/2));
  secondHalf = wholeArray.slice(Math.round(wholeArray.length/2), wholeArray.length);

  return [firstHalf, secondHalf];
}

function merge(arr1,arr2) {
  // initialize a merged array that's going to hold the result
  let mergedArr = [];
  // repeat until there are no values left in the arr's
  while (arr1.length > 0 || arr2.length > 0) {
    // take the first element of each array
    let element1 = arr1[0];
    let element2 = arr2[0];
    debugger
    if(element1 == undefined) {
      mergedArr.push(arr2.shift());

    } else if (element2 == undefined) {
      mergedArr.push(arr1.shift());
    }
    // check which is lower
    if (element1 < element2) {
      //push lower to merged array
      mergedArr.push(arr1.shift());
    } else if(element2 < element1) {
      mergedArr.push(arr2.shift());
    }
  }
  return mergedArr;
}

merge([1],[2]);
