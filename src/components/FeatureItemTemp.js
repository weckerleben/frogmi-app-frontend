import React, { useEffect, useState } from "react";
import {
  Image,
  Badge,
  Box,
  Button,
  Text,
  Link,
  ButtonGroup,
  Switch,
  Icon,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import {
  FaPlus,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaCommentMedical,
} from "react-icons/fa";
import MapsItem from "./MapsItem";
import { Rating } from "@mui/material";
import axios from "axios";
import Map from "./Map";

const FeatureItemTemp = ({ feature, onAddComment }) => {
  const [countComments, setCountComments] = useState([]);

  useEffect(() => {
    fetchCommentsCount();
  }, []);

  const fetchCommentsCount = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/features/${feature.id}/comments_count`
      );
      setCountComments(response.data.comments_count);
    } catch (error) {
      console.error("Error fetching comments count:", error);
    }
  };

  const handleAddComment = () => {
    fetchCommentsCount();
    onAddComment(feature);
  };

  const [gmtTimeZone, setGmtTimeZone] = useState("");

  useEffect(() => {
    const getTimeZone = () => {
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZoneName;
      const gmtTimeZone = new Date()
        .toLocaleString("en", { timeZoneName: "short", timeZone: timeZone })
        .split(" ")[3];
      setGmtTimeZone(gmtTimeZone);
    };

    getTimeZone();
  }, []);

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Map
        latitude={feature.attributes.coordinates.latitude}
        longitude={feature.attributes.coordinates.longitude}
      />
      {/* <MapsItem
        latitude={feature.attributes.coordinates.latitude}
        longitude={feature.attributes.coordinates.longitude}
      /> */}

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {feature.attributes.external_id || "null"}
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {new Date(feature.attributes.time).toLocaleString()} &bull;{" "}
            <Box as="span" fontSize="xs">
              {gmtTimeZone}
            </Box>
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {feature.attributes.place}
        </Box>

        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Magnitud</Th>
                <Th>Tsunami</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  {parseFloat(feature.attributes.magnitude).toFixed(2)}{" "}
                  {feature.attributes.mag_type}
                </Td>
                <Td>
                  <Icon
                    as={
                      feature.attributes.tsunami ? FaCheckCircle : FaTimesCircle
                    }
                    color={feature.attributes.tsunami ? "green.500" : "red.500"}
                    boxSize={6}
                  />
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>

        <Box display="flex" mt="2" alignItems="center">
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {countComments} comments
          </Box>
        </Box>

        <Box>
          <ButtonGroup spacing="1">
            <Button
              variant="solid"
              colorScheme="teal"
              leftIcon={<FaCommentMedical />}
              onClick={handleAddComment}
            >
              Comentar
            </Button>
            <Link
              href={feature.links.external_url}
              target="_blank"
              rel="noopener noreferrer"
              mr={2}
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<FaExternalLinkAlt />}
              >
                Ver más
              </Button>
            </Link>
          </ButtonGroup>
        </Box>
      </Box>
    </Box>
  );
};

export default FeatureItemTemp;
