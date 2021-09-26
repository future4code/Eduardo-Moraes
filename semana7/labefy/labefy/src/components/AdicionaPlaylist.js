import React from "react";
import styled from "styled-components";
import axios from "axios";

class AdicionarPlaylist extends React.Component {
    state = {
        name: ""
    }
    atualizaEstado = (e) => {
        this.setState({ name: e.target.value })
    }
    addNovaPlayList = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.name
        }
        axios.post(url, body, {
            headers: {
                Authorization: "Eduardo-Moraes-Maryam"
            }
        }).then((res) => {
            window.alert("cadastrado")
        }).catch((err) => {
            window.alert(err)
        })
    }

    render() {

        return (
            <div>
                <p>escreva o nome de uma playlist</p>
                <input value={this.state.name} onChange={this.atualizaEstado}></input>
                <button onClick={this.addNovaPlayList}>enviar</button>
            </div>
        );
    }


}
export default AdicionarPlaylist;