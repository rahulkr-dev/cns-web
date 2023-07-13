import { Box, Grid, Text } from "@chakra-ui/react";
import Card from "./Card";
import {
  MdAttachMoney,
  MdShoppingCart,
  MdPeople,
  MdAccountBalance,
} from "react-icons/md";

const Portfollio = () => {


  return (
    <Box p={4} >
      <Grid templateColumns={["repeat(1, 1fr)","repeat(1 1fr)","repeat(1, 1fr)", "repeat(4, 1fr)"]} gap={4}>
        <Card
          title="Total Earning"
          value="$5,000k"
          percentage={10}
          icon={MdAttachMoney}
          detail="View net earnings"
        />
        <Card
          title="Order"
          value="20.55M"
          percentage={-5}
          icon={MdShoppingCart}
          detail="View all orders"
        />
        <Card
          title="Customers"
          value="100.548M"
          percentage={0}
          icon={MdPeople}
          detail="See details"
        />
        <Card
          title="My Balance"
          value="$2,500k"
          percentage={15}
          icon={MdAccountBalance}
          detail="Withdraw money"
        />
      </Grid>
    </Box>
  );
};

export default Portfollio;
