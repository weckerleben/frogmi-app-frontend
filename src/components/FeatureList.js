import React, { useState, useEffect } from 'react';
import { Box, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react';
import axios from 'axios';

const FeatureList = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [features, setFeatures] = useState([]);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [comment, setComment] = useState('');

  const fetchFeatures = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/features`);
      setFeatures(response.data.data);
    } catch (error) {
      console.error('Error fetching features:', error);
    }
  };

  useEffect(() => {
    fetchFeatures();
  }, []);

  const handleAddComment = (feature) => {
    setSelectedFeature(feature);
    onOpen();
  };

  const handleSubmitComment = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_API_BASE_URL}/features/${selectedFeature.id}/comments`, {
        comment: { body: comment }
      });
      onClose();
      setComment('');
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  return (
    <Box>
      {features.map(feature => (
        <Box key={feature.id}>
          <Box>{feature.attributes.title}</Box>
          <Button onClick={() => handleAddComment(feature)}>Agregar Comentario</Button>
        </Box>
      ))}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Agregar Comentario</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmitComment}>
              Guardar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default FeatureList;
