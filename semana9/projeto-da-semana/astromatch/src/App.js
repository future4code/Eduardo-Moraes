import axios from "axios";
import React, { useEffect, useState } from "react";
import Home from "./paginas/Home/Home";
import Match from "./paginas/Match/Match";

const App = () => {
  const [paginaAtual, setPaginaAtual] = useState("home")
  const [pessoa, setPessoa] = useState({})

  useEffect(() => {
    pegaPerfis()
  }, [])

  const pegaPerfis = () => {
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Eduardo-Moraes-Maryam/person")
      .then((res) => {
        setPessoa(res.data.profile)

      }).catch((err) => {
        console.log(err)
      })
  }

  const avaliaPerfil = (choice) => {
    const body = {
      id: pessoa.id,
      choice: choice
    }

    axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Eduardo-Moraes-Maryam/choose-person", body)
      .then((res) => {
        pegaPerfis()
        console.log(res.data)
      }).catch((err) => {
        console.log(err)
      })
  }

  const limpaPerfis = () =>{
    axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Eduardo-Moraes-Maryam/clear")
    .then((res)=>{
      alert("Limpeza completa")
    }).catch((err)=>{
      console.log(err.response)
    })
  }

  const mudaPagina = () => {
    switch (paginaAtual) {
      case "home":
        return <Home
          pessoa={pessoa}
          avaliaPerfil={avaliaPerfil}
        />
      case "match":
        return <Match />
      default:
        return <Home />
    }
  }

  const atualizaPagina = () => {
    switch (paginaAtual) {
      case "home":
        setPaginaAtual("match")
        break
      case "match":
        setPaginaAtual("home")
        break
      default:
        setPaginaAtual("tá indo pro defaut")
        break
    }
  }

  return (
    <div>
      <button onClick={() => atualizaPagina()}>ir para {paginaAtual === "home" ? ("Match") : ("Home")}</button>
      <button onClick={()=> limpaPerfis()}>limpar matches</button>
      {mudaPagina()}
    </div>
  )
}

export default App;