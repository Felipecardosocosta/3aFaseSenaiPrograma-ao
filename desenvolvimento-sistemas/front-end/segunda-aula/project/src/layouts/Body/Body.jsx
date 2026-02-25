import Card from '../../components/Card/Card'
import style from './Body.module.css'



const Body = () => {

    const usuarios = [
        { nome: "Felipe", idade: 30, cidade: "Florianópolis" },
        { nome: "Joao", idade: 25, cidade: "Florianópolis" },
        { nome: "Frederico", idade: 35, cidade: "Florianópolis" },
        { nome: "Gustavo", idade: 22, cidade: "Florianópolis" },
    ]


    return (


        <main className={style.body}>

            <h1>Usuarios Cadastrados</h1>
            <div className={style.cardConteiner} >
                {usuarios && usuarios.map((usuario, index) => {

                    return (
                        <Card
                            key={index}
                            nome={usuario.nome}
                            idade={usuario.idade}
                            cidade={usuario.cidade}
                        />

                    )

                })}
            </div>

        </main>
    )
}

export default Body