import { Box, Container, Heading, Text, Stack, Button, HStack, Icon, Link, useColorModeValue } from '@chakra-ui/react'
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { siteConfig } from '../../config/site'
import SEO from '../../components/SEO'

const Contact = () => {
  return (
    <>
      <SEO 
        title="Contact Us"
        description="Get in touch with DuckTapeDevOps. Connect on LinkedIn or send us an email to discuss your cloud architecture and DevOps needs."
        path="/contact"
      />
      <Box py={20} bg="space.800">
      <Container maxW="container.xl">
        <Stack gap={12} textAlign="center">
          <Stack gap={4}>
            <Heading
              as="h2"
              size="xl"
              fontFamily="heading"
              color="gray.100"
            >
              {siteConfig.contact.heading}
            </Heading>
            <Text fontSize="lg" color="gray.300" maxW="2xl" mx="auto">
              {siteConfig.contact.description}
            </Text>
          </Stack>

          <HStack spacing={6} justify="center" flexWrap="wrap">
            <Button
              as="a"
              href={siteConfig.contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              colorScheme="brand"
              size="lg"
              leftIcon={<Icon as={FaLinkedin} />}
              px={8}
            >
              Connect on LinkedIn
            </Button>
            <Button
              as="a"
              href={`mailto:${siteConfig.contact.email}`}
              colorScheme="brand"
              variant="outline"
              size="lg"
              leftIcon={<Icon as={FaEnvelope} />}
              px={8}
            >
              Email Us
            </Button>
          </HStack>

          <Box mt={4}>
            <Text fontSize="sm" color="gray.400">
              Email: <Link href={`mailto:${siteConfig.contact.email}`} color="brand.500">{siteConfig.contact.email}</Link>
            </Text>
          </Box>
        </Stack>
      </Container>
    </Box>
    </>
  )
}

export default Contact 