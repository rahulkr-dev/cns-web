import React from "react";
import { ProductCardItem } from "../bestSellingProduct/ProductCard";
import { Flex, Image, Text } from "@chakra-ui/react";

const TopSellerProduct = ({
  img,
  title,
  name,
  category,
  stock,
  price,
  percentage,
}) => {
  return (
    <Flex
      transition={"all .3s ease-in-out"}
      cursor={"pointer"}
      _hover={{ bg: "none" }}
      gap="1rem"
      bg="white"
      borderBottomWidth={"2px"}
      p="1rem"
      alignItems={"center"}
      // justifyContent={{base:"flex-start",lg:"space-between"}}
    >
      <Image borderRadius={"full"} boxSize={"2.5rem"} src={img} />
      <ProductCardItem first={title} second={name} />
      <Text color="gray">{category}</Text>
      <ProductCardItem first={stock} second={"Stock"} />
      <Text color="gray">{price}</Text>
      <Text color="gray">{percentage} %</Text>
    </Flex>
  );
};

export default TopSellerProduct;
