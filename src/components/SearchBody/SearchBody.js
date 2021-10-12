import React from 'react'
import { FiSearch } from 'react-icons/fi';
import { AiOutlineFilter } from "react-icons/ai";

export const SearchBody = () => {
    return (
        <div>
            <div className="searchBar">
                <select name="select" id='filter' >
                    <option value="value1" selected>Filtrar</option>
                    <option value="value1" >Cárnicos</option>
                    <option value="value2">Lácteos</option>
                    <option value="value3">Embutidos</option>
                    <option value="value1" >Licores</option>
                    <option value="value2">Grano</option>
                    <option value="value3">Enlatados</option>
                    <option value="value1" >Frutas y verduras</option>
                    <option value="value2">Dulceria</option>
                    <option value="value3">Elementos de aseo</option>
                    <option value="value3">Aseo personal</option>
                </select>
                <input type="text" id="name" name="name" />
                <button id='search'><FiSearch /></button>

            </div>
        </div>
    )
}
