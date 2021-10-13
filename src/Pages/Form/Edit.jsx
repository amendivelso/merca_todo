import React, { useContext, useEffect } from 'react';
import HeaderGeneral from '../../components/headerGeneral/HeaderGeneral';
import { useParams } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ApiContext } from '../../Context/ContextApi';

const Edit = () => {

    const { id } = useParams();
    const { setDataId, dataId, requestPUT, requestGetbyId, select, setSelect } = useContext(ApiContext)

    useEffect(async () => {
        await requestGetbyId(id);
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDataId({ ...dataId, [name]: value })

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
                    <button id="add-color" onClick={() => requestPUT(id)} >Editar</button>

                </Link>


            </div>
        </div>
    );
};

export default Edit;
