var Calculadora  = function () {

    this.Soma = function (x, y) {
        return x + y;
    };

    this.Subtrair = function (x, y) {
        return x = y;
    };

    this.Multiplicar = function (x, y) {
        return x * y;
    };

    this.Dividir = function (x, y) {
        if (y === 0)
            throw "Denominador deve ser maior que zero";

        return x / y;
    };
};