import express from 'express';
import { prisma } from './prisma/prisma';
import type { Usuario, Exame } from './prisma/generated/prisma/client';
import bcrypt from 'bcrypt'


const app = express();
app.use(express.json())
const port = 3000;

app.get('/', (req, res) => {
  console.log(req)
  res.send("Hello world")
})

// Endpoints usuario
app.get('/usuarios', async (_, res) => {
  const usuarios = await prisma.usuario.findMany();


  res.json({
    message: "Todos usuarios encontrado",
    data: usuarios
  });
})


app.post('/usuarios/login/:id', async (req, res) => {

  const idUsuario = Number(req.params.id)
  const usuarioRecebido = req.body as Usuario
  const usuario = await prisma.usuario.findUnique({
    where: {
      id: idUsuario
    }
  })

  const compare = await bcrypt.compare(usuarioRecebido.senha, usuario?.senha || "")

  if (compare) {

    return res.status(200).json({
      message: "Usuario encontrado",
      data: {
        email: usuario?.email,
        id:usuario?.id,
       
        
      }
    })

  }



  return res.status(401).json({
    message: "Usuario ou senha incorreto",
    data: {}
  })


})


app.get('/usuarios/:id', async (req, res) => {

  const idUsuario = Number(req.params.id)

  const usuario = await prisma.usuario.findUnique({
    where: {
      id: idUsuario
    }
  })

  return res.status(200).json({
    message: "Usuario encontrado",
    data: usuario
  })

})



app.post("/usuarios", async (req, res) => {
  console.log(req.body)

  const dadosUsuario = req.body as Usuario
  const senhaHash = await bcrypt.hash(dadosUsuario.senha, 10)
  const usuarioCriado = await prisma.usuario.create({
    data: {
      email: dadosUsuario.email,
      nome: dadosUsuario.nome,
      senha: senhaHash
    }
  })
  return res.status(201).json({
    message: "Usuario criado",
    data: usuarioCriado
  })
})

app.put("/usuarios/:id", async (req, res) => {
  const idUsuario = Number(req.params.id)
  const dadosUsuario = req.body as Omit<Usuario, "id">
  const usuarioModificado = await prisma.usuario.update({
    data: {
      ...dadosUsuario

    },
    where: {
      id: idUsuario
    }
  })



  return res.status(201).json({
    message: "Usuario modificado",
    data: usuarioModificado
  })
})


app.delete("/usuarios/:id", async (req, res) => {
  const idUsuario = Number(req.params.id)

  const usuarioDeletado = await prisma.usuario.delete({
    where: {
      id: idUsuario
    }
  })



  return res.status(200).json({
    message: "Usuario deletado",
    data: usuarioDeletado
  })
})







//  -- Exames --

app.get('/exames', async (req, res) => {

  try {
    const exames = await prisma.exame.findMany()

    if (exames.length !== 0) {

      return res.status(200).json({
        message: "Todos os exames encontrados",
        data: exames
      })

    }


    return res.status(200).json({
      message: "Nem um exame marcado",
      data: exames

    })







  } catch (error) {
    console.error(error)
    return res.status(400).json({
      message: "Erro",
      error: error
    })
  }


})

app.get('/exames/:id', async (req, res) => {
  const idExames = Number(req.params.id)



  try {
    const exame = await prisma.exame.findUnique({
      where: {
        id: idExames
      }
    })


    if (exame === null) {

      return res.status(200).json({
        message: "Exame não existe",
        data: exame
      })



    }
    return res.status(200).json({
      message: "Exame encontrado",
      data: exame
    })



  } catch (error) {
    console.error(error)
    return res.status(400).json({
      message: "Erro",
      error: error
    })
  }


})

app.post("/exames", async (req, res) => {
  console.log(req.body)
  const dadosExame = req.body as Exame

  try {
    const exameCriado = await prisma.exame.create({
      data: {
        data_exame: new Date(dadosExame.data_exame),
        tipo_exame: dadosExame.tipo_exame,
        descricao: dadosExame.descricao,
        resultado: dadosExame.resultado,
        valor: dadosExame.valor

      }
    })
    return res.status(201).json({
      message: "Exame criado",
      data: exameCriado
    })

  } catch (error) {
    console.error(error)

    return res.status(400).json({
      message: "Erro",
      error: error
    })

  }
})

app.put("/exames/:id", async (req, res) => {
  const idExame = Number(req.params.id)
  const dadosExame = req.body as Omit<Exame, "id">

  try {
    const exameEditado = await prisma.exame.update({
      data: {
        data_exame: new Date(dadosExame.data_exame),
        tipo_exame: dadosExame.tipo_exame,
        descricao: dadosExame.descricao,
        resultado: dadosExame.resultado,
        valor: dadosExame.valor

      },
      where: {
        id: idExame
      }

    })
    return res.status(201).json({
      message: "Exame Editado",
      data: exameEditado
    })

  } catch (error) {
    console.error(error)

    return res.status(400).json({
      message: "Erro",
      error: error
    })

  }
})

app.delete('/exames/:id', async (req, res) => {
  const idExames = Number(req.params.id)



  try {
    const exame = await prisma.exame.delete({
      where: {
        id: idExames
      }
    })



    return res.status(200).json({
      message: "Exame deletado",
      data: exame
    })


  } catch (error) {
    console.error(error)
    return res.status(400).json({
      message: "Erro",
      error: error
    })
  }


})

app.listen(port, () => {
  console.log("Servidor ta de pé :p")
})



