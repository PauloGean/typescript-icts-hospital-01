import { Pessoa } from "./Pessoa";

export class Paciente extends Pessoa {
    sexo : string = "";

    toString(){
        return `Nome: ${this.nome} CPF: ${this.cpf} Sexo: ${this.sexo}`;
    }
}