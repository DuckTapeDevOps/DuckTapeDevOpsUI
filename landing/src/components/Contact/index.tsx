import { Box, Container, Heading, Text, Stack, Button, HStack, Icon, Link, useColorModeValue } from '@chakra-ui/react'
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { siteConfig } from '../../config/site'

const Contact = () => {
  return (
    <Box py={20} bg={useColorModeValue('gray.50', 'gray.700')}>
      <Container maxW="container.xl">
        <Stack gap={12} textAlign="center">
          <Stack gap={4}>
            <Heading
              as="h2"
              size="xl"
              fontFamily="heading"
              color={useColorModeValue('navy.500', 'white')}
            >
              {siteConfig.contact.heading}
            </Heading>
            <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.300')} maxW="2xl" mx="auto">
              {siteConfig.contact.description}
            </Text>
          </Stack>

          <HStack spacing={6} justify="center" flexWrap="wrap">
            <Button
              as="a"
              href={siteConfig.contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              colorScheme="blue"
              size="lg"
              leftIcon={<Icon as={FaLinkedin} />}
              px={8}
            >
              Connect on LinkedIn
            </Button>
            <Button
              as="a"
              href={`mailto:${siteConfig.contact.email}`}
              colorScheme="blue"
              variant="outline"
              size="lg"
              leftIcon={<Icon as={FaEnvelope} />}
              px={8}
            >
              Email Us
            </Button>
          </HStack>

          <Box mt={4}>
            <Text fontSize="sm" color={useColorModeValue('gray.500', 'gray.400')}>
              Email: <Link href={`mailto:${siteConfig.contact.email}`} color="blue.500">{siteConfig.contact.email}</Link>
            </Text>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default Contact

export default Contact 