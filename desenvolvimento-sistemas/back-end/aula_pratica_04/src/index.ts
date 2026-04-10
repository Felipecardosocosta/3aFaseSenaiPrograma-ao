import express,{Router} from 'express';
import { auth } from './middleware/auth';
import cors from "cors"
import routerAuth from './routes/auth';
import usuariosRouter from './routes/usuarios';
import examesRouter from './routes/exames';

const app = express();
app.use(express.json())

app.use(cors())
const port = 3000;

app.get('/', (req, res) => {
  console.log(req)
  res.send("Hello world")
})

app.use(routerAuth)

app.use(auth)
// Endpoints usuario
app.use(usuariosRouter)
//Exames
app.use(examesRouter)

app.listen(port, () => {
  console.log("Servidor ta de pé :p")
})