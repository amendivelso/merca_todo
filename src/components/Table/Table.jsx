import React from 'react';
import {Table, Thead, Tbody, Tr, Th, Td} from 'react-super-responsive-table';
import './Table.scss';


const TableData = () => {
    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>Id</Th>
                    <Th>Producto</Th>
                    <Th>Precio</Th>
                    <Th>Peso</Th>
                    <Th>Proveedor</Th>
                    <Th>Vencimiento</Th>
                    <Th>Editar</Th>
                    <Th>Eliminar</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td>1025</Td>
                    <Td>Jamón Serrano</Td>
                    <Td>$105.000</Td>
                    <Td>500gr</Td>
                    <Td>Villaseca</Td>
                    <Td>12-12-2021</Td>
                    <Td><i className="fa fa-edit" id="edit"></i></Td>
                    <Td><i className="fa fa-trash" id="delete"></i></Td>
                </Tr>
                <Tr>
                    <Td>1025</Td>
                    <Td>Jamón Serrano</Td>
                    <Td>$105.000</Td>
                    <Td>500gr</Td>
                    <Td>Villaseca</Td>
                    <Td>12-12-2021</Td>
                    <Td><i className="fa fa-edit" id="edit"></i></Td>
                    <Td><i className="fa fa-trash" id="delete"></i></Td>
                </Tr>
                <Tr>
                    <Td>1025</Td>
                    <Td>Jamón Serrano</Td>
                    <Td>$105.000</Td>
                    <Td>500gr</Td>
                    <Td>Villaseca</Td>
                    <Td>12-12-2021</Td>
                    <Td><i className="fa fa-edit" id="edit"></i></Td>
                    <Td><i className="fa fa-trash" id="delete"></i></Td>
                </Tr>
            </Tbody>
        </Table>
    );
};

export default TableData;
