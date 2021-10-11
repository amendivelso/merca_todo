import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../components/Login/Login";
import TableData from "../components/Table/Table";
import Admin from "../Pages/Home/Admin/Admin";



// // const App = () => <h1>Hello React!!!</h1>
const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route extact path="/" component={Admin} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
