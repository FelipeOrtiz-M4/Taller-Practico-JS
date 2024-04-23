function likes(numero) {
    if (numero < 1000) {
        return numero.toString();
    }
    var divisor = 1000;
    var sufijo = "";
    while (numero >= divisor * 1000) {
        divisor *= 1000;
        if (divisor === 1000000) {
            sufijo = "M";
        } else {
            sufijo = "K";
        }
    }
    var resultado = Math.floor(numero / divisor);
    return resultado.toString() + sufijo;
}