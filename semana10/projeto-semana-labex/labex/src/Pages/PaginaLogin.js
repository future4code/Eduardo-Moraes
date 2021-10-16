import React from "react";
import { useHistory } from "react-router";
import useInscricao from "../hooks/useInscricao";
import useUnprotectedPage from "../hooks/useUnprotectedPage";
import { irParaHome } from "../routes/mudaPagina";
import { login } from "../services/requests";


const PaginaLogin = () =>{
    useUnprotectedPage()
    const history = useHistory()
    const { formulario, onChange} = useInscricao({email: "", password:""})
    const clicaEmLogin = (e) =>{
        e.preventDefault()
        login(formulario, history)
    }
    return(
        <div>
            <h1>login</h1>
            <form onSubmit={clicaEmLogin}>
                <input
                 placeholder={"E-mail"}
                 type={"email"}
                 name={"email"}
                 value={formulario.email}
                 onChange={onChange}
                 required
                 />
                <input
                 placeholder={"Senha"}
                 type={"password"}
                 name={"password"}
                 value={formulario.password}
                 onChange={onChange}
                 required
                 />
                 <div>
                     <button onClick={()=>{irParaHome(history)}}>Voltar</button>
                     <button type={"submit"}>Entrar</button>
                 </div>
            </form>
        </div>
    )
}
export default PaginaLogin