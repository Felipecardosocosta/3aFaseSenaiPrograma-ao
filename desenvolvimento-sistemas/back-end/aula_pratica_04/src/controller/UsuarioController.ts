import type { Response,Request } from "express";
import { usuarioService, type UsuarioService } from "../services/UsuarioServices";
import { log } from "node:console";
import type { Usuario } from "../prisma/generated/prisma/client";

class UsuarioController {
    constructor(private readonly service: UsuarioService) {
        
    }

    async buscarTodos(req:Request,res:Response){

        try {
            const usuariosBuscados = await this.service.buscarTodos()

            if (usuariosBuscados.length>0) {

                return res.status(200).json({
                    message:"Nao tem usuarios cadastrados",
                    data:usuariosBuscados
                })
                
            }
            
            return res.status(200).json({
                message:"usuarios encontrados",
                data:usuariosBuscados
            })

        } catch (error) {

            log(error)

            res.status(400).json({
                error
            })
            
        }
    }
    async buscarPorId(req:Request,res:Response){

        try {
            const id = Number(req.params.id)
            const usuarios = await this.service.buscarPorId(id)

            if (usuarios) {
                return res.status(200).json({
                    message:"usuario encontrado",
                    data:usuarios
                })
                
            }
        
            

        } catch (error) {

            log(error)

            res.status(400).json({
                error
            })
            
        }
    }


    async deletar (req:Request,res:Response){

        try {

            const id = Number(req.params.id)

            const usuarioDeletado = await this.service.deletar(id)

            return res.status(200).json({
                message:"usuario deletado",
                data:usuarioDeletado
            }
        )
            
        } catch (error) {
            log(error)

            res.status(400).json({
                error
            })
            
        }
    }


    async atualizar(req:Request,res:Response){


        try {
            const dadosParaAtualizar = req.body as Usuario

            const dadosAtualizados = await this.service.atualizar(dadosParaAtualizar)

            return res.status(200).json({
                message:"Dados Atualizados",
                data:dadosAtualizados
                
            });
            
        } catch (error) {
             log(error)

            res.status(400).json({
                error
            })
        }
    }


}


export const usuarioContrller = new UsuarioController(usuarioService)