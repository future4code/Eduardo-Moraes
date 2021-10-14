import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PaginaAdministrador from "../Pages/PaginaAdministrador";
import PaginaCriarViagem from "../Pages/PaginaCriarViagem";
import PaginaDetalhes from "../Pages/PaginaDetalhes";
import PaginaHome from "../Pages/PaginaHome";
import PaginaInscricao from "../Pages/PaginaInscricao";
import PaginaLogin from "../Pages/PaginaLogin";
import PaginaVerViagens from "../Pages/PaginaVerViagens";

const Routes = () => {
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={PaginaHome}/>
            <Route exact path="/viagem/lista" component={PaginaVerViagens}/>
            <Route exact path="/viagem/inscricao" component={PaginaInscricao}/>
            <Route exact path="/login" component={PaginaLogin}/>
            <Route exact path="/admin/viagem/lista" component={PaginaAdministrador}/>
            <Route exact path="/admin/viagem/criar" component={PaginaCriarViagem}/>
            <Route exact path="/admin/viagem/:id" component={PaginaDetalhes}/>
            <Route>
                <div>[Erro] página não encontrada</div>
            </Route>
        </Switch>
        </BrowserRouter>
    )
} 
export default Routes