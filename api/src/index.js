import 'dotenv/config'
import express from 'express'
import { con } from './repository/connection.js'
import cors from 'cors'

const server = express();
server.use (cors());
server.use(express.json());






server.listen(process.env.PORT, () => console.log(`API conectada na porta ${process.env.PORT}`))