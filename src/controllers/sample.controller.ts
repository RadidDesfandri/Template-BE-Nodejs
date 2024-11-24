import prisma from "@/prisma";
import { Request, Response } from "express";

export class SampleController {
  async getSampleData(req: Request, res: Response) {
    const samples = await prisma.sample.findMany();

    return res.status(200).send({ status: "Ok", samples });
  }
}
