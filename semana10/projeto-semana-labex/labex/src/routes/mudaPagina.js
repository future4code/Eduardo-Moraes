import PaginaInscricao from "../Pages/PaginaInscricao"

export const irParaHome = (history)=>{
    history.push("/")
}
 export const irParaVerViagens = (history) => {
     history.push("/viagem/lista")
 }

export const irParaInscricao = (history, id) => {
    
    history.push(`/viagem/inscricao/${id}`)
    
}

export const irParaLogin = (history) => {
    history.push("/login")
}

export const irParaAdministrador = (history) => {
    history.push("/admin/viagem/lista")
}

export const irParaCriarViagem = (history) => {
    history.push("/admin/viagem/criar")
}

export const irParaDetalhes = (history, id) => {
    history.push(`/admin/viagem/${id}`)
}
