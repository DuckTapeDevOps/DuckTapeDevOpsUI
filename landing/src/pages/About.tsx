import { Container, VStack, Box, Heading, Text, Link, UnorderedList, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import SEO from '../components/SEO'
import { siteConfig } from '../config/site'

const About = () => {
  return (
    <>
      <SEO 
        title="About DuckTapeDevOps"
        description="DuckTapeDevOps is Nick Benton's consulting brand, providing cloud architecture, DevOps, and AI consulting services. Learn about our work with Condé Nast, Massdriver, and startups."
        path="/about"
      />
      <Container maxW="container.xl" py={10}>
        <VStack spacing={8} align="stretch">
          <Box>
            <Heading as="h1" size="2xl" mb={4} color="gray.100">
              About DuckTapeDevOps
            </Heading>
            <Text fontSize="lg" color="gray.300" mb={6}>
              Official website of DuckTapeDevOps
            </Text>
          </Box>

          <Box>
            <Heading as="h2" size="xl" mb={4} color="gray.100">
              Who We Are
            </Heading>
            <Text fontSize="md" color="gray.300" mb={4} lineHeight="tall">
              DuckTapeDevOps is the consulting brand of <strong>Nick Benton</strong>, a veteran intelligence professional turned cloud architect. 
              We provide cloud architecture, DevOps, and AI consulting services to organizations ranging from enterprise corporations to early-stage startups.
            </Text>
            <Text fontSize="md" color="gray.300" mb={4} lineHeight="tall">
              Our approach combines strategic intelligence planning with tactical operational execution. We plan like intel, execute like operators, 
              and leave your team owning the product and capable of both strategic and tactical execution for the next project.
            </Text>
          </Box>

          <Box>
            <Heading as="h2" size="xl" mb={4} color="gray.100">
              Our Services
            </Heading>
            <Text fontSize="md" color="gray.300" mb={4} lineHeight="tall">
              DuckTapeDevOps specializes in:
            </Text>
            <UnorderedList spacing={2} color="gray.300" fontSize="md" pl={6}>
              <ListItem>Cloud architecture and platform engineering</ListItem>
              <ListItem>AI and machine learning infrastructure</ListItem>
              <ListItem>DevOps and CI/CD pipeline design</ListItem>
              <ListItem>AWS-first solutions with Terraform and OpenTofu</ListItem>
              <ListItem>Container orchestration (ECS, EKS)</ListItem>
              <ListItem>Serverless architecture and event-driven systems</ListItem>
            </UnorderedList>
          </Box>

          <Box>
            <Heading as="h2" size="xl" mb={4} color="gray.100">
              Our Work
            </Heading>
            <Text fontSize="md" color="gray.300" mb={4} lineHeight="tall">
              DuckTapeDevOps has worked with organizations across industries, including:
            </Text>
            <UnorderedList spacing={2} color="gray.300" fontSize="md" pl={6}>
              <ListItem>
                <strong>Condé Nast</strong> - Large-scale cloud and platform modernization across a globally distributed, 
                multi-brand publishing platform supporting 74 publications
              </ListItem>
              <ListItem>
                <strong>Massdriver</strong> - AI/ML platform enablement and cloud-native infrastructure for self-service 
                infrastructure adoption
              </ListItem>
              <ListItem>
                <strong>Startups</strong> - Early-stage platform engineering and infrastructure design for rapid growth
              </ListItem>
            </UnorderedList>
            <Text fontSize="md" color="gray.300" mt={4} lineHeight="tall">
              For detailed case studies, visit our <Link href="/case-studies" color="brand.500">Case Studies</Link> page.
            </Text>
          </Box>

          <Box>
            <Heading as="h2" size="xl" mb={4} color="gray.100">
              Connect With Us
            </Heading>
            <Text fontSize="md" color="gray.300" mb={4} lineHeight="tall">
              Connect with DuckTapeDevOps and Nick Benton:
            </Text>
            <UnorderedList spacing={2} color="gray.300" fontSize="md" pl={6}>
              <ListItem>
                <Link href={siteConfig.seo.social.linkedinCompany} isExternal color="brand.500">
                  DuckTapeDevOps on LinkedIn <ExternalLinkIcon mx="2px" />
                </Link>
              </ListItem>
              <ListItem>
                <Link href={siteConfig.seo.social.linkedinPersonal} isExternal color="brand.500">
                  Nick Benton on LinkedIn <ExternalLinkIcon mx="2px" />
                </Link>
              </ListItem>
              <ListItem>
                <Link href={siteConfig.seo.social.twitch} isExternal color="brand.500">
                  DuckTapeDevOps on Twitch <ExternalLinkIcon mx="2px" />
                </Link>
              </ListItem>
              <ListItem>
                <Link href={siteConfig.seo.social.github} isExternal color="brand.500">
                  DuckTapeDevOps on GitHub <ExternalLinkIcon mx="2px" />
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/contact" color="brand.500">
                  Contact Us
                </Link>
              </ListItem>
            </UnorderedList>
          </Box>
        </VStack>
      </Container>
    </>
  )
}

export default About
