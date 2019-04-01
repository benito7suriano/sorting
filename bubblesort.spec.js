describe('Bubble Sort', function(){
  beforeEach(function() {
    spyOn(window, 'swap').and.callThrough()

  })

  const objExample1 = [{age: 4}, {age: 2}]
  const objExample2 = [{age: 4}, {age: 8}, {age: 2}, {age: 9}]

  function comparator(a, b) {
    if(a.age < b.age) return -1 // returning -1 means 'a goes before b'
    if(a.age > b.age) return 1 // returning 1 means 'b goes before a'
    return 0 // returning 0 means 'a and b are equivalent'
  }

  it('handles an empty array', function() {
    expect( bubbleSort([]) ).toEqual( [] )
    expect(window.swap.calls.count()).toEqual(0)
  })

  it('handles a single array', function() {
    expect(bubbleSort([1])).toEqual([1])
    expect(window.swap.calls.count()).toEqual(0)
  })

  it('sorts small arrays', function() {
    expect(bubbleSort([7,3])).toEqual([3,7])
    expect(window.swap.calls.count()).toEqual(1)
  })

  it('sorts big arrays', function() {
    expect(bubbleSort([9,1,5,3,8,4])).toEqual([1,3,4,5,8,9])
    expect(window.swap.calls.count()).toEqual(8)

  })

  it('returns arrays in correct order', function(){
    expect(bubbleSort([1,2,3,4])).toEqual([1,2,3,4])
    expect(window.swap.calls.count()).toEqual(0)
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

