import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../components/Login/Login";

// // const App = () => <h1>Hello React!!!</h1>
const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route extact path="/" component={Login} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
