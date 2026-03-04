import React, { useEffect, useState } from 'react'
import style from './CardApi.module.css'
export const CardApi = () => {

    const [users, setUsers] = useState([])


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

        <div className={style.contCard} >

            {users.map((value, index) => {

                return (
                    <div className={style.card}
                        key={value.id}
                    >
                        <h3>{value.name}</h3>
                        <p>Email: {value.email}</p>
                        <p>Rua: {value.address?.street}</p>
                        <p>Complemento: {value.address?.suite}</p>
                        <p>Latitude: {value.address.geo.lat}</p>
                        <p>Longitude: {value.address.geo.lng}</p>



                    </div>


                )

            })}


        </div>
    )
}

