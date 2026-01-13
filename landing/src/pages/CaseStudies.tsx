import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid, Button, Badge } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { getAllCaseStudies } from '../../content/case-studies'

const CaseStudies = () => {
  const cardBg = 'space.800' // Dark grey cards
  const borderColor = 'space.700' // Dark grey borders

  const caseStudies = getAllCaseStudies()

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
          {caseStudies.map((study) => (
            <Box
              key={study.slug}
              as={study.status === 'published' ? RouterLink : 'div'}
              to={study.status === 'published' ? `/case-studies/${study.slug}` : undefined}
              p={8}
              bg={cardBg}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={borderColor}
              _hover={study.status === 'published' ? { shadow: "lg", transform: "translateY(-2px)", borderColor: "brand.500" } : {}}
              transition="all 0.2s"
              cursor={study.status === 'published' ? 'pointer' : 'default'}
              textDecoration="none"
              display="block"
            >
              <VStack align="start" spacing={6}>
                <Box width="100%">
                  <HStack spacing={2} mb={3} flexWrap="wrap">
                    <Badge colorScheme="blue" variant="subtle">
                      {study.industry}
                    </Badge>
                    <Badge colorScheme="gray" variant="outline">
                      {study.engagementType}
                    </Badge>
                    {study.status === 'coming-soon' && (
                      <Badge colorScheme="orange" variant="solid">
                        Coming Soon
                      </Badge>
                    )}
                  </HStack>
                  <Heading as="h3" size="lg" color="gray.100" mb={2}>
                    {study.title}
                  </Heading>
                  <Text color="gray.400" fontSize="sm" mb={4}>
                    {study.duration}
                  </Text>
                </Box>

                <Box width="100%">
                  {study.status === 'coming-soon' ? (
                    <Text color="gray.300">
                      {study.shortDescription}
                    </Text>
                  ) : (
                    <>
                      {study.overview && (
                        <>
                          <Text color="gray.300" mb={4} noOfLines={4}>
                            {study.overview}
                          </Text>
                          {study.technologies && study.technologies.length > 0 && (
                            <Box>
                              <Text fontWeight="semibold" color="gray.200" mb={2} fontSize="sm">
                                Technologies:
                              </Text>
                              <Box display="flex" flexWrap="wrap" gap={2}>
                                {study.technologies.slice(0, 5).map((tech, i) => (
                                  <Badge key={i} colorScheme="gray" variant="outline" fontSize="xs">
                                    {tech}
                                  </Badge>
                                ))}
                                {study.technologies.length > 5 && (
                                  <Badge colorScheme="gray" variant="outline" fontSize="xs">
                                    +{study.technologies.length - 5} more
                                  </Badge>
                                )}
                              </Box>
                            </Box>
                          )}
                        </>
                      )}
                    </>
                  )}
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
