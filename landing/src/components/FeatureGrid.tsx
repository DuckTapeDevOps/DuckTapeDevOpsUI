import { SimpleGrid, Box, Icon, Heading, Text } from '@chakra-ui/react'
import { type IconType } from 'react-icons'

interface Feature {
  icon: IconType
  title: string
  description: string
  color?: string
}

interface FeatureGridProps {
  features: Feature[]
  columns?: { base: number; md: number; lg?: number }
  variant?: 'card' | 'simple'
}

export const FeatureGrid = ({ 
  features, 
  columns = { base: 1, md: 3 }, 
  variant = 'card' 
}: FeatureGridProps) => {
  const cardBg = 'space.800' // Dark grey cards
  const borderColor = 'space.700' // Dark grey borders
  const simpleBg = 'space.800' // Dark grey simple variant
  const simpleBorder = 'space.600' // Dark grey simple border

  return (
    <SimpleGrid columns={columns} spacing={variant === 'card' ? 6 : 8}>
      {features.map((feature, index) => (
        <Box
          key={index}
          p={variant === 'card' ? 6 : 8}
          bg={variant === 'card' ? cardBg : simpleBg}
          borderRadius={variant === 'card' ? 'lg' : 'xl'}
          textAlign="center"
          border={variant === 'card' ? '1px solid' : '2px solid'}
          borderColor={variant === 'card' ? borderColor : simpleBorder}
        >
          <Icon 
            as={feature.icon} 
            boxSize={12} 
            color={feature.color || 'brand.500'} 
            mb={4} 
          />
          <Heading 
            as="h3" 
            size="md" 
            mb={3} 
            color="gray.100"
          >
            {feature.title}
          </Heading>
          <Text fontSize="sm" color="gray.300">
            {feature.description}
          </Text>
        </Box>
      ))}
    </SimpleGrid>
  )
}
