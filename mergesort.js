function split(array) {
  let firstHalf = []
  let secondHalf = []
  let length = array.length

  firstHalf = array.slice(0, Math.ceil(length/2))
  secondHalf = array.slice(Math.ceil(length/2))

  return [firstHalf, secondHalf]
}

function merge(arr1, arr2) {
  let result = []

  while(arr1.length || arr2.length) {

    if(arr1.length && arr2.length) {
      arr1[0] < arr2[0]
      ? result.push(arr1.shift())
      : result.push(arr2.shift())

    } else if(!arr1.length && arr2.length) {
      result.push(arr2.shift())
    } else if(arr1.length && !arr2.length) {
      result.push(arr1.shift())
    }
  }

  return result
}

function mergeSort(array) {
  let splitArray
  let firstHalf, secondHalf
  let mergedArray

  if (array.length === 1) {
    return array
  } else {
    splitArray = split(array)

    firstHalf = mergeSort(splitArray[0])
    secondHalf = mergeSort(splitArray[1])

    mergedArray = merge(firstHalf, secondHalf)
  }

  return mergedArray

}
