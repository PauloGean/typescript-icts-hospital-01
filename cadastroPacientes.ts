import promptSync from "prompt-sync";
import {Paciente} from "./models/Paciente"

const read = promptSync();


const qt:number = +read("Informe a quantidade: ");
let pacienteList:Paciente[]=[]

for(let i=0;i<qt ; i=i+1){

    console.log("Cadastro Paciente =" + i);
    let pac:Paciente =new Paciente();
    pac.nome = read("Informe o nome: ");
    pac.cpf = read("Informe a Idade: ")
    pac.sexo = read("Informe a serie Favorita: ")
    pacienteList.push(pac)
    console.clear()
}
console.log("FOR")
for(let i=0;i<pacienteList.length ; i=i+1){
    const paciente = pacienteList[i];
    console.log(paciente.toString())
}
console.log("FOR EACH")
pacienteList.forEach((p)=>{
    console.log(p.toString())
})