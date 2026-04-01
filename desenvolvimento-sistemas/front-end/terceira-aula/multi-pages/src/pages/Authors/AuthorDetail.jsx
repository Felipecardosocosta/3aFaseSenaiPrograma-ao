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
            <div key={autor.id} className='detalhes pt-10'>
                <img src={autor.foto} alt={autor.nome} />
                <h1>{autor.nome}</h1>
                <h3>{autor.especialidade}</h3>
                <p>{autor.cidade}</p>
                <p>{autor.descricao}</p>
                <Link onClick={()=> navigate(-1)} >Voltar</Link>
            </div>:
            <>
            <p>Carregando...</p>
            </>
            }


        </>
    )
}

export default AuthorDetail