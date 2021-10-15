import React from 'react';
import Navigation from './src/navigation/Navigation';
import { Provider as AuthProvider } from './src/context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}
