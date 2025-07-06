// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "@/general/test";
import { CreateTechal } from "@/type/type";
import type { NextApiRequest, NextApiResponse } from "next";


export default async function handler( 
  req: NextApiRequest,
  res: NextApiResponse,
) {

    const method = req.method;
    if(method === "POST"){
        const body: CreateTechal = req.body;
        const createNewTechal = await prisma.teacher.create ({data : {name : body.name , subject :  body.subject ,position : body.position, address : body.address, age : body.age } })
        res.status(200).json(createNewTechal);
    }

  res.status(200).json({ name: "John Doe" });
}
