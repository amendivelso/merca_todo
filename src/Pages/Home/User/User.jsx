import React from "react";
import HeaderGeneral from "../../../components/headerGeneral/HeaderGeneral";
import { SearchBody } from "../../../components/SearchBody/SearchBody";
import TableUser from "../../../components/TableUser/TableUser";

const User = () => {
    return (
        <div>
            <HeaderGeneral />
            <SearchBody />
            <br />

            <div>
                <TableUser />
            </div>
        </div>
    );
};

export default User;
