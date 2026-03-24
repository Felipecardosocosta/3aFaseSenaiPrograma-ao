import 'dotenv/config'
import type { Usuario, Exame } from '.././prisma/generated/prisma/client';
import jwt from 'jsonwebtoken'
import {env} from './env'




const time = "1m"


export const signTokenAcesso = (payload: Partial<Usuario>) => {

    return jwt.sign(
        payload,
       env.chaveAcesso,
        { expiresIn: time }
    )
}
export const signTokenRefresh = (payload: Partial<Usuario>) => {

    return jwt.sign(
        payload,
       env.chaveRefresh,
        { expiresIn: time }
    )
}



export const verifyTokenAcesso = (token:string) => {

    return jwt.verify( token, env.chaveAcesso)
}

export const verifyTokenRefresh = (token:string) => {

    return jwt.verify( token, env.chaveRefresh)
}





