import React from "react";
import { Switch, Route } from "react-router-dom";
// import { App } from "../src/App";
import { NotFound } from "../src/components/NotFound/index";
import { MainContainer } from "../src/components/container/Container";
import { About } from "../src/components/About/About";
import { NewsPage } from "../src/components/NewsPage/NewsPage";
import { Vacancy } from "../src/components/Vacancies/Vacancy";


export const getRoutes = () => {
    return (
        <Switch>
            <Route
                exact={true}
                path="/"
                component={(routeProps) => <MainContainer {...routeProps} />}
            />
            <Route
                exact={true}
                path="/about"
                component={(routeProps) => <About {...routeProps} />}
            />
            <Route
                exact={true}
                path="/news"
                component={(routeProps) => <NewsPage {...routeProps} />}
            />
            <Route
                exact={true}
                path="/vacancy/:id"
                component={(routeProps) => <Vacancy {...routeProps} />}
            />

            {/* <Route
                exact={true}
                path='/'
                component={(routeProps) => <App {...routeProps} />}
            /> */}
            <Route
                exact={false}
                path='*'
                component={(routeProps) => <NotFound {...routeProps} />}
            />
        </Switch>
    );
};