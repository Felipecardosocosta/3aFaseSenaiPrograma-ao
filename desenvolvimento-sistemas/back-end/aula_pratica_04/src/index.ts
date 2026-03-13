import express from 'express';
import { prisma } from './prisma/prisma';
import type { Usuario,Exame } from './prisma/generated/prisma/client';

const app = express();
app.use(express.json())
const port = 3000;

app.get('/', (req, res) => {
  console.log(req)
  res.send("Hello world")
})

// Endpoints usuario
app.get('/usuarios', async (req, res) => {
  const usuarios = await prisma.usuario.findMany();
  res.json(usuarios);
})

app.post("/usuarios", async (req, res) => {
  console.log(req.body)
  const dadosUsuario = req.body as Usuario
  const usuarioCriado = await prisma.usuario.create({
    data: {
      email: dadosUsuario.email,
      nome: dadosUsuario.nome || null
    }
  })
  return res.status(201).json(usuarioCriado)
})

app.get('/exames',async (req,res)=>{
  const exames = await prisma.exame.findMany()

  try {
     if (exames.length > 0) {

    res.status(200).json(exames)
    
  }else res.status(204)
  } catch (error) {
    console.error(error)
  }

 
})

app.post("/exame", async (req, res) => {
  console.log(req.body)
  const dadosExame = req.body as Exame

  try {
    const exameCriado = await prisma.exame.create({
      data: {
        data_exame: new Date(dadosExame.data_exame),
        tipo_exame:dadosExame.tipo_exame,
        descricao:dadosExame.descricao,
        resultado:dadosExame.resultado,
        valor:dadosExame.valor
        
      }
    })
    return res.status(201).json(exameCriado)
    
  } catch (error) {
    console.error(error)
    
  }
})



app.listen(port, () => {
  console.log("Servidor ta de pé :p")
})


