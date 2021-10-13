import React from "react";
import Logo from "../../assets/images/LogoMobile.jpg";
import "./Login.scss";

const Login = () => {
    


    //event prevet page reload
    const handleFormSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <>
            <div className="container">
                <div className="header-logo">
                    <img src={Logo} alt="LogoMercaTodo" className="Logo" />
                </div>
                <div className="calidad-div">
                    <p className="calidad">Calidad y confianza</p>
                </div>
                <div className="app-wrapper">
                    <form method="post" className="form-wrapper">
                        <div className="user">
                            <label className="label">Usuario</label>
                            <input
                                className="input"
                                type="text" 
                                name="username" 
                            />
                        </div>
                        <div className="password">
                            <label className="label">Contraseña</label>
                            <input
                                className="input"
                                type="password" 
                                name="password" 
                            />
                        </div>
                        <div className="forgot">Olvidaste tú contraseña?</div>
                        <button className="submit" onClick={handleFormSubmit}>
                            LOGIN
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
