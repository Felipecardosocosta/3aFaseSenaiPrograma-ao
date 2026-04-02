import axios from 'axios'
import { useState } from 'react'

type Usuario ={
  id: number,
  nome:string,
  email:string
}

function App() {
  const [email, setEmail] = useState('')
  const [nome, setNome] = useState('')

  const [senha , setSenha]= useState('')

  const [dataLogin,setDataLogin] = useState<Usuario | null>(null)

  const [cadastro , setCadastro] = useState(false)

  

  
  function buscarUsuariio() {


    
  }

  function limparInput() {
    setEmail('')
    setSenha("")
    setNome("")
    
  }

  async function cadastrar(e:React.SyntheticEvent) {
    e.preventDefault()
    
    try {
      const response = await axios.post('http://localhost:3000/cadastro',{
        email,
        senha
      })

      if (response?.data) {

        
        limparInput()
        setCadastro(!cadastro)
        alert("Usuario cadastrado")
      }


    } catch (error) {
      alert("Credencias invalidas")
      
    }


  }

    async function logar(e:React.SyntheticEvent) {
    e.preventDefault()
    
    try {
      const response = await axios.post('http://localhost:3000/login',{
        email,
        senha
      })

      if (response?.data) {
        
        setDataLogin(response.data)
        limparInput()
        
      }


    } catch (error) {
      alert("erro de email ou senha invalidos")
      
    }


  }





  if (cadastro) {
      
    return(
     <div className='flex flex-col bg-blue-950 w-full justify-center items-center h-screen'>
        <form
       
        className='flex flex-col gap-3  text-white' 
        >

        <label htmlFor="email">Nome</label>
        <input 
        className='bg-gray-900  '
        type="email"
        name='email' 
        onChange={(e)=> setNome(e.target.value)}
        value={nome}
        />
        <label htmlFor="email">Email</label>
        <input 
        className='bg-gray-900  '
        type="email"
        name='email' 
        onChange={(e)=> setEmail(e.target.value)}
        value={email}
        />

        <label htmlFor="password">Senha</label>

        <input 
        className='bg-gray-900 '
        type="password" 
        name='password'
        onChange={(e)=> setSenha(e.target.value)}
        value={senha}
        />


        </form>
        <button 
       onClick={cadastrar}
        type='submit' 
        className='bg-blue-700 py-3 px-10 rounded-2xl cursor-pointer mt-5' 
        >Cadastrar
        </button>

     </div>

    )
  }

  return (
    <>
    {!dataLogin ? (

     <div className='flex flex-col bg-blue-950 w-full justify-center items-center h-screen'>
        <form
       
        className='flex flex-col gap-3  text-white' 
        >

        <label htmlFor="email">Email</label>
        <input 
        className='bg-gray-900  '
        type="email"
        name='email' 
        onChange={(e)=> setEmail(e.target.value)}
        value={email}
        />

        <label htmlFor="password">Senha</label>

        <input 
        className='bg-gray-900 '
        type="password" 
        name='password'
        onChange={(e)=> setSenha(e.target.value)}
        value={senha}
        />


        </form>
        <button 
       onClick={logar}
        type='submit' 
        className='bg-blue-700 py-3 px-10 rounded-2xl cursor-pointer mt-5' 
        >Login
        </button>
        <p className='text-white' >Não possui cadastro?  <a href="#" onClick={()=>setCadastro(!cadastro)} className='text-blue-600' >Cadastrar</a></p>

     </div>
    ):
    (
    <>
      <div className='flex flex-col bg-blue-950 w-full justify-center items-center h-screen'>

        <h1 className='text-amber-50'>Bem vindo fulaninho {dataLogin.nome}</h1>

        <button 
        onClick={()=> setDataLogin(null)}
        className='bg-red-500  py-3 px-10 rounded-2xl cursor-pointer mt-5'
        > Deslogar</button>

      </div>
    </>
    )
    }
    </>
  )
}

export default App
