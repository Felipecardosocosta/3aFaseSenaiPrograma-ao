import React, { useState } from 'react'
import { LabelInput } from './LabelInput'
import { useAuth } from '../../contexts/AuthContext'
import { toast } from 'react-toastify'

import { Link, useNavigate } from 'react-router'
import axios from 'axios'

export const LoginForm = () => {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const {login} = useAuth()
  const navigate = useNavigate()

  const handleSubmit= async(e)=> {
    e.preventDefault()

    try {
      const response = await axios.get('http://localhost:3000/users',{
        params: {email,senha}
      })
      if (response.data.length ===0) {
        toast.error("Usuario não encontrado. Verifique o email e senha",{ autoClose:3000,hideProgressBar:true})
        return
      }
      toast.success("Login realizado com sucesso!",{
        autoClose:2000
        }
      )

      login(response.data[0].email)

    } catch (error) {

      toast.error("Erro interno no servidor",{
        autoClose:3000,
        
      })
      
    }
    
  }

  return (

    <div className='max-w-md mx-auto mt-10  bg-white p-8 rounded-xl shadow-lg'>
      <h1 className='text-2x1 font-bold text-center mb-6' >Login</h1>

      <form onSubmit={handleSubmit}
        className='space-y-4'
      >
        <LabelInput
          type={'email'}
          name={'email'}
          text={"Email"}
          required
          value={email}
          setValue={setEmail}

        />
        <LabelInput
          type={'password'}
          name={'senha'}
          text={"Senha"}
          minLength={8}
          required
          value={senha}
          setValue={setSenha}
        />


        <button
          type='submit'
          className='bg-cyan-700 p-2 px-15 w-full rounded-lg text-white font-bold  hover:bg-cyan-800 transition-colors cursor-pointer  '

        >
          Entrar
        </button>
        <p>Não possui login ? <Link className='text-cyan-700 hover:text-cyan-800'>Cadastrar</Link></p>
      </form>

    </div>
  )
}
