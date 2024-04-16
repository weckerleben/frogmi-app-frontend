import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import FeatureList from './components/FeatureList';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <FeatureList />
      </div>
    </ChakraProvider>
  );
}

export default App;
