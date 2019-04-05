describe('Bubble Sort', function(){
  beforeEach(function() {
    spyOn(window, 'swap').and.callThrough()

  })

  const objExample2 = [{age: 4}, {age: 8}, {age: 2}, {age: 9}]

  function comparator(a, b) {
    if(a.age < b.age) return -1 // returning -1 means 'a goes before b'
    if(a.age > b.age) return 1 // returning 1 means 'b goes before a'
    return 0 // returning 0 means 'a and b are equivalent'
  }

  function arrayGenerator(length, lo, hi) {
    let array = []

    while (length--) {
      array.push(Math.floor(lo + Math.random() * hi))
    }

    return array
  }

  it('handles an empty array', function() {
    expect( bubbleSort([]) ).toEqual( [] )
    expect(window.swap.calls.count()).toEqual(0)
  })

  it('handles a single array', function() {
    expect(bubbleSort([1])).toEqual([1])
    expect(window.swap.calls.count()).toEqual(0)
  })

  for(let i=2; i < 103; i += 10) {
    let array = arrayGenerator(i, 0, 100)
    let sorted = [...array].sort( (a,b) => a - b )
    it(`handles array of length: ${i} random items...`, function() {
      expect( bubbleSort(array) ).toEqual( sorted )
    })
  }

  it(`calls swap the expected number of times`, function() {
    bubbleSort( [6,3,5,1] )
    expect( swap.calls.count() ).toEqual(5)
  })

  it('works with objects and arrays using a comparator function', function() {
    expect( bubbleSort(objExample2, comparator) ).toEqual( [
      {age: 2},
      {age: 4},
      {age: 8},
      {age: 9},
    ] )
    expect(window.swap.calls.count()).toEqual(2)
  })
})


