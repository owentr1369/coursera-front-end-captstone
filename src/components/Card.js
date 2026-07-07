import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      backgroundColor="white"
      borderRadius="xl"
      overflow="hidden"
      align="stretch"
      spacing={0}
      color="black"
    >
      <Image src={imageSrc} objectFit="cover" />
      <VStack align="start" spacing={4} p={5}>
        <Heading size="md">{title}</Heading>
        <Text>{description}</Text>
        <HStack>
          <p>See more</p>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;