import React from "react";
import { Box, Center } from "@chakra-ui/react";
import { iconsStore } from "./sidebarData";
console.log(iconsStore);
const AfterIsOpenClose = () => {
  return (
    <Box bg="#FF5100" py="1.5rem" h="100vh">
   
      {iconsStore.map((Icon, _i) => (
        <Center cursor="pointer" p="1rem" key={_i} color="white">
          <Icon size={"25px"} />
        </Center>
      ))}
    </Box>
  );
};

export default AfterIsOpenClose;
