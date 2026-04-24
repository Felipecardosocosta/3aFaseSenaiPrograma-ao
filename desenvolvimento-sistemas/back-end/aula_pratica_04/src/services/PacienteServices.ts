import type { Paciente } from "../prisma/generated/prisma/client";
import type { PacienteRepository } from "../repositories/PacienteRepository";




export class PacienteService{
    constructor(private readonly repository : PacienteRepository){

        this.repository=repository
    }

    async criar(dadosPaciente: Paciente){

        if (!dadosPaciente) {

            throw new Error("Dados invalidos")
        }

         return {
            data: await this.repository.criar(dadosPaciente),
            message:"Usuario criado com sucesso"
        }

    }

    async buscarTodos(){

        const buscarDados = await this.repository.buscarTodos()
        if (buscarDados.length===0) {

            return {
                data:buscarDados,
                message:"Não tem pacientes cadastrados"
            }

            
        }

        return {
            data:buscarDados,
            message:"Pacientes encontrados"
        }


    }


    async buscarPorId(id:number){

        const pacienteBuscado = await this.repository.buscarPorId(id)

        if (!pacienteBuscado?.cpf) {

            return {
                data:pacienteBuscado,
                message:"Paciente não encontrado"
            }
            
        }

        return {
                data:pacienteBuscado,
                message:"Paciente encontrado"
            }

    }

    async atualizar(dadosPaciente:Paciente){


        if (!dadosPaciente) {
            throw new Error("Dados invalidos")
        }

        const buscarDados = await this.buscarPorId(dadosPaciente.id)

        if (!buscarDados) {

            throw new Error("Paciente nao encontrado")
            
        }

        const atualizarDados = await this.repository.atualizar(dadosPaciente)

        return {
            data:atualizarDados,
            message:"Paciente Atualizado"
        }

       
    }

    



}