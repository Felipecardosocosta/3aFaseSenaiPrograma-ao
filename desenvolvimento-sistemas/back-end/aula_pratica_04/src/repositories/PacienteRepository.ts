
import { PrismaClient, type Paciente } from "../prisma/generated/prisma/client";
import { prisma } from "../prisma/prisma";


export class PacienteRepository{

    constructor(private readonly prisma: PrismaClient ){
        this.prisma = prisma
    }


    async criar(dadosPaciente:Omit <Paciente ,"id">){

        return await this.prisma.paciente.create({
            data:{
                ...dadosPaciente
            }
        })
    }

    async buscarTodos(){
        return await this.prisma.paciente.findMany()
    }


    async buscarPorId(id:number){

        return await this.prisma.paciente.findUnique({
            where:{
                id
            }
        })
    }

    async deletar(id:number){

        return await this.prisma.paciente.delete({
            where:{
                id
            }
        })
    }

    async atualizar(dadosPaciente: Paciente){

        return await this.prisma.paciente.update({
            data:{
                nome: dadosPaciente.nome,
                cpf:dadosPaciente.cpf,
                telefone:dadosPaciente.telefone,
                email:dadosPaciente.email,
                data_nascimento:dadosPaciente.data_nascimento,
                sexo:dadosPaciente.sexo,
                responsavel: dadosPaciente.responsavel
            },
            where:{
                id:dadosPaciente.id
            }

        })
    }


}

export const pacienteService = new PacienteRepository(prisma)
