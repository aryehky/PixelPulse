import { useState } from 'react';
import { Input, InputGroup, InputRightElement, IconButton } from '@chakra-ui/react';

interface SearchBarProps {
  onSearch: (city: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup size="lg">
        <Input
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          borderRadius="full"
          bg="white"
          _focus={{ boxShadow: 'outline' }}
        />
        <InputRightElement>
          <IconButton
            aria-label="Search"
            icon={<span>🔍</span>}
            onClick={handleSubmit}
            variant="ghost"
            borderRadius="full"
          />
        </InputRightElement>
      </InputGroup>
    </form>
  );
}; 