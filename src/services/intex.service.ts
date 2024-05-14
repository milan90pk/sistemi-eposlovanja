import { IsNull } from "typeorm";
import { AppDataSource } from "../db";
import { Intex } from "../entities/Intex";

const repo = AppDataSource.getRepository(Intex)

export class IntexService {
    static async getAllIntexes() {
        const data = await repo.find({
            select: {
                intexId: true,
                machineId: true,
                userId: true,
                status: true,
                created: true,
                stopped: true,
                description: true
            }
            
        })

        if (!data)
            throw new Error('INTEX_NOT_FOUND')
        return data
    }

    


}