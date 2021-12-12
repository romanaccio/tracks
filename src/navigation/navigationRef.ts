import { createNavigationContainerRef } from '@react-navigation/native';
import { MainStackParamList } from '../types/types';

export const navigationRef = createNavigationContainerRef<MainStackParamList>();

export function navigate(name: keyof MainStackParamList, params: undefined) {
  if (navigationRef.isReady()) {
    //FIXME: don't know how to avoid the TS error... yet it runs fine
    navigationRef.navigate(name, params);
  }
}
