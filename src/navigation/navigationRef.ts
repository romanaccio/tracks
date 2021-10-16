import { createNavigationContainerRef } from '@react-navigation/native';
import { MainStackParamList } from '../types/types';

export const navigationRef = createNavigationContainerRef<MainStackParamList>();

export function navigate(name: keyof MainStackParamList, params: undefined) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
