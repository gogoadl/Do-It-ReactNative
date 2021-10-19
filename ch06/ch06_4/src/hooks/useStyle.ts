import {useMemo} from 'react';

export const useStyle = (styles: object, deps: any[] = []) => {
  return useMemo(() => styles, deps);
};
