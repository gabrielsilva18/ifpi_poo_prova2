

import { PerfilInexistenteError } from "./excecoes"
import { Perfil } from "./perfil"

export class RepositorioDePerfis {
    private _perfis: Perfil[]
    lastId: number

    constructor(perfis: Perfil[]) {
        this._perfis = perfis
        // added later
        this.lastId = 0
    }

    get perfis(): Perfil[] {
        return this._perfis
    }
    
    incluir(perfil: Perfil): void {
        // !this.consultar(perfil.id) ? this.perfis.push(perfil) : null
        // if (!this.consultar(perfil.id)) {
        //     this.perfis.push(perfil)
        // } 
        // else {
        //     throw new PerfilInexistenteError("Erro: Perfil não cadastrado...")
        // }
        this.perfis.push(perfil)
    }
    
    consultar(id?: number, nome?: string, email?: string): Perfil {
        // let searchedProfile!: Perfil
        for (let i = 0; i < this.perfis.length; i++) {
            if (id == this.perfis[i].id) {
                return this.perfis[i]
            }
        }
        // return searchedProfile
        throw new PerfilInexistenteError("\nERRO: Perfil não encontrado... [repositorioPers.ts/consultar]")
    }

    tamanhoRepositorio(): number {
        return this.perfis.length
    }
    
    // Support
    verRepositorioPerfis(): void {
        console.log("\n[")
        for(let i = 0; i < this.tamanhoRepositorio(); i++) {
            const thisProfile = this.perfis[i]
            console.log(thisProfile)
        }
        console.log("]")
    }
    
    // (txt/last_id_profile.txt): a cada novo perfil adicionado, esse valor é atualizado neste arquivo (ao encerrar) 
    atualizarUltimoIdPerfil(): void {
        this.lastId++
    }
}
