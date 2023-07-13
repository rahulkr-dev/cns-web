import { Box, Text, Flex, Center } from "@chakra-ui/react";
const Card = ({ title, value, percentage, icon: Icon, detail }) => {
  const color = percentage > 0 ? "green" : percentage < 0 ? "red" : "black";
  const iconColorMapping = {
    totalearning: { iconColor: "green", bg: "lightgreen" },
    order: { iconColor: "blue", bg: "lightblue" },
    customers: { iconColor: "purple", bg: "lavender" },
    mybalance: { iconColor: "orange", bg: "lightgoldenrodyellow" },
  };

  const { iconColor, bg } = iconColorMapping[title.toLowerCase().replace(" ", "")];
  return (
    <Box transition={"all .3s ease"} _hover={{transform:"translateY(-3px)"}}  p={4} bg="white" boxShadow="md" borderRadius="md">
      <Flex fontWeight={"500"} alignItems={"center"} justifyContent={"space-between"} mt={2}>
        <Text fontSize={".8rem"} textTransform={"uppercase"} color="gray">{title}</Text>
        <Text color={color}>
          {percentage > 0 && "+"}
          {percentage}%
        </Text>
      </Flex>
      <Text fontWeight="700" fontSize="2xl" mt={2}>
        {value}
      </Text>
      <Flex alignItems={"center"} justifyContent={"space-between"} mt={1}>
        <Text cursor={"pointer"} textDecor={"underline"}>{detail}</Text>
        <Center p="1rem" bg={bg} color={iconColor} borderRadius="md" >
          <Icon size={24} />
        </Center>
      </Flex>
    </Box>
  );
};

export default Card;
