// Componente Main.js
import React, { useState, useEffect } from "react";
import { GridItem, Box } from "@chakra-ui/react";
import axios from "axios";
import FeatureList from "./FeatureList";
import Paginator from "./Paginator";

const Main = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [perPage, setPerPage] = useState(10); // Valor predeterminado
  const [features, setFeatures] = useState([]);

  const fetchFeatures = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/features?per_page=${perPage}&page=${currentPage}`
      );
      setFeatures(response.data.data);
      setTotalPages(Math.ceil(response.data.pagination.total / perPage));
    } catch (error) {
      console.error("Error fetching features:", error);
    }
  };

  useEffect(() => {
    fetchFeatures();
  }, [currentPage, perPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePerPageChange = (perPage) => {
    setPerPage(perPage);
    setCurrentPage(1); // Reiniciar a la página 1 cuando cambia el número de elementos por página
  };

  return (
    <GridItem pl="2" area={"main"}>
      <Box p="4">
        <Paginator
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          perPageOptions={[10, 20, 50]} // Opciones de cantidad por página
          selectedPerPage={perPage}
          onSelectPerPage={handlePerPageChange}
          perPage={perPage}
        />
        <FeatureList features={features} />
      </Box>
    </GridItem>
  );
};

export default Main;
