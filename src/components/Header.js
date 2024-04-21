import React from "react";
import { GridItem, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <GridItem pl="2" area={"header"} display="flex" alignItems="center">
      <Text fontSize="xl" fontWeight="bold">Mi Aplicación</Text>
    </GridItem>
  );
};

export default Header;
