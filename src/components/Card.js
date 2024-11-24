import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      style={{
        borderRadius: "12px",
        border: "1px solid #ccc",
        padding: "16px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        color: "black",
        backgroundColor: "white",
      }}
      _hover={{
        boxShadow: 'lg',
        transform: 'scale(1.05)',
        transition: 'all 0.2s ease-in-out',
      }}
    >
      <Image rounded="md" src={imageSrc} alt="project-card" />
      <VStack align="start">
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text fontWeight="light">{description}</Text>
        <HStack>
          <Text fontSize={"sm"}>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x"></FontAwesomeIcon>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
