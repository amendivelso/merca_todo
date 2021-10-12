import React from 'react';
import Header from "../../../components/Header/Header";
import Search from "../../../components/Search/Search";
import TableData from "../../../components/Table/Table";
import './Admin.scss';

const Admin = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <Search />
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
