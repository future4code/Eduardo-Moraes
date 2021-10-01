import React from "react";
import styled from "styled-components";
import axios from "axios";

class MostraPlaylist extends React.Component{
  state = {
    listaDeMusicas: []
  }
  componentDidMount(){
    this.verPlaylist()
  }
 verPlaylist = () =>{
     const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
     axios.get(url, {
       headers: {Authorization: "Eduardo-Moraes-Maryam"}
     }).then((res)=>{
       this.setState({listaDeMusicas: res.data.result.list})
     }).catch((err)=>{
       console.log(err)
     })
    
   }
  render(){
     const nomes = this.state.listaDeMusicas.map((nome)=>{
     return <p key={nome.id}>{nome.name}</p>
     })
    return(
      <div>
       {nomes} 
      </div>
    )
  }
}
export default MostraPlaylist;
