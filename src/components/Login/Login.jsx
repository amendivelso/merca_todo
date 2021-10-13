import React from "react";
import Logo from "../../assets/images/LogoMobile.jpg";
import "./Login.scss";
import {ApiURL} from '../../services/apirest';

class Login extends React.Component {
    state = {
        form: {
            username: "",
            password: "",
        },
    };

    //Event catch change on input
    handleChange = (event) => {
        this.setState({
            form: {
                ...this.state.form,
                [event.target.name]: event.target.value,
            },
        });
        // console.log(this.state.form);
    };
    logSeccion = () => {
        let url = ApiURL + "auth";
        axios.post(url,this.state.form)
        .then(response => {
            console.log(response)
        })

    }

    render() {
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
                                    onChange={this.handleChange}/>
                            </div>
                            <div className="password">
                                <label className="label">Contraseña</label>
                                <input
                                    className="input"
                                    type="password"
                                    name="password"
                                    onChange={this.handleChange}/>
                            </div>
                            <div className="forgot">
                                Olvidaste tú contraseña?
                            </div>
                            <button
                                className="btn-sub"
                                onClick={this.logSeccion}>
                                LOGIN
                            </button>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

export default Login;
