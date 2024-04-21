import React from "react";
import { GridItem, Box, Text, Link } from "@chakra-ui/react";

const Nav = () => {
  return (
    <GridItem pl="2" area={"nav"}>
      <Box p="4">
        <Text fontSize="lg" fontWeight="bold">Navegación</Text>
        <Box mt="2">
          <Link href="#">Inicio</Link>
          <Link href="#">Características</Link>
          <Link href="#">Contacto</Link>
        </Box>
      </Box>
    </GridItem>
  );
};

export default Nav;
