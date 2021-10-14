import React from "react";
import styled from "styled-components";


const ConteinerHeader = styled.header`
display: flex;
width: 100vw;
height: 10vh;
background-color: black;
color: white;
font-family: sans-serif;
/* padding: 20px; */
justify-content: space-between;
align-items: center;
div{
    padding: 40px;
    button{
        font-size: medium;
        margin-left: 40px; 
        background-color: #959EAD;
        border: none;
        width: 120px;
        height: 40px;
        color: white;
        border-radius: 6px;
        :hover{
            background-color: #BCC8DD;
            cursor: pointer;
        }
    }
    h1{
        font-size: 50px;

    }
}
`

const Header = () => {
    return (

        <ConteinerHeader>
            <div>
            <h1>LabeX</h1>
            </div>
            <div>
                <button>Ver Viagens</button>
                <button>Área Admin</button>
            </div>
        </ConteinerHeader>

    )
}
export default Header