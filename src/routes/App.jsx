import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../components/Login/Login";
import Admin from "../Pages/Home/Admin/Admin";
import Add from "../Pages/Form/Add";
import Edit from "../Pages/Form/Edit";



// // const App = () => <h1>Hello React!!!</h1>
const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/Admin" component={Admin} />
                <Route exact path="/Add" component={Add} />
                <Route exact path="/Edit" component={Edit} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
