import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Flex,
  Text,
  Button,
} from "@chakra-ui/react";
import Pagination from "../common/Pagenation";
import TopSellerProduct from "./TopSellerProduct";
import { hideScrollBar } from "../utils/utils";
const data = [
    {
      img: "https://picsum.photos/200/200",
      title: "Lorem",
      name: "Product",
      category: "Electronics",
      stock: 100,
      price: 100,
      percentage: 10,
    },
    {
      img: "https://picsum.photos/200/200/?random",
      title: "Lorem",
      name: "Product",
      category: "Home & Kitchen",
      stock: 200,
      price: 200,
      percentage: 20,
    },
    {
      img: "https://picsum.photos/200/200",
      title: "Keromen ",
      name: "Product",
      category: "Fashion and desine",
      stock: 300,
      price: 300,
      percentage: 30,
    },
    {
      img: "https://picsum.photos/200/200/?random",
      title: "Lorem ",
      name: "Product",
      category: "Beauty and peace",
      stock: 400,
      price: 400,
      percentage: 40,
    },
    {
      img: "https://picsum.photos/200/200/?random",
      title: "Tshrem",
      name: "Product",
      category: "Sports & Outdoors",
      stock: 500,
      price: 500,
      percentage: 50,
    },
  ];
const TopSeller = () => {
  return (
    <Box overflowX={"scroll"} css={hideScrollBar} bg="white">
      <Flex
        p="5px 1rem"
        boxShadow={"md"}
        bg="white"
        borderBottomWidth={"2px"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Text>Top Sellers</Text>
        <Menu>
          <MenuButton
            color="gray"
            fontSize={".8rem"}
            fontFamily={"monospace"}
            variant={"unstyled"}
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
           Report
          </MenuButton>
          <MenuList>
            <MenuItem>Download Report</MenuItem>
            <MenuItem>Export</MenuItem>
            <MenuItem>Import</MenuItem>
            
          </MenuList>
        </Menu>
      </Flex>
      {data.map((item, index) => (
        <TopSellerProduct {...item} />
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

export default TopSeller;
