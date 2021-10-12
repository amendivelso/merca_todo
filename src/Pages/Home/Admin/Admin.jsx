import React, { useEffect, useState } from 'react';
import HeaderGeneral from '../../../components/headerGeneral/HeaderGeneral';
import { SearchBody } from '../../../components/SearchBody/SearchBody';
import TableData from "../../../components/Table/Table";
import './Admin.scss';
import axios from 'axios';
import 'regenerator-runtime/runtime';

const Admin = () => {
    const baseUrl = 'https://warm-garden-17574.herokuapp.com/api/products';

    const [data, setData] = useState([]);
    const requestGet = async () => {
        try {
            await axios.get(baseUrl)
                .then(response => {
                    setData(response.data);
                })
        }
        catch (err) {
            console.log(err);
        }

    }
    useEffect(async () => {
        await requestGet();
    }, [])

    return (
        <div>
            <HeaderGeneral />
            <SearchBody />
            <br />
            <div className="btn-add">
                <button id="btn-add">Agregar</button>
            </div>
            <div>
                <TableData data={data} />
            </div>
        </div>
    );
};

export default Admin;
