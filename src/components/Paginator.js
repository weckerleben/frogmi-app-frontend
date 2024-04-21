import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import PaginationButton from "./PaginationButton";
import PerPageSelector from "./PerPageSelector";

const Paginator = ({
  currentPage,
  totalPages,
  onPageChange,
  onSelectPerPage,
  perPageOptions,
  selectedPerPage,
  perPage,
}) => {
  const handleClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageButtons = () => {
    const visiblePages = [];
    const maxVisibleButtons = 5; // Máximo número de botones de página visibles

    let startPage = currentPage - Math.floor(maxVisibleButtons / 2);
    if (startPage < 1) {
      startPage = 1;
    }
    let endPage = startPage + maxVisibleButtons - 1;
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = endPage - maxVisibleButtons + 1;
      if (startPage < 1) {
        startPage = 1;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      visiblePages.push(i);
    }

    return visiblePages.map((page) => (
      <PaginationButton
        key={page}
        onClick={() => handleClick(page)}
        disabled={page === currentPage}
        isActive={page === currentPage}
      >
        {page}
      </PaginationButton>
    ));
  };

  return (
    <Box mt={4}>
      <Flex alignItems="center" justifyContent="center">
        <PaginationButton
          onClick={() => handleClick(1)}
          disabled={currentPage === 1}
        >
          {"<<"}
        </PaginationButton>
        <PaginationButton
          onClick={() => handleClick(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {"<"}
        </PaginationButton>
        {renderPageButtons()}
        <PaginationButton
          onClick={() => handleClick(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          {">"}
        </PaginationButton>
        <PaginationButton
          onClick={() => handleClick(totalPages)}
          disabled={currentPage === totalPages}
        >
          {">>"}
        </PaginationButton>
      </Flex>
      <Flex alignItems="center" justifyContent="flex-end" mt={2}>
        <PerPageSelector
          value={selectedPerPage}
          onChange={(e) => onSelectPerPage(Number(e.target.value))}
          options={perPageOptions}
        />
      </Flex>
    </Box>
  );
};

export default Paginator;
