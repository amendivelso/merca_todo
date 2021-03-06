import React, { useContext } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import { ApiContext } from '../../Context/ContextApi';




const TableUser = () => {
    const { dataView } = useContext(ApiContext)

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


                </Tr>
            </Thead>
            <Tbody>
                {dataView.map((product) => (

                    <Tr key={product.id}>
                        <Td>{product.id}</Td>
                        <Td>{product.product_name}</Td>
                        <Td>{product.existing_units}</Td>
                        <Td>{product.provider}</Td>
                        <Td>{product.date_entry}</Td>
                        <Td>{product.description}</Td>
                        <Td>{product.category}</Td>

                    </Tr>
                ))



                }

            </Tbody>
        </Table>
    );
};

export default TableUser;
