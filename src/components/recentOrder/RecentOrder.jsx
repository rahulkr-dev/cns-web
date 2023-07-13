import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td,Box,Flex, Button,Text, Badge } from '@chakra-ui/react';
import { totalOrder } from '../utils/utils';
const image = 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600'
function OrderTable() {
const colors = ["red","green","blue","purple"]
  return (
    <Box>
        <Flex bg="white" borderBottomWidth={"2px"} p="1rem" justifyContent={"space-between"}>
            <Text>Recent Orders</Text>
            <Button size="xs" colorScheme='linkedin'>Generate Report</Button>
        </Flex>
  
    <Table fontSize={".7rem"} size="sm" variant="simple" colorScheme="gray">
      <Thead bg="transparent">
        <Tr color={"gray.600"} fontWeight={"bold"}>
          <Th>Order ID</Th>
          <Th>Image</Th>
          <Th>Customer</Th>
          <Th>Product</Th>
          <Th>Amount</Th>
          <Th>Vendor</Th>
          <Th>Status</Th>
          <Th>Rating</Th>
        </Tr>
      </Thead>
      <Tbody bg="white">
        {totalOrder.slice(0,5).map((order) => (
          <Tr key={order.orderId}>
            <Td>{order.orderId}</Td>
            <Td>
              <img src={image} alt="Product" style={{ width: '30px', height: '30px',borderRadius:"50%" }} />
            </Td>
            <Td>{order.customer}</Td>
            <Td>{order.product}</Td>
            <Td color="green.500">${order.amount.toFixed(2)}</Td>
            <Td>{order.vendor}</Td>
            <Td><Badge colorScheme={colors[Math.floor(Math.random()*colors.length)]}>{order.status}</Badge></Td>
            <Td>{order.rating}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
    </Box>
  );
}

export default OrderTable;
