import { Router } from "express";
import { handleRequest } from "../utils";
import { IntexService } from "../services/intex.service";

export const IntexRoute = Router()

IntexRoute.get('/all', (req, res) => {
    handleRequest(res, IntexService.getAllIntexes());
});