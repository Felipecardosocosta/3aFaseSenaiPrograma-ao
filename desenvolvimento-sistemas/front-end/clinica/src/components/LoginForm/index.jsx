import React from 'react'
import { LabelInput } from './LabelInput'

export const LoginForm = () => {
  return (

    <div className='bg-white rounded-md shadow-md w-md h-1/2 flex flex-col justify-center items-center gap-8'>
        <h1 className='font-bold text-3xl' >Login</h1>

        <LabelInput type={'email'} name={'email'} text={"Email"}/>
        <LabelInput type={'password'} name={'senha'} text={"Senha"}  />
        
        <button className='bg-blue-600 py-3 px-15 rounded-md text-white font-bold' >Entrar</button>

    </div>
  )
}
