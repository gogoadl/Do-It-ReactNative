import {useEffect} from 'react';

export const useTimeout = (
  callback: () => void,
  duration: number,
  deps: any[] = [],
): void => {
  useEffect(() => {
    if (duration === 0) return; // duration 값이 0이면 setTimeout을 호출하지 않는다.
    const id = setTimeout(callback, duration);
    return () => clearTimeout(id);
  }, [duration, ...deps]);
};
