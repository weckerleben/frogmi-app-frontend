import React from "react";
import { Box, Button, Text, Link, Badge } from "@chakra-ui/react";
import { FaPlus, FaExternalLinkAlt } from "react-icons/fa";
import MapsItem from "./MapsItem";

const FeatureItem = ({ feature, onAddComment }) => {
  const handleAddComment = () => {
    onAddComment(feature);
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      maxW="50%"
      p={6}
      mb={4}
      display="flex"
      flexDirection="column"
    >
      <Box display="flex" justifyContent="space-between" alignItems="baseline">
        <Badge borderRadius="full" px="2" colorScheme="teal">
          ID: {feature.attributes.external_id || "null"}
        </Badge>
        <Text fontSize="lg" fontWeight="bold">
          {feature.attributes.title}
        </Text>
      </Box>

      <Box display="flex" justifyContent="space-between" mt={2}>
        <Box>
          <Text>
            <b>Magnitud:</b> {feature.attributes.magnitude}{" "}
            {feature.attributes.mag_type}
          </Text>
          <Text>
            <b>Lugar:</b> {feature.attributes.place}
          </Text>
          <Text>
            <b>Fecha y hora:</b>{" "}
            {new Date(feature.attributes.time).toLocaleString()}{" "}
            <span fontSize="1px">Local Time</span>
          </Text>
          <Text>
            <b>Tsunami:</b> {feature.attributes.tsunami ? "Sí" : "No"}
          </Text>
        </Box>
        <MapsItem
          latitude={feature.attributes.coordinates.latitude}
          longitude={feature.attributes.coordinates.longitude}
        />
      </Box>
      <Box w="100%" mt={2}>
        <Link
          href={feature.links.external_url}
          target="_blank"
          rel="noopener noreferrer"
          mr={2}
        >
          <Button leftIcon={<FaExternalLinkAlt />} colorScheme="blue">
            Ver más
          </Button>
        </Link>
        <Button
          leftIcon={<FaPlus />}
          colorScheme="teal"
          onClick={handleAddComment}
        >
          Agregar Comentario
        </Button>
      </Box>
    </Box>
  );
};

export default FeatureItem;
