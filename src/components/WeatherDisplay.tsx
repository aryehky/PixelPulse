import { Box, Text, VStack, Image } from '@chakra-ui/react';
import { WeatherData } from '../types/weather';

interface WeatherDisplayProps {
  weather: WeatherData;
}

export const WeatherDisplay = ({ weather }: WeatherDisplayProps) => {
  const iconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <VStack spacing={4} p={6} borderRadius="lg" boxShadow="md" bg="white">
      <Text fontSize="2xl" fontWeight="bold">{weather.name}</Text>
      <Image src={iconUrl} alt={weather.weather[0].description} boxSize="100px" />
      <Text fontSize="4xl">{Math.round(weather.main.temp)}°C</Text>
      <Text fontSize="lg" textTransform="capitalize">{weather.weather[0].description}</Text>
      <Box>
        <Text>Feels like: {Math.round(weather.main.feels_like)}°C</Text>
        <Text>Humidity: {weather.main.humidity}%</Text>
      </Box>
    </VStack>
  );
}; 