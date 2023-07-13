import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    fonts: {
      heading: "Poppins, sans-serif",
      body: "Poppins, sans-serif",
    },
    Heading: {
      baseStyle: {
        color: "red",
      },
    },
    Button: {
      baseStyle: {
        colorScheme: "blue",
      },
      defaultProps: {
        colorScheme: "blue",
      },
    },
    Box: {
      baseStyle: {
        backgroundColor: "pink",
      },
    },
  },
});

export default theme;
