import React from "react";
import Header from "../../../components/Header/Header";
import Search from "../../../components/Search/Search";
import TableData from "../../../components/Table/Table";

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
                <TableData />
            </div>
        </div>
    );
};

export default User;
