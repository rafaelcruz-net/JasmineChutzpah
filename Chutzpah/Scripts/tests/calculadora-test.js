/// <reference path="../jasmine/jasmine.js" />
/// <reference path="../jasmine/jasmine-html.js" />
/// <reference path="../jasmine/boot.js" />
/// <reference path="../calculadora.js" />

describe("Calculadora Unit Test", function () {
    var calculator = new Calculadora();

    it("Calculadora de fazer operação de soma", function () {
        var expected = 4;
        var result = calculator.Soma(2, 2);
        
        expect(result).toBe(expected);
    });

    it("Calculadora de fazer operação de subtrair", function () {
        var expected = 0;
        var result = calculator.Subtrair(2, 2);
        expect(result).toBe(expected);
    });

    it("Calculadora de fazer operação de multiplicar", function () {
        var expected = 9;
        var result = calculator.Multiplicar(3, 3);
        expect(result).toBe(expected);
    });

    it("Calculadora de fazer operação de dividir", function () {
        var expected = 3;
        var result = calculator.Dividir(9, 3);
        expect(result).toBe(expected);
    });

})