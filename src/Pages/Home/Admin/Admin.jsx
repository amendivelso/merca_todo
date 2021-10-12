import React from 'react';
import TableData from "../../../components/Table/Table";
import './Admin.scss';

const Admin = () => {
    return (
        <div>
            <div>
                <h1>Header</h1>
            </div>
            <div>
                <h1>Search</h1>
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
