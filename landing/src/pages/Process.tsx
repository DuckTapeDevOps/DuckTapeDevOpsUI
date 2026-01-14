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
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { FaSearch, FaDraftingCompass, FaCode, FaGraduationCap } from 'react-icons/fa'
import { siteConfig } from '../config/site'
import SEO from '../components/SEO'

const Process = () => {
  const cardBg = 'space.800' // Dark grey cards
  const borderColor = 'space.700' // Dark grey borders

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
    <>
      <SEO 
        title="Our Process"
        description="Learn how DuckTapeDevOps works: intelligence planning, operator execution, knowledge transfer, and product ownership. We plan like intel, execute like operators."
        path="/process"
      />
      <Container maxW="container.xl" py={10}>
        <VStack spacing={12} align="stretch">
          {/* Hero Section */}
          <Box textAlign="center" py={10}>
          <Heading as="h1" size="2xl" mb={4} color="gray.100">
            {siteConfig.howItWorks.title}
          </Heading>
          <Text fontSize="xl" mb={8} maxW="3xl" mx="auto" color="gray.300">
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
                <Heading as="h3" size="md" mb={3} color="gray.100">
                  {step.title}
                </Heading>
                <Text fontSize="sm" color="gray.300">
                  {step.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        {/* Approach Details */}
        <Box bg={cardBg} p={10} borderRadius="xl" borderWidth="1px" borderColor={borderColor}>
          <VStack spacing={8} align="stretch">
            <Box textAlign="center">
              <Heading as="h2" size="xl" color="gray.100" mb={4}>
                Our Approach
              </Heading>
              <Text fontSize="lg" color="gray.300" maxW="3xl" mx="auto">
                We plan like intel, execute like operators, and leave your team owning the product and capable 
                of both strategic and tactical execution for the next project.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              <Box>
                <Heading as="h3" size="lg" color="gray.100" mb={4}>
                  What You Get
                </Heading>
                <VStack align="start" spacing={3}>
                  <Text color="gray.200">
                    • Production-ready infrastructure code
                  </Text>
                  <Text color="gray.200">
                    • Comprehensive documentation
                  </Text>
                  <Text color="gray.200">
                    • Team training and knowledge transfer
                  </Text>
                  <Text color="gray.200">
                    • Ongoing support during handoff
                  </Text>
                </VStack>
              </Box>

              <Box>
                <Heading as="h3" size="lg" color="gray.100" mb={4}>
                  Why It Works
                </Heading>
                <VStack align="start" spacing={3}>
                  <Text color="gray.200">
                    • Your team owns the product completely
                  </Text>
                  <Text color="gray.200">
                    • Strategic capability for planning future projects
                  </Text>
                  <Text color="gray.200">
                    • Tactical capability for independent execution
                  </Text>
                  <Text color="gray.200">
                    • Full knowledge transfer and documentation
                  </Text>
                </VStack>
              </Box>
            </SimpleGrid>
          </VStack>
        </Box>

        {/* CTA Section */}
        <Box textAlign="center" py={10}>
          <VStack spacing={6}>
            <Heading as="h2" size="xl" color="gray.100">
              Ready to Get Started?
            </Heading>
            <Text fontSize="lg" color="gray.300" maxW="2xl">
              Let's discuss your project and how we can help build reliable, scalable infrastructure.
            </Text>
            <Button
              as={RouterLink}
              to="/contact"
              colorScheme="brand"
              size="lg"
              px={8}
            >
              Contact Us
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
    </>
  )
}

export default Process
