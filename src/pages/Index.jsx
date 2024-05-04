import React from "react";
import { Box, Container, Flex, Input, Text, VStack, Textarea, Button, IconButton, useDisclosure, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Tree, TreeItem } from "@chakra-ui/react";
import { FaFolder, FaFileCode, FaHtml5, FaList, FaBars } from "react-icons/fa";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Container maxW="100%" p={0} m={0}>
      <Flex h="100vh">
        {/* Sidebar for template navigation */}
        <Box w="250px" bg="gray.100" borderRight="1px" borderColor="gray.200">
          <IconButton ref={btnRef} icon={<FaBars />} onClick={onOpen} aria-label="Open Menu" m={2} />
          <Drawer isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={btnRef}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Browse Templates</DrawerHeader>
              <DrawerBody>
                <VStack spacing="20px">
                  <Box>
                    <Text fontSize="lg" fontWeight="bold">
                      Category 1
                    </Text>
                    <VStack pl={4} align="start">
                      <Text>Template 1</Text>
                      <Text>Template 2</Text>
                    </VStack>
                  </Box>
                  <Box>
                    <Text fontSize="lg" fontWeight="bold">
                      Category 2
                    </Text>
                    <VStack pl={4} align="start">
                      <Text>Template 3</Text>
                    </VStack>
                  </Box>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>

        {/* Main content area */}
        <Flex direction="column" flex="1" overflow="auto">
          <VStack spacing={4} align="stretch" p={5}>
            <Text fontSize="2xl">Template Manager</Text>
            <Flex>
              <Button leftIcon={<FaFileCode />} colorScheme="teal" variant="solid">
                Source Code
              </Button>
              <Button leftIcon={<FaHtml5 />} colorScheme="teal" variant="outline" ml={2}>
                Compiled HTML
              </Button>
              <Button leftIcon={<FaList />} colorScheme="teal" variant="outline" ml={2}>
                Variables
              </Button>
            </Flex>
            <Textarea placeholder="Template source code or compiled HTML or JSON schema for variables" h="200px" />
            <Input placeholder="Search templates..." />
          </VStack>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Index;
