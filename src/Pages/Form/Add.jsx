import React from 'react';
import './Add.scss';

const Add = () => {
    return (
        <>
        <h1>Soy un header</h1>
        <div className="container">
            <form className="form">
                <label className="form-label">Producto</label>
                <input type="text" name="producto" className="input-value" value="" />

                <label className="form-label">Precio</label>
                <input type="text" name="precio" className="input-value" value="" />

                <label className="form-label">Peso</label>
                <input type="text" name="peso" className="input-value" value="" />


                <label className="form-label">Proveedor</label>
                <input type="text" name="proveedor" className="input-value" value="" />


                <label className="form-label">Vencimiento</label>
                <input type="text" name="vencimiento" className="input-value" value="" />

            </form>
            <div className="add-color">
                <button id="add-color">Agregar</button>
            </div>
        </div>
        </>
    );
};

export default Add;
