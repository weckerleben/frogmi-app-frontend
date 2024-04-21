import React from "react";
import { GridItem, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <GridItem pl="2" area={"footer"} display="flex" alignItems="center" justifyContent="center">
      <Text fontSize="sm" color="black">© 2024 William Eckerleben. Todos los derechos reservados.</Text>
    </GridItem>
  );
};

export default Footer;
