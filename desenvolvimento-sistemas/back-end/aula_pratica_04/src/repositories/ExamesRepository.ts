import { PrismaClient, type Exame} from "../prisma/generated/prisma/client";
import { prisma } from "../prisma/prisma";

export class ExamesRepository {
    constructor(private readonly prisma: PrismaClient) {
        this.prisma = prisma
    }

    async buscarTodos() {

        return await this.prisma.exame.findMany()
    }
    async buscarPorId(id: number) {

        return await this.prisma.exame.findUnique({
            where: {
                id: id
            }
        });
    }



    async atualizar(dadosExame: Exame) {
        return await this.prisma.exame.update({
            data: {
                ...dadosExame
            },
            where: {
                id: dadosExame.id
            }
        })

    }

    async deletar(id: number) {

        return await this.prisma.exame.delete({
            where: {
                id: id
            }
        })


    }
    async criar(dadosExame: Partial<Exame>) {
        return await this.prisma.exame.create({
            data: {
                
                tipo_exame: dadosExame.tipo_exame||'',
                valor: dadosExame.valor||'',
                descricao: dadosExame.descricao||'',
                data_exame: new Date(dadosExame.data_exame||""),
                resultado: dadosExame.resultado ||""
            }
        })

    }



}

export const examesRepository = new ExamesRepository(prisma)