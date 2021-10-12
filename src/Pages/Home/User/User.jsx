import React from "react";
import Header from "../../../components/Header/Header";
import Search from "../../../components/Search/Search";
import TableUser from "../../../components/TableUser/TableUser";

const User = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <Search />
            </div>
            <div>
                <TableUser />
            </div>
        </div>
    );
};

export default User;
