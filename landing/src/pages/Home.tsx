import { Container, VStack, Box, Image, Text } from '@chakra-ui/react'
import { FaUsers, FaMapMarkerAlt, FaComments, FaShip, FaHeart, FaCloud, FaCode, FaCogs } from 'react-icons/fa'
import { HeroSection, FeatureGrid, SectionWrapper, NetworkSection, CTASection } from '../components'
import { siteConfig } from '../config/site'
import SEO from '../components/SEO'

const Home = () => {
  // Map icons to feature titles (keeping icon mapping logic)
  const iconMap: Record<string, typeof FaMapMarkerAlt> = {
    'Strategic Planning': FaCloud,
    'Tactical Execution': FaCode,
    'Team Ownership': FaUsers,
    'Strategic Capability': FaCloud,
    'Tactical Capability': FaCode,
    'Product Ownership': FaHeart,
  }

  const coreFeatures = siteConfig.home.coreFeatures.map((feature, index) => ({
    icon: iconMap[feature.title] || FaMapMarkerAlt,
    title: feature.title,
    description: feature.description,
    color: index === 0 ? "brand.500" : index === 1 ? "brand.600" : "brand.500"
  }))

  const networkFeatures = siteConfig.home.networkFeatures.map((feature, index) => ({
    icon: iconMap[feature.title] || FaUsers,
    title: feature.title,
    description: feature.description,
    color: index === 0 ? "space.700" : index === 1 ? "brand.500" : "space.600"
  }))

  // Map icon names to React components for CTA buttons
  const ctaIconMap: Record<string, typeof FaMapMarkerAlt> = {
    'FaMapMarkerAlt': FaMapMarkerAlt,
    'FaShip': FaShip,
    'FaUsers': FaUsers,
    'FaComments': FaComments,
    'FaHeart': FaHeart,
  }

  return (
    <>
      <SEO 
        title="Cloud Architecture & DevOps Consulting"
        description="Official website of DuckTapeDevOps. Cloud architecture, DevOps, and AI consulting services. AWS-first platform engineering with Terraform, ECS/EKS, and serverless solutions. Veteran intelligence professional turned cloud architect."
        path="/"
      />
      <Container maxW="container.xl" py={10}>
        <VStack spacing={16} align="stretch">
          <HeroSection
            title={siteConfig.home.hero.title}
            subtitle={siteConfig.home.hero.subtitle}
            description={siteConfig.home.hero.description}
            primaryButton={{
              text: siteConfig.home.hero.primaryButton.text,
              to: siteConfig.home.hero.primaryButton.to,
              icon: <FaUsers />
            }}
            secondaryText={siteConfig.home.hero.secondaryText}
          />
          
          <Box textAlign="center" py={4}>
            <Text fontSize="sm" color="gray.400" fontStyle="italic">
              Official website of DuckTapeDevOps
            </Text>
          </Box>

        {siteConfig.hero.image && (
          <Box w="100%">
            <Image
              src={siteConfig.hero.image.src}
              alt={siteConfig.hero.image.alt}
              w="100%"
              h="auto"
              objectFit="contain"
              borderRadius="xl"
            />
          </Box>
        )}

        <SectionWrapper title="Core Services">
          <FeatureGrid features={coreFeatures} variant="simple" />
        </SectionWrapper>

        <SectionWrapper title="Our Approach">
          <FeatureGrid features={networkFeatures} variant="card" />
        </SectionWrapper>

        <SectionWrapper title="Engagement Models" bg="accent">
          <NetworkSection levels={siteConfig.home.networkLevels} />
        </SectionWrapper>

        <CTASection
          title={siteConfig.home.cta.title}
          description={siteConfig.home.cta.description}
          buttons={siteConfig.home.cta.buttons.map(button => {
            const IconComponent = button.iconName ? ctaIconMap[button.iconName] : undefined
            
            return {
              text: button.text,
              to: button.to,
              variant: (button.variant || 'solid') as 'solid' | 'outline' | 'ghost' | 'link',
              icon: IconComponent ? <IconComponent /> : undefined,
            }
          })}
        />
        </VStack>
      </Container>
    </>
  )
}

export default Home