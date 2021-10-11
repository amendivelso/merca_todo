import React from "react";
import "./Login.scss";

const Login = () => {
    return (
        <>
            <div className="container">
                <div className="app-wrapper">
                    <form method="post" className="form-wrapper">
                        <div className="user">
                            <label className="label">Usuario</label>
                            <input className="input" type="text" required />
                        </div>
                        <div className="password">
                            <label className="label">Contraseña</label>
                            <input className="input" type="password" required />
                        </div>
                        <div className="forgot">Olvidaste tú contraseña?</div>
                        <input type="submit" value="Login" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
