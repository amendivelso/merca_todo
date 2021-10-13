import React, { useContext } from 'react';
import HeaderGeneral from '../../../components/headerGeneral/HeaderGeneral';
import { SearchBody } from '../../../components/SearchBody/SearchBody';
import TableData from "../../../components/Table/Table";
import { Link } from 'react-router-dom';
import './Admin.scss';
import axios from 'axios';
import 'regenerator-runtime/runtime';
import { ApiContext } from '../../../Context/ContextApi';

const Admin = () => {


    const { data, setData } = useContext(ApiContext)


    return (
        <div>
            <HeaderGeneral />
            <SearchBody />
            <br />
            <div className="btn-add">
                <Link to="Add">
                    <button id="btn-add">Agregar</button>
                </Link>

            </div>
            <div>
                <TableData data={data} />
            </div>

        </div>
    );
};

export default Admin;
