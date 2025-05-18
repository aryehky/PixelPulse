# PixelPulse 🌈☀️

PixelPulse is an innovative web application that dynamically generates color schemes based on real-time weather conditions. By combining weather data with color theory, it creates visually appealing and contextually relevant color palettes that reflect the current weather state of any location worldwide.

## Features 🌟

- **Real-time Weather Integration**
  - Automatic location detection using browser geolocation
  - City-based weather search functionality
  - Current temperature, humidity, and weather condition display
  - Weather condition icons and descriptions

- **Dynamic Color Generation**
  - Weather-based color palette generation
  - Temperature-influenced color adjustments
  - Predefined color mappings for different weather conditions
  - Copy-to-clipboard functionality for color codes

- **Responsive Design**
  - Mobile-first approach
  - Fluid layouts using Chakra UI
  - Intuitive user interface
  - Smooth animations and transitions

## Tech Stack 💻

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety and better developer experience
- **Vite** - Build tool and development server
- **Chakra UI** - Component library and styling
- **Chroma.js** - Color manipulation and generation
- **Axios** - HTTP client for API requests

### APIs
- **OpenWeatherMap API** - Weather data provider

## Project Structure 📁

```
src/
├── components/              # React components
│   ├── SearchBar.tsx       # City search functionality
│   ├── WeatherDisplay.tsx  # Weather information display
│   └── ColorSchemeDisplay.tsx  # Color palette display
├── services/               # Business logic and API calls
│   ├── weatherService.ts   # Weather API integration
│   └── colorService.ts     # Color generation logic
├── types/                  # TypeScript type definitions
│   └── weather.ts         # Weather and color scheme types
├── App.tsx                # Main application component
└── main.tsx              # Application entry point
```

## Getting Started 🚀

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- OpenWeatherMap API key

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/WeatherColorPicker.git
   cd WeatherColorPicker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```env
   VITE_OPENWEATHER_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

## Color Generation Logic 🎨

The application uses a sophisticated color generation system based on:

- **Weather Conditions**: Each weather type (Clear, Rain, Snow, etc.) has predefined base colors
- **Temperature**: Colors are adjusted based on temperature (warmer/cooler)
- **Color Scheme Generation**: Creates a complete palette including:
  - Primary color
  - Secondary color
  - Accent color
  - Background color
  - Text color

### Weather Color Mappings

```typescript
const weatherColorMap = {
  Clear: ['#FFD700', '#FFA500'],     // Sunny, warm colors
  Clouds: ['#B8B8B8', '#E8E8E8'],    // Grey, neutral colors
  Rain: ['#4682B4', '#87CEEB'],      // Blue, water colors
  Snow: ['#FFFFFF', '#F0F8FF'],      // White, light blue
  Thunderstorm: ['#483D8B', '#4B0082'], // Dark, intense colors
  Drizzle: ['#87CEEB', '#B0E0E6'],   // Light blue, peaceful colors
  Mist: ['#D3D3D3', '#F5F5F5']       // Light grey, foggy colors
};
```

## API Integration 🌐

### Weather Data
The application uses OpenWeatherMap API to fetch weather data:
- Current weather conditions
- Temperature in Celsius
- Humidity percentage
- Weather descriptions
- Weather icons

Example API response structure:
```typescript
interface WeatherData {
  main: {
    temp: number;
    humidity: number;
    feels_like: number;
  };
  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;
  name: string;
}
```

## Contributing 🤝

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License 📝

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments 👏

- OpenWeatherMap API for weather data
- Chroma.js for color manipulation
- Chakra UI for the component library
- The React community for inspiration and support
