import React from 'react';

const Edit = () => {
    return (
        <div>
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
            </div>
            <div className="add-color">
                <button id="add-color">Editar</button>
            </div>
        </div>
    );
};

export default Edit;
