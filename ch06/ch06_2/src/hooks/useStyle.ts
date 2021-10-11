import {useMemo} from 'react';
import {styles} from '../screens/Person.style';

export const useStyle = (style: object, deps: any[] = []) => {
  return useMemo(() => styles, deps);
};
