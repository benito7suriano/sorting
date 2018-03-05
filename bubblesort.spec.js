describe('Bubble Sort', function(){
  beforeAll(function() {
    // spyOn(bubbleSort,'sort').and.callThrough();
  });


  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles a single array', function(){
    expect(bubbleSort([1])).toEqual([1]);
  });

  it('sorts small arrays', function() {
    expect(bubbleSort([7,3])).toEqual([3,7]);
  });

  it('sorts big arrays', function() {
    expect(bubbleSort([9,1,5,3,8,4])).toEqual([1,3,4,5,8,9]);
  });

  it('returns arrays in correct order', function(){
    expect(bubbleSort([1,2,3,4])).toEqual([1,2,3,4]);
  });

  // it('handles extraneous input', function() {
  //   expect(bubbleSort([1,23,'a',3])).toEqual('Error');
  // });
});

