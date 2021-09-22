import axios from "axios";
import React from "react";
import styled from "styled-components";

const Lista = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
border: solid black 2px;
padding: 6px;
margin: 10px;
width: 200px;
`

export default class TelaLista extends React.Component {
    state = {
        usuarios: []
    }
    componentDidMount() {
        this.pegarUsuarios()
    }
    pegarUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        axios.get(url, {
            headers: {
                Authorization: "Eduardo-Moraes-Maryam"
            }
        }).then((res) => {
            this.setState({ usuarios: res.data })
        }).catch((err) => {
            window.alert([err])
        })
    }
    render() {
        const listaDeUsuarios = this.state.usuarios.map((user) => {
            return (
                <Lista key={user.id}>
                    {user.name}
                    <button>X</button>
                </Lista>
            )
        })
        return (
            <div>
                <button onClick={() => { this.props.irParaCadastro() }}> ir para cadastro</button>
                {listaDeUsuarios}
            </div>
        )
    }
}