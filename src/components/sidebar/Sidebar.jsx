import {
  Box,
  useMediaQuery,
  Text,
  Flex,
  Accordion,
  AccordionButton,
  AccordionPanel,
  AccordionItem,
  AccordionIcon,
} from "@chakra-ui/react";
import React from "react";
import iconData from "./sidebarData";
import { hideScrollBar } from './../utils/utils';

const Sidebar = ({ isOpen }) => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)", {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });
  return (
    <Box h="100vh" overflowX={"scroll"} css={hideScrollBar}  bg="#FF5100" p="4" color="whiteAlpha.800">
      {iconData.map((card, index) => (
        <Box key={index} mb="4">
          <Text fontSize="sm" fontWeight="500" color={"whiteAlpha.600"} mb="2">
            {card.title}
          </Text>
          <Accordion allowToggle>
            {card.icons.map((secondLevel, index) => (
              <AccordionItem
                key={index}
                borderTopWidth="0"
                _last={{ borderBottomWidth: "0" }}
              >
                <h2>
                  <AccordionButton
                    // bg="#FF5100"
                    // _hover={{ bg: "none" }}
                    px="4"
                    py="2"
                  >
                    <Flex w="full" alignItems="center" justifyContent={"space-between"}>
                      <Flex alignItems="center">
                        {secondLevel.icon}
                        <Text ml="2">{secondLevel.name}</Text>
                      </Flex>
                      <AccordionIcon />
                    </Flex>
                  </AccordionButton>
                </h2>
                <AccordionPanel>
                  {secondLevel.data.map((item, _i) => (
                    <Text fontSize={".9rem"} pl="1rem" key={_i} mb="2">
                      - {item}
                    </Text>
                  ))}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
      ))}
    </Box>
  );
};

export default Sidebar;
