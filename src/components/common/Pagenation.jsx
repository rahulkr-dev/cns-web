import React from 'react';
import { Box, Button, ButtonGroup } from '@chakra-ui/react';

const Pagination = ({ currentPage, totalPages }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);



  return (
    <ButtonGroup spacing={2}>
    
      <Button
      size={'xs'}
        disabled={currentPage === 1}
        variant={currentPage === 1 ? 'solid' : 'outline'}
        color={currentPage === 1 ? 'white' : ''}
      >
        &#8592;
      </Button>
      {pageNumbers.slice(0, 3).map((pageNumber) => (
        <Button
        size={'xs'}
          key={pageNumber}
          variant={currentPage === pageNumber ? 'solid' : 'outline'}
          bg={currentPage === pageNumber ? 'orange.500' : ''}
          color={currentPage === pageNumber ? 'white' : ''}
        >
          {pageNumber}
        </Button>
      ))}
      <Button
      size={'xs'}
        disabled={currentPage === totalPages}
        variant={currentPage === totalPages ? 'solid' : 'outline'}
        color={currentPage === totalPages ? 'white' : ''}
      >
        &#8594;
      </Button>
    </ButtonGroup>
  );
};

export default Pagination;
