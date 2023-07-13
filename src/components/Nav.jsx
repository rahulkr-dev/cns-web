import React, { useState } from "react";
import { FaFlag } from "react-icons/fa";
import { AiOutlineAppstore, AiOutlineShoppingCart } from "react-icons/ai";
import { BsSquare } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Center,Flex } from "@chakra-ui/react";

function Nav() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const icons = [
    { icon: FaFlag, id: 1 },
    { icon: AiOutlineAppstore, id: 2 },
    { icon: AiOutlineShoppingCart, id: 3 },
    { icon: BsSquare, id: 4 },
    { icon: IoMdNotificationsOutline, id: 5 },
  ];

  const handleIconHover = (index) => {
    setHoveredIndex(index);
  };

  return (
    <Flex borderRadius={"md"} gap="5px" mr="2rem"
    //  bg="gray.100"
     >
      {icons.map((item, index) => (
        <Center
          p="1rem"
          borderRadius={"full"}
          key={item.id}
          bg={hoveredIndex === index ? "orange.200" : "none"}
          transition="background-color 0.3s"
          onMouseEnter={() => handleIconHover(index)}
          onMouseLeave={() => handleIconHover(null)}
        >
          <item.icon color="black" size={20} />
        </Center>
      ))}
    </Flex>
  );
}

export default Nav;
