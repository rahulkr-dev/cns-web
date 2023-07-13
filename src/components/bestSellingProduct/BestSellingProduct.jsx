import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import ProductCard from "./ProductCard";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Box,
  Flex,
  Text,
  Button,
} from "@chakra-ui/react";
import Pagination from "../common/Pagenation";
const data = [
  {
    img: "https://picsum.photos/200/200",
    name: "Sigmenser",
    date: "24 Apr 2021",
    price: "$ 100",
    order: 10,
    stock: 100,
    amount: "$ 1000",
  },
  {
    img: "https://picsum.photos/200/200/?random",
    name: "Raggestre",
    date: "4 Jan 2021",
    price: "$ 200",
    order: 20,
    stock: 200,
    amount: "$ 2000",
  },
  {
    img: "https://picsum.photos/200/200",
    name: "Zophohme",
    date: "2 Aug 2020",
    price: "$ 300",
    order: 30,
    stock: 300,
    amount: "$ 3000",
  },
  {
    img: "https://picsum.photos/200/200/?random",
    name: "Germaline ",
    date: "24 Apr 2021",
    price: "$ 400",
    order: 40,
    stock: 400,
    amount: "$ 4000",
  },
  {
    img: "https://picsum.photos/200/200/?random",
    name: "Comsumes",
    date: "12 Sep 2021",
    price: "$ 500",
    order: 50,
    stock: 500,
    amount: "$ 5000",
  },
];
const BestSellingProduct = () => {
  return (
    <Box overflowX={"scroll"}>
      <Flex
        p="5px 1rem"
        boxShadow={"md"}
        bg="white"
        borderBottomWidth={"2px"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Text>Best Selling Products</Text>
        <Menu>
          <MenuButton
            color="gray"
            fontSize={".8rem"}
            fontFamily={"monospace"}
            variant={"unstyled"}
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            <Text color="black" as={"span"}>
              SORT BY
            </Text>
            :Today
          </MenuButton>
          <MenuList>
            <MenuItem>Today</MenuItem>
            <MenuItem>Yesterda</MenuItem>
            <MenuItem>Last 7 Days</MenuItem>
            <MenuItem>Last 30 Days</MenuItem>
            <MenuItem>This Month </MenuItem>
            <MenuItem>Last Month </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      {data.map((item, index) => (
        <ProductCard {...item} />
      ))}
      <Flex
        p="1rem"
        boxShadow={"md"}
        bg="white"
        borderBottomWidth={"2px"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Text color="gray">
            Showing <Text fontWeight={"bold"} as={'span'}> 5 </Text>
            of <Text fontWeight={"bold"} as={'span'}> 25 </Text> 
            Results
        </Text>
        <Pagination currentPage={1} totalPages={3}/>
      </Flex>
    </Box>
  );
};

export default BestSellingProduct;
