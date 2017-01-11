import Hash from './Hash';
jest.dontMock('./Hash.js');

test('Testing hash function', () => {

  it('Ensure it has correct output', function() {
    expect( Hash('Not all those who wander are lost.') ).toBe('81627882');
  });

  it('Ensure it has correct output', function() {
    expect( Hash('All you need is love!') ).toBe('58821172');
  });

  it('Ensure it has correct output', function() {
    expect( Hash('abc') ).toBe('789');
  });

  it('Ensure it has correct output', function() {
    expect( Hash('') ).toBe('');
  });

  it('Ensure it has correct output', function() {
    expect( Hash('abcdefghijklmnop') ).toBe('78901234');
  });

});
