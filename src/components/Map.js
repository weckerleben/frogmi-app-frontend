import React, { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { Box, Spinner } from "@chakra-ui/react";

const Map = ({ latitude, longitude }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const [map, setMap] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoaded) {
      setIsLoading(false);
    }
  }, [isLoaded]);

  const containerStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "8px",
    overflow: "hidden",
  };

  const center = {
    lat: latitude,
    lng: longitude,
  };

  const mapOptions = {
    zoomControl: false, // Oculta el control de zoom
    streetViewControl: false, // Oculta el muñeco 3D
    mapTypeControl: false, // Oculta la selección de terreno
  };

  const onLoad = (map) => {
    setMap(map);
  };

  const onUnmount = () => {
    setMap(null);
  };

  return (
    <Box w="sm" h="12rem" position="relative">
      {isLoading && (
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          display="flex"
          alignItems="center"
          justifyContent="center"
          zIndex="1"
        >
          <Spinner />
        </Box>
      )}
      {!loadError && isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          options={mapOptions}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          <MarkerF position={center} />
          <></>
        </GoogleMap>
      ) : (
        <Box>
          Error al cargar el mapa. Por favor, inténtelo de nuevo más tarde.
        </Box>
      )}
    </Box>
  );
};

export default Map;
