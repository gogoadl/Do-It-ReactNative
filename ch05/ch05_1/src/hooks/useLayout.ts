import {useCallback, useState} from 'react';
import type {LayoutChangeEvent, LayoutRectangle} from 'react-native';

export const useLayout = (): [
  LayoutRectangle,
  (e: LayoutChangeEvent) => void,
] => {
  const [layout, setLayout] = useState<LayoutRectangle>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const onLayout = useCallback((e: LayoutChangeEvent) => {
    const onLayout = e.nativeEvent;
    setLayout(onLayout);
  }, []);
  return [layout, onLayout];
};
