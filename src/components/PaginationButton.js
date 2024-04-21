import React from "react";
import { Button } from "@chakra-ui/react";

const PaginationButton = ({ onClick, disabled, isActive, children }) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      colorScheme="teal"
      variant={isActive ? "solid" : "outline"}
      rounded="full"
      size="sm"
      mx={1}
    >
      {children}
    </Button>
  );
};

export default PaginationButton;
