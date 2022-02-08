const Suma = (nuno, ndos) => {
    return nuno + ndos
} 

const InvertirCadena = (cadena) => {
    return cadena.split('').reverse().toString().replace(/,/g,'')
} 

const Promedio = valores => {
    const resutl = (valores.reduce((total, item) => total + item, 0) / valores.length)
        .toString()
        .slice(0,3)
    return parseFloat(resutl)
}

module.exports = {
    Suma,
    InvertirCadena,
    Promedio
}