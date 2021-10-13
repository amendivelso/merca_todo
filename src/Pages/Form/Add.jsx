import React, { useState, useEffect } from 'react';
import HeaderGeneral from '../../components/headerGeneral/HeaderGeneral';
import { Link } from 'react-router-dom'
import './Form.scss';
import axios from 'axios';
import 'regenerator-runtime/runtime';

const Add = () => {

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


    //Status for show data
    const [select, setSelect] = useState({
        product_name: '',
        provider: '',
        existing_units: '',
        date_entry: '',
        description: '',
        category: '',

    })
    //sync typing with fields
    const handleChange = (e) => {

        const { name, value } = e.target;
        setSelect({ ...select, [name]: value })
    }


    //request POST
    const resquestPost = async () => {
        await axios.post(baseUrl, select)
            .then(response => {
                setData(data.concat(response.data))

            }).catch(e => {
                console.log(e);
            })
    }

    useEffect(async () => {
        await requestGet();
    }, [data, select])
    return (
        <>
            <HeaderGeneral />
            <br />
            <div className="container">
                <form className="form">
                    <label className="form-label">Producto</label>
                    <input type="text" name="product_name" className="input-value" onChange={handleChange} />

                    <label className="form-label">Proveedor</label>
                    <input type="text" name="provider" className="input-value" onChange={handleChange} />

                    <label className="form-label">Unidades</label>
                    <input type="text" name="existing_units" className="input-value" onChange={handleChange} />

                    <label className="form-label">Vencimiento</label>
                    <input type="text" name="date_entry" className="input-value" onChange={handleChange} />

                    <label className="form-label">Descripción</label>
                    <input type="text" name="description" className="input-value" onChange={handleChange} />

                    <label className="form-label">Categoria</label>
                    <input type="text" name="category" className="input-value" onChange={handleChange} />

                </form>
                <div className="add-color">
                    <Link to="/Admin">
                        <button onClick={resquestPost} id="add-color">Agregar</button>
                    </Link>

                </div>
            </div>
        </>
    );
};

export default Add;
