import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const AuthorDetail = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const [autor, setAutor] = useState(null)

        useEffect(() => {
     
             fetch(`http://localhost:3000/autores/${id}`).then(res => res.json().then(res => setAutor(res)))
     
         }, [])


    return (


        <>

            {autor ?
            <div key={autor.id} className='flex flex-col detalhes p-10 border-1'>
                <img className='w-70' src={autor.foto} alt={autor.nome} />
                <h1 className='font-bold'>{autor.nome}</h1>
                <h3>{autor.especialidade}</h3>
                <p>{autor.cidade}</p>

                <p>{autor.descricao}</p>
                <Link className='bg-red-500 text-white rounded py-1 w-20 text-center mt-5' onClick={()=> navigate(-1)} >Voltar</Link>
            </div>:
            <>
            <p>Carregando...</p>
            </>
            }


        </>
    )
}

export default AuthorDetail