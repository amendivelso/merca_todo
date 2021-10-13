import React, { useContext } from 'react';
import HeaderGeneral from '../../components/headerGeneral/HeaderGeneral';
import { Link } from 'react-router-dom'
import './Form.scss';
import axios from 'axios';
import 'regenerator-runtime/runtime';
import { ApiContext } from '../../Context/ContextApi';

const Add = () => {
    const { data, setData, select, setSelect, requestPost } = useContext(ApiContext)
    //sync typing with fields
    const handleChange = (e) => {

        const { name, value } = e.target;
        setSelect({ ...select, [name]: value })
    }

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
                        <button onClick={requestPost} id="add-color">Agregar</button>
                    </Link>

                </div>
            </div>
        </>
    );
};

export default Add;
