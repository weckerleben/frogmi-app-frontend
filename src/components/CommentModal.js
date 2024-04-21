import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Textarea,
  Text,
} from "@chakra-ui/react";
import { FaSave, FaTimes } from "react-icons/fa";
import axios from "axios";

const CommentModal = ({ isOpen, onClose, featureId, featureTitle }) => {
  const [comment, setComment] = useState("");

  const handleSubmitComment = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/features/${featureId}/comments`,
        {
          comment: { body: comment },
        }
      );
      onClose();
      setComment("");
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Agregar Comentario</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>
            <strong>{featureTitle}</strong>
          </Text>
          <Textarea
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          <Button
            leftIcon={<FaSave />}
            colorScheme="teal"
            variant="solid"
            mr={3}
            onClick={handleSubmitComment}
          >
            Guardar
          </Button>
          <Button 
            leftIcon={<FaTimes />} colorScheme="teal" variant="ghost" onClick={onClose}>
            Cancelar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CommentModal;
