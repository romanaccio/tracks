import React from 'react';
import Navigation from './src/navigation/Navigation';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as TrackProvider } from './src/context/TrackContext';

export default function App() {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <Navigation />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
}
