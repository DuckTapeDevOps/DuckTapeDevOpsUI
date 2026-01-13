import { Box, Container, Heading, Text, VStack, HStack, Badge, Button, Divider } from '@chakra-ui/react'
import { Link as RouterLink, useParams, useNavigate } from 'react-router-dom'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { getCaseStudyBySlug } from '../../content/case-studies'

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const caseStudy = slug ? getCaseStudyBySlug(slug) : undefined

  if (!caseStudy) {
    return (
      <Container maxW="container.xl" py={10}>
        <VStack spacing={6}>
          <Heading as="h1" size="xl" color="gray.100">
            Case Study Not Found
          </Heading>
          <Text color="gray.300">
            The case study you're looking for doesn't exist.
          </Text>
          <Button
            as={RouterLink}
            to="/case-studies"
            colorScheme="brand"
            leftIcon={<ArrowBackIcon />}
          >
            Back to Case Studies
          </Button>
        </VStack>
      </Container>
    )
  }

  if (caseStudy.status === 'coming-soon') {
    return (
      <Container maxW="container.xl" py={10}>
        <VStack spacing={6}>
          <Button
            onClick={() => navigate('/case-studies')}
            leftIcon={<ArrowBackIcon />}
            variant="ghost"
            alignSelf="flex-start"
            mb={4}
          >
            Back to Case Studies
          </Button>
          <Heading as="h1" size="2xl" color="gray.100">
            {caseStudy.title}
          </Heading>
          <Badge colorScheme="orange" fontSize="md" px={3} py={1}>
            Coming Soon
          </Badge>
          <Text fontSize="lg" color="gray.300" maxW="2xl" textAlign="center">
            {caseStudy.shortDescription}
          </Text>
        </VStack>
      </Container>
    )
  }

  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8} align="stretch">
        {/* Back Button */}
        <Button
          onClick={() => navigate('/case-studies')}
          leftIcon={<ArrowBackIcon />}
          variant="ghost"
          alignSelf="flex-start"
          color="gray.300"
          _hover={{ color: 'gray.100' }}
        >
          Back to Case Studies
        </Button>

        {/* Header */}
        <Box>
          <HStack spacing={4} mb={4} flexWrap="wrap">
            <Badge colorScheme="blue" variant="subtle" fontSize="md" px={3} py={1}>
              {caseStudy.industry}
            </Badge>
            <Badge colorScheme="gray" variant="outline" fontSize="md" px={3} py={1}>
              {caseStudy.engagementType}
            </Badge>
            <Text color="gray.400" fontSize="sm">
              {caseStudy.duration}
            </Text>
          </HStack>
          <Heading as="h1" size="2xl" mb={4} color="gray.100">
            {caseStudy.title}
          </Heading>
        </Box>

        <Divider borderColor="space.700" />

        {/* Overview */}
        {caseStudy.overview && (
          <Box>
            <Heading as="h2" size="lg" mb={4} color="gray.100">
              Overview
            </Heading>
            <Text color="gray.300" lineHeight="tall" fontSize="lg">
              {caseStudy.overview}
            </Text>
          </Box>
        )}

        {/* The Challenge */}
        {caseStudy.challenge && (
          <Box>
            <Heading as="h2" size="lg" mb={4} color="gray.100">
              The Challenge
            </Heading>
            <Text color="gray.300" lineHeight="tall" fontSize="lg">
              {caseStudy.challenge}
            </Text>
          </Box>
        )}

        {/* Constraints & Real-World Considerations */}
        {caseStudy.constraints && (
          <Box>
            <Heading as="h2" size="lg" mb={4} color="gray.100">
              Constraints & Real-World Considerations
            </Heading>
            <Text color="gray.300" lineHeight="tall" fontSize="lg">
              {caseStudy.constraints}
            </Text>
          </Box>
        )}

        {/* Approach */}
        {caseStudy.approach && (
          <Box>
            <Heading as="h2" size="lg" mb={4} color="gray.100">
              Approach
            </Heading>
            <Text color="gray.300" lineHeight="tall" fontSize="lg">
              {caseStudy.approach}
            </Text>
          </Box>
        )}

        {/* Live Demonstration & Enablement */}
        {caseStudy.liveDemonstration && (
          <Box>
            <Heading as="h2" size="lg" mb={4} color="gray.100">
              Live Demonstration & Enablement
            </Heading>
            <Text color="gray.300" lineHeight="tall" fontSize="lg">
              {caseStudy.liveDemonstration}
            </Text>
          </Box>
        )}

        {/* Platform Capabilities */}
        {caseStudy.platformCapabilities && (
          <Box>
            <Heading as="h2" size="lg" mb={4} color="gray.100">
              Platform Capabilities
            </Heading>
            <Text color="gray.300" lineHeight="tall" fontSize="lg">
              {caseStudy.platformCapabilities}
            </Text>
          </Box>
        )}

        {/* Outcomes */}
        {caseStudy.outcomes && caseStudy.outcomes.length > 0 && (
          <Box>
            <Heading as="h2" size="lg" mb={4} color="gray.100">
              Outcomes
            </Heading>
            <VStack align="stretch" spacing={3}>
              {caseStudy.outcomes.map((outcome, index) => (
                <HStack key={index} align="start" spacing={3}>
                  <Text color="brand.500" fontSize="lg" mt={1}>•</Text>
                  <Text color="gray.300" lineHeight="tall" fontSize="lg" flex={1}>
                    {outcome}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Box>
        )}

        {/* Intentional Non-Decisions */}
        {caseStudy.intentionalNonDecisions && (
          <Box>
            <Heading as="h2" size="lg" mb={4} color="gray.100">
              Intentional Non-Decisions
            </Heading>
            <Text color="gray.300" lineHeight="tall" fontSize="lg">
              {caseStudy.intentionalNonDecisions}
            </Text>
          </Box>
        )}

        {/* Key Takeaway */}
        {caseStudy.keyTakeaway && (
          <Box
            bg="space.800"
            borderWidth="1px"
            borderColor="space.700"
            borderRadius="lg"
            p={6}
          >
            <Heading as="h2" size="md" mb={3} color="gray.100">
              Key Takeaway
            </Heading>
            <Text color="gray.200" lineHeight="tall" fontSize="lg" fontStyle="italic">
              {caseStudy.keyTakeaway}
            </Text>
          </Box>
        )}

        {/* Capabilities Demonstrated */}
        {caseStudy.capabilitiesDemonstrated && caseStudy.capabilitiesDemonstrated.length > 0 && (
          <Box>
            <Heading as="h2" size="lg" mb={4} color="gray.100">
              Capabilities Demonstrated
            </Heading>
            <VStack align="stretch" spacing={3}>
              {caseStudy.capabilitiesDemonstrated.map((capability, index) => (
                <HStack key={index} align="start" spacing={3}>
                  <Text color="brand.500" fontSize="lg" mt={1}>•</Text>
                  <Text color="gray.300" lineHeight="tall" fontSize="lg" flex={1}>
                    {capability}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Box>
        )}

        {/* Technologies */}
        {caseStudy.technologies && caseStudy.technologies.length > 0 && (
          <Box>
            <Heading as="h2" size="lg" mb={4} color="gray.100">
              Technologies
            </Heading>
            <HStack spacing={2} flexWrap="wrap">
              {caseStudy.technologies.map((tech, index) => (
                <Badge key={index} colorScheme="gray" variant="outline" fontSize="sm" px={3} py={1}>
                  {tech}
                </Badge>
              ))}
            </HStack>
          </Box>
        )}

        <Divider borderColor="space.700" />

        {/* CTA */}
        <Box textAlign="center" py={8}>
          <VStack spacing={4}>
            <Heading as="h2" size="xl" color="gray.100">
              Ready to Build Your Solution?
            </Heading>
            <Text fontSize="lg" color="gray.300" maxW="xl">
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

export default CaseStudyDetail
