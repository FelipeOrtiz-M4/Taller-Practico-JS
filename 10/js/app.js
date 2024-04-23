function sumarArreglo(arr) {
    if (arr.length === 0) {
        return 0;
    }

    return arr[0] + sumarArreglo(arr.slice(1));
}

// Caso base: si el arreglo está vacío, la suma es 0
    // Caso recursivo: sumar el primer elemento con la suma de los elementos restantes
