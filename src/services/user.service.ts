import { IsNull } from "typeorm";
import { AppDataSource } from "../db";
import { Users } from "../entities/Users";

const repo = AppDataSource.getRepository(Users)

export class UserService {
    static async getUser(username: string) {
        const data = await repo.findOne({
            select: {
                userId: true,
                name: true,
                surname: true,
                type: true,
                segment: true
            },
            where: {
                username: username,
              
            }
        })
        if (!data)
            throw new Error('USER_NOT_FOUND')
        return data
    }
}