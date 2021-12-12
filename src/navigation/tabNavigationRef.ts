import { createNavigationContainerRef } from '@react-navigation/native';
import { TabStackParamList } from '../types/types';

export const tabNavigationRef =
  createNavigationContainerRef<TabStackParamList>();

export function tabNavigate(name: keyof TabStackParamList, params: undefined) {
  if (tabNavigationRef.isReady()) {
    tabNavigationRef.navigate(name, params);
  }
}
