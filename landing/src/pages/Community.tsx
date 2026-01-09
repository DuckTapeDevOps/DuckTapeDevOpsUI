import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  VStack, 
  HStack, 
  Button, 
  SimpleGrid, 
  Icon,
  Badge,
  useColorModeValue
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { siteConfig } from '../config/site'
import { 
  FaCloud, 
  FaCode, 
  FaCogs, 
  FaChartLine, 
  FaShieldAlt,
  FaRocket
} from 'react-icons/fa'

const Community = () => {
  const cardBg = useColorModeValue('white', 'gray.700')
  const borderColor = useColorModeValue('gray.200', 'gray.600')

  const services = [
    {
      icon: FaCloud,
      title: "Cloud Architecture",
      description: "AWS-first platform design with ECS/EKS, serverless, and event-driven architectures. Infrastructure that scales with your needs.",
      color: "blue.500"
    },
    {
      icon: FaCode,
      title: "Infrastructure as Code",
      description: "Pragmatic Terraform and OpenTofu implementations. Reliable, maintainable infrastructure that your team can own and extend.",
      color: "green.500"
    },
    {
      icon: FaCogs,
      title: "CI/CD & Automation",
      description: "Build robust deployment pipelines and automation workflows. Reduce manual work and increase reliability.",
      color: "orange.500"
    },
    {
      icon: FaChartLine,
      title: "Observability & Reliability",
      description: "Monitoring, logging, and incident response. Know what's happening in your systems before your users do.",
      color: "purple.500"
    },
    {
      icon: FaShieldAlt,
      title: "Security & Compliance",
      description: "Security-first design and compliance considerations. Build systems that protect your data and meet regulatory requirements.",
      color: "red.500"
    },
    {
      icon: FaRocket,
      title: "Cost Optimization",
      description: "Cost-aware scaling and resource optimization. Infrastructure that grows efficiently without breaking the budget.",
      color: "teal.500"
    }
  ]

  const caseStudies = [
    {
      client: "E-commerce Platform",
      challenge: "Legacy infrastructure couldn't handle peak traffic",
      solution: "Migrated to ECS with auto-scaling, implemented CDN, and optimized database queries",
      result: "Handled 10x traffic during Black Friday with 50% lower infrastructure costs",
    },
    {
      client: "SaaS Startup", 
      solution: "Built serverless architecture with Lambda, API Gateway, and DynamoDB",
      result: "Reduced operational overhead by 80% and improved deployment time from days to minutes",
    },
    {
      client: "Enterprise Migration",
      challenge: "On-premises systems needed cloud migration",
      solution: "Designed and implemented Terraform-based infrastructure with zero-downtime migration strategy",
      result: "Completed migration in 6 months with no service interruptions",
    }
  ]

  return (
    <Box>
      {/* Hero Section */}
      <Box textAlign="center" py={20}>
        <Container maxW="container.xl">
          <VStack spacing={8}>
            <Heading 
              as="h1" 
              size="3xl" 
              color={useColorModeValue('navy.600', 'white')}
              fontWeight="bold"
            >
              Cloud Architecture & DevOps Services
            </Heading>
            
            <Text fontSize="xl" maxW="4xl" color={useColorModeValue('gray.600', 'gray.300')}>
              Senior-level cloud architecture and DevOps expertise. We design, build, and enable teams 
              to own reliable, scalable infrastructure.
            </Text>
            
            <Text fontSize="lg" maxW="3xl" color={useColorModeValue('gray.700', 'gray.200')} fontStyle="italic">
              "Practical engineering over hype. We fix systems with duct tape when necessary—but we do it cleanly."
            </Text>
          </VStack>
        </Container>
      </Box>

      <Container maxW="container.xl" py={16}>
        <VStack spacing={20} align="stretch">
          
          {/* Services Grid */}
          <Box>
            <VStack spacing={8} align="stretch">
              <Box textAlign="center">
                <Heading as="h2" size="2xl" mb={4} color={useColorModeValue('navy.600', 'white')}>
                  What We Do
                </Heading>
                <Text fontSize="lg" maxW="3xl" mx="auto" color={useColorModeValue('gray.600', 'gray.300')}>
                  From initial architecture to ongoing optimization, we provide hands-on expertise 
                  across the full cloud infrastructure lifecycle.
                </Text>
              </Box>

              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                {services.map((service, index) => (
                  <Box 
                    key={index}
                    p={6} 
                    bg={cardBg} 
                    borderRadius="lg" 
                    borderWidth="1px" 
                    borderColor={borderColor}
                    _hover={{ shadow: "lg", transform: "translateY(-2px)" }}
                    transition="all 0.2s"
                  >
                    <VStack align="start" spacing={4}>
                      <Icon as={service.icon} color={service.color} boxSize={8} />
                      <Heading as="h3" size="md" color={useColorModeValue('navy.600', 'white')}>{service.title}</Heading>
                      <Text color={useColorModeValue('gray.600', 'gray.300')} fontSize="sm">{service.description}</Text>
                    </VStack>
                  </Box>
                ))}
              </SimpleGrid>
            </VStack>
          </Box>

          {/* Approach Section */}
          <Box>
            <VStack spacing={8} align="stretch">
              <Box textAlign="center">
                <Heading as="h2" size="2xl" mb={4} color={useColorModeValue('navy.600', 'white')}>
                  Our Approach
                </Heading>
                <Text fontSize="lg" maxW="3xl" mx="auto" color={useColorModeValue('gray.600', 'gray.300')}>
                  We build systems and knowledge, not dependency. Your team learns, grows, and owns the infrastructure.
                </Text>
              </Box>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                <Box p={8} bg={cardBg} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
                  <VStack align="start" spacing={4}>
                    <HStack>
                      <Icon as={FaRocket} color="blue.500" boxSize={6} />
                      <Heading as="h3" size="lg" color={useColorModeValue('navy.600', 'white')}>Technical Leadership</Heading>
                    </HStack>
                    <Text color={useColorModeValue('gray.600', 'gray.300')}>
                      Senior-level architectural decisions grounded in experience. We solve problems, 
                      not just implement solutions. Every design choice is explained and justified.
                    </Text>
                  </VStack>
                </Box>

                <Box p={8} bg={cardBg} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
                  <VStack align="start" spacing={4}>
                    <HStack>
                      <Icon as={FaCode} color="green.500" boxSize={6} />
                      <Heading as="h3" size="lg" color={useColorModeValue('navy.600', 'white')}>Team Enablement</Heading>
                    </HStack>
                    <Text color={useColorModeValue('gray.600', 'gray.300')}>
                      We build alongside your team, ensuring knowledge transfer throughout. 
                      You own the infrastructure, not us. Documentation, training, and code reviews are part of the process.
                    </Text>
                  </VStack>
                </Box>
              </SimpleGrid>
            </VStack>
          </Box>

          {/* Case Studies Section */}
          <Box>
            <VStack spacing={8} align="stretch">
              <Box textAlign="center">
                <Heading as="h2" size="2xl" mb={4} color={useColorModeValue('navy.600', 'white')}>
                  Real Results
                </Heading>
                <Text fontSize="lg" maxW="3xl" mx="auto" color={useColorModeValue('gray.600', 'gray.300')}>
                  Here's how we've helped teams build better infrastructure.
                </Text>
              </Box>

              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
                {caseStudies.map((study, index) => (
                  <Box 
                    key={index}
                    p={6} 
                    bg={cardBg} 
                    borderRadius="lg" 
                    borderWidth="1px" 
                    borderColor={borderColor}
                    position="relative"
                  >
                    <VStack align="start" spacing={4}>
                      <Badge colorScheme="blue" variant="subtle">
                        {study.client}
                      </Badge>
                      {study.challenge && (
                        <Text color={useColorModeValue('gray.700', 'gray.200')} fontSize="sm">
                          <strong>Challenge:</strong> {study.challenge}
                        </Text>
                      )}
                      <Text color={useColorModeValue('gray.700', 'gray.200')} fontSize="sm">
                        <strong>Solution:</strong> {study.solution}
                      </Text>
                      <Text color={useColorModeValue('gray.700', 'gray.200')} fontSize="sm" fontWeight="medium">
                        <strong>Result:</strong> {study.result}
                      </Text>
                    </VStack>
                  </Box>
                ))}
              </SimpleGrid>
            </VStack>
          </Box>

          {/* Why This Works Section */}
          <Box bg={cardBg} p={10} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
            <VStack spacing={8} align="stretch">
              <Box textAlign="center">
                <Heading as="h2" size="2xl" mb={4} color={useColorModeValue('navy.600', 'white')}>
                  Why This Approach Works
                </Heading>
                <Text fontSize="lg" maxW="3xl" mx="auto" color={useColorModeValue('gray.600', 'gray.300')}>
                  We focus on practical solutions that your team can maintain and extend.
                </Text>
              </Box>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                <VStack align="start" spacing={4}>
                  <Heading as="h3" size="lg" color={useColorModeValue('navy.600', 'white')}>What You Get</Heading>
                  <VStack align="start" spacing={3}>
                    <HStack>
                      <Icon as={FaCloud} color="blue.500" />
                      <Text color={useColorModeValue('gray.700', 'gray.200')}>Production-ready infrastructure</Text>
                    </HStack>
                    <HStack>
                      <Icon as={FaCode} color="green.500" />
                      <Text color={useColorModeValue('gray.700', 'gray.200')}>Maintainable Terraform code</Text>
                    </HStack>
                    <HStack>
                      <Icon as={FaCogs} color="orange.500" />
                      <Text color={useColorModeValue('gray.700', 'gray.200')}>CI/CD pipelines and automation</Text>
                    </HStack>
                    <HStack>
                      <Icon as={FaChartLine} color="purple.500" />
                      <Text color={useColorModeValue('gray.700', 'gray.200')}>Monitoring and observability</Text>
                    </HStack>
                  </VStack>
                </VStack>

                <VStack align="start" spacing={4}>
                  <Heading as="h3" size="lg" color={useColorModeValue('navy.600', 'white')}>Why It Matters</Heading>
                  <VStack align="start" spacing={3}>
                    <Text color={useColorModeValue('gray.700', 'gray.200')}>• <strong>Own your infrastructure:</strong> Your team understands and can modify every component.</Text>
                    <Text color={useColorModeValue('gray.700', 'gray.200')}>• <strong>Reduce dependency:</strong> We enable you, not create a vendor lock-in.</Text>
                    <Text color={useColorModeValue('gray.700', 'gray.200')}>• <strong>Pragmatic solutions:</strong> Real-world engineering over theoretical perfection.</Text>
                    <Text color={useColorModeValue('gray.700', 'gray.200')}>• <strong>Cost-aware design:</strong> Infrastructure that scales efficiently without breaking the budget.</Text>
                  </VStack>
                </VStack>
              </SimpleGrid>
            </VStack>
          </Box>

          {/* CTA Section */}
          <Box textAlign="center" py={10} bg={cardBg} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
            <VStack spacing={6}>
              <Heading as="h2" size="xl" color={useColorModeValue('navy.600', 'white')}>
                Ready to Improve Your Cloud Infrastructure?
              </Heading>
              <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.300')} maxW="2xl">
                Let's discuss your project and how we can help build reliable, scalable systems.
              </Text>
              <HStack spacing={4}>
                <Button
                  as={RouterLink}
                  to="/contact"
                  colorScheme="blue"
                  size="lg"
                  leftIcon={<FaRocket />}
                >
                  Get Started
                </Button>
                <Button
                  as={RouterLink}
                  to="/"
                  colorScheme="blue"
                  variant="outline"
                  size="lg"
                >
                  Learn More
                </Button>
              </HStack>
            </VStack>
          </Box>

        </VStack>
      </Container>
    </Box>
  )
}

export default Community
