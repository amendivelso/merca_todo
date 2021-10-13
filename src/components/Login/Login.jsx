import React from "react";
import Logo from "../../assets/images/LogoMobile.jpg";
import "./Login.scss";
import axios from 'axios';
import  Cookies from 'universal-cookie';

const baseUrl = "https://desolate-gorge-58133.herokuapp.com/api/employees";
const cookies = new Cookies();

class Login extends React.Component {
    state = {
        form: {
            username: "",
            password: "",
        },
        error: false,
        errorMsg: ""
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

    // const [data, setData] = useState([]);
    //     const requestGet = async () => {
    //         try {
    //             await axios.get(ApiURL)
    //                 .then(response => {
    //                     setData(response.data);
    //                 })
    //         }
    //         catch (err) {
    //             console.log(err);
    //         }

    //     }
    //     useEffect(async () => {
    //         await requestGet();
    //     }, [])

    // logSeccion = () => {
    //     let url = ApiURL + "auth";
    //     axios.get(url, this.state.form).then((response) => {
    //         console.log(response);
    //     });
    // };
     logSeccion = () => {
         axios.get(baseUrl, {params: {username: this.state.form.username, password: this.state.form.password }})
         .then(response => {
             return response.data;
         })
         .then(response => {
             if (response.length >0 ) {
                 let answer = response[0];
                 cookies.set('username', answer.username, {path: "/"});
                 alert(`Bienvenido ${answer.username}`);

             } else {
                 alert('Usuario o contraseña incorrecta');
             }
         })
         .catch(error => {
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
                        <form className="form-wrapper">
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
                            <button
                                className="btn-sub"
                                onClick={() => this.logSeccion()}
                            >
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
