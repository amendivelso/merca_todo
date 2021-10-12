import React from 'react';
import {Table, Thead, Tbody, Tr, Th, Td} from 'react-super-responsive-table';

const TableUser = () => {
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
                </Tr>
                <Tr>
                    <Td>1025</Td>
                    <Td>Jamón Serrano</Td>
                    <Td>$105.000</Td>
                    <Td>500gr</Td>
                    <Td>Villaseca</Td>
                    <Td>12-12-2021</Td>
                </Tr>
                <Tr>
                    <Td>1025</Td>
                    <Td>Jamón Serrano</Td>
                    <Td>$105.000</Td>
                    <Td>500gr</Td>
                    <Td>Villaseca</Td>
                    <Td>12-12-2021</Td>
                </Tr>
            </Tbody>
        </Table>
    );
};

export default TableUser;
