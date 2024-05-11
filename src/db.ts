import { configDotenv } from "dotenv";
import { DataSource } from "typeorm";
import { Comments } from "./entities/Comments";
import { Intex } from "./entities/Intex";
import { Machines } from "./entities/Machines";
import { Users } from "./entities/Users";

configDotenv()
export const AppDataSource = new DataSource({
    type:"mysql",
    host:process.env.DATABASE_HOST,
    port:Number.parseInt(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [Comments,Intex,Machines,Users],
    logging:false
})