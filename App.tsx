import React from 'react';
import Navigation from './src/navigation/Navigation';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';

export default function App() {
  return (
    <LocationProvider>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </LocationProvider>
  );
}
