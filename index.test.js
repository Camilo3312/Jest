const { Suma, InvertirCadena, Promedio } = require('./index') 

test('suma basica', () => {
    const result = Suma(2,2)
    expect(result).toBe(4);
});

test('invertir cadena', () => {
    const result = InvertirCadena("test")
    expect(result).toBe("tset");
});

test('promedio', () => {
    const result = Promedio([1,4,1,5,2,3])
    expect(result).toBe(2.6);
});