function numeroDeCaracteres(cadena, caracter) {
    var contador = 0;
    
    for (var i = 0; i < cadena.length; i++) {
        if (cadena[i].toLowerCase() === caracter.toLowerCase()) {
            contador++;
        }
    }    
    return contador;
}
