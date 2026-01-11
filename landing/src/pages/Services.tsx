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
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { 
  FaCloud, 
  FaCode, 
  FaCogs, 
  FaChartLine, 
  FaShieldAlt,
  FaRocket
} from 'react-icons/fa'

const Services = () => {
  const cardBg = 'space.800' // Dark grey cards
  const borderColor = 'space.700' // Dark grey borders

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
              color="gray.100"
              fontWeight="bold"
            >
              We Plan Like Intel, Execute Like Operators
            </Heading>
            
            <Text fontSize="xl" maxW="4xl" color="gray.300">
              Founded by an Air Force Intelligence Veteran turned cloud architect. We plan like intel, execute like operators, 
              and leave your team owning the product and capable of both strategic and tactical execution for the next project.
            </Text>
            
            <Text fontSize="lg" maxW="3xl" color="gray.200" fontStyle="italic">
              "Strategic planning meets tactical execution. Your team gains both capabilities and full product ownership."
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
                <Heading as="h2" size="2xl" mb={4} color="gray.100">
                  What We Do
                </Heading>
                <Text fontSize="lg" maxW="3xl" mx="auto" color="gray.300">
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
                      <Heading as="h3" size="md" color="gray.100">{service.title}</Heading>
                      <Text color="gray.300" fontSize="sm">{service.description}</Text>
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
                <Heading as="h2" size="2xl" mb={4} color="gray.100">
                  Our Approach
                </Heading>
                <Text fontSize="lg" maxW="3xl" mx="auto" color="gray.300">
                  We plan like intel, execute like operators, and leave your team owning the product. 
                  Your team gains both strategic and tactical capability for the next project.
                </Text>
              </Box>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                <Box p={8} bg={cardBg} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
                  <VStack align="start" spacing={4}>
                    <HStack>
                      <Icon as={FaRocket} color="blue.500" boxSize={6} />
                      <Heading as="h3" size="lg" color="gray.100">Technical Leadership</Heading>
                    </HStack>
                    <Text color="gray.300">
                      Veteran intelligence professional brings strategic thinking to cloud architecture. 
                      We plan like intel: thorough analysis and clear objectives before execution.
                    </Text>
                  </VStack>
                </Box>

                <Box p={8} bg={cardBg} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
                  <VStack align="start" spacing={4}>
                    <HStack>
                      <Icon as={FaCode} color="green.500" boxSize={6} />
                      <Heading as="h3" size="lg" color="gray.100">Team Enablement</Heading>
                    </HStack>
                    <Text color="gray.300">
                      We execute like operators: precise, efficient, and mission-focused. We build alongside your team, 
                      ensuring you own the product. Your team gains tactical capability for independent execution.
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
                <Heading as="h2" size="2xl" mb={4} color="gray.100">
                  Real Results
                </Heading>
                <Text fontSize="lg" maxW="3xl" mx="auto" color="gray.300">
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
                      <Text color="gray.200" fontSize="sm">
                        <strong>Challenge:</strong> {study.challenge}
                      </Text>
                      )}
                      <Text color="gray.200" fontSize="sm">
                        <strong>Solution:</strong> {study.solution}
                      </Text>
                      <Text color="gray.200" fontSize="sm" fontWeight="medium">
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
                <Heading as="h2" size="2xl" mb={4} color="gray.100">
                  Why This Approach Works
                </Heading>
                <Text fontSize="lg" maxW="3xl" mx="auto" color="gray.300">
                  We focus on practical solutions that your team can maintain and extend.
                </Text>
              </Box>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                <VStack align="start" spacing={4}>
                  <Heading as="h3" size="lg" color="gray.100">What You Get</Heading>
                  <VStack align="start" spacing={3}>
                    <HStack>
                      <Icon as={FaCloud} color="brand.500" />
                      <Text color="gray.200">Production-ready infrastructure</Text>
                    </HStack>
                    <HStack>
                      <Icon as={FaCode} color="brand.500" />
                      <Text color="gray.200">Maintainable Terraform code</Text>
                    </HStack>
                    <HStack>
                      <Icon as={FaCogs} color="brand.500" />
                      <Text color="gray.200">CI/CD pipelines and automation</Text>
                    </HStack>
                    <HStack>
                      <Icon as={FaChartLine} color="brand.500" />
                      <Text color="gray.200">Monitoring and observability</Text>
                    </HStack>
                  </VStack>
                </VStack>

                <VStack align="start" spacing={4}>
                  <Heading as="h3" size="lg" color="gray.100">Why It Matters</Heading>
                  <VStack align="start" spacing={3}>
                    <Text color="gray.200">• <strong>Own your infrastructure:</strong> Your team understands and can modify every component.</Text>
                    <Text color="gray.200">• <strong>Reduce dependency:</strong> We enable you, not create a vendor lock-in.</Text>
                    <Text color="gray.200">• <strong>Pragmatic solutions:</strong> Real-world engineering over theoretical perfection.</Text>
                    <Text color="gray.200">• <strong>Cost-aware design:</strong> Infrastructure that scales efficiently without breaking the budget.</Text>
                  </VStack>
                </VStack>
              </SimpleGrid>
            </VStack>
          </Box>

          {/* CTA Section */}
          <Box textAlign="center" py={10} bg={cardBg} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
            <VStack spacing={6}>
              <Heading as="h2" size="xl" color="gray.100">
                Ready to Build Your Next Project?
              </Heading>
              <Text fontSize="lg" color="gray.300" maxW="2xl">
                Let's discuss how we can help your team gain strategic and tactical capability.
              </Text>
              <HStack spacing={4}>
                <Button
                  as={RouterLink}
                  to="/contact"
                  colorScheme="brand"
                  size="lg"
                  leftIcon={<FaRocket />}
                >
                  Get Started
                </Button>
                <Button
                  as={RouterLink}
                  to="/"
                  colorScheme="brand"
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

export default Services
