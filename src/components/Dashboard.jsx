import { Button, Box, Flex, Center,Input,InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import Portfollio from "./portfollio/Portfollio";
import { FaBars, FaArrowRight,FaSearch } from "react-icons/fa";


const Dashboard = ({ onToggle, isOpen }) => {
  return (
    <Box>
      <Flex bg="white" alignItems={"center"} py={3}>
        <Center cursor={"pointer"} fontWeight={"normal"} p="1rem" onClick={() => onToggle()}>
          {!isOpen ? <FaBars size="22px" /> : <FaArrowRight size="25px" />}
        </Center>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<FaSearch color="gray.500" />}
          />
          <Input w="-moz-max-content" variant={"unstyled"} type="text" placeholder="Search..." bg="gray.100" pl={10} py={2} />
        </InputGroup>
      </Flex>
      <Portfollio />
    </Box>
  );
};

export default Dashboard;
