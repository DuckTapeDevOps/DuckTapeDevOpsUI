import { Box, VStack, Heading, Text, Button, HStack, useColorModeValue } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { type ReactNode } from 'react'

interface CTAButton {
  text: string
  to?: string
  href?: string
  colorScheme?: string
  variant?: string
  icon?: ReactNode
  target?: string
}

interface CTASectionProps {
  title: string
  description: string
  buttons: CTAButton[]
  bg?: 'default' | 'accent'
}

export const CTASection = ({ title, description, buttons, bg = 'accent' }: CTASectionProps) => {
  const bgColor = bg === 'accent' ? 'space.800' : 'transparent' // Dark grey background

  return (
    <Box textAlign="center" py={10} bg={bgColor} borderRadius="lg">
      <VStack spacing={6}>
        <Heading as="h2" size="xl" color="gray.100">
          {title}
        </Heading>
        <Text fontSize="lg" color="gray.300" maxW="2xl">
          {description}
        </Text>
        <HStack spacing={4} flexWrap="wrap" justify="center">
          {buttons.map((button, index) => (
            <Button
              key={index}
              as={button.to ? RouterLink : button.href ? 'a' : 'button'}
              to={button.to}
              href={button.href}
              target={button.target}
              colorScheme={button.colorScheme || 'brand'}
              variant={button.variant || 'solid'}
              size="lg"
              leftIcon={button.icon as any}
            >
              {button.text}
            </Button>
          ))}
        </HStack>
      </VStack>
    </Box>
  )
}
