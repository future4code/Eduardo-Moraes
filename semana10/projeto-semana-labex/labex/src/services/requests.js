import axios from "axios";
import { irParaAdministrador } from "../routes/mudaPagina";

export const sendApplication = (body, idViagem, limpar) =>{
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Eduardo-Moraes-Maryam/viagem/${idViagem}/apply`, body)
    .then(()=>{
        window.alert("Aplicação enviada com sucesso")
        limpar()
    }).catch((err)=>{
        window.alert(err.response.message)
    })
}
export const login = (body, history) =>{
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Eduardo-Moraes-Maryam/login`, body)
    .then((res)=>{
        localStorage.setItem("token", res.data.token)
        irParaAdministrador(history)
    }).catch((err)=>{
        window.alert(err.response.data.message)
    })
}
