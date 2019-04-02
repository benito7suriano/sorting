describe('Split Array function', function() {


  it('is able to split an array into two halves', function() {
    // your code here
    expect(split([1,2,3,4])).toEqual([[1,2],[3,4]])
    expect(split([1,2,3,4,5])).toEqual([[1,2,3],[4,5]])
  })
})

describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    // test the merging algorithm
    // expect( merge([1]) ).toEqual([1]);
    expect( merge([2],[1]) ).toEqual( [1,2] )
    expect( merge([1,2],[3,4]) ).toEqual( [1,2,3,4] )
    expect( merge([1,3],[2,4]) ).toEqual( [1,2,3,4] )
    expect( merge([1,4],[2,3]) ).toEqual( [1,2,3,4] )
    expect( merge([1,2,4],[3,5]) ).toEqual( [1,2,3,4,5] )
  })
})

describe('Merge sort function', function() {
  it('split an unsorted array and merge it together sorted', function(){
    //expect( mergeSort ([1]) ).toEqual([1]);
    expect( mergeSort ([2,1]) ).toEqual([1,2])
    expect( mergeSort ([3,1,2]) ).toEqual([1,2,3])
    expect( mergeSort ([3,4,1,5,7])).toEqual([1,3,4,5,7])
  })
})
