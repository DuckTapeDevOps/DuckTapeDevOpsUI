import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  VStack, 
  Button, 
  SimpleGrid,
  Icon,
  Badge,
  useColorModeValue
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { FaSearch, FaDraftingCompass, FaCode, FaGraduationCap } from 'react-icons/fa'
import { siteConfig } from '../config/site'

const RouteExplorer = () => {
  const cardBg = useColorModeValue('white', 'gray.700')
  const borderColor = useColorModeValue('gray.200', 'gray.600')

  const steps = siteConfig.howItWorks.steps

  const processSteps = [
    {
      icon: FaSearch,
      title: steps[0].title,
      description: steps[0].description,
      color: "blue.500"
    },
    {
      icon: FaDraftingCompass,
      title: steps[1].title,
      description: steps[1].description,
      color: "green.500"
    },
    {
      icon: FaCode,
      title: steps[2].title,
      description: steps[2].description,
      color: "orange.500"
    },
    {
      icon: FaGraduationCap,
      title: steps[3].title,
      description: steps[3].description,
      color: "purple.500"
    }
  ]

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={12} align="stretch">
        {/* Hero Section */}
        <Box textAlign="center" py={10}>
          <Heading as="h1" size="2xl" mb={4} color={useColorModeValue('navy.600', 'white')}>
            {siteConfig.howItWorks.title}
          </Heading>
          <Text fontSize="xl" mb={8} maxW="3xl" mx="auto" color={useColorModeValue('gray.600', 'gray.300')}>
            {siteConfig.howItWorks.description}
          </Text>
        </Box>

        {/* Process Steps */}
        <Box>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
            {processSteps.map((step, index) => (
              <Box 
                key={index}
                p={8} 
                bg={cardBg} 
                borderRadius="xl" 
                textAlign="center" 
                border="2px solid" 
                borderColor={borderColor}
                position="relative"
              >
                <Badge
                  position="absolute"
                  top="-3"
                  left="50%"
                  transform="translateX(-50%)"
                  colorScheme="blue"
                  borderRadius="full"
                  px={3}
                  py={1}
                >
                  {index + 1}
                </Badge>
                <Icon as={step.icon} boxSize={12} color={step.color} mb={4} mt={2} />
                <Heading as="h3" size="md" mb={3} color={useColorModeValue('navy.600', 'white')}>
                  {step.title}
                </Heading>
                <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.300')}>
                  {step.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        {/* Approach Details */}
        <Box bg={useColorModeValue('blue.50', 'gray.700')} p={10} borderRadius="xl">
          <VStack spacing={8} align="stretch">
            <Box textAlign="center">
              <Heading as="h2" size="xl" color={useColorModeValue('navy.600', 'white')} mb={4}>
                Our Approach
              </Heading>
              <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.300')} maxW="3xl" mx="auto">
                We focus on practical solutions that your team can maintain and extend. 
                Every engagement includes knowledge transfer and documentation.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              <Box>
                <Heading as="h3" size="lg" color={useColorModeValue('navy.600', 'white')} mb={4}>
                  What You Get
                </Heading>
                <VStack align="start" spacing={3}>
                  <Text color={useColorModeValue('gray.700', 'gray.200')}>
                    • Production-ready infrastructure code
                  </Text>
                  <Text color={useColorModeValue('gray.700', 'gray.200')}>
                    • Comprehensive documentation
                  </Text>
                  <Text color={useColorModeValue('gray.700', 'gray.200')}>
                    • Team training and knowledge transfer
                  </Text>
                  <Text color={useColorModeValue('gray.700', 'gray.200')}>
                    • Ongoing support during handoff
                  </Text>
                </VStack>
              </Box>

              <Box>
                <Heading as="h3" size="lg" color={useColorModeValue('navy.600', 'white')} mb={4}>
                  Why It Works
                </Heading>
                <VStack align="start" spacing={3}>
                  <Text color={useColorModeValue('gray.700', 'gray.200')}>
                    • Your team owns the infrastructure
                  </Text>
                  <Text color={useColorModeValue('gray.700', 'gray.200')}>
                    • No vendor lock-in or dependency
                  </Text>
                  <Text color={useColorModeValue('gray.700', 'gray.200')}>
                    • Pragmatic solutions over perfection
                  </Text>
                  <Text color={useColorModeValue('gray.700', 'gray.200')}>
                    • Cost-aware design from day one
                  </Text>
                </VStack>
              </Box>
            </SimpleGrid>
          </VStack>
        </Box>

        {/* CTA Section */}
        <Box textAlign="center" py={10}>
          <VStack spacing={6}>
            <Heading as="h2" size="xl" color={useColorModeValue('navy.600', 'white')}>
              Ready to Get Started?
            </Heading>
            <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.300')} maxW="2xl">
              Let's discuss your project and how we can help build reliable, scalable infrastructure.
            </Text>
            <Button
              as={RouterLink}
              to="/contact"
              colorScheme="blue"
              size="lg"
              px={8}
            >
              Contact Us
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default RouteExplorer
