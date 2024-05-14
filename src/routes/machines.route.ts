import { Router } from "express";
import { handleRequest } from "../utils";
import { MachineService } from "../services/machine.service";

export const MachinesRoute = Router()

MachinesRoute.get('/:segment', (req, res) => {
    const segment = req.params.segment
    handleRequest(res, MachineService.getMachinesBySegment(segment));
});