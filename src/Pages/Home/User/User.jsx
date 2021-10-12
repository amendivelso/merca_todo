import React, { useEffect, useState } from "react";
import HeaderGeneral from "../../../components/headerGeneral/HeaderGeneral";
import { SearchBody } from "../../../components/SearchBody/SearchBody";
import TableUser from "../../../components/TableUser/TableUser";
import axios from 'axios';
import 'regenerator-runtime/runtime';

const User = () => {
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

            <div>
                <TableUser data={data} />
            </div>
        </div>
    );
};

export default User;
