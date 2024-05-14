import { Router } from "express";
import { handleRequest } from "../utils";
import { UserService } from "../services/user.service";

export const UserRoute = Router()

UserRoute.get('/:username', (req, res) => {
    const username = req.params.username
    handleRequest(res, UserService.getUser(username));
});