import express, { Express, Request, Response } from "express";
import cors from "cors"
import { countries } from "./data";
import { country } from "./types";

const app:Express = express()

app.use(express.json())
app.use(cors())

app.get("/countries", (req:Request, res:Response)=>{
    const results = countries.map((country)=>{
        return ({
            id: country.id,
            name: country.name
        })
    })
    if (results){
        res.status(200).send(results)
    }else{
        res.status(404).send("país não encontrado")
    }
})

app.get("/countries/search", (req:Request, res:Response)=>{

    let result:country[]= countries
    if (req.query.name){
        result = result.filter((country)=>{
            return country.name.includes(req.query.name as string)
        })
    }
    if (req.query.capital){
        result = result.filter((country)=>{
            return country.capital.includes(req.query.capital as string)
        })
    }
    if (req.query.continent){
        result = result.filter((country)=>{
            return country.continent.includes(req.query.continent as string)
        })
    }
    if(result){
        res.status(200).send(result)
    }else{
        res.status(404).send("país não encontrado")
    }
})
 
app.get("/countries/:id", (req:Request, res:Response)=>{
    const id:number = Number(req.params.id)
    const results = countries.filter((country)=>{
        return country.id === id
    })
    if(results){
        res.status(200).send(results)
    }else{
        
    }
})

app.listen(3003, ()=>{
    console.log("O Servidor Está Pronto")
})