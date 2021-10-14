import React, { useState, useContext, useEffect } from 'react'
import Select from 'react-select'
import { FiSearch } from 'react-icons/fi';
import { AiOutlineFilter } from "react-icons/ai";
import { ApiContext } from '../../Context/ContextApi';


export const SearchBody = () => {
    const [dataFilter, setDataFilter] = useState()
    const [dataFilterInput, setDataFilterInput] = useState()
    const { data, setData, setDataView, dataView } = useContext(ApiContext)

    const change = (event) => {
        setDataFilter(event.target.value);
    }
    const changeInput = (event) => {
        setDataFilterInput(event.target.value);

    }

    useEffect(() => {
        if (dataFilter === '') {
            setDataView(data)
        } else {
            const filter = data.filter(product => product.category.toLowerCase() === dataFilter)
            setDataView(filter)
        }

    }, [dataFilter])
    useEffect(() => {

        if (dataFilterInput === '') {
            setDataView(data)
        } else {

            const filter = data.filter(product => product.product_name.toLowerCase().replace(/ /g, "") === dataFilterInput.toLowerCase())
            setDataView(filter)
            console.log(filter)
        }




    }, [dataFilterInput])






    return (

        <div>

            <div className="searchBar">
                <select onClick={change} id='filter' >
                    <option value="" >Filtrar</option>
                    <option value="carnicos" >Cárnicos</option>
                    <option value="lacteos">Lácteos</option>
                    <option value="embutidos">Embutidos</option>
                    <option value="licores" >Licores</option>
                    <option value="granos">Granos</option>
                    <option value="enlatados">Enlatados</option>
                    <option value="vegetales y frutas" >Frutas y verduras</option>
                    <option value="dulceria">Dulceria</option>
                    <option value="elementos de aseo">Elementos de aseo</option>
                    <option value="aseo personal">Aseo personal</option>
                </select>
                <input onChange={changeInput} type="text" id="name" name="name" />
                <button id='search'><FiSearch /></button>

            </div>
        </div>
    )
}
