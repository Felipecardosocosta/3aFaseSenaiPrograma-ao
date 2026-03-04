import React, { useEffect, useState } from 'react'
import style from './CardApi.module.css'
export const CardApi = () => {

    

    const [users, setUsers] = useState([])
    const [filtro, setFiltro] = useState("")

    const [usersFiltrado, setUsersFiltrado] = useState([])


    async function pesquisaApi() {

        try {
            const pesquisa = await fetch('https://jsonplaceholder.typicode.com/users')

            const resultado = await pesquisa.json()



            setUsers(resultado)



        } catch (erro) {
            console.log(erro);

        }

    }

    useEffect(() => {
        console.log('Aqui ele monta');

        pesquisaApi()

        return () => {

            console.log('Aqui ele desmonta');
        }

    }, [])






    return (
        <>
            <input
                type="text"
                placeholder='Buscar por nome ...'
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
            />
            <div className={style.contCard} >

                {filtro? 

                users.map((value, index) => {

                    if (value.name.toUpperCase().includes(filtro.toUpperCase())) {
                        
                        
                        return (
                            <div className={style.card}
                                key={value.id}
                            >
                                <h3>{value.name}</h3>
                                <p> <strong>Email:</strong>{value.email}</p>
                                <p> <strong>Rua:</strong> {value.address?.street}</p>
                                <p> <strong>Complemento:</strong> {value.address?.suite}</p>
                                <p><strong>Complemento:</strong> {value.address.geo.lat}</p>
                                <p><strong>Longitude:</strong> {value.address.geo.lng}</p>
    
    
    
                            </div>
    
                        )
                    }


                })
  

                
                
                :
                
                
                users.map((value, index) => {

                    return (
                        <div className={style.card}
                            key={value.id}
                        >
                            <h3>{value.name}</h3>
                            <p> <strong>Email:</strong>{value.email}</p>
                            <p> <strong>Rua:</strong> {value.address?.street}</p>
                            <p> <strong>Complemento:</strong> {value.address?.suite}</p>
                            <p><strong>Complemento:</strong> {value.address.geo.lat}</p>
                            <p><strong>Longitude:</strong> {value.address.geo.lng}</p>



                        </div>

                    )

                })}


            </div>
        </>

    )
}

