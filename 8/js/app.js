function numeroDeAes(cadena) {
    var contador = 0;
        for (var i = 0; i < cadena.length; i++) {
        if (cadena[i] === 'a') {
            contador++;
        }
    }
    
    return contador;
}