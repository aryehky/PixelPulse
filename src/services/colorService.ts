import chroma from 'chroma-js';
import { ColorScheme } from '../types/weather';

const weatherColorMap = {
  Clear: ['#FFD700', '#FFA500'], // Sunny, warm colors
  Clouds: ['#B8B8B8', '#E8E8E8'], // Grey, neutral colors
  Rain: ['#4682B4', '#87CEEB'], // Blue, water colors
  Snow: ['#FFFFFF', '#F0F8FF'], // White, light blue
  Thunderstorm: ['#483D8B', '#4B0082'], // Dark, intense colors
  Drizzle: ['#87CEEB', '#B0E0E6'], // Light blue, peaceful colors
  Mist: ['#D3D3D3', '#F5F5F5'], // Light grey, foggy colors
  default: ['#A0A0A0', '#D0D0D0'] // Default neutral colors
};

export const generateColorScheme = (weatherCondition: string, temperature: number): ColorScheme => {
  const baseColors = weatherColorMap[weatherCondition as keyof typeof weatherColorMap] || weatherColorMap.default;
  
  // Adjust color temperature based on actual temperature
  const temperatureAdjustment = (temperature - 20) / 40; // Normalize around 20°C
  const adjustedColors = baseColors.map(color => 
    chroma(color).temperature(1 + temperatureAdjustment).hex()
  );

  // Generate a color scheme
  return {
    primary: adjustedColors[0],
    secondary: adjustedColors[1],
    accent: chroma.mix(adjustedColors[0], adjustedColors[1], 0.5).hex(),
    background: chroma(adjustedColors[1]).luminance(0.95).hex(),
    text: chroma(adjustedColors[0]).luminance(0.15).hex()
  };
}; 