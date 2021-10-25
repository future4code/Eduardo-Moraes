import react from "react";
import styled from "styled-components";
import PaginaInscricao from "../Pages/PaginaInscricao";
import { irParaInscricao } from "../routes/mudaPagina";
import { useHistory } from "react-router";

const ContainerDoCard = styled.div`
border-radius: 6px;
padding: 15px;
width: 500px;
margin: 15px;
border: black solid 1px;

`
const ConteinerDaPagina = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
const CardViagens = (props) => {
    const { name, description, planet, durationInDays, date, id } = props.item
    const history = useHistory()

    console.log(id)

    return (
        <ConteinerDaPagina>
            <ContainerDoCard>
                <p><b>Nome:</b> {name}</p>
                <p><b>Descrição:</b> {description}</p>
                <p><b>Planeta:</b>{planet}</p>
                <p><b>Duração:</b>{durationInDays}</p>
                <p><b>Data:</b>{date}</p>
                <button onClick={()=> {irParaInscricao(history, id)}}>Inscreva-se</button>
            </ContainerDoCard>
        </ConteinerDaPagina>
    )
}
export default CardViagens