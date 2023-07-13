import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Box, Menu, MenuButton, MenuItem, MenuList,Text,Flex,Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Direct", "Social", "Email", "Other", "Referrals",],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 2,
    },
  ],
};
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
};

function StoreChart() {
  return (
  <Box bg="white">
    <Flex p="1rem" alignItems={"center"} justifyContent={"space-between"}>
      <Text color="gray">Store Visted By Source</Text>
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
      <Box bg="white" boxShadow={"md"} p="1.5rem" width="100%" height="300px">
      <Doughnut data={data} options={chartOptions} />
    </Box>
  </Box>
  );
}
export default StoreChart;
