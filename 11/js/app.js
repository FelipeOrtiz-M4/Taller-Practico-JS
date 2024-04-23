function multiplicarArreglo(arr) {
    if (arr.length === 0) {
        return 1;
    }
    
    return arr[0] * multiplicarArreglo(arr.slice(1));
}
// Caso base: si el arreglo está vacío, la multiplicación es 1
