import express, { type Response } from 'express'
import { log } from 'node:console'


const app = express()

app.use(express.json())

const port = 3000

app.get('/', (req, res)=>{

    res.send("Hello word")

})


app.listen(port,()=> log("Rodando na porta "+port)
)