import { AppDataSource } from "../db";
import { Machines } from "../entities/Machines";

const repo = AppDataSource.getRepository(Machines)

export class MachineService {
    static async getMachinesBySegment(segment:string) {
        const data = await repo.find({
            select: {
                name: true,
            },
            where: {
                segment: segment,
              
            }
            
        })

        if (!data)
            throw new Error('MACHINES_NOT_FOUND')
        return data
    }

    


}