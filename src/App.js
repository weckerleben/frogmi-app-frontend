// App.js
import React from "react";
import { ChakraProvider, Grid } from "@chakra-ui/react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <ChakraProvider>
      <Grid
        templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"150px 1fr"}
        h="auto"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <Header />
        <Nav />
        <Main />
        <Footer />
      </Grid>
    </ChakraProvider>
  );
}

export default App;
