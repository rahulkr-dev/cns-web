import React from 'react'
import { Flex,Box,Text,Image, Center } from '@chakra-ui/react';

export const ProductCardItem = ({first,second})=>{
    return (
        <Box fontSize={".9rem"}>
        <Text>{first}</Text>
        <Text color="gray.500">{second}</Text>
    </Box>
    )
}
const ProductCard = ({img,name,date,price,order,stock,amount}) => {
  return (
    <Flex transition={"all .3s ease-in-out"} cursor={"pointer"} _hover={{bg:"none"}} gap="1rem" bg="white" borderBottomWidth={"2px"} p="1rem" alignItems={"center"}>
        <Center p="1rem" bg="gray.100" borderRadius={"5px"}>
        <Image boxSize={"2rem"} src={img} />
        </Center>
       <ProductCardItem first={name} second={date}/>
       <ProductCardItem first={price} second={"Price"}/>
       <ProductCardItem first={order} second={"Orders"}/>
       <ProductCardItem first={stock} second={"Stock"}/>
       <ProductCardItem first={amount} second={"Amount"}/>
    </Flex>
  )
}

export default ProductCard