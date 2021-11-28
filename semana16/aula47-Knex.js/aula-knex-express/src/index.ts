 import { Request, Response } from "express";
 import app from "./app";
 import connection from "./connection";

 const getActorById = async (id: string): Promise <any> =>{
     const result = await connection.raw(`
     SELECT * FROM Actor WHERE id = '${id}'
     `)
     return result[0][0]
 } 


 getActorById("001")
	.then(result => {
		console.log(result)
	})
	.catch(err => {
		console.log(err)
	});


(async () => {
  console.log(await getActorById("001") )
})()


 app.get("/users/:id", async (req: Request, res: Response)=>{
     try {
         const id = req.params.id
         console.log(await getActorById(id))
         res.end()
     } catch (error: any) {
         console.log(error.message)
         res.status(500).send("Unexpected error")
     }
 })

 const searchActor = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result
  }

  const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
    const count = result[0][0].count;
    return count;
  };


const updateActor = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
};

