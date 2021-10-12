import React from 'react';
import HeaderGeneral from '../../../components/headerGeneral/HeaderGeneral';
import { SearchBody } from '../../../components/SearchBody/SearchBody';
import TableData from "../../../components/Table/Table";
import './Admin.scss';

const Admin = () => {
    return (
        <div>
            <HeaderGeneral />
            <SearchBody />
            <br />
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
