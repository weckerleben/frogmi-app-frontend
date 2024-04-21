import React, { useState, useEffect } from "react";
import { Box, Grid } from "@chakra-ui/react";
import axios from "axios";
import FeatureItem from "./FeatureItem";
import CommentModal from "./CommentModal";
import FeatureItemTemp from "./FeatureItemTemp";

const FeatureList = ({ features }) => {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddComment = (feature) => {
    setSelectedFeature(feature);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedFeature(null);
  };

  return (
    <Box>
      <Grid templateColumns="repeat(auto-fill, minmax(300px, 5fr))" gap={4}>
        {features.map((feature) => (
          <FeatureItemTemp
            key={feature.id}
            feature={feature}
            onAddComment={handleAddComment} // Pasamos la función handleAddComment como prop
          />
        ))}
      </Grid>

      <CommentModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        featureId={selectedFeature ? selectedFeature.id : null}
        featureTitle={selectedFeature ? selectedFeature.attributes.title : null}
      />
    </Box>
  );
};

export default FeatureList;
