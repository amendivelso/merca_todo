import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../components/Login/Login";
import Admin from "../Pages/Home/Admin/Admin";
import Add from "../Pages/Form/Add";



// // const App = () => <h1>Hello React!!!</h1>
const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/Admin" component={Admin} />
                <Route exact path="/Add" component={Add} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
