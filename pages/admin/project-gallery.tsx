// pages/admin/project-gallery.tsx
import { Box, Heading, SimpleGrid, Image, Text, Link, Button, useDisclosure } from '@chakra-ui/react';
import Navbar from '@/components/StudentHeader';
import Footer from '@/components/Footer';
import AdminHeader from '@/components/AdminHeader';
import AddPrintModal from '@/components/addProjectModal'; // Ensure path is correct
import { Boat, CupHolder, Dinosaur } from '@/assets/gallery-photos';
import useProjects from "@/hooks/queries/useProjects";

const AdminProjectGalleryPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { projects } = useProjects();

  return (
    <Box height="100vh" display="flex" flexDirection="column" bg="gray.100">
      <AdminHeader />
      <Box p={8} maxW="container.md" mx="auto" flexGrow={1} display="flex" flexDirection="column">
        <Heading as="h1" mb={4}>Admin Project Gallery</Heading>
        <SimpleGrid columns={3} spacing={10}>
          {projects.map((project, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px" bg="white">
              <Image src={project.imageUrl} alt={project.title} />
              <Heading fontSize="xl" mt={4}>{project.title}</Heading>
                <Text mt={2}>{project.description}</Text>
            </Box>
          ))}
        </SimpleGrid>
        <Button mt={6} alignSelf="center" colorScheme="blue" onClick={onOpen}>Add Print</Button>
      </Box>
      <Footer />
      <AddPrintModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default AdminProjectGalleryPage;
