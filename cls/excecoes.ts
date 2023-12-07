

export class AplicacaoError extends Error {
    constructor(message: string) {
        super(message);
    }
}

/* ================================================================================================ */

export class PerfilExistenteError extends AplicacaoError {
    constructor(message: string) {
        super(message)
    }
}

export class PerfilInexistenteError extends AplicacaoError {
    constructor(message: string) {
        super(message)
    }
}

export class NumeroInvalidoError extends AplicacaoError {
    constructor(message: string) {
        super(message)
    }
}

export class NomeInvalidoError extends AplicacaoError {
    constructor(message: string) {
        super(message)
    }
}

export class EmailInvalidoError extends AplicacaoError {
    constructor(message: string) {
        super(message)
    }
}

export class PostagemVaziaError extends AplicacaoError {
    constructor(message: string) {
        super(message)
    }
}

export class PostagemExcedeTamanhoError extends AplicacaoError {
    constructor(message: string) {
        super(message)
    }
}

export class HashtagGiganteError extends AplicacaoError {
    constructor(message: string) {
        super(message)
    }
}

export class HashtagInexistenteError extends AplicacaoError {
    constructor(message: string) {
        super(message)
    }
}

export class HashtagPequenaError extends AplicacaoError {
    constructor(message: string) {
        super(message)
    }
}

export class HashtagPossuiAlgumaLetraError extends AplicacaoError {
    constructor(message: string) {
        super(message)
    }
}

export class HashtagRepetidaError extends AplicacaoError {
    constructor(message: string) {
        super(message)
    }
}

export class PostagemInexistenteError extends AplicacaoError {
    constructor(message: string) {
        super(message)
    }
}

export class PostagemSemSentidoError extends AplicacaoError {
    constructor(message: string) {
        super(message)
    }
}

export class PostagemRegularError extends AplicacaoError {
    constructor(message: string) {
        super(message)
    }
}

export class PostagemVencidaError extends AplicacaoError {
    constructor(message: string) {
        super(message)
    }
}

export class HashtagSemSentidoError extends AplicacaoError {
    constructor(message: string) {
        super(message)
    }
}

export class HashtagTemSimboloError extends AplicacaoError {
    constructor(message: string) {
        super(message)
    }
}

export class HashtagVaziaError extends AplicacaoError {
    constructor(message: string) {
        super(message)
    }
}

export class PerfilSemPostagemError extends AplicacaoError {
    constructor(message: string) {
        super(message)
    }
}

export class PerfilSemPostagemAvancadaError extends AplicacaoError {
    constructor(message: string) {
        super(message)
    }
}

export class PostagemSemHashtagAlvoError extends AplicacaoError {
    constructor(message: string) {
        super(message)
    }
}

export class PerfilSemPostagemRegularError extends AplicacaoError {
    constructor(message: string) {
        super(message)
    }
}

export class Excecao {

    percorrer(sentence: string) {
        const stringArray: string[] = []
        for (let i = 0; i < sentence.length; i++) {
            stringArray.push(sentence[i])
        }
        return stringArray
    }
    
    entradaSemEspacos(inputData: string): boolean {
        return !this.percorrer(inputData).includes(" ") 
    }

    entradaNaoNegativa(inputData: number): boolean {
        return Number(inputData) > 0
    }

    entradaNaoVazia(inputData: string): boolean {
        return inputData !== ""
    }

    charEhNumero(item: string): boolean {
        const n: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        for (let i = 0; i < n.length; i++) {
            if (n[i] === Number(item)) {
                return true
            }
        }
        return false
    }
    
    entradaEhApenasNumero(inputData: string): boolean {
        for (let i = 0; i <= inputData.length; i++) {
            if (!this.charEhNumero(inputData[i])) {
                return false
            }
            console.log('--o', this.charEhNumero(inputData[i]), inputData, inputData[i])
        }
        return true
    }

    // Tratamentos p/ textos e email (exceção: entradaSomenteLetras)
    entradaSomenteEspaco(inputData: string): boolean {
        return inputData === " "
    }

    entradaSemTamanhoMinimo(inputData: string): boolean {
        return inputData.length < 3
    }

    entradaSomenteLetras(inputData: string): boolean {
        for (let i = 0; i < inputData.length; i++) {
            const letter = inputData[i].charCodeAt(0)
            console.log(letter)
            if (letter < 65 || letter > 122) {
                return false
            }
        } 
        return true
    }
    
    // Tratmentos adicional p/ email
    entradaSemArroba(inputData: string): boolean {
        for (let i = 0; i < inputData.length; i++) {
            if (inputData[i] === "@") {
                return true
            }
        }
        return false
    }

    // Verificação de exceções
    nomeInvalido(inputData: string): void {
        // Texts may not have special characters (light treatment)
        if (
            !this.entradaSomenteEspaco(inputData) &&
            !this.entradaSemTamanhoMinimo(inputData) &&
            !this.entradaSomenteLetras(inputData)
        ) {
            throw new NomeInvalidoError("\nERRO: Nome em formato inválido...")
        }
    }

    emailInvalido(inputData: string): void {
        /*
        Email may have special characters (light treatment)
        Any of the functions below turn the email invalid 
        */
        // console.log("A", this.entradaSomenteEspaco(inputData))
        // console.log("B", this.entradaSemTamanhoMinimo(inputData))
        // console.log("C", this.entradaSemArroba(inputData))
        if (
            !this.entradaSomenteEspaco(inputData) &&
            !this.entradaSemTamanhoMinimo(inputData) &&
            !this.entradaSemArroba(inputData)
        ) {
            throw new EmailInvalidoError("\nERRO: Email em formato inválido...")
        }
    }

    numeroInvalido(inputData: number): void {
        console.log("A", this.entradaNaoNegativa(inputData))
        console.log("B", this.entradaNaoVazia(inputData.toString()))
        console.log("C", this.entradaSemEspacos(inputData.toString()))
        console.log("D", this.entradaEhApenasNumero(inputData.toString()))
        if (
            !this.entradaNaoNegativa(inputData) ||
            !this.entradaNaoVazia(inputData.toString()) ||
            !this.entradaSemEspacos(inputData.toString()) ||
            !this.entradaEhApenasNumero(inputData.toString()) 
        ) {
            throw new NumeroInvalidoError("ERRO: Número inválido...")
        }
    }

    excecao(error: any) {
        if (
            // Perfil
            error instanceof PerfilExistenteError ||
            error instanceof PerfilExistenteError ||
            error instanceof PerfilInexistenteError ||
            error instanceof NumeroInvalidoError ||
            error instanceof NomeInvalidoError ||
            error instanceof EmailInvalidoError ||
            error instanceof PerfilSemPostagemRegularError ||
            error instanceof PerfilSemPostagemAvancadaError ||
            error instanceof PerfilSemPostagemError || 
            // Hashtag
            error instanceof HashtagInexistenteError ||
            error instanceof HashtagRepetidaError ||
            error instanceof  HashtagGiganteError ||
            error instanceof  HashtagPequenaError ||
            error instanceof  HashtagPossuiAlgumaLetraError ||
            error instanceof  HashtagSemSentidoError ||
            error instanceof  HashtagTemSimboloError ||
            error instanceof  HashtagVaziaError ||
            // Postagem
            error instanceof PostagemVaziaError ||
            error instanceof PostagemExcedeTamanhoError ||
            error instanceof PostagemSemSentidoError ||
            error instanceof PostagemInexistenteError ||
            error instanceof PostagemRegularError ||
            error instanceof PostagemVencidaError ||
            error instanceof PostagemSemHashtagAlvoError 
        ) {
            console.log(error.message)
        }
    }
}
