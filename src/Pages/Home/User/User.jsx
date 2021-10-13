import React, { useContext } from "react";
import HeaderGeneral from "../../../components/headerGeneral/HeaderGeneral";
import { SearchBody } from "../../../components/SearchBody/SearchBody";
import TableUser from "../../../components/TableUser/TableUser";
import 'regenerator-runtime/runtime';
import { ApiContext } from '../../../Context/ContextApi';

const User = () => {
    const { data, setData } = useContext(ApiContext)

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
