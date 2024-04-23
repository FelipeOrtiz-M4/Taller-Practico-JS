function calcularImpuestos(edad, ingresos) {
    if (edad >= 18 && ingresos >= 1000) {
        return ingresos * 0.4;
    } else {
        return 0;
    }
}

// Verifica si la edad es igual o mayor a 18 y los ingresos son iguales o mayores a 1000
