import React from "react";
import logo from '../../assets/images/MercaTodoLogo.jpg';
import './headerGeneral.scss';

const HeaderGeneral = () => {
    return (
        <div className="headerg">
            <img className="logo-main" src={logo} alt="Logo" />
        </div>
    )

}
export default HeaderGeneral;