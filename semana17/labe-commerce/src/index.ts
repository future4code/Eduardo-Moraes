import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";

dotenv.config();

export const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    }
});

const app: Express = express();
app.use(express.json());
app.use(cors());

type User = {
    id: string
    name: string
    email: string
    password: string
}

app.post("/users", async (req: Request, res: Response) => {
    try {
        const {name , email , password} = req.body;

        if (!name || !email || !password) {
            throw new Error("está faltando parametros.")
        }

        const user :User = {
            id:Date.now().toString(),
            name,
            email,
            password
        }
        await connection("labecommerce_users").insert(user);
        
        res.status(200).send({message: "usuario criado com sucesso!"})

    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});