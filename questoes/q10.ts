

class Conta {
    _nome: string
    _saldo: number

    constructor(nome: string, saldo: number) {
        this._nome = nome
        this._saldo = saldo
    }

    get nome(): string {
        return this._nome
    }

    set nome(value: string) {
        this._nome = value
    }

    get saldo(): number {
        return this._saldo
    }

    set saldo(value: number) {
        this._saldo = value
    }
}

// Aponta p/ a interface
// Existe um texto: realize
class ContaCorrente extends Conta {
    /*
    Em "conta corrente" o cálculo de tributos corresponde a 10% do saldo da conta
    */
}

interface Tributavel {
    // calculaTributo(): number {
    //     // ...
    // }
}

// Aponta p/ a interface
// Existe um texto: realize
class SeguroDeVida {
    /*
    Parece herdar da interface
    O cálculo de tributos do seguro corresponde a R$ 50,00
    */ 
}