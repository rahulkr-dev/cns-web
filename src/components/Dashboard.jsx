import {
  Button,
  Box,
  Flex,
  Center,
  Input,
  InputGroup,
  InputLeftElement,
  Grid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Portfollio from "./portfollio/Portfollio";
import { FaBars, FaArrowRight, FaSearch } from "react-icons/fa";
import RevenueChart from "./revenue/Revenue";
import WorldMap from "./worldMap/WorldMap";
import BestSellingProduct from "./bestSellingProduct/BestSellingProduct";
import TopSeller from "./topSeller/TopSeller";
import { hideScrollBar } from "./utils/utils";
import OrderTable from "./recentOrder/RecentOrder";
import StoreChart from "./storeChart/StoreChart";
import { BiCalendarAlt } from "react-icons/bi";
import Nav from "./Nav";

const Dashboard = ({ onToggle, isOpen }) => {
  return (
    <Box h="100vh" overflowX={"scroll"} css={hideScrollBar}>
      <Flex bg="white" alignItems={"center"} py={3}>
        <Center
          cursor={"pointer"}
          fontWeight={"normal"}
          p="1rem"
          onClick={() => onToggle()}
        >
          {!isOpen ? <FaBars size="22px" /> : <FaArrowRight size="25px" />}
        </Center>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<FaSearch color="gray.500" />}
          />
          <Input
            w="-moz-max-content"
            variant={"unstyled"}
            type="text"
            placeholder="Search..."
            bg="gray.100"
            pl={10}
            py={2}
          />
        </InputGroup>
        <Nav />
      </Flex>
      {/* Heading  */}
      <Flex justifyContent={"space-between"} p="1rem">
        <Box>
          <Text fontSize="1.2rem" color="black">
            Good Morning, Anna!
          </Text>
          <Text fontSize=".9rem" color="gray">
            Here's what's happening with your store today.
          </Text>
        </Box>
        <Flex alignItems={"center"} gap="1rem">
            <Input borderRadius={"md"} bg="white" w="max-content" colorScheme="white" p="1rem" type="date" placeholder="4 oct 2022" />
          <Button fontSize={".7rem"} size="sm" colorScheme="teal">
            Add Product
          </Button>
        </Flex>
      </Flex>
      <Portfollio />
      {/* Show charts */}

      <Grid
        mt="1.5rem"
        px="1rem"
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1 1fr)",
          "repeat(1, 1fr)",
          "60% 40%",
        ]}
        gap={4}
      >
        <RevenueChart />
        <WorldMap />
      </Grid>
      <Grid
        mt="2.5rem"
        px="1rem"
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1 1fr)",
          "repeat(1, 1fr)",
          "50% 45%",
        ]}
        gap={4}
      >
        <BestSellingProduct />
        <TopSeller />
      </Grid>

      <Grid
        mb="2rem"
        mt="2.5rem"
        px="1rem"
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1 1fr)",
          "repeat(1, 1fr)",
          "30% 70%",
        ]}
        gap={4}
      >
        <StoreChart />
        <OrderTable />
      </Grid>
    </Box>
  );
};

export default Dashboard;
