import { Box, Icon } from '@chakra-ui/react';
import { FaCog } from 'react-icons/fa';

const RotatingSettingIcon = () => {
  return (
    <Box
      position="fixed"
      bottom={4}
      right={4}
      zIndex={999}
      transform="translate(-50%, -50%)"
    >
      <Icon
        as={FaCog}
        boxSize={10}
        color="white"
        bg="#FF5100"
        rounded="full"
        p={2}
        className="rotating-icon" // Add a class name for styling
      />
    </Box>
  );
};

export default RotatingSettingIcon;
