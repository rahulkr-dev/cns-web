import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./components/Dashboard";
import { Box, Grid, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import SidebarForMobile from "./components/sidebar/SidebarForMobile";
import AfterIsOpenClose from "./components/sidebar/AfterIsOpenClose";
import RotatingSettingIcon from "./components/common/RotatingSearchIcon";
import { hideScrollBar } from "./components/utils/utils";

const App = () => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)", {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });
  // console.log(isLargerThan800);
  return (
    <Grid
      templateColumns={["full", "full", `${!isOpen ? "15rem" : "4rem"} auto`]}
      bg={"gray.100"}
      maxW={"100vw"}
      overflowY={"scroll"}
      css={hideScrollBar}
    >
      {isLargerThan800 ? (
        <Box>
          {!isOpen ? <Sidebar isOpen={isOpen} /> : <AfterIsOpenClose />}
        </Box>
      ) : (
        <SidebarForMobile isOpen={isOpen} onClose={onClose} />
      )}

      <Dashboard onToggle={onToggle} isOpen={isOpen} />
      {/* Rotating icons */}
      {isLargerThan800 && <RotatingSettingIcon /> }
    </Grid>
  );
};

export default App;
