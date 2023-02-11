export class Pessoa{
    nome: string="";
    cpf :string="";

    toString(){
        return `Nome: ${this.nome} CPF: ${this.cpf}`;
    }
}