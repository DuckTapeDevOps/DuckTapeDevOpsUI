import { Box, Heading, Text, VStack, Button, useColorModeValue } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { type ReactNode } from 'react'

interface HeroSectionProps {
  title: string
  subtitle?: string
  description: string
  primaryButton: {
    text: string
    to: string
    icon?: ReactNode
  }
  secondaryText?: string
}

export const HeroSection = ({ 
  title, 
  subtitle, 
  description, 
  primaryButton, 
  secondaryText 
}: HeroSectionProps) => {
  return (
    <Box textAlign="center" py={20}>
      <Heading as="h1" size="3xl" mb={4} color="gray.100">
        {title}
      </Heading>
      {subtitle && (
        <Text fontSize="2xl" mb={6} color="brand.500" fontWeight="semibold">
          {subtitle}
        </Text>
      )}
      <Text fontSize="xl" mb={8} maxW="4xl" mx="auto" color="gray.300">
        {description}
      </Text>
      <VStack spacing={4}>
        <Button
          as={RouterLink}
          to={primaryButton.to}
          colorScheme="brand"
          size="lg"
          px={8}
          leftIcon={primaryButton.icon as any}
        >
          {primaryButton.text}
        </Button>
        {secondaryText && (
          <Text fontSize="sm" color="gray.400">
            {secondaryText}
          </Text>
        )}
      </VStack>
    </Box>
  )
}
