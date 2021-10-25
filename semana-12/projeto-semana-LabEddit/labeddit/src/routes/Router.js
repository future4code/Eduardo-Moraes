import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CadastroPage from "../pages/CadastroPage/CadastroPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path ="/cadastro">
                    <CadastroPage />
                </Route>
                <Route exact path="/">
                    <FeedPage />
                </Route>
                <Route exact path="/login">
                    <LoginPage />
                </Route>
                <Route exact path ="/post/:id">
                    <PostPage />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Router