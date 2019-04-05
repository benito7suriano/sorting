function comparator(a,b) {
  if(a.age < b.age) return -1
  if(a.age > b.age) return 1
  return 0
}

function arrayGenerator(length, lo, hi) {
  let array = []
  while(length--) {
    array.push(Math.floor(lo + Math.random()*hi))
  }

  return array
}

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

  for(let i =2; i < 103; i += 20) {
    let randomArray = arrayGenerator(i, 0, 100)
    let sorted = [...randomArray].sort( (a,b) => a - b )

    it(`sorts a random array of ${i} items`, function(){
      //expect( mergeSort ([1]) ).toEqual([1]);
      expect( mergeSort (randomArray) ).toEqual( sorted )
    })
  }

  it('sorts thru mergeSort using comparator function', () => {
    expect(mergeSort([3, 4, 1, 5, 7], comparator)).toEqual([1, 3, 4, 5, 7])
  })
})
