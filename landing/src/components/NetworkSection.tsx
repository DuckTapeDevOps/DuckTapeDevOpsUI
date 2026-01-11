import { VStack, SimpleGrid, Badge, Text, useColorModeValue } from '@chakra-ui/react'

interface NetworkLevel {
  badge: string
  badgeColor: string
  title: string
  description: string
}

interface NetworkSectionProps {
  levels: NetworkLevel[]
}

export const NetworkSection = ({ levels }: NetworkSectionProps) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} w="full">
      {levels.map((level, index) => (
        <VStack 
          key={index}
          spacing={3} 
          p={6} 
          bg="space.800" 
          borderRadius="lg" 
          shadow="sm"
          borderWidth="1px"
          borderColor="space.700"
        >
          <Badge colorScheme={level.badgeColor} fontSize="sm" px={3} py={1}>
            {level.badge}
          </Badge>
          <Text fontSize="sm" textAlign="center" color="gray.300">
            {level.description}
          </Text>
        </VStack>
      ))}
    </SimpleGrid>
  )
}
