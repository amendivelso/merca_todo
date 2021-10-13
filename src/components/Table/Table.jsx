import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import './Table.scss';
import { Link } from 'react-router-dom';

const TableData = ({ data }) => {
    console.log(data);
    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>Id</Th>
                    <Th>Producto</Th>
                    <Th>Proveedor</Th>
                    <Th>Vencimiento</Th>
                    <Th>Descripción</Th>
                    <Th>Editar</Th>
                    <Th>Eliminar</Th>
                </Tr>
            </Thead>
            <Tbody>
                {data.map((product) => (

                    <Tr key={product.id}>
                        <Td>{product.id}</Td>
                        <Td>{product.product_name}</Td>
                        <Td>{product.provider}</Td>
                        <Td>{product.date_entry}</Td>
                        <Td>{product.description}</Td>
                        <Td>
                            <Link to="/Edit" style={{ textDecoration: 'none' }}>
                                <i className="fa fa-edit" id="edit"></i>
                            </Link>
                        </Td>


                        <Td><i className="fa fa-trash" id="delete"></i></Td>



                    </Tr>
                ))



                }

            </Tbody>
        </Table>
    );
};

export default TableData;
