import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false, // Force dark mode
}

const theme = extendTheme({
  config,
  colors: {
    brand: {
      // Matte yellow/orange primary brand color - complements dark grey
      50: '#FFF4E6',
      100: '#FFE6CC',
      200: '#FFD9B3',
      300: '#FFCC99',
      400: '#FFBF80',
      500: '#FFB84D', // Primary matte yellow/orange accent
      600: '#E6A644',
      700: '#CC943B',
      800: '#B38232',
      900: '#997029',
    },
    space: {
      // Dark grey base - complements orange/yellow
      50: '#2A2A2A',
      100: '#3A3A3A',
      200: '#4A4A4A',
      300: '#5A5A5A',
      400: '#6A6A6A',
      500: '#7A7A7A', // Medium grey
      600: '#4D4D4D',
      700: '#3D3D3D',
      800: '#2D2D2D', // Dark grey background
      900: '#1D1D1D', // Very dark grey background
    },
    navy: {
      // Keep navy for backward compatibility, but prefer space for dark colors
      50: '#E6E8EB',
      100: '#B3B9C2',
      200: '#808A99',
      300: '#4D5B70',
      400: '#1A2C47',
      500: '#001D2E',
      600: '#001725',
      700: '#00111C',
      800: '#000B13',
      900: '#00050A',
    },
  },
  fonts: {
    heading: '"Playfair Display", serif',
    body: '"Inter", sans-serif',
  },
  styles: {
    global: () => ({
      body: {
        bg: 'space.900', // Force dark grey background
        color: 'gray.100', // Light text on dark background
      },
    }),
  },
});

export default theme; 