import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid, Button, Badge } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { FaCloud, FaCode, FaChartLine, FaRocket } from 'react-icons/fa'

const CaseStudies = () => {
  const cardBg = 'space.800' // Dark grey cards
  const borderColor = 'space.700' // Dark grey borders

  const caseStudies = [
    {
      title: "E-commerce Platform Migration",
      industry: "Retail",
      challenge: "Legacy infrastructure couldn't handle peak traffic during sales events",
      solution: "Migrated to AWS ECS with auto-scaling, implemented CloudFront CDN, optimized RDS queries, and added Redis caching",
      results: [
        "Handled 10x traffic during Black Friday",
        "50% reduction in infrastructure costs",
        "99.9% uptime during peak periods"
      ],
      technologies: ["ECS", "CloudFront", "RDS", "Redis", "Terraform"],
      icon: FaCloud
    },
    {
      title: "Serverless SaaS Platform",
      industry: "SaaS",
      challenge: "High operational overhead and slow deployment cycles",
      solution: "Built serverless architecture with Lambda, API Gateway, DynamoDB, and EventBridge for event-driven workflows",
      results: [
        "80% reduction in operational overhead",
        "Deployment time reduced from days to minutes",
        "Pay-per-use cost model scales automatically"
      ],
      technologies: ["Lambda", "API Gateway", "DynamoDB", "EventBridge", "SAM"],
      icon: FaCode
    },
    {
      title: "Enterprise Cloud Migration",
      industry: "Enterprise",
      challenge: "On-premises systems needed cloud migration with zero downtime",
      solution: "Designed Terraform-based infrastructure with blue-green deployment strategy and automated migration scripts",
      results: [
        "Zero-downtime migration completed in 6 months",
        "40% cost reduction vs on-premises",
        "Improved disaster recovery capabilities"
      ],
      technologies: ["ECS", "RDS", "VPC", "Terraform", "GitLab CI/CD"],
      icon: FaRocket
    },
    {
      title: "Observability & Monitoring Overhaul",
      industry: "Technology",
      challenge: "Lack of visibility into production systems causing slow incident response",
      solution: "Implemented comprehensive observability stack with CloudWatch, X-Ray, and custom dashboards",
      results: [
        "Mean time to detection reduced by 90%",
        "Proactive alerting prevents issues before users notice",
        "Better cost visibility and optimization"
      ],
      technologies: ["CloudWatch", "X-Ray", "Grafana", "Terraform"],
      icon: FaChartLine
    }
  ]

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={12} align="stretch">
        {/* Header */}
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={6} color="gray.100">
            Case Studies
          </Heading>
          <Text fontSize="xl" maxW="2xl" mx="auto" mb={8} color="gray.300">
            Real-world cloud architecture and DevOps solutions
          </Text>
        </Box>

        {/* Case Studies Grid */}
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
          {caseStudies.map((study, index) => (
            <Box
              key={index}
              p={8}
              bg={cardBg}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={borderColor}
              _hover={{ shadow: "lg", transform: "translateY(-2px)" }}
              transition="all 0.2s"
            >
              <VStack align="start" spacing={6}>
                <Box display="flex" alignItems="center" gap={4} width="100%">
                  <Box
                    p={3}
                    bg="space.700"
                    borderRadius="lg"
                  >
                    <study.icon size={24} color="brand.500" />
                  </Box>
                  <Box flex={1}>
                    <HStack spacing={2} mb={2}>
                      <Badge colorScheme="blue" variant="subtle">
                        {study.industry}
                      </Badge>
                    </HStack>
                    <Heading as="h3" size="lg" color="gray.100">
                      {study.title}
                    </Heading>
                  </Box>
                </Box>

                <Box>
                  <Text fontWeight="semibold" color="gray.200" mb={2}>
                    Challenge:
                  </Text>
                  <Text color="gray.300" mb={4}>
                    {study.challenge}
                  </Text>
                  
                  <Text fontWeight="semibold" color="gray.200" mb={2}>
                    Solution:
                  </Text>
                  <Text color="gray.300" mb={4}>
                    {study.solution}
                  </Text>
                  
                  <Text fontWeight="semibold" color="gray.200" mb={2}>
                    Results:
                  </Text>
                  <VStack align="start" spacing={2} mb={4}>
                    {study.results.map((result, i) => (
                      <Text key={i} color="gray.300" fontSize="sm">
                        • {result}
                      </Text>
                    ))}
                  </VStack>
                  
                  <Box>
                    <Text fontWeight="semibold" color="gray.200" mb={2}>
                      Technologies:
                    </Text>
                    <Box display="flex" flexWrap="wrap" gap={2}>
                      {study.technologies.map((tech, i) => (
                        <Badge key={i} colorScheme="gray" variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>

        {/* CTA Section */}
        <Box textAlign="center" py={10} bg={cardBg} borderRadius="lg" borderWidth="1px" borderColor={borderColor}>
          <VStack spacing={6}>
            <Heading as="h2" size="xl" color="gray.100">
              Ready to Build Your Solution?
            </Heading>
            <Text fontSize="lg" color="gray.300">
              Let's discuss how we can help improve your cloud infrastructure
            </Text>
            <Button
              as={RouterLink}
              to="/contact"
              colorScheme="brand"
              size="lg"
            >
              Get in Touch
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default CaseStudies
