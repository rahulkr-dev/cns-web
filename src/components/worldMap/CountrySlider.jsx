import React from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
const CountrySlider = ({name,value}) => {
  return (
    <Box>
      <Flex>
        <Text>{name}</Text>
        <Text>{value}%</Text>
      </Flex>
      <Slider aria-label="slider-ex-1" defaultValue={value}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
  );
};

export default CountrySlider;
