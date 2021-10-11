import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import TableData from "../../../components/Table/Table";
import './Admin.scss';

const Admin = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <p>Soy un buscador</p>
            </div>
            <div className="btn-add">
                <button id="btn-add">Agregar</button>
            </div>
            <div>
                <TableData />
            </div>
        </div>
    );
};

export default Admin;
