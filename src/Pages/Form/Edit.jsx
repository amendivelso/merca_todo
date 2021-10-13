import React, { useState, useEffect } from 'react';
import HeaderGeneral from '../../components/headerGeneral/HeaderGeneral';
import { useParams } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Edit = () => {
    const { id } = useParams('' || '');


    const baseUrl = "https://warm-garden-17574.herokuapp.com/api/products/";

    const baseUrlm = "https://warm-garden-17574.herokuapp.com/api/products";
    const [data, setData] = useState([]);
    const requestGet = async () => {
        try {
            await axios.get(baseUrlm)
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
    }, [dataId])


    const [dataId, setDataId] = useState([])

    const requestGetbyId = async () => {
        await axios.get(baseUrl + id)
            .then(response => {
                setDataId(response.data)
            })
    }
    useEffect(async () => {
        await requestGetbyId();
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDataId({ ...dataId, [name]: value })
        console.log(dataId);
    }


    const requestPUT = async () => {
        await axios.put(baseUrl + id, dataId)
            .then(response => {
                var newData = data;
                newData.map(pupdate => {
                    if (dataId.id === pupdate.id) {
                        pupdate.product_name = dataId.product_name
                        pupdate.provider = dataId.provider
                        pupdate.existing_units = dataId.existing_units
                        pupdate.date_entry = dataId.date_entry
                        pupdate.description = dataId.description
                        pupdate.category = dataId.category

                    }
                })
                setData(newData)
            })
    }


    return (
        <div>
            <HeaderGeneral />
            <br />

            <div className="container">
                <form className="form">
                    <label className="form-label">Producto</label>
                    <input type="text" name="product_name" className="input-value" onChange={handleChange} value={dataId && dataId.product_name} />

                    <label className="form-label">Proveedor</label>
                    <input type="text" name="provider" className="input-value" onChange={handleChange} value={dataId && dataId.provider} />

                    <label className="form-label">Unidades</label>
                    <input type="text" name="existing_units" className="input-value" onChange={handleChange} value={dataId && dataId.existing_units} />

                    <label className="form-label">Vencimiento</label>
                    <input type="text" name="date_entry" className="input-value" onChange={handleChange} value={dataId && dataId.date_entry} />

                    <label className="form-label">Descripción</label>
                    <input type="text" name="description" className="input-value" onChange={handleChange} value={dataId && dataId.description} />

                    <label className="form-label">Categoria</label>
                    <input type="text" name="category" className="input-value" onChange={handleChange} value={dataId && dataId.category} />


                </form>
            </div>
            <div className="add-color">
                <Link to="/Admin">
                    <button id="add-color" onClick={requestPUT} >Editar</button>

                </Link>


            </div>
        </div>
    );
};

export default Edit;
