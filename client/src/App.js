import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MainContainer } from "./components/container/Container";
import { Router } from "react-router";
import { getRoutes } from "../routes";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export const App = () => (
    <Router history={history}>
        <div className="app">
            <Header />
            <React.Fragment>
                {
                    getRoutes()
                }
            </React.Fragment>
            <Footer />
        </div>
    </Router>
);
