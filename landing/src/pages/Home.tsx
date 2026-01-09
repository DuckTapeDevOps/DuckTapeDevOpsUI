import { Container, VStack } from '@chakra-ui/react'
import { FaUsers, FaMapMarkerAlt, FaComments, FaShip, FaHeart, FaCloud, FaCode, FaCogs } from 'react-icons/fa'
import { HeroSection, FeatureGrid, SectionWrapper, NetworkSection, CTASection } from '../components'
import { siteConfig } from '../config/site'

const Home = () => {
  // Map icons to feature titles (keeping icon mapping logic)
  const iconMap: Record<string, typeof FaMapMarkerAlt> = {
    'Cloud Architecture': FaCloud,
    'Infrastructure as Code': FaCode,
    'DevOps & Reliability': FaCogs,
    'Technical Leadership': FaUsers,
    'Team Enablement': FaHeart,
    'Pragmatic Solutions': FaCogs,
  }

  const coreFeatures = siteConfig.home.coreFeatures.map((feature, index) => ({
    icon: iconMap[feature.title] || FaMapMarkerAlt,
    title: feature.title,
    description: feature.description,
    color: index === 0 ? "blue.500" : index === 1 ? "blue.500" : "blue.500"
  }))

  const networkFeatures = siteConfig.home.networkFeatures.map((feature, index) => ({
    icon: iconMap[feature.title] || FaUsers,
    title: feature.title,
    description: feature.description,
    color: index === 0 ? "blue.500" : index === 1 ? "green.500" : "red.500"
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
  )
}

export default Home