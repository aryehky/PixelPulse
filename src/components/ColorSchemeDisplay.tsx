import { Box, Text, SimpleGrid, VStack, useClipboard } from '@chakra-ui/react';
import { ColorScheme } from '../types/weather';

interface ColorSchemeDisplayProps {
  colorScheme: ColorScheme;
}

interface ColorBoxProps {
  color: string;
  label: string;
}

const ColorBox = ({ color, label }: ColorBoxProps) => {
  const { onCopy, hasCopied } = useClipboard(color);

  return (
    <VStack spacing={2} onClick={onCopy} cursor="pointer">
      <Box
        w="100%"
        h="100px"
        bg={color}
        borderRadius="md"
        boxShadow="md"
        transition="transform 0.2s"
        _hover={{ transform: 'scale(1.05)' }}
      />
      <Text fontSize="sm" fontWeight="medium">{label}</Text>
      <Text fontSize="xs" color="gray.500">{color}</Text>
      {hasCopied && <Text fontSize="xs" color="green.500">Copied!</Text>}
    </VStack>
  );
};

export const ColorSchemeDisplay = ({ colorScheme }: ColorSchemeDisplayProps) => {
  return (
    <Box p={6} borderRadius="lg" boxShadow="md" bg="white">
      <Text fontSize="xl" fontWeight="bold" mb={4}>Generated Color Scheme</Text>
      <SimpleGrid columns={[2, null, 5]} spacing={4}>
        <ColorBox color={colorScheme.primary} label="Primary" />
        <ColorBox color={colorScheme.secondary} label="Secondary" />
        <ColorBox color={colorScheme.accent} label="Accent" />
        <ColorBox color={colorScheme.background} label="Background" />
        <ColorBox color={colorScheme.text} label="Text" />
      </SimpleGrid>
    </Box>
  );
}; 