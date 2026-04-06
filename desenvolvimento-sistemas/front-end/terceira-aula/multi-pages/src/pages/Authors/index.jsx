import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Authors = () => {
 const [autores, setAutores] = useState([])

 
 
 
     useEffect(() => {
 
         fetch("http://localhost:3000/autores").then(res => res.json().then(res => setAutores(res)))
 
     }, [])
 
     return (
         <>
             <div className='flex gap-2 pt-5 flex-wrap gap-7 ' >
                 {
                     autores.map(autor => (
                         <div key={autor.id} className='card dark:bg-gray-800'>
                             <img src={autor.foto} alt={autor.nome} />
                             <h1>{autor.nome}</h1>
                             <h3>{autor.especialidade}</h3>
                             <p>{autor.cidade}</p>
                             <Link to={`/autores/${autor.id}`} className='hover:bg-black dark:bg-gray-900' >Ver Mais</Link>
                         </div>
                     ))
                 }
 
             </div>
 
 
         </>
     )
}

export default Authors