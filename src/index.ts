import cors from 'cors'
import { configDotenv } from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import { AppDataSource } from './db'
import { UserService } from './services/user.service'
import { UserRoute } from './routes/user.route'
import { IntexRoute } from './routes/intex.route'
import { MachinesRoute } from './routes/machines.route'

const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))

configDotenv()
AppDataSource.initialize().then(()=>{
    console.log("Connected to database")
    const port = process.env.SERVER_PORT || 4000 
    app.listen(port,()=>{
        console.log("Listening on " + port)
    })   
}).catch((e)=>console.log(e))



app.use('/api/user', UserRoute);
app.use('/api/intex', IntexRoute);
app.use('/api/machines', MachinesRoute);



app.get("*",(req,res)=>{
    res.status(404).json({
        message: "Not found"
    })
})

