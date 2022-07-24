import React, { ReactNode } from "react";
import { Box, Container, Flex } from "@chakra-ui/react";

const MyLayoutComponent = ({ children }: { children: ReactNode }) => {
  return (
    <Flex
      bg={"teal.100"}
      height={"100vh"}
      width={"100%"}
      justifyContent="center"
    >
      <Container maxW={"800px"} bg={"orange.100"}>
        {children}
      </Container>
    </Flex>
  );
};

export default MyLayoutComponent;
