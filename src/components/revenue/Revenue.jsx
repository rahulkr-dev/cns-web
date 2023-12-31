import React from 'react';
import { Chart as ChartJS, LinearScale, CategoryScale, BarElement, PointElement, LineElement, Legend, Tooltip, LineController, BarController } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { Box,Flex,Heading,Text,Grid } from '@chakra-ui/react';

ChartJS.register(LinearScale, CategoryScale, BarElement, PointElement, LineElement, Legend, Tooltip, LineController, BarController);

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const orderData = [100, 2000, 1500, 3000, 2500, 800, 450, 500, 4500, 600, 1050, 3000];
const earningData = [
  5000, 6000, 5500, 7000, 6500, 2000, 3500,5000, 500, 10000, 950, 8000,
];
const refundData = [2000, 1500, 3000, 2500, 900, 850, 2000, 2500, 3000, 550, 2000, 650];

const data = {
  labels,
  datasets: [
    {
      type: "line",
      label: "Order",
      borderColor: "rgb(255, 99, 132)",
      borderWidth: 2,
      fill: true,
      data: orderData,
    },
    {
      type: "bar",
      label: "Earning",
      backgroundColor: "rgb(75, 192, 192)",
      data: earningData,
      borderColor: "white",
      borderWidth: 2,
      barPercentage: 0.6, // Adjust the bar width (default is 0.8)
      categoryPercentage: 0.7, // Adjust the space between bars (default is 0.8)
    },
    {
      type: "line",
      label: "Refunds",
      backgroundColor: "blue",
      borderDash: [5, 5], // Array representing line segments and gaps
      borderWidth: 3, // Increase line width
      backgroundColor: 'gray', // Set background color inside line graph area
      fill: true, 
      data: refundData,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
};

function CombinedChart() {
  const fakeData = [
    {title:"Orders",val:7554},
    {title:"Earnings",val:"$22.89k"},
    {title:"Refunds",val:367},
    {title:"Comversional Ratio",val:'75.54%'},
  ]
  return (
    <Box bg="white">
      <Heading p="1rem" color="black" fontSize="1.3rem">Revenue</Heading>

    <Grid gap="1rem" p="1rem" templateColumns={{base:"repeat(2,1fr)",lg:"repeat(4,1fr)"}}>
      {
        fakeData.map((item,_i)=>(
          <Box border="1px dotted gray" p="1rem" color="gray" fontSize={".9rem"} key = {_i}>
            <Text fontWeight={"bold"}>{item.val}</Text>
            <Text>{item.title}</Text>
          </Box>
        ))
      }
      </Grid>
   
    <Box bg="white" boxShadow={"md"} p="1.5rem" width="100%" height="400px">
   
      <Chart type="bar" data={data} options={chartOptions} />
    </Box>
    </Box>
  );
}

export default CombinedChart;
