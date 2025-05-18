import { useState, useEffect } from 'react';
import { ChakraProvider, Container, VStack, useToast } from '@chakra-ui/react';
import { WeatherDisplay } from './components/WeatherDisplay';
import { ColorSchemeDisplay } from './components/ColorSchemeDisplay';
import { SearchBar } from './components/SearchBar';
import { getWeatherByCity, getWeatherByCoords } from './services/weatherService';
import { generateColorScheme } from './services/colorService';
import { WeatherData, ColorScheme } from './types/weather';

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [colorScheme, setColorScheme] = useState<ColorScheme | null>(null);
  const toast = useToast();

  const handleWeatherData = (data: WeatherData) => {
    setWeather(data);
    const newColorScheme = generateColorScheme(
      data.weather[0].main,
      data.main.temp
    );
    setColorScheme(newColorScheme);
    document.body.style.backgroundColor = newColorScheme.background;
  };

  const handleSearch = async (city: string) => {
    try {
      const data = await getWeatherByCity(city);
      handleWeatherData(data);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to fetch weather data. Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const data = await getWeatherByCoords(
              position.coords.latitude,
              position.coords.longitude
            );
            handleWeatherData(data);
          } catch (error) {
            toast({
              title: 'Error',
              description: 'Failed to fetch weather data. Please try again.',
              status: 'error',
              duration: 5000,
              isClosable: true,
            });
          }
        },
        () => {
          toast({
            title: 'Location Access Denied',
            description: 'Please enter a city name manually.',
            status: 'info',
            duration: 5000,
            isClosable: true,
          });
        }
      );
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <ChakraProvider>
      <Container maxW="container.lg" py={8}>
        <VStack spacing={8}>
          <SearchBar onSearch={handleSearch} />
          {weather && <WeatherDisplay weather={weather} />}
          {colorScheme && <ColorSchemeDisplay colorScheme={colorScheme} />}
        </VStack>
      </Container>
    </ChakraProvider>
  );
}

export default App;
