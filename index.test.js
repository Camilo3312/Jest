const { Suma } = require('./index') 

test('two plus two is four', () => {
    const result = Suma(2,2)
    expect(result).toBe(4);
});