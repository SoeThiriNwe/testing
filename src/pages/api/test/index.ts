// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "@/general/test";
import type { NextApiRequest, NextApiResponse } from "next";


export default async function handler( 
  req: NextApiRequest,
  res: NextApiResponse,
) {

    const method = req.method;
    if(method === "POST"){
      const body  = req.body;
      const createNewStudent = await  prisma.test.create({data : {name : body.name , address : body.address , email : body.email, age : body.age }})
      res.status(200).json(createNewStudent);
    }else if(method === "DELETE"){
      const body = req.body;
      await prisma.test.delete({where : {id : body.id}})

    }else if(method === "PUT"){
      const body = req.body;
      console.log("1")
      await prisma.test.update({where : {id : body.id} , data  : {name : body.name, address : body.address}})
            console.log("2")

    }

  res.status(200).json({ name: "John Doe" });
}
