import React, { useContext } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import './Table.scss';
import { Link } from 'react-router-dom';
import { ApiContext } from '../../Context/ContextApi';


const TableData = () => {

    const { data } = useContext(ApiContext)


    // const requestDelete = async (id) => {
    //     await axios.delete(baseUrl + "/" + id)
    //         .then(response => {
    //             setData(response.data.filter(product => product.id !== id));
    //         })

    // }



    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>Id</Th>
                    <Th>Producto</Th>
                    <Th>Cantidad</Th>
                    <Th>Proveedor</Th>
                    <Th>Vencimiento</Th>
                    <Th>Descripción</Th>
                    <Th>Categoria</Th>
                    <Th>Editar</Th>
                    <Th>Eliminar</Th>
                </Tr>
            </Thead>
            <Tbody>
                {data.map((product) => (

                    <Tr key={product.id}>
                        <Td>{product.id}</Td>
                        <Td>{product.product_name}</Td>
                        <Td>{product.existing_units}</Td>
                        <Td>{product.provider}</Td>
                        <Td>{product.date_entry}</Td>
                        <Td>{product.description}</Td>
                        <Td>{product.category}</Td>
                        <Td>
                            <Link to={`/Edit/${product.id}`} >
                                <i className="fa fa-edit" id="edit"></i>
                            </Link>
                        </Td>


                        <Td>
                            <Link to="/Admin">
                                <i className="fa fa-trash" id="delete"></i>
                                {/* <i onClick={() => requestDelete(product.id)} className="fa fa-trash" id="delete"></i> */}
                            </Link>


                        </Td>



                    </Tr>
                ))



                }

            </Tbody>
        </Table>
    );
};

export default TableData;
