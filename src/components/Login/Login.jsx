import React, { Component } from "react";
import Logo from "../../assets/images/LogoMobile.jpg";
import "./Login.scss";
import axios from 'axios';

//Init const URL and COOKIES
const baseUrl="https://warm-garden-17574.herokuapp.com/api/employees/admin";
// const cookies = new Cookies();

class Login extends Component {
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
                [event.target.name]: event.target.value
            }
        });
        console.log(this.state.form);
    };

    //Init Session
    iniciarSesion=async()=>{
        await axios.get(baseUrl, {params: {username: this.state.form.username, password: md5(this.state.form.password)}})
        .then(response=>{
            return response.data;
        })
        .then(response=>{
            if(response.length>0){
                var respuesta=response[0];
                cookies.set('id', respuesta.id, {path: "/"});
                cookies.set('nombre', respuesta.nombre, {path: "/"});
                cookies.set('username', respuesta.username, {path: "/"});
                alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido_paterno}`);
                window.location.href="./Admin";
            }else{
                alert('El usuario o la contraseña no son correctos');
            }
        })
        .catch(error=>{
            console.log(error);
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
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="password">
                                <label className="label">Contraseña</label>
                                <input
                                    className="input"
                                    type="password"
                                    name="password"
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="forgot">
                                Olvidaste tú contraseña?
                            </div>
                            <button className="submit">LOGIN</button>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

export default Login;
