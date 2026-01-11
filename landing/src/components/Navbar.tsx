import { Box, Flex, Button, Stack, Badge } from '@chakra-ui/react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { siteConfig } from '../config/site'

export const Navbar = () => {
  const location = useLocation()
  
  const isActive = (path: string) => location.pathname === path

  return (
    <Box bg="space.900" px={4} shadow="sm" borderBottomWidth="1px" borderColor="space.700">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <RouterLink to="/">
          <Box fontWeight="bold" fontSize="xl" color="gray.100">
            {siteConfig.brand.name}
          </Box>
        </RouterLink>

        <Flex alignItems="center">
          <Stack direction="row" spacing={4}>
            {siteConfig.navigation.map((item) => (
              <Box key={item.path} position="relative">
                <Button
                  as={RouterLink}
                  to={item.path}
                  colorScheme={isActive(item.path) ? 'brand' : 'gray'}
                  variant={isActive(item.path) ? 'solid' : 'ghost'}
                  bg={isActive(item.path) ? 'brand.500' : 'transparent'}
                  color={isActive(item.path) ? 'white' : 'gray.300'}
                  isDisabled={item.disabled}
                  opacity={item.disabled ? 0.6 : 1}
                  _hover={{
                    bg: isActive(item.path) ? 'brand.600' : 'space.800'
                  }}
                >
                  {item.label}
                </Button>
                {item.badge && (
                  <Badge
                    position="absolute"
                    top="-1"
                    right="-1"
                    colorScheme={item.badge.colorScheme}
                    fontSize="xs"
                    borderRadius="full"
                  >
                    {item.badge.text}
                  </Badge>
                )}
              </Box>
            ))}
          </Stack>
        </Flex>
      </Flex>
    </Box>
  )
}