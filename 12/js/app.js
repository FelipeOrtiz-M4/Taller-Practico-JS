// filtra los elementos del arreglo que sean cero

function removerCeros(arr) {
    return arr.filter(function(numero) {
        return numero !== 0;
    });
}