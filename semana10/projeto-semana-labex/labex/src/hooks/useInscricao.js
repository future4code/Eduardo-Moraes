import { useState } from "react";

const useInscricao = (estadoInicial)=>{
    const [formulario, setFormulario] = useState(estadoInicial)
    const onChange = (event)=>{
        const {name, value} = event.target
        setFormulario({...formulario, [name]: value})
    }
    const limpa = ()=>{
        setFormulario(estadoInicial)
    }
    return { formulario, onChange, limpa}
}
export default useInscricao