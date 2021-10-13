import React, {Component} from "react";
import Logo from "../../assets/images/LogoMobile.jpg";
import "./Login.scss";
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';


//Init const URL and COOKIES
const baseUrl="https://warm-garden-17574.herokuapp.com/api/employees/admin";
const cookies = new Cookies();

class Login extends Component {
    state = {
        form: {
            username: '',
            password: ''
        }
    };

    //Event catch change on input
    handleChange = async e => {
        await this.setState({
            form:{
                ...this.state.form, [e.target.name]: e.target.value
            }
        });
    };
    
    //Init Session
    iniciaSesion = async() => {

    }

    render(){
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
                        <button className="submit">
                            LOGIN
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
    }
};

export default Login;
