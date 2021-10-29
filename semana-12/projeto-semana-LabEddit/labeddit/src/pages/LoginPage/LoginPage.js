import React from "react";
import { ConteinerDaTela, ConteinerDoBotao, ConteinerInputs, LogoImagem } from "./styled";
import redeSocial2 from "../../assets/redeSocial2.jpg"
import { Button, TextField } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import { useHistory } from "react-router";
import { irParaCadastro } from "../../routes/coordinator";
import axios from "axios";
import { BASE_URL } from "../../constants/urls"
import { SwitchVideoRounded } from "@material-ui/icons";
const LoginPage = () => {
    const [form, onChange, clear] = useForm({email:"", password: ""})
    const onSubmitForm = (event) => {
       event.preventDefault()
       console.log(form)
       login()
    }
    const login = () => {
        axios.post(`${BASE_URL}/users/login`, form)
        .then((res)=>{
            localStorage.setItem("token", res.data.token)
            clear()
        }).catch((err)=>{
            console.log(err)
        })
    }
    const history = useHistory()
    return(
        <ConteinerDaTela>
            <LogoImagem src={redeSocial2}/>
            <ConteinerInputs>
                <form onSubmit={onSubmitForm}>
                    <TextField 
                    type={"email"}
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    label={"E-mail"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    />
                    <TextField 
                    type={"password"}
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    label={"Senha"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    />
                    <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"primary"}
                    >
                    Fazer Login!   
                    </Button>
                </form>
            </ConteinerInputs>
            <ConteinerDoBotao>
                <Button
                type={"submit"}
                fullWidth
                color={"primary"}
                variant={"outlined"}
                onClick={()=> irParaCadastro(history)}
                >
                Não possue conta? Cadastre-se
                </Button>
            </ConteinerDoBotao>
        </ConteinerDaTela>
    )
}
export default LoginPage