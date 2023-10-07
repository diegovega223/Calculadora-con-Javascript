let valorDePantalla = '';
let operador = '';
let valores = [];

function agregarValor(valor) {
    valorDePantalla += valor;
    document.getElementById('pantalla').value = valorDePantalla;
}

function agregarOperador(op) {
    if (valorDePantalla !== '') {
        valores.push(parseFloat(valorDePantalla));
        valores.push(op);
        valorDePantalla = '';
        document.getElementById('pantalla').value = valorDePantalla;
    }
}

function agregarDecimal(decimal) {
    if (valorDePantalla.indexOf('.') === -1) {
        valorDePantalla += decimal;
        document.getElementById('pantalla').value = valorDePantalla;
    }
}

function limpiarPantalla() {
    valorDePantalla = '';
    operador = '';
    valores = [];
    document.getElementById('pantalla').value = valorDePantalla;
}

function calcular() {
    if (valorDePantalla !== '') {
        valores.push(parseFloat(valorDePantalla));
    }

    let resultado = valores[0];
    for (let i = 1; i < valores.length; i += 2) {
        const operacion = valores[i];
        const siguienteValor = valores[i + 1];
        switch (operacion) {
            case '+':
                resultado += siguienteValor;
                break;
            case '-':
                resultado -= siguienteValor;
                break;
            case '*':
                resultado *= siguienteValor;
                break;
            case '/':
                if (siguienteValor !== 0) {
                    resultado /= siguienteValor;
                } else {
                    resultado = 'Error';
                }
                break;
            default:
                resultado = 'Error';
        }
    }

    document.getElementById('pantalla').value = resultado;
    valorDePantalla = resultado.toString();
    operador = '';
    valores = [];
}