import React from "react";
import react from "react";
import styled from "styled-components";
 
const Lista = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
export default class TelaLista extends React.Component{
    render(){
        return(
            <div>
              <button onClick={()=>{this.props.irParaCadastro()}}> ir para cadastro</button>
            <Lista>
                <p>aaa</p>
                <p>aaa</p>
                <p>aaa</p>
                <p>aaa</p>
                <p>aaa</p>
                <p>aaa</p>
                <p>aaa</p>
            </Lista>
            </div>
        )
    }
}