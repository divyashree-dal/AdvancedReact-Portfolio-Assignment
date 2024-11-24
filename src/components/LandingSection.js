import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar size="2xl" name="pete" src="https://i.pravatar.cc/150?img=7" />
    <VStack spacing={2} mt={6}>
      <Heading size="md" fontWeight="medium" mb={10}>{greeting}</Heading>
      <Heading size="4xl" fontWeight="semibold">{bio1}</Heading>
      <Heading size="4xl" fontWeight="semibold">{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
