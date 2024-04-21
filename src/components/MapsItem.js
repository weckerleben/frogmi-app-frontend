import React from "react";
import { Box } from "@chakra-ui/react";
import { GoogleMap, MarkerF, LoadScript } from "@react-google-maps/api";

const MapsItem = ({ latitude, longitude }) => {

  const mapOptions = {
    zoomControl: false, // Oculta el control de zoom
    streetViewControl: false, // Oculta el muñeco 3D
    mapTypeControl: false, // Oculta la selección de terreno
  };

  return (
    <Box w='sm' h='12rem'>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          center={{
            lat: latitude,
            lng: longitude,
          }}
          zoom={8}
          mapContainerStyle={{
            width: "100%",
            height: "100%",
            borderRadius: "8px",
            overflow: "hidden",
          }}
          options={mapOptions}
        >
          <MarkerF
            position={{
              lat: latitude,
              lng: longitude,
            }}
          />
        </GoogleMap>
      </LoadScript>
    </Box>
  );
};

export default MapsItem;
