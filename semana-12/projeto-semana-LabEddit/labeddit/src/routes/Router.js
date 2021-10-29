import React from "react";
import { Switch, Route } from "react-router-dom";
import CadastroPage from "../pages/CadastroPage/CadastroPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";

const Router = ({setTextoDoBotao}) => {
    return(
            <Switch>
                <Route exact path ="/cadastro">
                    <CadastroPage setTextoDoBotao={setTextoDoBotao} />
                </Route>
                <Route exact path="/">
                    <FeedPage />
                </Route>
                <Route exact path="/login">
                    <LoginPage setTextoDoBotao={setTextoDoBotao} />
                </Route>
                <Route exact path ="/post/:id">
                    <PostPage />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
    )
}
export default Router