import React from "react";
import { ConteinerDaTela, ConteinerInputs, LogoImagem } from "./styled";
import redeSocial1 from "../../assets/redeSocial1.jpg"
import { Button, TextField } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import { useHistory } from "react-router";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
const CadastroPage = () => {
    const [form, onChange, clear]= useForm({email:"", password:"", username:""})
    const onSubmitForm = (event) => {
        event.preventDefault()
        cadastro()
    }
    const cadastro = () => {
        axios.post(`${BASE_URL}/users/signup`, form)
        .then((res)=>{
            localStorage.setItem("token", res.data.token)
            clear()
        }).then((err)=>{
            console.log(err)
        })
    }
    const history = useHistory()
    return(
        <ConteinerDaTela>
            <LogoImagem src={redeSocial1}/>
            <ConteinerInputs>
                <form onSubmit={onSubmitForm}>
                    <TextField 
                    type={"text"}
                    name={"username"}
                    value={form.username}
                    onChange={onChange}
                    label={"Nome"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                    />
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
                        Fazer Cadastro!
                    </Button>
                </form>
            </ConteinerInputs>
        </ConteinerDaTela>
    )
}
export default CadastroPage